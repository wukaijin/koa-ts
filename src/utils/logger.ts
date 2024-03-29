import chalk from 'chalk'

// reference: https://www.npmjs.com/package/chalk

const log = console.log

// Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'))

// Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'))

// Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))

// Nest styles of the same type even (color, underline, background)
// log(
//   chalk.green(
//     'I am a green line ' +
//       chalk.blue.underline.bold('with a blue substring') +
//       ' that becomes green again!'
//   )
// )

// ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `)

// ES2015 tagged template literal
// log(chalk`
// CPU: {red 100%}
// RAM: {green ${0.22 * 100}%}
// DISK: {rgb(255,131,0) ${0.24 * 100}%}
// `)

// Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'))
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
// log(chalk.hex('#DEADED').bold('Bold gray!'))

// const error = chalk.bold.red
const warning = chalk.keyword('orange')

// console.log(error('Error!'))
// console.log(warning('Warning!'))

// const name = 'Sindre'
// console.log(chalk.green('Hello %s'), name)

const logger = {
  chalk,
  success(...msg: any[]) {
    log(chalk.bold.green('Success: '), ...msg)
    // log(chalk.bold.rgb(51, 255, 153)('Success: '), ...msg)
  },
  error(...msg: any[]) {
    log(chalk.bold.red('Error: '), ...msg)
    // log(chalk.bold.rgb(255, 51, 102)('Error: '), ...msg)
  },
  info(...msg: any[]) {
    // log(chalk.bold.rgb(102, 153, 255)('Info: '), ...msg)
    log(chalk.bold.rgb(102,204,255)('Info: '), ...msg)
  }
}
export default logger
