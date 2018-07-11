const zp = require('./zeropad')

let count = 0

module.exports = (context) => {
  count++
  return `./test/screenshots/toggle-spec-${zp(count)}.png`
}
