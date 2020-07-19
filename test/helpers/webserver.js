const express = require('express')
const path = require('path')
const fs = require('fs')

const environment = require('./environment')
let server

async function startServer () {
  let serverStarted
  const promise = new Promise((resolve, reject) => {
    serverStarted = resolve
  })

  let closeTimeout
  function close () {
    if (closeTimeout) {
      console.log('[QS Webserver] Resetting close timeout')
      clearTimeout(closeTimeout)
    }
    console.log('[QS Webserver] Planning to close in 2s')
    closeTimeout = setTimeout(() => {
      console.log('[QS Webserver] Closing server')
      server.close()
    }, 2000)
  }

  if (!server) {
    const appHtmlPath = path.join(__dirname, '../../', 'index.html')
    const appHtml = fs.readFileSync(appHtmlPath, 'utf8')

    const app = express()

    app.get('/', (req, res) => res.send(appHtml))
    app.get('/data/:file', (req, res) => res.send(fs.readFileSync(path.join(__dirname, '../../data', req.params.file), 'utf8')))

    const port = environment.port
    server = app.listen(port, (err, ok) => {
      if (err) {
        return console.err('[QS Webserver] Unable to start server:', err)
      }
      console.log('[QS Webserver] Server started on', `http://localhost:${port}/`)
      serverStarted()
    })

    await promise
  }

  return Promise.resolve({
    server,
    close
  })
}

module.exports = startServer
