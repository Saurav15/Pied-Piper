const express = require("express")
const router = express.Router()
const {getDevelopers} = require('../controllers/developerController');

router.get("/developers", getDevelopers);


module.exports = router;
