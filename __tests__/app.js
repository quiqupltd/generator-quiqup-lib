'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-quiqup-lib:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      name: 'my-lib',
      description: 'description',
      repository: 'https://url',
      author: 'Name Surname',
      license: 'MIT',
    })
  })

  it('creates files', () => {
    assert.file(['src/index.js'])
    assert.file(['src/index.spec.js'])
    assert.file(['package.json'])
    assert.file(['rollup.config.js'])
    assert.file(['yarn.lock'])
    assert.file(['.babelrc'])
    assert.file(['.eslintrc.json'])
    assert.file(['.gitignore'])
  })
})
