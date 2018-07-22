const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const dreamCatcher = require('./helpers/dreamCatcher')

function dream(vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Skills Survey [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it(`should allow a user to score up to 5 points for written skills`, async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .click('button[data-text="Clearly written"]')
      .click('button[data-text="Concise points"]')
      .click('button[data-text="Highlighting key facts"]')
      .click('button[data-text="Key skills"]')
      .click('button[data-text="Supporting evidence"]')
      .evaluate(() => Array.from(document.querySelectorAll('.score.panel')).map(el => el.textContent.trim()).join(', '))
      .end()
      .catch(dream)

    expect(actual).to.contain('Communication 5')
    expect(actual).to.contain('Engineering Practice 0')
    expect(actual).to.contain('Overall 5')
  }).timeout(5000)
})
