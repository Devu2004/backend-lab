// package imported
const express = require('express')

// object creation is done here
const server = express();

// middleware for reading the data that we get from frontend in req.body 
server.use(express.json())

// creating empty array for pushing notes data
let notes = []

// creating post method for getting data from frontend
server.post('/notes',(req,res)=>{
    // push data in arr
    notes.push(req.body)
    // sending response in json format
    res.json({
        message:'Notes added succefully',
        notes:notes
    })
    
})

// creating port 
server.listen(3000,()=>{
    console.log('Server is runnig on port 3000');
    
})