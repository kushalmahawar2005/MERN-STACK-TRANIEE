// ----------------Functions in JavaScript----------------

// function hello(name) {
//     console.log(`The name is ${name}`);
// }

// hello("Kushal");


// let a = function(name) {
//     console.log(`The name is ${name}`);
// }
// a("Kushal");

// setTimeout(function(){
//     console.log("Hello")

// },2000);

// ------Arrow functions------
// const add = (a , b) => {
//     console.log(a + b);
// }
// add(5, 10);

// (function(){
//     console.log("This is an IIFE!");
// })();


// ----Ek function me dusera function pass karena -------l̥

// function addition( a , b , addi) {
//     return addi(a , b);
// }

// function add(a , b){
//     console.log(a + b);
// }

// addition (2 , 3, add);

// function reverseString(str) {

// }

// document.write("Hello World!");


// let a = window.document.getElementById("a");
// a.innerHTML = "Hello Kushal!";
// a.style.color = "red";
// a.style.backgroundColor = "yellow";
// a.style.fontSize = "30px";
// a.style.textAlign = "Center";
// a.style.fontFamily = "Roboto,sans-srief";

// let b = document.getElementsByClassName("c");
// for (let i = 0; i < b.length; i++) {
//     b[i].innerHTML = "Hello Akshat!";
//     b[i].style.color = "blue";
//     b[i].style.backgroundColor = "green";
//     b[i].style.fontSize = "20px";
//     b[i].style.textAlign = "Center";
//     b[i].style.fontFamily = "Roboto,sans-srief";
// }

// function kushal() { 
//     console.log("Hello Kushal!");
//     console.log("This is a function in JavaScript.");
// }

// kushal();

// const greet = function(name ){
//     return `Hello , ${name}!`;
// }

// console.log(greet("Alice"));

// setTimeout(function(){
//     console.log("Dev kala hai, Useke bachee bhii kalee hai! ");
// },5000);

// const add = (a , b) => {
//     return a + b;
// }

// console.log(add(35, 10));


// (function() {
//     console.log("This is an IIFE!");
// })();

// function multi(a , b , operation) {
//     return multiply(a , b);
// }
// const multiply = (x , y) => x * y;
//  console.log(multi(3 , 4 , multiply));

function isEven (num) {
    return num % 2 == 0;
}

console.log(isEven(3));