const express = require('express'); //importa express
const router = express.Router(); //importa o router
const taskController = require('../controllers/task'); //importa o script task

router.use('/',taskController);

module.exports = router;

