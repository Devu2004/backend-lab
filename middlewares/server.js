const server = require('./src/app')
require('dotenv').config()


server.listen(process.env.PORT,()=>{
    console.log('server is running on port 3000');
})