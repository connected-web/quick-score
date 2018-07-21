const { expect } = require('chai')
const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const dreamCatcher = require('./helpers/dreamCatcher')

function dream(vision) {
  console.error('[Nightmare] Disturbed by', vision)
}

describe(`Quick Score Categories [${environment.name}]`, () => {
  let nightmare
  beforeEach(() => {
    nightmare = Nightmare()
  })

  it(`should display a heading above the category with a score`, async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => document.querySelector('.category.title').textContent)
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.equal('Engineering Practice 0')
  }).timeout(5000)

  it(`should have multiple categories with a separate heading and score`, async () => {
    const raw = await nightmare
      .goto(`${environment.serviceUrl}`)
      .evaluate(() => Array.from(document.querySelectorAll('.category.title')).map(el => el.textContent).join(', '))
      .end()
      .catch(dream)
    const actual = (raw + '').trim()

    expect(actual).to.equal('Engineering Practice 0, Communication 0')
  }).timeout(5000)
})
