var path = require('path')
var express = require('express')

var app = express()


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

BACKEND_URL = { url: process.env.BACKEND_URL || 'http://localhost:4000/api/' }
app.get('/backend_url', function (req, res) {
  res.json(BACKEND_URL);
})

PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Running on ${PORT}`))
