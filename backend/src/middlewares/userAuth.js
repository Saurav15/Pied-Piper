import jwt from "jsonwebtoken";
import Auth from "../models/authModel.js";

/* verify if its valid user */

const userAuth = async (req, res, next) => {
  try {
    const recievedToken = req.body.headers["Authorization"]
    const token = recievedToken.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Auth.findOne(
      { _id: decoded._id, role: decoded.role },
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

export default userAuth;
