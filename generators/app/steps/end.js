"use strict";

/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

const chalk = require('chalk');
const printMessage = require('print-message');

module.exports = function () {
  printMessage([
    `Enjoy your ${chalk.red('Sails Prototype')} project!`,
    `---`,
    `Next steps:`,
    `${chalk.yellow('1)')} Create a model in your app:`,
    chalk.blue('yo sails-prototype:model Ticket'),
    `${chalk.yellow('2)')} Compose your API and run:`,
    chalk.blue('npm start')
  ], {
    printFn: this.log
  });
};
