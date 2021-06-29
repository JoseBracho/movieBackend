const { Router } = require("express");

const route = Router()

const { 
    show,
    searchMovie,
    description } = require("../controllers/movie.controllers");
const validateToken = require("../middlewares/validateToken");

route.get("/show", validateToken, show)
route.get("/search", validateToken, searchMovie)
route.get("/movieID", validateToken, description)

module.exports = route;