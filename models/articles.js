const mongoose = require('mongoose');


var articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    headline: String,
    web_url: String,
  
    created: { 
        type: Date,
        default: Date.now
    }
});


var Article = mongoose.model('Article', articleSchema);


module.exports = Article;