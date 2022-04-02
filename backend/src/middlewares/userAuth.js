const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel");

const userAuth = async (req, res, next) => {
  try {
    if (!req.cookies && !req.cookies.jwttoken) {
      return res.status(400).json({ error: "can not authenticate user" });
    }
    const token = req.cookies.jwttoken;
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Auth.findOne(
      { _id: decode._id, role: decode.role },
      { password: 0 }
    );
    if (!user) {
      throw new Error("");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).send({ error: "please authenticate." });
  }
};

module.exports = userAuth;
