const express = require('express')
const app = express()
var request = require('request');

app.get('/', function (req, res) {
  res.json({ message: 'Hello from Server 1!' })
});

app.get('/second', function (req, res) {
  var newurl = 'http://localhost:3002'
  request(newurl).pipe(res)
});

app.get('/third', function (req, res) {
  var newurl = 'http://localhost:3003'
  request(newurl).pipe(res)
});

module.exports = app