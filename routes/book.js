var router = require('express').Router(); 
const Book = require('../models/book');

//create book
router.post("/", function(req, res){ 
    //aggiungere controlli all'input
    var book = new Book(req.body);
    book.save(
        function(err, doc) {
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