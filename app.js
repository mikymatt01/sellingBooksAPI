var express = require('express');
var app = express();
const bookRoute = require('./routes/book');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var port = 3000;
const uri = "mongodb://127.0.0.1:27017/example?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0";

app.use(bodyParser.json());
app.use('/book', bookRoute);


mongoose.connect(uri, ()=>{
	console.log("connect DB!");
});

app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
