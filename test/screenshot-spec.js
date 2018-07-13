const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const screenshotPath = require('./helpers/screenshotPath')
const dreamCatcher = require('./helpers/dreamCatcher')

describe(`Quick Score Screenshots [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it(`initial state of the application`, async () => {
    return nightmare
      .goto(`${environment.serviceUrl}`)
      .screenshot(screenshotPath(this))
      .end()
      .catch(dreamCatcher)
  })
})
