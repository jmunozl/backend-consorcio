/*
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const test = require('ava')
const sandbox = sinon.createSandbox()
const version = '/api'

let app = null
let storeStub = null

test.before((t) => {
  storeStub = {
    getStores () {}
  }
  storeStub['@global'] = true

  sandbox.stub(storeStub, 'getStores')
  storeStub.getStores.withArgs({}).returns(true)

  app = proxyquire('../config/app', {
    '../controllers/storeController': storeStub
  })
})

test.after(() => {
  sandbox.restore()
})

test.serial.cb('get stores', (t) => {

  request(app)
    .get(`${version}/stores`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.falsy(err, 'should not error')
      t.end()
      sandbox.assert.calledOnce(storeStub.save)
    })
})
*/