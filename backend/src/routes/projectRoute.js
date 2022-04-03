const express = require("express")
const { createUser,readProject,deleteProject} = require("../controllers/projectController")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")
const userAuth = require("../middlewares/userAuth")

router.post("/project",userAuth,adminAuth,createUser);
router.get("/project",userAuth,adminAuth,readProject)
router.delete("/project/:id",userAuth,adminAuth,deleteProject)




module.exports = router