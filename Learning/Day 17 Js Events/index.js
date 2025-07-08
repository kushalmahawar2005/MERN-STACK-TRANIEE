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

const hover = document.getElementById("practice");
hover.addEventListener("mouseover" ,() =>
{
    hover.style.fontSize = "300px";
    hover.style.color = "red";
    hover.style.fontWeight = "bold";
    hover.style.backgroundColor = "black";
    hover.style.fontFamily = "Segoe UI, sans-serif";

    document.body.style.backgroundColor = "Black";
    hover.style.transition = "all 0.5s ease";
}
);

const focous = document.getElementById("focous");
focous.addEventListener("focous", () => {
    alert("Input field is focused!");

});

focous.addEventListener("blur", () => {
    focous.style.backgroundColor = "lightgray";
    
});

const change = document.getElementById("change");
change.addEventListener("change" , (event) => {
    console.log(`Selected: ${event.target.value}`);
});



const list = document.getElementById("myList");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") 
    {
        alert(`You clicked on: ${event.target.textContent}`);
    }
});