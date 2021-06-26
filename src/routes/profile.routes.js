const {Router} = require("express");

const route = Router();

const { 
    readProfile,
    updatePofile,
    deleteProfile } = require("../controllers/profile.controllers");
const validateToken = require("../middlewares/validateToken")


route.get("/",[
    validateToken
], readProfile)

route.put("/update",[
    validateToken
], updatePofile)    

route.delete("/delete",[
    validateToken
], deleteProfile)    

module.exports = route;