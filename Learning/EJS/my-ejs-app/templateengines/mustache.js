import express from 'express';
import mustacheExpress from 'mustache-express';

const app = express();

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", '../views');

app.get('/', (req, res) => {
    res.render('index', { title: "Namo", Message: "This was Define by a Great Author"});
});

app.listen(3000, () => console.log("Server Started"));
