let express =  require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');
let passport = require('passport');

let updatedOrderController = require('../controllers/updatedOrder');

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
router.get('/', updatedOrderController.displayUpdatedOrderList);

/*POST Route for processing the Add Order Page */
router.post('/add', updatedOrderController.processUpdatedOrderAddPage);

/*POST Request - Update the database with data from the Edit Order Page*/
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), updatedOrderController.processUpdatedOrderEditPage);

/*GET Request - Perform the delete Order Action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), updatedOrderController.performDelete);

module.exports = router;