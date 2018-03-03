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
