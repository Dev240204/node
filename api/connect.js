const mongoose = require('mongoose')

const connect = async () => {
    try{
        console.log(process.env.MONGODB_URI)
        mongoose.connect(process.env.MONGODB_URI)
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