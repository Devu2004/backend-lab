const express = require('express')
const mongoose = require('./src/db/db')
const server = express();

mongoose()
// But we call the database here
server.listen(3000,()=>{
    console.log('Server is runing on port 3000');
    
})

