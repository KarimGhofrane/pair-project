
// create a variable hint that takes the button of hint
var hint=$('<button class="hint"> hint</button>')

// create a variable check that takes the button of check 
    // it checks the input of the user and the correct answer

var check=$('<button class="checkk"> check</button>')

// create a variable next that takes the button of next to take the user to the next qst  
var next=$('<button class="new"> next..</button>')

// create a variable input to be the zone where the user will reply to the qsts

var input='<input type="text" id="input">';



// create an array of objects that holds all the data as: qst with its answer and its hints
var correct=$('<button class="correct">correct answer</button>')

var data = [
{q: 'Who is he first person who invented the lamp? ', a: 'Murphy Davy',hints:['I am not Thomas Edison']},
{q: 'Who is the first person who discovered the american continent?', a: 'Florentine Merchant',hints:['I am not Christopher Columbus']}

]



// create a variable index that will be the counter inside of the data array
     //initialize it to begin with 0
var index = 0



// we already have the button start in our html
   // when we click on this button it will hide the start button and the title, add the check,next and hint buttons, and will show the fisrt qst 
$('#start').click(function(){
$('#start').hide()
$('#first').append(input)
$('#first').append(check)
$('#first').append(hint)
$('#first').append(next)
$("#cont").text(data[0]["q"])
$('#title').hide()
$('#first').append(correct)

})


//  this button compare the input of the user and the correct answer
check.click(function(){
	if($('#input').val()===data[index]['a']){

		alert('WINNEERRR')}
	else{ 
		alert('try again')
	}
})
correct.click(function(){

var textt = '<br>' + data[index]["a"]
	$("#cont").append(textt)
n++

})

//declare a variable n to be a counter for the hints click
var n = 0

hint.click(function(){
if(n<data[index]['hints'].length){
var text = '<br>' + data[index]["hints"][n]
	$("#cont").append(text)
n++
}

})

next.click(function(){
	index++
	n=0
	var txt = data[index]["q"]
	$("#cont").text(txt)
})



