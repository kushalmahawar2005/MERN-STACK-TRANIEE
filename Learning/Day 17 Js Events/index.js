const button = document.getElementById("btn");
    button.addEventListener("click", () => {
        alert("Button was clicked!");
        document.body.style.backgroundColor = "lightblue";
        button.style.color = "red";
        button.style.backgroundColor = "black";
    });

const input = document.getElementById("myinput");
input.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);

});


window.addEventListener("load", () => {
    console.log("Page succesfully Loaded!")
})

const form = document.getElementById("myform");
form.addEventListener("submit" , (event) => {
    event.preventDefault();
    alert("Form submitted!");
})