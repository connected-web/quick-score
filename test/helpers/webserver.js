const express = require('express')
const path = require('path')
const fs = require('fs')

const environment = require('./environment')

const appHtmlPath = path.join(__dirname, '../../', 'index.html')
const appHtml = fs.readFileSync(appHtmlPath, 'utf8')

const app = express()

app.get('/', (req, res) => {
  res.send(appHtml)
})

const port = environment.port
app.listen(port, (err, ok) => {
  if (err) {
    return console.err('[QS Webserver] Unable to start server:', err)
  }
  console.log('[QS Webserver] Server started on', `http://localhost:${port}/`)
})
