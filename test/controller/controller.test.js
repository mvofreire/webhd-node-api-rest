'use strict'
const expect = require('chai').expect
const controller = require('./testController')

test('Controller should be a function', () => {
  expect(controller).to.be.a('function')
})