const mongoose = require('mongoose')

const connect = async () => {
    try{
        mongoose.connect("mongodb+srv://vercel-admin-user:jhy7GanzvqGoLEQJ@cluster0.ht0thet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch((err) => {
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = connect