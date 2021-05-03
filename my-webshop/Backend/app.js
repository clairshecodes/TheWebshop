const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs');
app.use(cors())
app.options('*',cors())

//To handle HTTP POST requests(middlewares)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('tiny'))

//models
const Post = require('./models/post');
const Product = require('./models/product')
const Category = require('./models/category')
const User = require('./models/user')

//routers
const productsRouter=require('./routers/product')
const categoryRouter = require('./routers/category')
const userRouter = require('./routers/user')

//mongoDB connection string
const mongoDBuri = "mongodb+srv://backendprojectdtu:Backend1234@cluster0.t5ddn.mongodb.net/ESHOP?retryWrites=true&w=majority";

mongoose.connect(mongoDBuri, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
       console.error(err);
    else
       console.log("Connected to the mongodb"); 
  });


app.use('/api/products',productsRouter)
app.use('/api/categories' , categoryRouter)
app.use('/api/users',userRouter)


app.use((req,res,next)=>{
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');

       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers',  "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})



app.post('/api/posts',(req,res,next)=>{
    const post= new Post({
        title:req.body.title,
        content : req.body.content
    })
    post.save().then(resault =>{
        res.status(201).json({
            message:'post added sucessfully from res',
            postId:resault._id
        })
    }).catch(err =>{
        res.status(500).json({
            error:err,
            success:false
        })
        console.log(err)
    })
    
})

app.get('/api/users',(req,res)=>{
    const user={
        name:'Habib',
        family:'ali'
    }
    res.send(user)
})

app.get('/api/posts',(req,res,next)=>{
    Post.find().then((documents)=>{
        return res.status(200).json({
            message:'post fetched succesfully'
            ,posts:documents})
            })
});


app.delete('/api/posts:id',(req,res,next)=>{
    Post.deleteOne({_id:req.params.id}).then(resault =>{
        res.status(200).json({message:'post deleted'})
    })
})
module.exports = app;