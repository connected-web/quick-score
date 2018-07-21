const zp = require('./zeropad')

let count = 0

module.exports = (name) => {
  count++
  return `./test/screenshots/${zp(count)}-${name}.png`
}
