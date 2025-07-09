h1 = document.querySelector("h1");

function changeColor (color, delay , nextcolorChange) {
    setTimeout(() => {
    h1.style.color = color;
    if(nextcolorChange) nextcolorChange();
},delay);
}

changeColor("green", 1000 , () => {
    changeColor("white", 1000, () => {
        changeColor("orange" , 1000);
    } );
});


//callbacks nesting -> callback Hell

// To overwrite from this Problem 
// Further we learn about 
// await 
// async 
// --Dono propertied ke baree me padenge 