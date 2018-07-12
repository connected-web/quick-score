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
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .screenshot(screenshotPath(this))
      .evaluate(() => document.querySelector('.toggle.option').textContent)
      .end()
      .catch(dream)

    expect(actual).to.equal('Option 1')
  }).timeout(5000);

  it(`should allow a user to select an unselected item`)
  it(`should allow a user to deselect a selected item`)
})
