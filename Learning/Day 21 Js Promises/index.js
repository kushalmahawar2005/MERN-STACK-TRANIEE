// console.log("Start")
// setTimeout(() => {
//     console.log("Asynchronous Task")
// }, 2000)
// console.log("End")




//CallBackk Hell



// function getData(dataid, getnextdata) {  // It is a problem because in it every problem take 3 section for execution //Jaise iseme 4 baar call kiya to har ek ke liye 3 sec wait karega to total 9 ho gya 
//     setTimeout(() => {
//         console.log("Data with id", dataid)
//         // if(getnextdata){
//         //     getnextdata();
//         // }
//     }, 3000)
// }

// getData(3)
// getData(2)


// // getData(1 , () => {
// //     getData(2 , () => {
// //         getData(3,() => {
// //             getData(4);
// //         })
// //     })
// // })

// let promise = new Promise((resolve,reject) => {
//     console.log("Successfull");
//     resolve("successfull")
 
// })

// const getPromise = () => {
//     return new Promise((resolve , reject) => {
//         console.log("I m a promise")
//         // resolve("success")
//         reject("error")
//     }) 
// }

//    let promise = getPromise();
// // promise.then(() => {
// //     console.log("Promise Fullfilled")
// // })

// promise.catch(() => {
//     console.log("reject")
// })


// function savetoDB(data) {
//     return new Promise((resolve , reject) =>  {
//         let internetSpeed = Math.floor(Math.random()  * 10)+ 1;
//         if (internetSpeed > 4) {
//             resolve("Success : data was saved");
//         } else { 
//             reject("failure : weak connection");
//         }
//     });
// }

// let request = savetoDB("Kushal Mahawar");


// request.then(() => {
//     console.log("Problem Solved")
//     console.log(request);
// })

// request.catch(() => {
//     console.log("error")
//     console.log(request)
    
// })
