const Project = require("../models/projectModel");
const Developer = require("../models/developerModel");

const createUser = async(req,res) =>{
    const  { projectName,tentativeStartingDate,duration,selectedCandidates} = req.body
    console.log(req.body)
  
    try {
        const searchExpression = selectedCandidates.map((email) => {return {email}})
        let ids = await Developer.find({$or : searchExpression},{_id : 1})
        ids = ids.map(idObj => idObj._id)
        const newProject = new Project({...req.body,projectManager: "624848f0417cbfeee5f905ce", selectedCandidates : ids})
        await newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(500).send(error)
    }
}

const readProject = async(req,res) => {
    const getProject = await Project.find({projectManager: "624848f0417cbfeee5f905ce"})
    res.status(200).json(getProject)
}

const deleteProject = async(req,res) => {
    try {
        const deleteProject = await Project.findOneAndDelete({_id:req.params.id,projectManager: "624848f0417cbfeee5f905ce"})
        res.status(200).json(deleteProject)
    } catch (error) {
        return res.status(500).json({error:"Something went wrong"})
    }
  
}
module.exports = {createUser,readProject,deleteProject}