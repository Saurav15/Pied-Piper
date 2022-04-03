const express = require("express");
const { getDevelopers } = require("../controllers/developerController");
const userAuth = require("../middlewares/userAuth");
const adminAuth = require("../middlewares/adminAuth");

const router = express.Router();
router.post("/developers", userAuth, getDevelopers);

module.exports = router;
