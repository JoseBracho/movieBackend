const { Router } = require("express");

const route = Router()

const { 
    show,
    searchMovie,
    description } = require("../controllers/movie.controllers");

route.get("/show", show)
route.get("/search", searchMovie)
route.get("/movieID", description)

module.exports = route;