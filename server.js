const express = require('express')

const PORT = 3003

const app = express()
app.get('/', function (req, res) {
  res.send('Hello world\n')
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
