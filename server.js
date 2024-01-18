const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const routall = require('./routs/index')

const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/QQQ')
const db = mongoose.connection

db.on('error', () => {
    console.log("Database connection failed");
})

db.on('open', () => {
    console.log("Connect Extablished");
})

// app.use('/', (req, res) => {
//     res.send("Your server is live")
// })

app.use('/user', routall)

app.listen(3000)