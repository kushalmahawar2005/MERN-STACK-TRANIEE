// console.log("Hello Everyone");

// function syn() {
//     console.log("Hi Anish Beta")
// }

// syn();

// console.log("Hi 3rd")


function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data with id", dataid)
        if(getnextdata) {
            getnextdata();
        }
    },3000)

}

getdata(1, ()=> {
    getdata(3 , () => {
        getdata(4 , ()=> {
            getdata(4);
        })
    })
})