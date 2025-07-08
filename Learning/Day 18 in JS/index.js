// const input = document.getElementById('input');
// input.addEventListener("focus" , () => {
//     console.log("Input field focoused!");
    
// });



// input.addEventListener("blur", () => {
//     console.log("Input field is out")
   
// });

// const select = document.getElementById("select");
// select.addEventListener("change", (event) => {
//     console.log(`Key Pressed : ${event.target.value}`);
// });

// const div = document.getElementById("Mydiv");
// div.addEventListener("mouseover", () => {
//     div.style.backgroundColor = "yellow";
//     console.log("Yellow");
// });

// div.addEventListener("mouseout" , () => {
//     div.style.backgroundColor = "blue";
//     console.log("blue")
// });


// const list = document.getElementById("list");
// list.addEventListener("click" , () => {
//     if (event.target.tagName === "LI") {
//         alert(`You clicked on : ${event.target.textContent}`)
//     }
// });



// -------Objects in JS-----

// const person = {
//     firstName : "kushal",
//     lastName : "Mahawar",
//     age : 21,
//     greet : function() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.greet());
// console.log(person);


// person.gender = "male";
// person.age = 22;
// delete person.lastName;


const obj = { a : 1};
// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// const target = {a : 1};
// const source = {b : 2, c : 3};
// Object.assign(source , target);
// console.log(source);

Object.freeze(obj);

obj.a = 5;
console.log(Object.values(obj));
console.log(Object.entries(obj));
Object.seal(obj);
obj.a = 10;
obj.b = 11;
console.log(Object.entries(obj));

