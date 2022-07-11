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

favoriteSchema.index({ utente: 1, libro: 1 },{unique: true}); // schema level

module.exports =  mongoose.model('Favorite', favoriteSchema);