const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/PrinceDbnewValidation", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log("connection successful...")).catch((err) => console.log(err));



// DOCUMENT SCHEMA CREATION
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ctype: String,

    //own validation    >> if videos value was added as negative 
    videos: {
        type: Number,
        // validate(value) {
        //     if (value < 0) {
        //         throw new Error("video cant be negative");
        //     }
        // }

        validate: {
            validator: function(value) {
                return value.length < 0
            },
            message: "video cant be negative"
        }
    },
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