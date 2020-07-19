const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const dreamCatcher = require('./helpers/dreamCatcher')
require('./helpers/bootstrapWebserver')

function dream (vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Categories [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it('should display a heading above the category with a score', async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => document.querySelector('.category.title').textContent)
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.equal('Communication 0')
  }).timeout(5000)

  it('should have multiple categories with a separate heading and score', async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => Array.from(document.querySelectorAll('.category.title')).map(el => el.textContent.trim()).join(', '))
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.contain('Engineering Practice 0')
    expect(actual).to.contain('Communication 0')
  }).timeout(5000)

  it('should only total up the score for items in the category being toggled', async () => {
    const actual = await nightmare
      .goto(`${environment.serviceUrl}`)
      .click('button[data-text="Linting"]')
      .click('button[data-text="Supporting evidence"]')
      .click('button[data-text="Automation Pipeline"]')
      .evaluate(() => Array.from(document.querySelectorAll('.score.panel')).map(el => el.textContent.trim()).join(', '))
      .end()
      .catch(dream)

    expect(actual).to.contain('Communication 1')
    expect(actual).to.contain('Delivery 0')
    expect(actual).to.contain('Engineering Practice 2')
    expect(actual).to.contain('Overall 3')
  }).timeout(5000)
})
