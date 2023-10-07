const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/PrinceDbnew", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful...")).catch((err) => console.log(err));

// schema     >>> structure of document
// a mongoose schema defines he structure of the document,
// default values, validators, etc..


// DOCUMENT SCHEMA CREATION
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


// a mongoose model is a wrapper on the mongoose schema .
// a mongoose schema defines the structure of the document
// default values, validators, etc ., whearas a mongoose model 
// provides an interface to the database for creating,querying, updating, deleteing records. etc.


// COLLECTION CREATION
const Playlist = new mongoose.model("Playlist", playlistSchema);