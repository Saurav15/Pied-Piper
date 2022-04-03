import { Router } from "express"
import { createUser, readProject, deleteProject } from "../controllers/projectController.js"
import adminAuth from "../middlewares/adminAuth.js"
import userAuth from "../middlewares/userAuth.js"
const router = Router()

router.post("/project",userAuth,adminAuth,createUser);
router.get("/project",userAuth,adminAuth,readProject)
router.delete("/project/:id",userAuth,adminAuth,deleteProject)




export default router