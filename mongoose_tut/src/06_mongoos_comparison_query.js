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


// operators in mongodb
const getDocument = async() => {

    try {
        // const result = await Playlist.find({ videos: 100 });
        // const result = await Playlist.find({ videos: { $gt: 10 } }).select({ name: 5 });
        // const result = await Playlist.find({ videos: { $gte: 10 } }).select({ name: 5 });
        // const result = await Playlist.find({ videos: { $lt: 10 } }).select({ name: 5 });
        // const result = await Playlist.find({ videos: { $lte: 10 } }).select({ name: 5 });
        // const result = await Playlist.find({ ctype: { $in: ["Back End", "database"] } }).select({ name: 5 });
        const result = await Playlist.find({ ctype: { $nin: ["Back End", "database"] } }).select({ name: 5 });

        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();