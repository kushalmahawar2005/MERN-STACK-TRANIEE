import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layout'),
    partialsDir: path.join(__dirname, 'views', 'partial'), 
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', message: 'You are so Naughty' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', message: 'This is about us!' });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}/`)
);
