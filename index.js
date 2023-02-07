import express from "express";
import { create } from 'express-handlebars';
import Auth from './routes/auth.js'
import Products from './routes/products.js'
// midlewares
const app = express();
const hbs = create({ extname:'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(Auth)
app.use(Products)

// routes

app.get('/',(req,res)=>{
    res.render("index",{
      title:"Boom Shop || Me"
    })
})




//port

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(PORT + " port started...");
});
