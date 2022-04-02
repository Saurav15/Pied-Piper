const jwt = require("jsonwebtoken");

const Role = {
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
};

//hard delete ans soft delete

const adminAuth = (req, res, next) => {
  const user = req.user;
  const decoded = jwt.verify(req.token, process.env.JWT_SECRET);

  if (Role[user.role] && Role[decoded.role] && user.role === decoded.role) {
    next();
    return;
  }
  return res
    .status(401)
    .json({ error: "You are not authorized to access this." });
};

module.exports = adminAuth;
