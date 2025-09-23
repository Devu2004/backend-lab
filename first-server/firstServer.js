// in that line we import the module http
const http = require('http')

// in this we create a server and decide what to send in response
const server = http.createServer((req,res)=>{
    res.end('This is first server of backend')
})

// in this we created port where our server will run 
server.listen(3000,()=>{
    console.log('server is running on port 3000');
})

