'use strict'

import { expect } from 'chai'
import Model from './testModel'

test('model should be a function', () => {
    expect(Model).to.be.a('function')
})

test('Model table get name', () => {
    expect(Model.name).to.be.a('string')
})

test('Model table get table name', () => {
    expect(Model.tableName).to.be.a('string')
})

// test('Get Attribute ID', async () => {
//     const result = await Model.findOne().then(r=>(r));
//     console.log(result);
//     expect(result.testAttributeId()).to.be.a('integer')
// })

// test('Get Attribute Type', () => {
//     var result = Model.findOne().then(r=>r);
//     expect(result.testAttributeId()).to.be.a('string')
// })