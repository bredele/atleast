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


test('should timeout the promise with a given time in ms', assert => {
  assert.plan(1)
  var star = Date.now()
  const promise = atleast('hello', 500)
  promise.then(val => {
    if (Date.now() - star < 500) assert.end('failed')
    else assert.equal(val, 'hello')
  })
})


test('resolve sa promise after the given time in ms even if promise is resolved before', assert => {
  assert.plan(1)
  var start = Date.now()
  const promise = atleast(
    atleast('hello', 400),
    500
  )
  promise.then(val => {
    const end = Date.now() - start
    if (end < 500 && end > 600) assert.end('failed')
    else assert.equal(val, 'hello')
  })
})
