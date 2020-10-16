const express = require('express')
const app = express()
const port = 4000;
const mysql = require('mysql')
const cors = require('cors')
const bankrouter = require('./myrouter/bankstatement');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/', bankrouter);

//console.log(connection)

app.get('/', function (req, res) {
  res.send("HomePage");
});

app.listen(4000, function(){
  console.log(`Server listening on port ${port}!`)
});
