const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/PrinceDbnew", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful...")).catch((err) => console.log(err));


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


const Playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert

// 1. method 1
/* 
const reactPlaylist = new Playlist({
    name: "React Js",
    ctype: "Front End",
    videos: 100,
    author: "prince sharma",
    active: true
});

reactPlaylist.save();
*/

// 2. method 2

const createDocument = async() => {
    try {
        const reactPlaylist = new Playlist({
            name: "Node Js",
            ctype: "Back End",
            videos: 100,
            author: "prince sharma",
            active: true
        });

        const result = await reactPlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

createDocument();