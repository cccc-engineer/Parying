const tag = "[main/index.js_v0.0.32] ";

const express = require('express')
const app = express()
const ut = require('../utils/test');
const db = require('../utils/db');

const l = require('../../logger'); 
l.tag(tag + __dirname); 

const port = 9090

app.get('/', (req, res) => {
  res.send(tag + 'Hello World!')
})
app.get('/test', (req, res) => {
  res.send(tag + ut.canvasTest())
})

app.get('/db', (req, res) => {
    db.createDB("g6DB",res)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})