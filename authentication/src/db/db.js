const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
        console.log('Connected to db');
    }).catch((err)=>{
        console.log('Not Connected',err);
    })
}

module.exports = connectToDB