import jwt from "jsonwebtoken";

const Role = {
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
};

/* authenticate if its admin or not */

const adminAuth = (req, res, next) => {
  const user = req.user;
  const decoded =jwt.verify(req.token, process.env.JWT_SECRET);

  if (Role[user.role] && Role[decoded.role] && user.role === decoded.role) {
    next();
    return;
  }
  return res
    .status(401)
    .json({ error: "You are not authorized to access this." });
};

export default adminAuth;
