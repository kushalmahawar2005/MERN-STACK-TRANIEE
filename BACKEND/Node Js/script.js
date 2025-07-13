// let a = 2;
// let b = 3;
// let c = a + b;
// console.log(c);
// let args = process.argv;
// for(let i = 2; i< args.length; i++) {
//     console.log("Hello & welcome to ",args[i]);
// }

// const math = require("./math");

// console.log(math.sum(12, 4));
// console.log(math.mul(4, 6));
// console.log(math.remainder(3, 4));

// const fruits = require("Directory");
// console.log(fruits);

import{ sum , PI } from "./math.js";

console.log("The Sum of Two no is : " + sum(2 , 3));
console.log("The Value of PI is : "+PI);