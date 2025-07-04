// const element = document.querySelector('#myDiv');
// console.log(element.innerTextContent);
// const element = document.querySelector('.myClass');
// console.log(element.innerTextContent);

// let a = document.getElementById('a');
// a.innerHTML = "<b> Hello Kushal <b>";
// a.style.color = "skyblue";
// a.style.backgroundColor = "black";

// // --------------Class Liist----------------
// 1. add('className') - Adds a class to the element.
// 2. remove('className') - Removes a class from the element.
// 3. toggle('className') - Toggles a class on the element (adds it if not present, removes it if present).


// let a = document.getElementById('content');
// let b = document.getElementById('add');
// let c = document.getElementById('remove');
// let d = document.getElementById('toggle');

// b.onclick = function() {
//     a.classList.add("Highlight");
   

// };
// c.onclick = function() {
//     a.classList.remove("Highlight");
    
// }

// d.onclick = function() {
//     a.classList.toggle("Highlight");
   
// };


// function printFibbonaci(n) {
//     let a = 0 , b = 1;
//     console.log("Fibonacci Series:");
//     for (let i = 0; i < 10; i++){
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }

// printFibbonaci(5);


// function pallindrom(str) {
   
//     let b = " ";
//     for (let i = str.length - 1; i>= 0 ; i--){
//         b += str[i];
//     }
//     console.log(b);
// }

// pallindrom("kushal");
// // Hello Every one 


let content = document.getElementById('content');
let add = document.getElementById('add');
let remove = document.getElementById('remove');
let toggle = document.getElementById('toggle');

add.onclick = function() {
    content.classList.add("Highlight");
};   

remove.onclick = function() {
    content.classList.remove("Highlight");

};

toggle.onclick = function() {
    content.classList.toggle("Highlight");
};