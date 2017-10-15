$(document).ready(readyNow);


function readyNow() {
    console.log('ready!');
$('.calcType').on('click', getMath);
$('#clear').on('click', clearFields);
}

function getMath(){
    //clicked some math type
var variables = {x, y, operation};
var x = $('#value1').val()
var y = $('#value2').val()
var operation = (this.id);
console.log(x);
console.log(y);
console.log(operation);

//make a POST request
$.ajax({
    method: 'POST', 
    url: '/doSomeMath',
    data: {value1: x, value2: y, value3: operation}
}).done(function(response) {
    console.log('successfully posted variables!');
    
}).fail(function(msg, status) {
    console.log('error response:', status);
});
//GET request
 $.ajax({
    method: 'GET',
   url: '/doSomeMath' 
 }).done(function (response) {
       console.log(response);
       appendAnswer(response);
  }) .fail(function (msg, status) {
        console.log('error response:', status);
   });

}

function appendAnswer(response) {

    $('#answerZone').append('<p>' + response.answer + '</p>');
}

function clearFields() {
    $('.values').val('');
    $('#answerZone').text('');
}