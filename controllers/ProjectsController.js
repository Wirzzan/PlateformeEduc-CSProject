const {Project} = require('../models')

const createProject = async (req, res) => {
    try{
        const {nom, description} = req.body;
        if(!nom || nom === ""){
            return res.status(400).json({message : "Le nom du projet est requis"})
        }
        const project = await Project.create({nom, description});
        res.status(201).json(project)

    } catch (error){
        res.status(500).json({message : "Erreur Serveur!", error: error.message})
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur!", error: error.message });
    }
}

const getProjectById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const project = await Project.findByPk(id)

        if (project) {
            res.json(project)
        }else{
            res.status(404).send("Erreur : Ce formateur est introuvable")
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur!", error: error.message });
    }
}

const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const {nom, description} = req.body;
        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({message: 'Projet non trouvé'})
        }
        await project.update({nom, description})
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur!", error: error.message });
    }
}
    
const deleteProject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({ message: "Erreur : Projet introuvable" });
        }
        await project.destroy();
        res.status(204).send;
  } catch (error) {
        res.status(500).json({ message: "Erreur Serveur!", error: error.message });
  }
}



module.exports = {createProject, 
    getAllProjects, 
    getProjectById, 
    deleteProject, updateProject};

