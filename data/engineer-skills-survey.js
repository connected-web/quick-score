(function () {
  const create = () => {
    return {
      totalScore: 0,
      categories: [,
        {
          title: 'Communication',
          options: ['Clearly written', 'Concise points', 'Highlighting key facts', 'Key skills', 'Supporting evidence'],
          negations: ['Couldn\'t understand', 'Spelling', 'Grammar'],
          score: 0,
          weight: 1
        },
        {
          title: 'Delivery',
          options: ['Complete delivery of a small project', 'Regular delivery over 1 year period', 'Scrum team', 'Daily standups', 'Kanban board', 'Story based work', 'Estimation technique', 'Collaborative prioritisation', 'Retrospective improvement'],
          negations: ['No Agile'],
          score: 0,
          weight: 1
        },
        {
          title: 'Engineering Practice',
          options: ['Unit Testing', 'Automation Pipeline', 'Linting', 'Pair Programming', 'Source Control', 'Code Reviews', 'Auditing & Logs'],
          negations: [],
          score: 0,
          weight: 1
        }
      ]
    }
  }

  if (typeof window !== 'undefined') {
    window.EngineerSkillsSurvey = { create }
  }

  if (typeof module !== 'undefined') {
    module.exports = { create }
  }
})()
