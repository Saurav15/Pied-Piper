import { Router } from "express";
import { getDevelopers, createDeveloper, deleteDeveloper, addDeveloperProfileData } from "../controllers/developerController.js";
import authAdmin from "../middlewares/adminAuth.js";
import userAuth from "../middlewares/userAuth.js";
const router = Router();

router.post("/developers", userAuth, getDevelopers);
router.get("/developers", userAuth, getDevelopers);

router.post("/developer", userAuth, authAdmin, createDeveloper);

router.patch("/developer/:id", userAuth, authAdmin, addDeveloperProfileData);

router.delete("/developer/:id", userAuth, authAdmin, deleteDeveloper);

export default router;
