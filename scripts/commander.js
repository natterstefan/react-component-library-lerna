#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Docs
 * - https://www.npmjs.com/package/commander
 *
 * Inspired by
 * - https://github.com/sitepoint-editors/node-scaffolding-tool/blob/master/lib/create.js
 * - https://www.sitepoint.com/scaffolding-tool-caporal-js/
 *
 * Alternative to commander
 * - https://github.com/mattallty/Caporal.js
 *
 * Prompt Handler
 * - https://www.npmjs.com/package/inquirer
 */
const program = require('commander')

const pkg = require('../package.json')

const create = require('./create')

program
  .version(pkg.version)
  .command('create')
  .description('create new package from template')
  .action(create)
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

// do this at the end of the file
program.parse(process.argv)
