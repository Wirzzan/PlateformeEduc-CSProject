const express = require('express')
const {createTache} = require('../controllers/TachesController')
const router = express.Router({mergeParams: true})

router.post('/create_tache',createTache);
//router

module.exports = router;