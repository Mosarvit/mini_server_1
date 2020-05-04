const express = require('express')
const app = express()
var request = require('request')
require('custom-env').env(true)

app.get('/', function (req, res) {
  res.json({ message: 'Hello from Server 1!' })
});

app.get('/second', function (req, res) {
  var server_2_host = process.env.SERVER_2_HOST
  var newurl = 'http://' + server_2_host + ':3002'
  request(newurl).pipe(res)
});

app.get('/httpthird', function (req, res) {
  var newurl = 'http://mini-server-3:3003'
  request(newurl).pipe(res)
});

app.get('/third', function (req, res) {
  var newurl = 'mini-server-3:3003'
  request(newurl).pipe(res)
});

module.exports = app