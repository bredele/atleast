

/**
 * Resolve promise after a given time in ms.
 *
 * @param {Promise} promise
 * @param {Number} ms
 * @api public
 */

module.exports = (promise, ms) => {
  return new Promise((resolve, reject) => {
    const timeout = () => resolve(promise)
    if (ms) setTimeout(timeout, ms)
    else timeout()
  })
}
