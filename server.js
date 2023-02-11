/* Section 1: Importing modules and setting up important constants */
const express = require('express');
const app = express();
const ip="192.168.129.110";
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 3000;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const home=require('./routes/home');
const login=require('./routes/login');
const register=require('./routes/register');
const main= require('./routes/main');
/* Section 2: Initialization */

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(session({
	secret: 'Our little secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

/* Section 3: Routes */
app.use('/', home);
app.use('/login', login);
app.use('/register', register);
app.use('/main', main);
app.listen(port, function () {
	console.log("Server started on port " +ip+":"+ port);
});