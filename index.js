

module.exports = (promise, ms) => {
  return new Promise((resolve, reject) => {
    const timeout = () => resolve(promise)
    if (ms) setTimeout(() => resolve(promise), ms)
    else timeout()
  })
}
