const { Router } = require('express');
const tasksController = require('../controllers/tasksController');

const router = Router();

router.post('/tasks', tasksController.createTask);
router.get('/tasks', tasksController.findAll);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
