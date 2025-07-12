// //Promises// --- It is an object
// // --- This promises object represents the evantual completion (or failure ) of an ashynchronous operation and its result value.


// function savetoDB(data){
//     return new Promise ((resolve, reject) => {          //-- Promise kar diya kuch na kuch return to dega
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : Data was saved");
//         } else {
//             reject("failure : Data was not saved");
//         }
//     });
// }

 

// let request = savetoDb("apna college");
// request.then(() => {
//    console.log("promise was resolved"); 
//    console.log(request);
// })
// .catch(() => {
//     console.log("Promise was rejected");
// });




// // There Are two methods in Promises:-  then() and catch()




// //Priomis Chain




// function savetoDB(data){
//     return new Promise ((resolve, reject) => {         
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : Data was saved");
//         } else {
//             reject("failure : Data was not saved");
//         }
//     });
// }

//  savetoDB("Kushal Mahawar")
//  .then((result) => {
//     console.log("Data 1 Saved: Promise was resolved");
//     return savetoDB("helloworld")
//     console.log(result);
//  })

//  .then((result) => {
//     console.log("Data 2 : Saved")
//     return savetoDB("Hey Guys")
//     console.log(result);
//  })

//  .then((result) => {
//     console.log("This Whole world is mine")
//     console.log(result);
//  })

// .catch((error) => {
//     console.log("Promise was rejected");
//     console.log(error)
// });
// h1 = document.querySelector(".h1");
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("orange", 1000);
//     });
// });


//Doing Same with the use of promises


h1 = document.querySelector(".h1");
function changeColor(color, delay) {
    return new Promise((resolve , reject) => {
         setTimeout(() => {
        h1.style.color = color;
       resolve("color changeed !")
    }, delay);
    });
}

changeColor("red", 1000) 
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
    
})

.then(() => {
    console.log("orange color was completed");
       return changeColor("blue" , 1000);
    })

    .then(() => {
        console.log("Blue color was changed")
        return changeColor("Green" , 1000);

    })

    .then(() => {
        console.log("Green Color was chnages");
    })