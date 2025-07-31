const {Tache, Project} = require('../models')

const createTache = async (req, res) => {
    try{
        const projectId = req.params.projectId
        const {titre, statut} = req.body;

        const project = await Project.findByPk(projectId)
        if (!project) {
            return res.statut(404).json({message:"Projet non trouvé"})
        }
        if(!titre || titre === ""){
            return res.status(400).json({message : "Le titre est requis !!"})
        }
        const tache = await Tache.create({titre, statut, project_id: project.id});
        res.status(201).json(project)

    } catch (error){
        res.status(500).json({message : "Erreur Serveur!", error: error.message})
    }
}

module.exports = {createTache};