// import the express package
const express = require('express')

// called it
const server = express()

// program the server 
server.get('/',(req,res)=>{
    res.send('This is Home page')
})

server.get('/about',(req,res)=>{
    res.send('This is About page')
})

// create port 
server.listen(3000,()=>{
    console.log('Server is runing on port 3000');
})