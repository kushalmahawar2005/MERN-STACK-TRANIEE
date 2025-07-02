//  const marks = 20;
//     let branch;

// const { ReverseSubtractEquation } = require("three");

//     switch (true){
//         case marks >= 90:
//             branch = "Computer Science";
//             break;
    
//         case marks >=75:
//             branch = "Information Technology";
//             break;

//         case marks <= 25:
//             branch = "Electrical and Electronics";
//             break; 

//             default:
//             branch = "Electronics and Communication";
//             break;
// }

// console.log(`student branch name is : ${branch}`);

// for(let i = 0; i <= 6; i++)
// {
//     console.log(i);
// }

// for (let i = 0; i <= 100 ; i++){
//     let sum = 0;
//     sum += i;
//     console.log(`The sum of first ${i} numbers is : ${sum}`);
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 100);

// for (let i = 0; i<=5 ; i++){
//     console.log("outer", i);
//     for (let j = 0; j <= 5; j++){
//         console.log("inner", j);
//     }
// }

// For Start pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//         row += " *";
//     }
//     console.log(row);
// }

// console.log("Hello Kushal");

// let a = "Hello World";
// console.log(a.length);
// document.write(a.toUpperCase());
// document.write("<br>");
// document.write(a.toLowerCase());


// let a = "       Hello World";
// document.write(a);
// document.write("<br>");
// document.write(a.trim());

// console.log(a.trim()); // Remove whitespace from both ends
// console.log(a);


// let a  = "Hello World";
// console.log(a.slice(2 , 5)); // Extracts characters from index 2 to 4
// document.write(a.slice(8 , 11)); // Extracts characters from index 2 to 4


// let a = "Hello World";
// console.log(a.replace("World","Kushal")); // Replaces "World" with "Kushal"
// document.write(a.replace("World","Kushal")); // Replaces "World" with "


// let str1 = "Hello";
// let str2 = "World";

// let str3 = str1 + " " + str2; // Concatenates str1 and str2 with a space in between
// console.log(str3); // Outputs: Hello World
// document.write(str3); // Outputs: Hello World

// let str3 = str1.concat(" ",str2); // Concatenates str1 and str2 with a space in between
// console.log(str3); // Outputs: Hello World
// document.write(str3); // Outputs: Hello World

// let str3 = `${str1} ${str2}`; // Template literals for concatenation
// console.log(str3); // Outputs: Hello World
// document.write(str3); // Outputs: Hello World

// let str = "Hello";
// b = " ";
// for (let i = 4; i >= 0; i--){
//     b = b + a[i]
// }


// let marks = [ 85, 90, 78, 92, 88 ];
// console.log(marks); // Outputs: [ 85, 90, 78, 92, 88 ]
// console.log(marks.lenght);
// marks.push(95); // Adds 95 to the end of the array
// document.write(marks); // Outputs: [ 85, 90, 78, 92, 88, 95 ]


// Unshift // Add on starting 
// Shift // Remove from starting

// let arr = [1 , 3 ,4  ,6 , 7 ,8 ,9 ,10];

// console.log(arr.splice(2, 3 , 101 , 102 , 103));
// console.log(arr); // Outputs: [1, 3, 101, 102, 103, 7, 8, 9, 10]

// let marks = ["Kushal", "Akshat" , "Dev" , "Gudu" , "Anish"];
// marks.reverse();
// console.log(marks); // Outputs: [ 'Anish', 'Gudu', 'Dev', 'Akshat', 'Kushal' ]