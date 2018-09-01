const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs');
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
