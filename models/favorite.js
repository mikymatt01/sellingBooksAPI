const mongoose = require('mongoose');
Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    utente: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    libro: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
    pubblicato: {
        type:Date,
        default: Date.now
    }
});

module.exports =  mongoose.model('Favorite', favoriteSchema);