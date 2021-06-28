const { Router } = require("express")

const route = Router();

const {
    createComments, 
    readComments, 
    updateComments,
    deleteComments} = require("../controllers/comments.controllers");
const validateToken = require("../middlewares/validateToken");

route.post("/comment/new", validateToken, createComments);
route.get("/comment/list", validateToken, readComments);
route.get("/comment/update", validateToken, updateComments);
route.delete("/comment/delete", validateToken, deleteComments);

module.exports = route;