const chalk = require('chalk');

module.exports = {
  info,
  warn,
  error,
};

/////////////////////////////////////////////////////////////

function info(s) {
  console.info(chalk.blue('┃ℹ️ '), chalk.gray(`[${new Date()}]`), s);
}

function warn(s) {
  console.warn(chalk.yellow('┃⚠️ '), chalk.gray(`[${new Date()}]`), chalk.yellow(s));
}

function error(s) {
  console.error(chalk.red('┃💣 '), chalk.gray(`[${new Date()}]`), chalk.red(s));
}