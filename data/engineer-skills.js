const create = () => {
  return {
    totalScore: 0,
    categories: [,
      {
        title: 'Communication',
        options: ['Clearly written', 'Concise points', 'Highlighting key facts', 'Key skills', 'Supporting evidence'],
        score: 0
      },
      {
        title: 'Delivery',
        options: ['Complete delivery of a small project', 'Regular delivery over 1 year period', 'Scrum team', 'Daily standups', 'Kanban board', 'Story based work', 'Estimation technique', 'Collaborative prioritisation', 'Retrospective improvement'],
        score: 0
      },
      {
        title: 'Engineering Practice',
        options: ['Unit Testing', 'Automation Pipeline', 'Linting', 'Pair Programming', 'Source Control', 'Code Reviews', 'Auditing & Logs'],
        score: 0
      }
    ]
  }
}

if (typeof window !== 'undefined') {
  window.EngineerSkills = { create }
}

if (typeof module !== 'undefined') {
  module.exports = { create }
}
