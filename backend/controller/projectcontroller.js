import {Project} from "../models/projectschema.js";


export const createProject = async (req, res) => {
  try {
    const { title, color } = req.body;
    const newProject = new Project({ title, color });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
}

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
}


export default Project;