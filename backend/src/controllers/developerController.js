const Developer = require("../models/developerModel")

// read data
const getDevelopers = async (req,res) => {
    try {
        const developers = await Developer.find();
        res.status(200).json(developers);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal server Error"});
    }
}

// Update data

// Delete Data

// Create Data 


module.exports = {
    getDevelopers
}