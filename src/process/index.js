const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const session = require('express-session');
// connect db 
const conn = require("../database/DbConnection");
const MongoStore = require('connect-mongo')(session);


// confifg sever
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(session({
    secret  : 'work hard',
    resave : true,
    saveUninitialized : false,
    store : new MongoStore({
        mongooseConnection: conn
    }) 
}));



// import router
const user = require("./user");
const login = require('./login')

app.use("/api/user", user);
app.use("/api/account", login);



app.use("/", (req, res) => {
    res.send("<h1> Node sever started <h1/>")
})

module.exports = app;



