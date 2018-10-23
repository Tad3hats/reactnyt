const express = require('express');
const app = express();
const mongoose = require('mongoose');
const model = require('./models/articles');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose.connect('mongodb://localhost:27017/nyt');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.post('/save', function(req, res) {
    let article = req.body;
    ///
    console.log(article);
    res.send(article);
});

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/nyt'
)

app.listen(PORT, function(){
    console.log("Listening on port 3000");
}) 