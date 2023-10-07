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

const createDocument = async() => {
    try {
        const jsPlaylist = new Playlist({
            name: "Javascript",
            ctype: "front End",
            videos: 150,
            author: "prince sharma",
            active: true
        });

        const mongoPlaylist = new Playlist({
            name: "MongoDbJs",
            ctype: "database",
            videos: 10,
            author: "prince sharma",
            active: true
        });

        const mongoosPlaylist = new Playlist({
            name: "MongooseJs",
            ctype: "database",
            videos: 5,
            author: "prince sharma",
            active: true
        });

        const expressPlaylist = new Playlist({
            name: "ExpressJs",
            ctype: "bac end",
            videos: 15,
            author: "prince sharma",
            active: true
        });

        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosPlaylist, expressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

createDocument();