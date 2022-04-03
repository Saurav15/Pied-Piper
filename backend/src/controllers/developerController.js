const Developer = require("../models/developerModel")

// read data
const getDevelopers = async (req, res) => {
    try {
        const developers = await Developer.find();
        res.status(200).json(developers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server Error" });
    }
}
// Create Data 
const createDeveloper = async (req, res) => {
    const developer = new Developer(req.body);
    try {
        await developer.save();
        res.status(200).send(developer);
    } catch (e) {
        res.status(400).send(e.message);
    }
}
// Update data
const updateDeveloper = async (req, res) => {
    const skill = req.body.skill;
    delete req.body.skill;
    // console.log(req.body)
    try {
        const developer = await Developer.findOne({_id:req.params.id, isDeleted: false}, 
            {...req.body, })
        console.log(developer)
        if (!developer) {
            return res.status(400).send();
        }
        developer.save();
        return res.send(developer);
    } catch (e) {
        res.status(400).send(e.message)
    }
}
// Delete Data
const deleteDeveloper = async (req, res) => { 
    const id = req.params.id
    try {
        const developer = await Developer.findOneAndUpdate({ _id: id },{isDeleted: true});
        if (!developer) {
            return res.status(404).send();
        }
        await developer.save();
        res.status(200).send(developer);
    } catch (e) {
        res.status(400).send(e.message);
    }
}
module.exports = {
    getDevelopers,
    updateDeveloper,
    deleteDeveloper,
    createDeveloper,
}