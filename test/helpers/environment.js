const port = 15000
const environments = {
  dev: {
    name: 'DEV',
    port: 15000,
    serviceUrl: `http://localhost:${port}/`
  },
  production: {
    name: 'PRODUCTION',
    serviceUrl: 'https://connected-web.github.io/quick-score/'
  }
}

module.exports = environments[process.env.NODE_ENV || 'dev']
