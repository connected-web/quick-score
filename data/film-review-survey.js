(function () {
  const create = () => {
    return {
      totalScore: 0,
      categories: [,
        {
          title: 'Story',
          options: ['Clearly written', 'Predictable', 'Suprises'],
          score: 0,
          weight: 1
        }
      ]
    }
  }

  if (typeof window !== 'undefined') {
    window.FilmReviewSurvey = { create }
  }

  if (typeof module !== 'undefined') {
    module.exports = { create }
  }
})()
