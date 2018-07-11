const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const screenshotPath = require('./helpers/screenshotPath')

function dream(vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Toggle Items [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it(`should display an item to toggle`, async () => {
    const title = await nightmare
      .goto(`${environment.serviceUrl}`)
      .screenshot(screenshotPath(this))
      .evaluate(() => document.querySelector('h1').textContent)
      .end()
      .catch(dream)

    expect(title).to.equal('Quick Score')
  })

  it(`should allow a user to select an unselected item`)
  it(`should allow a user to deselect a selected item`)
})
