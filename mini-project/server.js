// package imported
const express = require('express')

// object creation is done here
const server = express();

// middleware for reading the data that we get from frontend in req.body 
server.use(express.json())

// creating empty array for pushing notes data
let notes = []

// creating POST method for getting data from frontend
server.post('/notes',(req,res)=>{
    // push data in arr
    notes.push(req.body)
    // sending response in json format
    res.json({
        message:'Notes added succefully',
    })  
})

// now GET for sending data to frontend 
server.get('/notes',(req,res)=>{
    res.json(notes)
})

// now DELETE method for deletion 
server.delete('/notes/:index',(req,res)=>{
    // /:index colon says this is dynamic deletion from any index
    // req.params is used thats why because it is reponsible for sending an unique data like x and other plateform 
    const index = req.params.index;
    delete notes[index];
    res.json({
        message:'Note deleted Successfully'
    })
})

// now PATCH method for updating data dynamically
server.patch('/notes/:index',(req,res)=>{
    // this line is help to get index 
    const index = req.params.index;
    // this is object destructring of json to get description key
    const {description} = req.body
    // in this we update the description
    notes[index].description = description
    res.json({
        message:'Note updated!'
    })
})

// creating port 
server.listen(3000,()=>{
    console.log('Server is runnig on port 3000');
    
})

// i have test all of these with @postman.