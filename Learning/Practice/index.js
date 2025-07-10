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



class Company {
    constructor(name) {
        this.name = name;
        this.employeed = [];
    }


    addEmployeee(employee) {
        this.employeed.push(employee);
    }
}

const company = new Company("Zeetron");
company.addEmployeee("WsCode");
company.addEmployeee("RegX");

console.log(company.employeed);

