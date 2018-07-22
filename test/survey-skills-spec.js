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

  it(`should allow a user to score up to 7 points for engineering practice`, async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      // 'Unit Testing', 'Automation Pipeline', 'Linting', 'Pair Programming'
      .click('button[data-text="Unit Testing"]')
      .click('button[data-text="Automation Pipeline"]')
      .click('button[data-text="Linting"]')
      .click('button[data-text="Pair Programming"]')
      .click('button[data-text="Source Control"]')
      .click('button[data-text="Code Reviews"]')
      .click('button[data-text="Auditing & Logs"]')
      .evaluate(() => Array.from(document.querySelectorAll('.score.panel')).map(el => el.textContent.trim()).join(', '))
      .end()
      .catch(dream)

    expect(actual).to.contain('Communication 0')
    expect(actual).to.contain('Engineering Practice 7')
    expect(actual).to.contain('Overall 7')
  }).timeout(5000)
})
