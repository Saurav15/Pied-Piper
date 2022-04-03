const express = require("express")
const router = express.Router()
const {getDevelopers,createDeveloper,updateDeveloper,deleteDeveloper} = require('../controllers/developerController');

router.get("/developers", getDevelopers);

router.post("/developer", createDeveloper);

router.patch("/developer/:id",updateDeveloper);

router.delete("/developer/:id", deleteDeveloper);


module.exports = router;