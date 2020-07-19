const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const dreamCatcher = require('./helpers/dreamCatcher')
require('./helpers/bootstrapWebserver')

function dream (vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Toggle Items [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it('should display an item to toggle', async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => document.querySelector('.toggle.option').textContent)
      .end()
      .catch(dream)

    expect(actual).to.equal('Clearly written')
  }).timeout(5000)

  it('should allow a user to select an unselected item', async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option')
      .evaluate(() => document.querySelector('button.toggle.option').className)
      .end()
      .catch(dream)

    expect(actual).to.contain('selected')
  }).timeout(5000)

  it('should allow a user to deselect a selected item', async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option')
      .click('button.toggle.option')
      .evaluate(() => document.querySelector('button.toggle.option').className)
      .end()
      .catch(dream)

    expect(actual).to.not.contain('selected')
  }).timeout(5000)
})
