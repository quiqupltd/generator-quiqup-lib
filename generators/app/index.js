'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the humble ${chalk.red('generator-quiqup-lib')} generator!`))

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your package name?',
        default: path.basename(process.cwd()),
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: '',
      },
      {
        type: 'input',
        name: 'repository',
        message: 'Repository URL',
        default: '',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: '',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        default: '',
      },
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    const templated = ['rollup.config.js', 'package.json']
    const plain = [
      'src/index.js',
      'src/index.spec.js',
      'yarn.lock',
      '.gitignore',
      '.eslintrc.json',
      '.babelrc',
    ]
    templated.forEach(filename => {
      this.fs.copyTpl(this.templatePath(filename), this.destinationPath(filename), this.props)
    })
    plain.forEach(filename => {
      this.fs.copy(this.templatePath(filename), this.destinationPath(filename))
    })
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
    })
  }
}
