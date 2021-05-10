"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var morgan = require('morgan');

var cors = require('cors');

var fs = require('fs');

app.use(cors());
app.options('*', cors()); //To handle HTTP POST requests(middlewares)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('tiny')); //models

var Post = require('./models/post');

var Product = require('./models/product');

var Category = require('./models/category');

var User = require('./models/user'); //routers


var productsRouter = require('./routers/product');

var categoryRouter = require('./routers/category');

var userRouter = require('./routers/user'); //mongoDB connection string


var mongoDBuri = "mongodb+srv://backendprojectdtu:Backend1234@cluster0.t5ddn.mongodb.net/ESHOP?retryWrites=true&w=majority";
mongoose.connect(mongoDBuri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) console.error(err);else console.log("Connected to the mongodb");
});
app.use('/api/products', productsRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); // Request methods you wish to allow

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow

  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});
app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(function (resault) {
    res.status(201).json({
      message: 'post added sucessfully from res',
      postId: resault._id
    });
  })["catch"](function (err) {
    res.status(500).json({
      error: err,
      success: false
    });
    console.log(err);
  });
});
app.get('/api/users', function (req, res) {
  var user = {
    name: 'Habib',
    family: 'ali'
  };
  res.send(user);
});
app.get('/api/posts', function (req, res, next) {
  Post.find().then(function (documents) {
    return res.status(200).json({
      message: 'post fetched succesfully',
      posts: documents
    });
  });
});
app["delete"]('/api/posts:id', function (req, res, next) {
  Post.deleteOne({
    _id: req.params.id
  }).then(function (resault) {
    res.status(200).json({
      message: 'post deleted'
    });
  });
});
module.exports = app;