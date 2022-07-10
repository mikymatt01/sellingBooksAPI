var express = require('express');
var app = express();

const bookRoute = require('./routes/book');
const userRoute = require('./routes/user');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

var port = process.env.PORT;
const uri = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use('/images', express.static('images'));
app.use('/book', bookRoute);
app.use('/user', userRoute);

mongoose.connect(uri)
.catch(error => console.log(error))
.then(_ => console.log("successfully connect"));

app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
