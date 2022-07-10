var router = require('express').Router(); 
const Book = require('../models/book');
const fs = require('fs');

//create book
router.post("/", function(req, res){ 

    var data = req.body["immagine"]['contenuto'].replace(/^data:image\/\w+;base64,/, "");
    var buf = Buffer.from(data, 'base64');
    var name = process.env.MEDIA + req.body["immagine"]['nome'] + '.jpg';

    fs.writeFile(name, buf,() => 
        console.log('download finito!')
    );

    req.body['immagine'] = process.env.URL + name;
    var book = new Book(req.body);
    book.save(function(err, doc) {
        if(err){
            res.send({"success":false,"message":err.message});
        }
        else{ 
            res.send({"success":true,"message":""});
        }
    });
})

//get book by ISBN
router.get("/:id",async function(req, res){
    const book = await Book.find({isbn:req.params['id']});
    res.send(book);
})

//delete book by ISBN
router.get("/delete/:id", function(req, res){
    
    Book.deleteOne({ isbn: req.params['id']})
    .then(function(){
        res.send({"success":true, "message":""});// Success
    }).catch(function(error){
        res.send({"success":false, "message":error.message}); // Failure
    });;
})

module.exports = router;