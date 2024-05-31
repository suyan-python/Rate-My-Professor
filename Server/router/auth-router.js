const express = require("express");
const authControllers = require('../controllers/auth-controller')

const router = express.Router();

router.route("/").get(authControllers.home)
router.route('/register').post(authControllers.register)

module.exports = router;