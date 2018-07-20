const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const dreamCatcher = require('./helpers/dreamCatcher')

function dream(vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Score Panel [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it(`should display a score panel`, async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => document.querySelector('.score.panel').textContent)
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.equal('Overall 0')
  }).timeout(5000)

  it(`should update the score panel when the selection changes`, async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option')
      .evaluate(() => document.querySelector('.score.panel').textContent)
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.equal('Overall 1')
  }).timeout(5000)
})
