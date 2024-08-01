const express = require('express');
const app = express();
const port = 3000

app.get('/',(req,res) => {
    console.log(process.env.MONGODB_URI)
    res.send('Hello World')
    
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})