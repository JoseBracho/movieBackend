const { movies, search, descriptionMovie } = require("../helpers/apiMOD")

const show = async (req, res) => {
    const showMovie = await movies();
    res.json(showMovie)
}

const searchMovie = async (req, res) => {
    const title = req.query.title
    const movieDB = await search(title)
    res.json(movieDB)
}

const description = async (req, res) => {
    const movieID = req.query.id
    const movieDB = await descriptionMovie(movieID);
    res.json(movieDB);
}

module.exports = {
    show,
    searchMovie,
    description
}