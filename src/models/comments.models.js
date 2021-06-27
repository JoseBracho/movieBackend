const mongoose = require("mongoose");

const {Schema, model} = mongoose

const commentsSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
})

module.exports = model("comment", commentsSchema)