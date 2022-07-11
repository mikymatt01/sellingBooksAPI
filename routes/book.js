var router = require('express').Router(); 
const Book = require('../models/book');
const fs = require('fs');
const auth = require("../middleware/auth");
var uuid = require('uuid');

//create book
router.post("/", auth, function(req, res){ 

    var data = req.body["immagine"]['contenuto'].replace(/^data:image\/\w+;base64,/, "");
    var buf = Buffer.from(data, 'base64');
    var name = process.env.MEDIA + uuid.v4() + '.jpg';
    try {
        while(fs.existsSync(name))name = process.env.MEDIA + uuid.v4() + '.jpg';
        fs.writeFile(name, buf,() => 
            console.log('download finito!')
        );
      } catch(err) {
        console.error(err)
      }
    req.body['immagine'] = process.env.URL + name;
    req.body['venditore'] = req.user._id
    var book = new Book(
        req.body
    );
    book.save(function(err, doc) {
        if(err){
            res.send({"success":false,"message":err.message});
        }
        else{ 
            res.send({"success":true,"message":""});
        }
    });
})

//get books by seller
router.get("/", auth, async function(req, res){
    const books = await Book.find({venditore:req.user._id});
    res.send(books);
})

//get book by ISBN
router.get("/:id",async function(req, res){
    const book = await Book.find({isbn:req.params['id']});
    res.send(book);
})

//delete book by id
router.get("/delete/:id", auth, function(req, res){
    
    Book.deleteOne({ _id: req.params['id'], venditore: req.user._id})
    .then(function(){
        res.send({"success":true, "message":""});// Success
    }).catch(function(error){
        res.send({"success":false, "message":error.message}); // Failure
    });;
})

module.exports = router;