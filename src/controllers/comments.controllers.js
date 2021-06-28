const Comments = require("../models/comments.models");

const createComments = async (req, res) => {
    const id = req.id
    const body = req.body
    try{
        const comment = new Comments({...body, userID: id});
        const commentDB = await comment.save();
        res.status(201).json({
            done: true,
            commentDB 
        })
    }catch(err){
        res.status(400).json({
            done:false,
            msg: "It is not possible to comment on the post",
            err
        })
    }
}

const readComments = async (req, res) => {
    try{
        const commentsDB = await Comments.find()
                                                .populate("userID",["name"])
                                                .exec();
        const comments = commentsDB.reverse()
        res.json({
            done: true,
            comments
        })
    }catch(err){
        res.status(400).json({
            done:false,
            msg: "Comments cannot be displayed",
            err
        })
    }
}

const updateComments = async (req, res) => {
    const id = req.query.id
    const body = req.body
    try{
        await Comments.findByIdAndUpdate(id, body)
        res.json({
            done: true,
            msg: "Updated successfully!"
        })
    }catch(err){
        res.status(400).json({
            done: false,
            msg: "Could not update!"
        })        
    }   
}

const deleteComments = async (req, res) => {
    const id = req.query.id
    try{
        await Comments.findByIdAndDelete(id)
        res.json({
            done: true,
            msg: "Delete successfully!"
        })
    }catch(err){
        res.status(400).json({
            done: false,
            msg: "Could not delete!"
        })        
    }
}

module.exports = {
    createComments,
    readComments,
    updateComments,
    deleteComments
}