let express =  require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');
let passport = require('passport');

let orderController = require('../controllers/order');

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
router.get('/', orderController.displayOrderList);

/*POST Route for processing the Add Order Page */
router.post('/add', orderController.processAddPage);

/*POST Request - Update the database with data from the Edit Order Page*/
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), orderController.processEditPage);

/*GET Request - Perform the delete Order Action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), orderController.performDelete);

module.exports = router;