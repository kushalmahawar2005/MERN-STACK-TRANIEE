// // const { default: OperatorNode } = require("three/src/nodes/math/OperatorNode.js");
// // const { ReferenceNode } = require("three/webgpu");

// // //1. way to print javascript
// // console.log("Hello World!");
// // alert("Hello World!");
// // //2.Javascript console api 
// // console.log("Hello World!", 4 + 6, "Another log");
// // console.warn("This is a warning");  
// // console.error("This is an error");
// // //3. JavaScript data types

// // // Numbers - var a  = 33;
// // // var b = 3.14;

// // // string - var str1 = "hey vasu";
// // // var str2 = "hey akshat";

// // // obejct - 
// // // var marks = {
// // //     vasu : 12,
// // //     akshat : 23,
// // //     kuhsal : 34
// // // };

// // // boolean - true or false

// // // var a = true;
// // // var b = false;
// // // console.log(a . b);

// // // At a very high level of javascript 
// // // there are two types of datatype 
// // // 1 Primitve - undefined , null , number, string , boolean , symbol
// // // 2 Reference - Arrays and Objects 

// // Arrays - 
// // varr arr = [1 , 2 ,3  ,4  ,5]

// // Operators in JavaScript
// // // Arithmetic Operators
// // var a = 10;

// // var b = 5;
// // console.log("Addition:", a + b); // Addition
// // console.log("Subtraction:", a - b); // Subtraction

// // console.log("Multiplication:", a * b); // Multiplication
// // console.log("Division:", a / b); // Division
// // console.log("Modulus:", a % b); // Modulus
// // console.log("Exponentiation:", a ** b); // Exponentiation

// // Assignmnet Operators-
// // var x = 10;
// // x += 5; // x = x + 5
// // console.log("After +=:", x); // 15
// // x -= 3; // x = x - 3
// // console.log("After -=:", x); // 12
// // x *= 2; // x = x * 2

// // comparision Operator
// // console.log("Is x equal to 20?", x == 20); // false
// // console.log("Is x not equal to 20?", x != 20); // true

// // console.log("Is x greater than 10?", x > 10); // true
// // console.log("Is x less than or equal to 12?", x <= 12); // trueq
// // console.log("Is x greater than or equal to 12?", x >= 12); // true


// // // Logical Operators
// // console.log("Is x greater than 10 AND less than 20?", x > 10 && x < 20); // true
// // console.log("Is x less than 10 OR greater than 15?", x < 10 || x > 15); // true
// // console.log("Is x NOT equal to 12?", !(x == 12)); // true
// // // Bitwise Operators
// // console.log("Bitwise AND:", a & b); // Bitwise AND
// // console.log("Bitwise OR:", a | b); // Bitwise OR
// // console.log("Bitwise XOR:", a ^ b); // Bitwise XOR
// // console.log("Bitwise NOT:", ~a); // Bitwise NOT
// // // Shift Operators
// // console.log("Left Shift:", a << 1); // Left Shift
// // console.log("Right Shift:", a >> 1); // Right Shift
// // // Ternary Operator
// // var age = 18;
// // var canVote = (age >= 18) ? "Yes" : "No";
// // // console.log("Can vote:", canVote); // "Yes"

// // //Functions 

// // function avg (a , b) {
// //     return (a * b) / 2;
// // }

// // c1 = avg (4 , 6);
// // console.log("Average:", c);

// //  c2 = avg (10 , 20);
// //  console.log("Average:", c2);
 
// //  console.log(c1 , c2);


// //  function avg (a , b ) { //Function invoke
// //     c = (a + b) / 2;
// //     return c;
// //  }

// //  c1 = avg (4 , 5); // Function Call


// //Conditionals in javascript
// //  var age  = 21;
// //  if(age > 18) {
// //     console.log("You are not a kid & You are eligible for vote ");
// //     console.log("You can vote now");
// //  }
// //  else{
// //     console.log("You are a kid , & You are not eligible for vote");
// //  }
 
// // var age = 18;
// // if(age >= 18) {
// //     console.log("You can drink");
// // } else {
// //     console.log(
// //         "You cannot drink Water"
// //     );
// // }
// // let age = 72;

// // if (age > 32) {
// //     console.log("You are not a Kid");
// // }
// // else if (age > 18) {
// //     console.log("You are a Teenager");

// // }
// // else if (age > 12) {
// //     console.log("You are a Child");
// // }
// // else if (age > 17){
// //     console.log("After few years you are a teenagers");
// // }


// //LOOPS IN JAVASCRIPT =


// // console.log(arr);
// // for (var i = 1; i< arr.length; i++) {
// //     console.log(arr[i]);
// // }

// //We can also retreat array using For Each LOOPS

// // arr.forEach(function(element){
// //     console.log(element);
// // })



// // let j = 0;
// // while (j <arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// // do{
// //     console.log(arr[j]);
// //     j++;
// // }while (j < arr.length);

// // var arr = [1, 2, 3, 4, 5];
// // for (let i = 0 ; i< arr.length; i++) {
// //     if(i == 2) {
// //         // break; - Kewel 2 tak chalega fir stop ho jayega 
// //         continue; // - kewel 2 ko skip karega baki sabko print karwayega
// //     }
// //     console.log(arr[i]);
// // }


// // // ---ARRAY METHOD---
// // let myArr = ["Vasu", "Akshat", "Kushal", 18 , 20 , 21 , null];
// // //FOR ARRAY LENGTH
// // console.log(myArr.length);
// // console.log(myArr.pop()); // Removes the last element and returns it (Removed Element is print)
// // myArr.pop();
// // console.log(myArr);
// // myArr.push("Kushal+S");
// // console.log(myArr);
// // myArr.shift(); //First element ko remove kar dega 
// // myArr.unshift("Vasu+S"); //First element ko add kar dega
// // console.log(myArr);

// // myArr.toString(); // Converts the array to a string
// // console.log(myArr.toString());
// // myArr.sort(); // Sorts the array in ascending order
// // console.log(myArr.sort());
// // myArr.reverse(); // Reverses the order of the array
// // console.log(myArr.reverse()); // Reverses the order of the array
// // myArr.splice(1, 2, "New Element"); // Removes 2 elements starting from index 1 and adds "New Element"
// // console.log(myArr.splice(1, 2, "New Element")); // Returns the removed elements
// // myArr.slice(1, 3); // Returns a shallow copy of the array from index 1 to 3 (not inclusive)
// // console.log(myArr.slice(1, 3)); // Returns a shallow copy of the array from index 1 to 3 (not inclusive)
// // myArr.concat(["New", "Array"]); // Concatenates another array to the current array
// // console.log(myArr.concat(["New", "Array"])); // Concatenates another array to the current array
// // myArr.indexOf("Vasu+S"); // Returns the index of the first occurrence of "Vasu+S"
// // console.log(myArr.indexOf("Vasu+S")); // Returns the index of the first occurrence of "Vasu+S"
// // myArr.lastIndexOf("Kushal+S"); // Returns the index of the last occurrence of "Kushal+S"
// // console.log(myArr.lastIndexOf("Kushal+S")); // Returns the index of the last occurrence of "Kushal+S"
// // myArr.join(" - "); // Joins the elements of the array into a string with " - " as a separator
// // console.log(myArr.join(" - ")); // Joins the elements of the array into a string with " - " as a separator
// // myArr.every((element) => typeof element === "string"); // Checks if every element is a string
// // console.log(myArr.every((element) => typeof element === "string")); // Checks if every element is a string
// // myArr.some((element) => typeof element === "number"); // Checks if some elements are numbers
// // console.log(myArr.some((element) => typeof element === "number")); // Checks if some elements are numbers
// // myArr.filter((element) => typeof element === "string"); // Filters the array to include only strings
// // console.log(myArr.filter((element) => typeof element === "string")); // Filters the array to include only strings
// // myArr.map((element) => element.toUpperCase()); // Maps the array to uppercase strings
// // console.log(myArr.map((element) => element.toUpperCase())); // Maps the array to uppercase strings

// // ----STRING METHOD----

// // let myString = "Hello, World!";
// // console.log(myString.length); // Returns the length of the string

// //---For replace words----//

// // d = myString.replace("World", "Vasu");
// // console.log(d); // Replaces "World" with "Vasu"
// // //---For split words----//  
// // let splitString = myString.split(", ");
// // console.log(splitString); // Splits the string into an array at ", "

// let myDate = new Date();
// //console.log(myDate); // Returns the current date and time

// console.log(myDate.getFullYear()); // Returns the current year
// console.log(myDate.getMonth()); // Returns the current month (0-11) 
// console.log(myDate.getDate()); // Returns the current day of the month (1-31)
// console.log(myDate.getHours()); // Returns the current hour (0-23)
// console.log(myDate.getMinutes()); // Returns the current minutes (0-59)
// console.log(myDate.getSeconds()); // Returns the current seconds (0-59)
// console.log(myDate.getMilliseconds()); // Returns the current milliseconds (0-999)
// console.log(myDate.getDay()); // Returns the current day of the week (0-6, where 0 is Sunday)
// console.log(myDate.getTime()); // Returns the number of milliseconds since January 1, 1970