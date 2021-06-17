const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
router.use(express.urlencoded({extended : true}));


router.get('/', homeController.home);
router.post('/add-to-list', homeController.add_to_tasks);
router.get('/select-task', homeController.select_delete);
router.get('/delete-tasks', homeController.delete_tasks);

module.exports = router;