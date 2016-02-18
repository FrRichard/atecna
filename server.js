var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



app.use(express.static(__dirname, +'/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})

app.get('/', function (req, res) {
	res.sendFile(path.join('client.html'));
});