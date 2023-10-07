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


//method 1
/*
updateDocument = async() => {
    try {
        const result = await Playlist.updateOne({ _id: "6315daae86c17539f724460f" }, {
            $set: {
                name: "JavaScript"
            }
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
*/

// method 2

updateDocument = async() => {
    try {
        const result = await Playlist.findByIdAndUpdate({ _id: "6315daae86c17539f724460f" }, {
            $set: {
                name: "Java Script"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

updateDocument();