$(document).ready(readyNow);


function readyNow() {
    console.log('ready!');
$('.calcType').on('click', getMath);
$('.numbers').on('click', numberInput);
$('#clear').on('click', clearFields);
$('.calcType').on('click', opButton);
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

    $('#answerZone').html( response.answer );
}

function clearFields() {
    $('.values').val('');
    $('#answerZone').text('');
    $('#fromButtons').text('');
}

function numberInput() {
    var numbers = parseInt(this.id);
   var newNumbers = $('#fromButtons').text() + numbers;
   $('#fromButtons').text(newNumbers);
    

}

function opButton() {
    

   $('#fromOpButtons').text(this.id);


}

