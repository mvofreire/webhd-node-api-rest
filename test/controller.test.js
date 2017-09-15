'use strict'
const expect = require('chai').expect
const pagination = require('../dist/controller')

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function')
})