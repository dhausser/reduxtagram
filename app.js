require('dotenv').config()
var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 7770;

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
