var express = require('express');
var app = express();
var port = 5000;

//serve static files

app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/doSomeMath', function(req, res){
   variables = (req.body);
    res.sendStatus(201);
    console.log(variables.value1);
    function doMath() {
     if (variables.value1 === 'divi') {
    console.log('do division');
     }
     else {
             console.log('do not do division');
         };
     }
     doMath();
});


app.listen(port, function() {
    console.log('listening on port', port);
});

function doMath() {
   if (value3 === 'divi') {
       console.log('do division');
   }
   else {
       console.log('do not do division');
   };
}
