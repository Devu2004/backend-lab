const express = require('express')
const indexRoutes = require('./routes/index.routes')
const app = express()

// application level middelware
app.use((req,res,next)=>{
    console.log('This is default middleware');
    next()  
})

app.use('/',indexRoutes)


module.exports = app