
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import ejsMate from 'ejs-mate';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
 app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/packages/landing%20pages',(req,res)=>{
res.render('reservation')
})

app.get('/packages/reservation',(req,res)=>{
res.render('rev')
})
app.get('/packages/portfolio',(req,res)=>{
res.render('red')
})
  app.get('/',(req,res)=>{
res.render('index')
  })
app.listen(4000, () => console.log(`Server on http://localhost:${4000}`));
