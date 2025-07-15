// // const URL = "https://icanhazdadjoke.com/";

const { resolve } = require("@react-three/fiber/dist/declarations/src/core/utils");

// // // let promise = fetch(URL);

// // const getFacts = async() => {
// //     const config = { headers: {Accept : "application/json" }};
// //     console.log("Data is :");
// //     let response = await fetch(URL , config);
// //     console.log(response);
// //     let data = await response.json();
// //     let result = console.log(data);
// //     console.log(result.joke);
// // }

// // getFacts();



// const url = "https://dog.ceo/api/breeds/image/random";


// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let result = await getImg();
//     console.log(result);
//     let res = document.getElementById("pic");
//     res.setAttribute("src", result);
// });


// async function getImg() {
//     let image = await fetch(url);
//     let data = await image.json();
//     return data.message;

// }




// const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

// async function pokemonData(){
//     const config = { headers: {Accept : "application/json" }};
//     let Data = await fetch(URL, config);
//     console.log(Data);
//     let res = await Data.json();
//     console.log(res);
// }

// pokemonData();


const url = "https://www.boredapi.com/api/activity";

async function getBored() {
    try{
        let Data = await axios.get(url);
        return Data;
    }

 catch (e){
    console.log("ERROR -404", e);
 }
};

 