const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ error: "Access denied Token Not Provided" });

  console.log("Token from auth", token);
  next();
};
module.exports = authMiddleware;
