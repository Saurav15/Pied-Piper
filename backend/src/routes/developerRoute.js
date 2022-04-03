const express = require("express");
const router = express.Router();
const {
  getDevelopers,
  createDeveloper,
  deleteDeveloper,
  addDeveloperProfileData,
} = require("../controllers/developerController");
const authAdmin = require("../middlewares/adminAuth");
const userAuth = require("../middlewares/userAuth");

router.get("/developers", userAuth, getDevelopers);

router.post("/developer", userAuth, authAdmin, createDeveloper);

router.patch("/developer/:id", userAuth, authAdmin, addDeveloperProfileData);

router.delete("/developer/:id", userAuth, authAdmin, deleteDeveloper);

module.exports = router;
