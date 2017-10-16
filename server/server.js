var express = require('express');
var app = express();
var port = 5000;
//serve static files
app.use(express.static('./server/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, function () {
    console.log('listening on port', port);
});
app.post('/doSomeMath', function(req, res){
   variables = (req.body);
   var answer = doMath();
    //res.sendStatus(201);
    res.send({ answer });
})
     function doMath() {
         var answer = 0;
         if (variables.value3 === 'divi') {
             answer = (parseInt(variables.value1) / parseInt(variables.value2));
         }
         else if (variables.value3 === 'add') {
             answer = (parseInt(variables.value1) + parseInt(variables.value2));
         }
         else if (variables.value3 === 'sub') {
             answer = (parseInt(variables.value1) - parseInt(variables.value2));
         }
         else {
             answer = (parseInt(variables.value1) * parseInt(variables.value2));
         }
         return answer;
        }

