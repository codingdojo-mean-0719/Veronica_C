//GIVEN
// console.log(hello);                                   
// var hello = 'world';
//After Hosting by the Interpreter
// var hello = 'world'; //hoisted var
// console.log(hello); //Out put --- undefined

//----------- Assig 2 ----------------------------------------
//GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
//After Hosting by the Interpreter
// var haystack; //var gets global and gets hoisted -- output undefined
// test(); // function gets global and hoisted -- call magnet
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle); // call this --- output magnet
// }

//--------------- Assignment 3 -------------------------------------

// GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
//After Hosting by the Interpreter
//var brendan = 'super cool'; //var get to top (hoisted)
// function print(){ // stays also at the top
// 	brendan = 'only okay';
// 	console.log(brendan); // call inside func -- 'only okay'
// }
// console.log(brendan); // 'super cool'

//------------------ Assignment 4-----------------------------

//GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//After Hosting by the Interpreter
// var food = 'chicken'; // var stays at top and hoisted
// console.log(food); // will call var above -- output "chicken"
// eat(); // goes at the top 
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food); // will call inside the function, so will output "half-chicken"
// 	var food = 'gone'; // this is inside the function scope
// }

//--------------------- Assignment 5 ------------------------
//GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//After Hosting by the Interpreter
// var mean = function() { // var raises to the top
// 	food = "chicken";
// 	console.log(food);  //call inside the func -- 'chicken'
// 	var food = "fish"; // var inside scope --
// 	console.log(food); // out put 'fish'
// }
//mean(); // stays at top, but throw an error  ---FUNCT NOT RUN
// console.log(food);
// console.log(food);

//------------------ Assignment 6 ---------------------------------

//GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//After Hosting by the Interpreter
//console.log(genre);  //-- will be undefined
// var genre = "disco"; // raises at top
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre); //calls inside the function --- 'rock'
// 	var genre = "r&b";
//     console.log(genre); // calls inside -- reassigned -- 'r&b'
// }
// console.log(genre); calls the global var --- 'disco'

//------------------------ Assignment 7 ---------------------
//GIVEN
// dojo = "san jose"; 
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
//After Hosting by the Interpreter
// dojo = "san jose"; // this act like var stays at top
// console.log(dojo); // displays the above -- 'San Jose'
// learn(); //goes above
// function learn() {
// 	dojo = "seattle"; // declares inside func 
// 	console.log(dojo); // displays -- 'Seattle'
// 	var dojo = "burbank";
// 	console.log(dojo); //displays -- 'Burbank'
// }
// console.log(dojo); // calls the global -- 'San Jose'

