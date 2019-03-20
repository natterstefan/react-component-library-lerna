/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const inquirer = require('inquirer')
const shelljs = require('shelljs')

const logger = {
  error: msg => console.error(chalk.red(msg)), // eslint-disable-line no-console
  log: msg => console.error(msg), // eslint-disable-line no-console
  success: msg => console.log(chalk.green(msg)), // eslint-disable-line no-console
}

module.exports = options => {
  // get the options
  const variant = options.variant || 'component'
  const templatePath = `${__dirname}/../templates/${variant}`

  if (!fs.existsSync(templatePath)) {
    logger.error(`The requested template "${variant}" wasn’t found.`)
    process.exit(1)
  }

  // File variables
  const variables = require(`${templatePath}/_variables`) // eslint-disable-line

  // ask for the user's input
  logger.log('Please fill the following values…')
  inquirer.prompt(variables).then(answers => {
    const { name } = answers
    // const targetPath = `${__dirname}/../packages/${name}/`
    const targetPath = path.resolve(__dirname, `../packages/${name}/`)

    // Remove Apache-2.0 licence file if another is selected
    if (answers.licence !== 'Apache-2.0') {
      shelljs.rm(`${templatePath}/LICENCE`)
    }

    // copy template
    if (fs.existsSync(templatePath)) {
      logger.log('Copying files…')
      shelljs.mkdir('-p', targetPath)
      shelljs.cp('-R', `${templatePath}/*`, targetPath)
      logger.success('✔ The files have been copied!')
    }

    // Remove variables file from the target directory
    if (fs.existsSync(`${targetPath}/_variables.js`)) {
      shelljs.rm(`${targetPath}/_variables.js`)
    }

    // Replace variable values in all files
    shelljs.ls('-Rl', targetPath).forEach(entry => {
      if (entry.isFile()) {
        // Replace '[VARIABLE]` with the corresponding variable value from the prompt
        variables.forEach(variable => {
          shelljs.sed(
            '-i',
            `\\[${variable.name.toUpperCase()}\\]`,
            answers[variable.name],
            `${targetPath}/${entry.name}`,
          )
        })

        // Insert current year in files
        shelljs.sed(
          '-i',
          '\\[YEAR\\]',
          new Date().getFullYear(),
          `${targetPath}/${entry.name}`,
        )
      }
    })

    logger.log(chalk.green('✔ Success!'))
  })
}
