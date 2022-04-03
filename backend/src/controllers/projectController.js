const Project = require("../models/projectModel");
const Developer = require("../models/developerModel");
const mongoose = require("mongoose");

const createUser = async (req, res) => {
  const { selectedCandidates } = req.body;

  try {
    const searchExpression = selectedCandidates.map((email) => {
      return { email };
    });
    const developers = await Developer.find(
      { $or: searchExpression },
      { _id: 1, email: 1, skills: 1, projectStatus: 1, assignedProjects: 1 }
    );
    if (developers.length < 1) {
      return res.status(404).json({
        error: "No Existing Developer found, please enter valid emails",
      });
    }
    console.log(developers);
    const ids = developers.map((developer) => developer._id);
    const newProject = new Project({
      ...req.body,
      projectManager: req.user._id,
      selectedCandidates: ids,
    });
    console.log(newProject);
    await newProject.save();
    const updatedDevelopers = developers.map((developer) => {
      developer.projectStatus = "assigned";
      developer.assignedProjects.push(newProject.projectName);
      return developer;
    });
    console.log(updatedDevelopers);
    for (const developer of updatedDevelopers) {
      await developer.save();
    }

    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const readProject = async (req, res) => {
  try {
    const getProject = await Project.find({ projectManager: req.user._id });
    return res.status(200).json(getProject);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const deleteProject = await Project.findOneAndDelete({
      _id: req.params.id,
      projectManager: req.user._id,
    });
    res.status(200).json(deleteProject);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
module.exports = { createUser, readProject, deleteProject };
