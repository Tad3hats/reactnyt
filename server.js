const express = require('express');
const app = express();
const mongoose = require('mongoose');
const model = require('./models/articles');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost:27017/nyt');



app.post('/save', function(req, res) {
    let article = req.body;
    ///
    console.log(article);
    res.send(article);
});









app.listen(3000, function(){
    console.log("Listening on port 3000");
}) 