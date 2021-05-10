const express = require('express')
const User = require('../models/user')
const router=express.Router()
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt =require('jsonwebtoken')

router.post('/',async(req,res,next)=>{
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        passwordHash:bcryptjs.hashSync(req.body.password,10),
        street:req.body.street,
        apartment:req.body.apartment,
        zip:req.body.zip,
        city:req.body.city,
        country:req.body.country,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin
    })
    user = await user.save().then(resUser =>{
        if(!resUser){
            return res.status(500).send('user cannot be added')
        }else {
            return res.send(resUser)
        }
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
    
})

//get all users
router.get('/',async (req,res)=>{
    const userList= await User.find().select('-passwordHash')
    if(!userList){
        res.status(500).json({success:false})
    }
    else{
        res.status(200).json({
            message:'users fetched succesfully',
            users:userList
        })
    }
});
//get User by id
router.get('/:id',async (req,res)=>{
    const userById= await User.findById(req.params.id)
    if(!userById){
        res.status(500).json({success:false,message:'not user with this id'})
    }
    else{
        res.status(200).json({
            message:'products fetched succesfully',
            user:userById
        })
    }
});

//delete a product
router.delete('/:id',(req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user){
            return res.status(200).json({
                success: true,
                message:'the user removed'
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'the user not removed'
            })
        }
    }).catch(err =>{
        return res.status(400).json({
            success: false,
            error:err
        })
    })
})
router.post('/login', (req,res)=>{
     User.findOne({email: req.body.email}).then(user=>{
        if(!user){
            return res.status(400).send('the user not found')
        }
            if(user && bcryptjs.compareSync(req.body.password,user.passwordHash)){
                const token=jwt.sign()
                res.status(200).send('user authenticated ')
            }else{
                return res.status(400).send('password is wrong')
            }
        
    }).catch(err =>{
        return res.status(400).json({
            error: err
        })
    })
    
})

module.exports= router