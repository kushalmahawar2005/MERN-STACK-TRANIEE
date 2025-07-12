// Fetch API using normal method or Promises


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res)   //Promisee call ho jayega Iseme betayega kewel Ki redable hai ya nahi ager hai to res.json ka use karo
//     // console.log(res.json());   //we use the function to access the data of API's
//     // res.json().then((data) => { // To access data in Console
//     //     console.log(data);
//     return res.json();
    
// })

// .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
// })

// .then((res) => {
//     return res.json()
// })

// .then((data2) => {
//     console.log("Data 2  =" , data2.fact);
// })

// .catch((err) => {
//     console.log("ERROR - ", err);
// }); 



//// Fetching API using Async or Await 

//If there is any error so to handle the error we use all the case in try block and alo define catch to get the error 

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//    try{
//      let res = await fetch(url);
//     let data = await res.json();
//     console.log(res);
//     console.log(data.fact);

//      let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(res2);
//     console.log(data2.fact);
    
//    }
//    catch{
//     console.log("ERROR - 404");
//    }
//    console.log("bye");
// }



// Axios -
//         It is also a easy method of Fetching API's either use of fetch we use Axios
// IT is an a Library which is usually used to make HTTPS requests
//The main diff btw Axios and fetch that is , In axios we don't want to pass json function 


//We write the recent code with the help of axios 

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try{
//         let res = await axios.get(url);   //we use axios.get() either fetch(url) becasuse in it we don't want to call or push json file
       
//         console.log(res.data.fact);
        
//     }

//     catch{
//         console.log("ERROR -404 URL");
//     }
// }  

///Let understand how we use it on Html 




let btn = document.querySelector("button");

btn.addEventListener("click" , async () => {
    let fact = await getFact();
    console.log(fact);
    let p = document.querySelector("p");
    p.innerHTML = fact;

});
let url = "https://catfact.ninja/fact";

async function getFact() {
    try{
        let res = await axios.get(url);    //we use axios.get() either fetch(url) becasuse in it we don't want to call or push json file
       
       return res.data.fact;
        
    }

    catch{
        console.log("ERROR 404");
        return "NO Error Found";
    }
}  