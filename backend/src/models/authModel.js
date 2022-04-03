import mongoose from "mongoose";
import jwt  from "jsonwebtoken";

const authSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be required!"],
    unique: [true, "Enter unique email."],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    minLength: [7, "Password must be greater then 6 Characters."],
    trim: true,
  },
  fullName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  designation: {
    type: String,
    trim: true,
    enum: ["Team Manager", "Engineer Manager"],
    default: "Team Manager",
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "SUPERUSER"],
    default: "USER",
  },
  stack: {
    type: String,
    enum: ["node", "react", "reactNative", "flutter", "devops"],
  },
});

authSchema.methods.toJSON = function () {
  const authObject = this.toObject();
  delete authObject.password;
  return authObject;
};

authSchema.methods.generateToken = async function (next) {
  try {
    const token = jwt.sign(
      { _id: this._id.toString(), role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return token;
  } catch (error) {
    return error;
  }
};
const Auth = mongoose.model("Auth", authSchema);

export default Auth;
