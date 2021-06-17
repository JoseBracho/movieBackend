const login = (req, res) => {
    res.send("Hello, Login")
}

const register = (req, res) => {
    res.send("Hello, Register")
}

module.exports = {
    login,
    register
}