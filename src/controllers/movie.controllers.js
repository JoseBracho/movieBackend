
const createComments = (req, res) => {
    const id = req.id
    res.send(id)
}

const readComments = (req, res) => {
    const id = req.id
}

const updateComments = (req, res) => {
    const id = req.id
}

const deleteComments = (req, res) => {
    const id = req.id
}

module.exports = {
    createComments,
    readComments,
    updateComments,
    deleteComments
}