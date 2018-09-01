const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}:${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('Server.log', log + '\n');
  next();
});

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('Hellow Express !');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.listen(port, () => {
  console.log('Server is up and running on port :' + port);
});
