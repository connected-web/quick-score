const startWebserver = require('./webserver')
let server

before(async () => {
  server = await startWebserver()
})

after(() => {
  server.close()
})