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




function savetoDB(data){
    return new Promise ((resolve, reject) => {         
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : Data was saved");
        } else {
            reject("failure : Data was not saved");
        }
    });
}

 savetoDB("Kushal Mahawar")
 .then(() => {
    console.log("Data 1 Saved: Promise was resolved");
    return savetoDB("helloworld")
    
 })

 .then(() => {
    console.log("Data 2 : Saved")
    return savetoDB("Hey Guys")
 })

 .then(() => {
    console.log("This Whole world is mine")
 })
.catch(() => {
    console.log("Promise was rejected");
});