const url = "https://icanhazdadjoke.com/"



let click = document.querySelector("button");
click.addEventListener("click", async () => {
    let result = await getJoke();
    console.log(result);
    let joke = document.querySelector("p")
    joke.innerText = result;
});

async function getJoke() {
    try{
        const config = { headers: {Accept : "application/json" }};
        let res = await axios.get(url, config);
        return res.data.joke;
    }
    catch{
        console.log("ERROR-404 FOUND");
    }
}

