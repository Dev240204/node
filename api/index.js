const express = require('express');
const bcrypt = require('bcrypt')
const connect = require('./connect')
const Users = require('../models/Users')
const app = express();
const port = 3001

connect()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.post("/user", async (req,res) => {
    try{
        const user = req.body
        const response = await Users.findOne({username: user.username})
        if(response){
            res.send('User already exists')
        }
        const hashpassword = await bcrypt.hash(user.password,10)
        const newUser = await Users.create({
            name: user.username,
            email: user.email,
            password: hashpassword
        })
        res.status(200).send(`User created successfully ${newUser.name}`)
    }catch(err){
        console.log("Error: ",err)
    }
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})

module.exports = app;