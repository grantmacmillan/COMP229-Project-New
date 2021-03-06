/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Routes of the questions - question.js
*/
let express = require('express');
let router = express.Router();
let passport = require('passport');
let questionController = require('../controllers/question');

/*GET Route for the Book List page - READ operation*/
router.get('/', questionController.displayQuestionList);

/*POST Route for processing the Add page - Create operation*/
router.post('/add', passport.authenticate('jwt', {session: false}), questionController.processedAddPage);

/*POST Route for processing the Edit page - Update operation*/
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), questionController.processEditPage);

/*GET to perform Deletion - Delete operation*/
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), questionController.performDelete);

module.exports = router;


