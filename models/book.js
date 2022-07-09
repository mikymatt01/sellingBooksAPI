const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: {
        type:String,
        required:true,
        unique : true,
        dropDups: true
    },
    titolo: {
        type:String,
        required:true
    },
    condizione: {
        type:Number,//1 to 4
        required:true
    },
    prezzo: {
        type:Number,
        required:true
    },
    venditore: {
        type:String,
        required:true
    },
    pubblicato: {
        type:Date,
        default: Date.now
    },
    numero: {
        type:String,
        required:true
    },
    whatsapp: {
        type:String,
        required:true
    },
    immagine: {
        type:String,
        required:true
    },
});

module.exports =  mongoose.model('Book', bookSchema);