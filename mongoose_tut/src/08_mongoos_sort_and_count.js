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
        // const result = await Playlist.find({ ctype: "Back End" }).count();
        // const result = await Playlist.find({ author: "prince sharma" }).select({ name: 1 }).sort("name : 1");
        const result = await Playlist.find({ author: "prince sharma" }).select({ name: 1 }).sort({ name: -1 });

        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();