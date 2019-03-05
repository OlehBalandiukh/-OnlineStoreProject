const express = require('express');
const session = require('express-session');

let app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'dsghjs44hj1510dsdgh',
    resave: false,
    saveUninitialized: false
}));

app.listen(3000, ()=>{
    console.log('Up and running on port 3000');
});