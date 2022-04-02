const Auth = require("../models/authModel");
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter valid credentials" });
    }

    const existingUser = await Auth.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (existingUser && password === existingUser.password) {
      const token = await existingUser.generateToken();
      res.cookie("jwttoken", token, {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 86400,
      });
      return res.status(200).send({ msg: "Login successfull", token });
    }
    return res.status(401).send({ error: "Email or Password is invalid" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

module.exports = {
  login,
};
