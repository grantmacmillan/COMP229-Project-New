/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Routes of the user - index.js
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/*GET Route*/
router.get('/user-edit', indexController.displayUserList)

/*POST Route for processing the Login page*/
router.post('/login',indexController.processLoginPage); 

/*POST Route for processing the Register page*/
router.post('/register',indexController.processRegisterPage); 

/*POST Route for processing the Edit page*/
router.post('/user-edit/:id', indexController.processEditPage);

/*GET to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
