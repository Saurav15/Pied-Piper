const Developer = require("../models/developerModel")

const getDevelopers = async (req,res) => {
    try {
        const developers = await Developer.find();
        res.status(200).json(developers);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal server Error"});
    }
}

module.exports = {
    getDevelopers
}