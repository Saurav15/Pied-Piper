const express = require("express")
const { createUser,readProject,deleteProject} = require("../controllers/projectController")
const router = express.Router()

router.post("/project",createUser);
router.get("/project",readProject)
router.delete("/project/:id",deleteProject)



module.exports = router