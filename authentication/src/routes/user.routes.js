const express = require('express')
const userModel = require('../models/db.model')
const router = express.Router()
router.use(express.json())
router.post('/register',async(req,res)=>{
    const {user , password} = req.body

    const users = await userModel.create({
        user,password
    })
    res.status(201).json({
message:'user Registered!',
users
    })
    
})

router.post('/login',async (req,res)=>{
    const {user , password } = req.body

    const userExist = await userModel.findOne({
        user : user
    })

    if(!userExist){
        return res.status(401).json({
            message:'User is Invailid!'
        })
    }
    const passwordVailid = password == userExist.password
    if(!passwordVailid){
        return res.status(401).json({
            message:'Enter vailid password'
        })
    }

    res.status(201).json({
            message:'HEy welcome back!'
        })
})

module.exports = router
