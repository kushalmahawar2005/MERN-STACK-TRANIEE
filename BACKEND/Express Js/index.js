const express = require("express")
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log('stay connected');
})

// app.use((req , res) => {
//     console.log("Request received");
//     // res.send("This is the basic responce");
// //     res.send({
// //         name: "apple",
// //         color: "red",
// // });
//         let code = "<h1>We thre e are the Best friends </h1> <ul> <li>Kushal Mahawar</li> <li>Akshat Rathore</li> <li>Vasudev Joshi</li></ul>"

//         res.send(code);
// });


// app.get("/apple", (req,res) => {
//     res.send({
//         name : "apple",
//         color : "red",
//     });
// })

app.get("/", (req, res) => {
    res.send("Hello I am Route");
});

// app.get("/bannana", (req , res) => {
//     res.send("You connected with bannana akshat");
// });

// app.get("/orange", (req, res) => {
//     res.send("you connected orange path");
// });

// app.get("*", (req, res) => {
//     res.send("There is no route for this path");
// });  

// // app.post("/", (res,req) => {
// //     res.send("You send a post req to root");
// // })


// app.get("/:username/:id", (req, res) => {
//     let {username , id} = req.params;
//     let htmlStr = `<h1>Welcome to the page of ${username}.</h1>`;
//     res.send(htmlStr);
//     console.log(req.params);
// });
// Matches URL: /search?q=javascript&sort=new
// app.get('/search', (req, res) => {
//   // Access the query strings using req.query
//   res.send(req.query); // Will send: { "q": "javascript", "sort": "new" }
// });

const myLogger = (req, res, next) => {
  console.log(`[LOG] Request Received: ${req.method} ${req.url} at ${new Date()}`);
  next(); // IMPORTANT: This passes control to the next middleware or route handler
};

// To use this middleware for all routes, place it before your routes
app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Hello with Logger!');
});

// app.get("/search", (req, res) => {
//     let {q} = (req.query);
//     if(!q){
//         res.send("Nothing searched");
//     }
//     res.send(`<h1>This are the search result for :${q}</h1>`);
// });