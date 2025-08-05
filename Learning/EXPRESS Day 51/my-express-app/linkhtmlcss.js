import express from 'express'

const app = express();
const port = 3000;


app.use(express.static('Public'));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'Public' });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
