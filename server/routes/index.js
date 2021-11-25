let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/*POST Route for processing the Login page*/
router.post('/login',indexController.processLoginPage); 

/*POST Route for processing the Register page*/
router.post('/register',indexController.processRegisterPage); 

/*POST Route for processing the Edit page*/
router.post('/user-edit', indexController.processEditPage);

/*GET to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
