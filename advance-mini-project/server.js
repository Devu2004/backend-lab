const express = require('express')
const mongoose = require('./src/db/db')
const noteModel = require('./src/model/db.model')
const server = express();

server.use(express.json())

server.post('/notes',async (req,res)=>{
    const {title,content} = req.body
    await noteModel.create({
        title,content
    })
    res.json({
        message:"Note created Succefully!"
    })
})

server.get('/notes',  async (req,res)=>{
    const notes = await noteModel.find()

    res.json({
        message:'Notes fetched Successfully!',
        notes
    })
})

server.delete('/notes/:id',async (req,res)=>{
    const index = req.params.id

    await noteModel.findOneAndDelete({
        _id: index
    })

    res.json({
        message:'Note deleted Successfully!'
    })
})

server.patch('/notes/:id',async (req,res)=>{
    const noteId = req.params.id
    const {title} = req.body

    await noteModel.findByIdAndUpdate({
        _id:noteId
    },{
        title:title
    })

    res.json({
        message:'Note updated succefully!'
    })
})
mongoose()
// But we call the database here
server.listen(3000,()=>{
    console.log('Server is runing on port 3000');
    
})

