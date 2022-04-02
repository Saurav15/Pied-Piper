const Auth = require("../models/authModel")
const jwt = require("jsonwebtoken")
const login = async (req, res) => {
    const { email, password } = req.body;
   
    try {
        const existingUser = await Auth.findOne({ email })
       
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" })
        }

        if (!email || !password) {
            return res.status(400).json({ error: "Please enter valid credentials" })
        }
        
        if (existingUser && password === existingUser.password) {
            
            const token = await existingUser.generateToken()
            res.cookie("jwttoken", token, {
                secure: process.env.NODE_ENV === "production",
                httpOnly: true,
                maxAge: 86400,
            })
            res.status(200).send({ msg: "Login successfull" , token})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" })
    }

    
}


module.exports = {
    login
}