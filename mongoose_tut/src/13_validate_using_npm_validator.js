// npm i validator




const mongoose = require("mongoose");
const validatorr = require("validator");

mongoose.connect("mongodb://localhost:27017/PrinceDbnewValidation", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log("connection successful...")).catch((err) => console.log(err));



// DOCUMENT SCHEMA CREATION
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ctype: String,


    videos: Number,
    author: String,

    //validator of npm

    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validatorr.isEmail(value)) {
                throw new Error("email is invalid");
            }
        }
    },
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