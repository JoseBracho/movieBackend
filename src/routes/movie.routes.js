const { Router } = require("express")

const route = Router();

const {
    createComments, 
    readComments, 
    updateComments,
    deleteComments} = require("../controllers/movie.controllers");
const validateToken = require("../middlewares/validateToken");

route.post("/comment/new", validateToken, createComments);
route.get("/comment/list", validateToken, readComments);
route.put("/comment/update", validateToken, updateComments);
route.delete("/comment/delete", validateToken, deleteComments);

module.exports = route;