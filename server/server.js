var express = require('express');
var app = express();
var port = 5000;

//serve static files

app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/doSomeMath', function(res, req){
    res.send(getMath);
});

app.listen(port, function() {
    console.log('listening on port', port);
});