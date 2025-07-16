const express = require("express");
const app = express();  // EJS is internally requuired by express(); By default
const path = require("path");
const port = 8080;

app.set("view engine" , "ejs");

app.set("views", path.join(__dirname, "/views"));  

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username" , (req , res) => {
    const instaData = require("./data.json");
    let {username } = req.params;
    const data = instaData[username];
    console.log(data);
    res.render ("instagram.ejs",{data : instaData[username]});

});

app.get("/home", (req, res) => {
    res.send("home");
});

app.get ("/rolldice", (req, res) => {    
    let dicVal =  Math.floor(Math.random() * 6) + 1 
    res.render("rolldice.ejs", { dicVal });
});

app.listen(port,  () => {
    console.log(`Listening on port : ${port}`);
});

 