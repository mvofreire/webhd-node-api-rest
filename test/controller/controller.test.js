'use strict'
import { expect } from 'chai'
import testController from './testController'

test('Controller should be a function', () => {
  expect(testController).to.be.a('object')
})