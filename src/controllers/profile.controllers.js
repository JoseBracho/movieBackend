const User = require("../models/user.models");

const readProfile = async (req, res) => {
    const id = req.id;
    try{
        let user = await User.findById(id).select("-_id");
        res.json({
            done: true,
            user
        })
    }catch(err){
        return res.status(400).json({
            done: false,
            error: "The information could not be accessed",
        });
    }
}
const updatePofile = async (req, res) => {
    const body = req.body;
    const id = req.id;
    try{
        await User.findByIdAndUpdate(id, body)
        res.json({
            done:true,
            msg: "Profile updated successfully!"
        })
    }catch(err){
        return res.status(400).json({
            done: false,
            error: "The username or password is incorrect",
          });
    }
}

const deleteProfile = async (req, res) => {
    const id = req.id;
    try{
        await User.findByIdAndDelete(id);
        res.json({
            done: true,
            msg: "Profile delete successfully!"
        })
    }catch(err){
        return res.status(400).json({
            done: false,
            error: "Profile could not be deleted",
        });
    }
}

module.exports = {
    readProfile,
    updatePofile,
    deleteProfile
}