const { Router } = require("express");
const { check } = require("express-validator");
const route = Router()

const { login, register } = require("../controllers/auth.controllers");
const validateFields = require("../middlewares/validateFields");

route.post('/login', [
    validateFields
],login)

route.post('/register', [
    validateFields
],register)

module.exports = route;