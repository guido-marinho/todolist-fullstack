const { Router } = require('express');
const tasksController = require('../controllers/tasksController');
const {
  validateTitle,
  validateStatus,
} = require('../middlewares/tasksMiddleware');

const router = Router();

router.post('/tasks', validateTitle, tasksController.createTask);
router.get('/tasks', tasksController.findAll);
router.put(
  '/tasks/:id',
  validateTitle,
  validateStatus,
  tasksController.updateTask
);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
