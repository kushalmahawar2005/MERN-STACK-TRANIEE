//  async function greet() {
//     throw "Some random error"    //Act as reject state 
//     return "hello!";
//  }

//  greet()

// .then((result) => {
//     console.log("Promise Sucessfull");
//     console.log(result);
// })

// .catch((err) => {
//     console.log("There is some error in these state");
//     console.log(err)
// })


// let hello = async () => {} // we also use Async function using arrow function


//Await Keyword




// function getNum() {
//    return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      let num = Math.floor(Math.random() * 10) + 1;
//     console.log(num)
//     resolve("Resolved")
//    }, 1000);
//    });
// }

// async function demo() {
//    await getNum();
//    await getNum();
//    await getNum(); 
// }  


// h1 = document.querySelector(".h1");
// function changeColor(color, delay) {
//     return new Promise((resolve , reject) => {
//          setTimeout(() => {
//         h1.style.color = color;
//        resolve("color changeed !")
//     }, delay);
//     });
// }


//here there are more no of line To minimize it we use Await function 

// changeColor("red", 1000) 
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
    
// })

// .then(() => {
//     console.log("orange color was completed");
//        return changeColor("blue" , 1000);
//     })

//     .then(() => {
//         console.log("Blue color was changed")
//         return changeColor("Green" , 1000);

//     })

//     .then(() => {
//         console.log("Green Color was chnages");
//     })


// h1 = document.getElementById("hi");
// function changeColor(color, delay) {
//     return new Promise((resolve , reject) => {
//          setTimeout(() => {
//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//        resolve("color changeed !");
//     }, delay);
//     });
// }

// async function demo() {
//    await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     await  changeColor("yellow", 1000);
// }


//Ager await ke bich me error aa gya to ham try and catch legaa denge jisee koi bhi error ayegi vo solve ho jayegi or show ho jayegi catch block ki help se 
//Or function proper work karega 
