/**
 * Dependencie(s)
 */

const test = require('tape')
const atleast = require('..')


test('should return a promise', assert => {
  assert.plan(2)
  const promise = atleast()
  assert.equal(typeof promise, 'object')
  assert.equal(typeof promise.then, 'function')
})


test('should resolve with a promise passed as an argument', assert => {
  assert.plan(1)
  const promise = atleast(Promise.resolve('hello'))
  promise.then(val => assert.equal(val, 'hello'))
})


test('should reject with a promise passed as an argument', assert => {
  assert.plan(1)
  const promise = atleast(Promise.reject('hello'))
  promise.then(null, reason => assert.equal(reason, 'hello'))
})




test('should resolve argument even if not a promise', assert => {
  assert.plan(1)
  const promise = atleast('hello')
  promise.then(val => assert.equal(val, 'hello'))
})
