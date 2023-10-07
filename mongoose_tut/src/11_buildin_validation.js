const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PrinceDbnewValidation", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful...")).catch((err) => console.log(err));

// DOCUMENT SCHEMA CREATION
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        // lowercase: true
        // uppercase: true
        trim: true,
        minlength: 2,
        minlength: [2, "minimum 2 letters are required"],
        maxlength: 30
    },
    ctype: {
        type: String,
        enum: ["frontend", "backend", "database"]
    },
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// COLLECTION CREATION
const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async() => {
    try {
        const expressPlaylist = new Playlist({
            name: "      ExpressJs    tutorial      ",
            ctype: "back end",
            videos: 5,
            author: "prince sharma",
            active: true
        });

        const result = await Playlist.insertMany([expressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();