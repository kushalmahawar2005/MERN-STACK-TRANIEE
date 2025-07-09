// function hello() {
//     console.log("hello");
// }


// function demo() {
//     console.log("Calling Hello function")
//     hello();
// }

// console.log("Calling Demo function")
// demo();

// console.log("done", "Bye")

// In Call Stack it mainly work on last in first out Last in First Out 
// --Bassically calling function goes in stack and last calling function call first --

// --Visualizing Call Stack

function one() {
    return 1;

}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log("This is the ans:" + ans);
}

three();


// <!-- //Code me specific point pe dekhna hai ki kaise kya execute ho reha hai to Break Point ka Use karte hai 
//  Koi debug to nahi hai or hai to kya hai -->

//  pehle Console pe jao 
//  Then souce pe js file select karo 
//  Then Break legao 
//  then page refresh karo 
//  Then next kare check karte reho Kaisee file work kar rehi hai 
