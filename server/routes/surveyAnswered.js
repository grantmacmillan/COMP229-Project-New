let express =  require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');
let passport = require('passport');

let surveyAnsweredController = require('../controllers/surveyAnswered');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/*GET ORDER LIST -- READ */
router.get('/', surveyAnsweredController.displaySurveyAnsweredList);

/*POST Route for processing the Add Order Page */
router.post('/add', surveyAnsweredController.processSurveyAnsweredAddPage);

/*POST Request - Update the database with data from the Edit Order Page*/
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyAnsweredController.processSurveyAnsweredEditPage);

/*GET Request - Perform the delete Order Action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyAnsweredController.performDelete);

module.exports = router;