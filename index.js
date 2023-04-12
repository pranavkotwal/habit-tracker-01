// Importing Modules
const express = require('express')
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const moment = require('moment'); 
const mongoose = require('mongoose');
const db= require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const port = 8000


moment().format(); 

// sass setup .. css file will be created in dest folder
app.use(sassMiddleware({
  src: path.join(__dirname, './assets/sass'),
  dest: path.join(__dirname, './assets/css'),
  debug: false,
  outputStyle: 'compressed',
  prefix:  '/css' 
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

// static folder middleware
app.use(express.static(path.join(__dirname,'./assets')))
app.use(express.urlencoded({extended:false}));

// view setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// ejs layout set up
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// router > all the links would be routed to the router index file
app.use('/',require('./routers/index'))


app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
})