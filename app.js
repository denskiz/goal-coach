const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const favicon = require('serve-favicon');
const path = require('path');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  console.log('Node is listening on port 8080');
});
