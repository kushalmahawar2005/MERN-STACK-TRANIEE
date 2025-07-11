// class Animal{
//     speak() {
//         console.log("Animal make a sounds")
//     }
// }

// class Dog extends Animal {
//     speak(){
//         console.log("Dog Barks")
//     }
// }

// const dog = new Dog();
// dog.speak();

// class Animal {
//     constructor(name){
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }


// const animal = new Animal("Akshat");
// const dog = new Dog("Hybrid");
// console.log(dog);



// class Animal {
//     constructor(name , age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`${this.name} make a sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name , age , breed) {
//         super (name , age);
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} barks!`);
//     }
// }

// const dog = new Dog("Akshat", 19, "Hybrid");
// dog.speak();
// dog.bark();


// class Person {
//     constructor(name , age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }
// }

// const person = new Person('John', 30);
// console.log(person.name);
// person.name = 'Jane Doe';
// console.log(person.name);



// class Calculator {
//     Add(a , b) {
//         return a + b;
//     }

//     add(a , b , c) {
//         return a + b + c;
//     }
// }

// const calc = new Calculator();
// console.log(calc.add(1 , 2 , 3));
// console.log(calc.Add(5 , 4));

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super('Circle');
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }




// const circle = new Circle(2.3);
// console.log((circle.area()));



// class Company {
//     constructor(name) {
//         this.name = name;
//         this.employeed = [];
//     }


//     addEmployeee(employee) {
//         this.employeed.push(employee);
//     }
// }

// const company = new Company("Zeetron");
// company.addEmployeee("WsCode");
// company.addEmployeee("RegX");

// console.log(company.employeed);




// let age = 40;
// if (age >= 18) {
//     if (age >= 70) {
//         console.log("seniour");

//     }
//     else {
//         console.log("your age is between 18 : 40")
//     }
// } 
// else {
//     console.log("juniour")
// }

// function getData(dataid, getnextdata) {                          ///////////////////////// 
//     setTimeout(() => {
//         console.log("Data with id", dataid)
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 3000)
// }


// getData(1, () => {
//     getData(2, () => {
//         getData(3 , () => {
//             getData(4)
//         })
//     })
// })



//Call Back Hell


// console.log("start");

// setTimeout(() => {
//     console.log("Step 1: Fecthing user.....");

//     setTimeout(() => {
//         console.log("Step 2 : Fecthing Data 2....")

//         setTimeout(() => {
//             console.log("Step 3 : Fecthing Data 3..")

//             setTimeout (() => {
//                 console.log("Step 4 : Fecthing Data 4")
//             }, 1000);
//         }, 1000);

//     }, 1000);
// }, 1000);



//Promises // It is a solution for call back Hell // It is an Evantual of completion of Task 



// let promise = new Promise((resolve, reject) => {
//     console.log("Promise")
//     resolve("Successfully Done")
// })

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise")
//     reject("unSuccessfull")
// })

// function getData(dataid , getnextdata) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("Data with id" , dataid)
//             resolve("Problem Solved")

//             if (getnextdata) {
//                 getnextdata();
//             }
//         }, 3000)
//     });
// }


// // Ager Promise successfull ho jata hai to ham then ka use karte hai betane ke liye ki Promise Resolve ho gya hai
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         reject ("error")
//     });

// }

// let promise = getPromise();
// promise.catch(() => {
//     console.log("Promise not fullfiled")
//  }
// );



// function asynfunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1")
//             resolve("Success");
//         }, 4000);
//     })
// }


// function asyncfunction2() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 4000)
//     })
// }


// console.log("Fetching data 1.....")
// let p1 = asynfunction1();
// p1.then((res) => {
//     console.log(res);
// })

// console.log("Fetching data 2.........")
// let p2 = asyncfunction2();
// p2.then((res) =>{
//     console.log(res);
// });



//Async Await


// async function hello() {
//     console.log("Hello");

// }


// function getData(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success");
//         }, 3000)
//     });
// }

// async function getAllData() {
//     console.log("getting data ")
//     await getData(1);
//     console.log("getting data 1")
//     await getData(2);
//     console.log("getting data 2")
//     await getData(3);
//     console.log("getting data 3")
//     await getData(4)
//     console.log("getting data 4")

// }


async function getAllData() {
    console.log("getting data 1")
    const promise1 = getData(1);
    console.log("getting data 2")
    const promise2 = getData(2);
    console.log("getting data 3")
    const promise3 = getData(3);
    console.log("get Promise 4")
    const promise4 = getData(4);
    


    await Promise.all([promise1, promise2 , promise3, promise4]);


    console.log("All data received");
}
