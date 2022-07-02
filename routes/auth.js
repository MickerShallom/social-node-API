const router = require('express').Router()
const SignupUser = require('../Services/controllers/Auth/Signup')
const LoginUser = require('../Services/controllers/Auth/Login')
const Logout = require('../Services/controllers/Auth/Logout')
const ChangePassword = require("../Services/controllers/Auth/ChangePassword")

const authRequired = require("../middleware/AuthRequired")

router.post('/signup', SignupUser)
router.post('/login', LoginUser)
router.get("/logout", authRequired, Logout)

router.put("/update_password", authRequired, ChangePassword)
module.exports = router