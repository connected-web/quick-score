const environments = {
  dev: {
    name: 'DEV',
    serviceUrl: 'http://localhost:15000'
  },
  production: {
    name: 'PRODUCTION',
    serviceUrl: 'https://connected-web.github.io/quick-score/'
  }
}

module.exports = environments[process.env.NODE_ENV || 'dev']
