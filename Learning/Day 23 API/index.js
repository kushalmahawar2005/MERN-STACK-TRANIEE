const URL = "https://api.artic.edu/api/v1/artworks";

// let promise = fetch(URL);

const getFacts = async() => {
    console.log("Data is :");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
    console.log((data));
}