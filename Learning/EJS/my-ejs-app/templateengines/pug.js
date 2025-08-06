import express from 'express'
const app = express();


app.set("view engine" , "pug");
app.set("views" , "../views");


app.get('/', (req,res) => {
    res.render('index' , {title : "DEV" , Message : "Dev ki Gand me Guda Nahi"});
});

app.listen(3000, () => 
    console.log("The App is Listen at Port : 3000"));