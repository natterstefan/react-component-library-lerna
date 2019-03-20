/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const inquirer = require('inquirer')
const shell = require('shelljs')

const logger = {
  log: msg => console.log(msg), // eslint-disable-line no-console
  success: msg => console.log(chalk.green(msg)), // eslint-disable-line no-console
}

const templateBase = path.resolve(__dirname, '../templates')

module.exports = () => {
  // ask for the user's input
  logger.log('Please fill the following values…')

  // scan the templates folder for variants
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Which template do you want to use',
        choices: shell.ls(templateBase),
      },
    ])
    .then(({ template }) => {
      const templatePath = `${templateBase}/${template}`

      // prompt variables
      const variables = require(`${templatePath}/_variables`) // eslint-disable-line

      inquirer.prompt(variables).then(answers => {
        const { name } = answers
        const targetPath = path.resolve(__dirname, `../packages/${name}/`)

        // Remove Apache-2.0 licence file if another is selected
        if (answers.licence !== 'Apache-2.0') {
          shell.rm(`${templatePath}/LICENCE`)
        }

        // copy template
        if (fs.existsSync(templatePath)) {
          logger.log('Copying files…')
          shell.mkdir('-p', targetPath)
          shell.cp('-R', `${templatePath}/*`, targetPath)
          logger.success('✔ The files have been copied!')
        }

        // Remove variables file from the target directory
        if (fs.existsSync(`${targetPath}/_variables.js`)) {
          shell.rm(`${targetPath}/_variables.js`)
        }

        // Replace variable values in all files
        shell.ls('-Rl', targetPath).forEach(entry => {
          if (entry.isFile()) {
            // Replace '[VARIABLE]` with the corresponding variable value from the prompt
            variables.forEach(variable => {
              shell.sed(
                '-i',
                `\\[${variable.name.toUpperCase()}\\]`,
                answers[variable.name],
                `${targetPath}/${entry.name}`,
              )
            })

            // Insert current year in files
            shell.sed(
              '-i',
              '\\[YEAR\\]',
              new Date().getFullYear(),
              `${targetPath}/${entry.name}`,
            )
          }
        })

        logger.log(chalk.green('✔ Success!'))
      })
    })
}
