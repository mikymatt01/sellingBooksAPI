var router = require('express').Router();
const User = require("../models/user");
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

router.post("/register", function(req, res){
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.hash_password = undefined;
        return res.send(user);
      }
    });
});

router.post("/login", function(req, res){
    User.findOne({
        email: req.body.email
      }, function(err, user) {
        console.log(user);
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        console.log(user.comparePassword(req.body.password));
        return res.send({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
      });
});

module.exports = router;