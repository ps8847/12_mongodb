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


//logical operators in mongodb
const getDocument = async() => {

    try {

        // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { author: "prince sharma" }] }).select({ name: 5 });
        // const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "prince sharma" }] }).select({ name: 5 });
        // const result = await Playlist.find({ $not: [{ ctype: "Back End" }, { author: "prince sharma" }] }).select({ name: 5 });
        const result = await Playlist.find({ $nor: [{ ctype: "Back End" }, { author: "prince sharma" }] }).select({ name: 5 });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();