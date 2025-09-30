const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect('mongodb+srv://devansh7595:HncLfebywPz996wp@cluster0.coekr69.mongodb.net/').then(()=>{
        console.log('Database Connected');
    })
}

module.exports = connectToDB

// Note - in the db.js we write a code of connecting our server to db 
// I followed the complete folder structure that follows at industry level