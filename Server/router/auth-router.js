const express = require("express");
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware.js");

const router = express.Router();

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
