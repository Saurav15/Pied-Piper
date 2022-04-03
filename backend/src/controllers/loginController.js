import Auth from "../models/authModel.js";
const login = async (req, res) => {
  const { email, password } = req.body.values;

  /* check for valid credentials */
  
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter valid credentials" });
    }

    const existingUser = await Auth.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (existingUser && (password === existingUser.password)) {
      let token = await existingUser.generateToken();
      token = `Bearer ${token}`
      
      return res.status(200).json({existingUser,token});
      // return res.send('asdif')
    }
    return res.status(401).send({ error: "Email or Password is invalid" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export default login;
