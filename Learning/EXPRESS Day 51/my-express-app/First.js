import express from 'express';
const app = express()

app.get('/', (req,res) => {
    res.send("hello from Everyone")
});

app.get('/about',(req,res) => {
    res.send("Hello From About ")
});

app.get('/Product', (req,res) => {
    res.send("Hello From Product Section");
});

app.get('/temp', (req,res) => {
    res.send({
        id : 1,
        name : "rohan"
    })
})




app.listen(8000 , () => {
    console.log("Listining on Port 8000")
});
