"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var express = require('express');

var User = require('../models/user');

var router = express.Router();

var mongoose = require('mongoose');

var bcryptjs = require('bcryptjs');

var jwt = require('jsonwebtoken');

router.post('/', function _callee(req, res, next) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcryptjs.hashSync(req.body.password, 10),
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin
          });

          _readOnlyError("user");

          _context.next = 4;
          return regeneratorRuntime.awrap(user.save().then(function (resUser) {
            if (!resUser) {
              return res.status(500).send('user cannot be added');
            } else {
              return res.send(resUser);
            }
          })["catch"](function (err) {
            res.status(500).json({
              error: err
            });
          })["catch"](function (err) {
            res.status(500).json({
              error: err
            });
          }));

        case 4:
          user = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //get all users

router.get('/', function _callee2(req, res) {
  var userList;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.find().select('-passwordHash'));

        case 2:
          userList = _context2.sent;

          if (!userList) {
            res.status(500).json({
              success: false
            });
          } else {
            res.status(200).json({
              message: 'users fetched succesfully',
              users: userList
            });
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //get User by id

router.get('/:id', function _callee3(req, res) {
  var userById;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findById(req.params.id));

        case 2:
          userById = _context3.sent;

          if (!userById) {
            res.status(500).json({
              success: false,
              message: 'not user with this id'
            });
          } else {
            res.status(200).json({
              message: 'products fetched succesfully',
              user: userById
            });
          }

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //delete a product

router["delete"]('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id).then(function (user) {
    if (user) {
      return res.status(200).json({
        success: true,
        message: 'the user removed'
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'the user not removed'
      });
    }
  })["catch"](function (err) {
    return res.status(400).json({
      success: false,
      error: err
    });
  });
});
router.post('/login', function (req, res) {
  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (!user) {
      return res.status(400).send('the user not found');
    }

    if (user && bcryptjs.compareSync(req.body.password, user.passwordHash)) {
      var token = jwt.sign();
      res.status(200).send('user authenticated ');
    } else {
      return res.status(400).send('password is wrong');
    }
  })["catch"](function (err) {
    return res.status(400).json({
      error: err
    });
  });
});
module.exports = router;