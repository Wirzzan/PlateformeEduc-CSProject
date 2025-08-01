const {Tache, Project} = require('../models')

const createTache = async (req, res) => {
    try{
        const projectId = req.params.projectId
        const {titre, statut} = req.body;

        const project = await Project.findByPk(projectId)
        if (!project) {
            return res.status(404).json({message:"Projet non trouvé"})
        }
        if(!titre || titre === ""){
            return res.status(400).json({message : "Le titre est requis !!"})
        }
        const tache = await Tache.create({titre, statut, project_id: project.id});
        res.status(201).json({
            ...tache.toJSON(),         // transforme l'objet Sequelize en objet brut
            projet_nom: project.nom    // ajoute le nom du projet
        });
    

    } catch (error){
        res.status(500).json({message : "Erreur Serveur!", error: error.message})
    }
}

const getTaches = async (req, res) => {
    try {
        const  projectId = req.params.projectId
        const project = await Project.findByPk(projectId)
        if (!project) {
            return res.status(404).json({message: 'Projet non trouvé'})
        }    
        const taches = await Tache.findAll({
            where: {project_id: projectId},
            attributes: { exclude: ['createdAt', 'updatedAt']
            }
        });
        res.status(200).json(taches)
        
    } catch (error) {
        res.status(500).json({message : "Erreur Serveur!", error: error.message})
    }
}

//const update

//const delete




module.exports = {createTache, getTaches};