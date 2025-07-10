// class Car {
//     constructor(make , model) {
//         this.model = make;
//         this.make = model;

//     }

//     getCarDetails() {
//         return `${this.make} ${this.model}`;

//     }
// }


// const car = new Car("Toyota" , "Camry");
// console.log(car.getCarDetails());


// class Calculator {
//     add(a,b) {
//         return a + b;
//     }

//     subtract(a,b) {
//         return a - b;
//     }
// }

// const calc = new Calculator();
// console.log(calc.add(10 , 15));
// console.log(calc.subtract(10, 5));


// Inheritance in class 
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} make a sound.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name}`);
//     }
    
// }

// const dog = new Dog;
// const animal = new Animal("Buddy");
// animal.speak();
// dog.speak();


// ------Getter and Setter function-------------


// class Person {
//     constructor(firstName , lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     }
// }

// const person = new Person("John", "Doe");
// console.log(person.fullName);
// person.fullName = "Jane Smith";
// console.log(person.fullName);



// ----Example of constructor

// class Student {
//     constructor(name , age) {
//         this.name = name;
//         this.age = age;
//     }

//     show() {
//         console.log(`Name :${this.name} ${this.age}`);
//     }
// }

// const stu = new Student("kushal", 21);
// console.log(stu.show());


// class Student {
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }

//     get fullName() {
//         console.log(`firstName : ${this.firstName} ${this.lastName}`);
//     }

//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");

//     }
// }

// const s = new Student("kushal" , "Mahawar");
// console.log(s.fullName);
// s.fullName = "Akshat Rathore";
// console.log(s.fullName);


// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius * this.radius;
//     }
    
// }

// const ar = new Circle(5);
// console.log(ar.area());




//---------------Student Name with Validation-----------------

// class Student {
//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName){
//         if(newName.length > 0) {
//             this._name = newName;
//         } else {
//             console.log("Name cannot be empty");
//         }
//     }
// }

// const s = new Student("kushal");
// console.log(s.name);
// s.name = "Kushal";
// console.log(s.name);
// s.name = "";



class Rectangle{
    constructor(length,bredth) {
        this.length = length;
        this.bredth = bredth;
    }


    area() {
        return `${this.length} ${this.bredth}`
    }
}

const rec = new Rectangle(2 , 3);
console.log(rec.area);