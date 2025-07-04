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

// function isEven (num) {
//     return num % 2 == 0;
// }

// console.log(isEven(3));

// let arr = [1 , 2 ,4 ,5 ];
// document.write(arr.reverse());



// let fruits = ["Anish" , "Akshat" , "Kushal" , "Anish" , "Akshat" , "Kushal"];
// fruits.push("Dev");
// fruits.pop("Dev");
//  console.log(fruits.toString());
//  console.log(fruits.shift("Anish"));
//  console.log(fruits);
//  fruits.unshift("Anish");
// console.log(fruits);


// let a = [1 ,2 ,2 ,4 ,5, 6,7 ];
// a.splice(3 ,1 , 8 );
// a.splice(5 , 2 , 9 , 10 , 7);
// console.log(a);



// setTimeout(function(){
//     console.log("Hey Akshat");
// }, 3000);

// setIntervel(function(){
//     console.log("Hey Anish, How are you?");
// }, 2000);


    // setInterval(
    //     function() {
    //         console.log("Hello!" + "<br>");
    //     }, 2000
    // )

//     const add = (a , b) => {
//         console.log( a + b);
//     } 
// add(5, 10);

// (function(){
//     console.log("chinar");
// })();

// function add (a , b , operation){
//     return operation(a , b);
// }

// const add = (a , b) => a + b;
// add(2 , 4 , add);


// function isEven(num) {
//     return num % 2 == 0;

// }
// console.log(isEven(104));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Heelo Bhai Moja me!"));

// function countVovels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str){
//         if (vowels.includes(char)) 
//         {
//             count++;
//         }

//     }
//     return count;
// }

// console.log(countVovels("Hello World! This is a test string.")); // Output: 10

//DOM Manipulation

// // let a = document.getElementsById("a").innerHTML.style.color = "red";
// // let b = document.getElementsByClassName("'c'")[0].innerHTML.style.color = "blue";

// // document.write(a);
// // document.write(b);

// let a  = document.getElementById("a");
// a.style.color = "red";
// a.style.backgroundColor = "yellow";
// a.innerHTML = "Bhoot aya!!";

// let b = document.getElementsByTagName("p")[0];
// b.style.color = "green";

// function hello() {
//    let a = document.getElementById("H");
//     a.style.backgroundColor = "black";
//     a.style.color = "white";
//     a.innerHTML = "Clicked!";
   
// };




// function Kushal() {
//     let a = document.getElementById("name").innerText;
//     document.write("Hello"+ " " + a);
//     a.style.color = "black";

// }


// function isArmstrong(num) {
//     let sum = 0;
//     let temp = num;
//     const n = num.toString().length;
//     while (temp > 0) {
//         const digit  = temp % 10;
//         sum += Math.pow(digit, n);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }

// console.log(isArmstrong(153));

function isStrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let factorial = 1;
        const digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
}

console.log(isStrong(145)); // Output: true