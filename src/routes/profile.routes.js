const { check } = require("express-validator")
const {Router} = require("express");

const route = Router();

const { nameUpdate } = require("../helpers/validateUsers");
const validateToken = require("../middlewares/validateToken");
const validatefields = require("../middlewares/validateFields");
const { 
    readProfile,
    updatePofile,
    deleteProfile} = require("../controllers/profile.controllers");
    
route.get("/",[
    validateToken
], readProfile)

route.put("/update",[
    check("name").custom(nameUpdate),
    validateToken,
    validatefields
], updatePofile)    

route.delete("/delete",[
    validateToken
], deleteProfile)    

module.exports = route;