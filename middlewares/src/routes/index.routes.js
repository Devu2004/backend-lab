const express = require('express')

const router = express.Router();

// router level middleware
router.use((req,res,next)=>{
    console.log('this is router level middleware');
    next();
})
router.get('/',(req,res)=>{
    res.json({
        message: 'Welcome in middlewares'
    })
})

// error handling middelware 
// ....

module.exports = router;