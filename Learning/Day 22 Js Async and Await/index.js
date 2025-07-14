function getdata(dataid) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data id is " + dataid);
            resolve("success");
        },3000)
    })
}


// async function getAlldata() {
//     console.log("Getting data 1");
//     await getdata(1);
//     console.log("Getting data 2:");
//     await getdata(2);
//     console.log("Getting data 3");
//     await getdata(3);
//     console.log("Getting data 4");
//     await getdata(4);
// }
// getAlldata();



async function getAlldata() {
    console.log("Getting data 1");
    let a = getdata(1);
    console.log("Getting data 2:");
    let b =  getdata(2);
    console.log("Getting data 3");
    let c =  getdata(3);
    console.log("Getting data 4");
    let d =  getdata(4);

    await Promise.all({a, b, c, d})
}
getAlldata();



