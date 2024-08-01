const express = require('express');
const app = express();
const port = 3000
const connect = require('./connect')
const Users = require('../models/Users')

connect()

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})