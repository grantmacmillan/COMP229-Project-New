let express = require('express');
const { removeData } = require('jquery');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let questionController = require('../controllers/question');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next(); //Allows to go to the next event
}

/*GET Route for the Book List page - READ operation*/
router.get('/', questionController.displayQuestionList);

/*POST Route for processing the Add page - Create operation*/
router.post('/add', passport.authenticate('jwt', {session: false}), questionController.processedAddPage);

/*POST Route for processing the Edit page - Update operation*/
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), questionController.processEditPage);

/*GET to perform Deletion - Delete operation*/
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), questionController.performDelete);

module.exports = router;


