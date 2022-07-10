var router = require('express').Router();
const User = require("../models/user");
var jwt = require('jsonwebtoken');
const Favorite = require('../models/favorite');
const auth = require("../middleware/auth");

//get books by owner
router.get("/:id", auth, async function(req, res){
    const favorite = new Favorite({
        utente:req.user._id,
        libro:req.params["_id"]
    });

    favorite.save(function(err, doc) {
        if(err){
            res.send({"success":false,"message":err.message});
        }
        else{ 
            res.send({"success":true,"message":""});
        }
    });
})

//get saved books
router.get("/", auth, async function(req, res){
    const favorite = Favorite.find({
        utente:req.user._id
    });

    res.send(favorite);
})

module.exports = router;