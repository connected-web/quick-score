(function () {
  const create = () => {
    return {
      totalScore: 0,
      categories: [{
        title: 'Colour Blindness',
        options: ['Appropriately differentiated', 'Unique artwork', 'Colours paired with symbols', 'Simplicity'],
        score: 0,
        weight: 1
      },
      {
        title: 'Visual Accessibility',
        options: ['Well proportioned', 'Clean and unornamented font', 'Good contrast'],
        score: 0,
        weight: 1
      },
      {
        title: 'Cognitive Accessibility',
        options: ['Consistent turn length', 'Reading comprehension', 'Linguistic fluidity', 'Fluid intelligence', 'Interuptions to turn flow'],
        score: 0,
        weight: 1
      },
      {
        title: 'Emotional Accessibility',
        options: [],
        score: 0,
        weight: 1
      },
      {
        title: 'Physical Accessibility',
        options: [],
        score: 0,
        weight: 1
      },
      {
        title: 'Communication',
        options: [],
        score: 0,
        weight: 1
      },
      {
        title: 'Socioeconomic Accessibility',
        options: [],
        score: 0,
        weight: 1
      },
      {
        title: 'Intersectional Accessibility',
        options: [],
        score: 0,
        weight: 1
      }
      ]
    }
  }

  if (typeof window !== 'undefined') {
    window.BoardGameSurvey = {
      create
    }
  }

  if (typeof module !== 'undefined') {
    module.exports = {
      create
    }
  }
})()
