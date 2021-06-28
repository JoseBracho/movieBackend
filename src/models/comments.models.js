const mongoose = require("mongoose");

const {Schema, model} = mongoose

const commentsSchema = new Schema({
    movieID:{
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
})

module.exports = model("comment", commentsSchema)