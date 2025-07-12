let btn = document.querySelector("button");
btn.addEventListener("click" ,async () => {
    let message = await getImg();
    console.log(message); 
    let img = document.querySelector("#result")
    img.classList.add("container");
    img.setAttribute("src",message);
});





let url = "https://dog.ceo/api/breeds/image/random";



async function getImg() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch{
        console.log("ERROR -404 LODING IMG");
        return "/"
    }

}