const express = require('express')
const {createTache, getTaches} = require('../controllers/TachesController')
const router = express.Router({mergeParams: true})

router.post('/create_tache',createTache);
router.get('/get_all', getTaches)

module.exports = router;