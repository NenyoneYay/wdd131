const PI = 3.1415926535;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

var myString = "hello world";
console.log(myString);

//type coersion: JS turns the string into an int because we tried to perform math on it.
const one = 1; //This ones an int probably
const two = '2'; //This ones a string

let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result); //cuz it appended 2 to the end of 1



let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block
//END Variables-Constants.js
