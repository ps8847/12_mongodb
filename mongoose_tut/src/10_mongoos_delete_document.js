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

// delete the documents
// deleteDocument = async() => {
//     try {
//         const result = await Playlist.deleteOne({ _id: "6315daae86c17539f7244611" });
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }

// }

const deleteDocument = async() => {
    try {
        const result = await Playlist.findByIdAndDelete({ _id: "6317330d7c4fbb3571bead7b" });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

deleteDocument();