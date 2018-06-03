const router = require('express').Router();
const controllers = require('./controllers');

router.route('/api/pokemon').get(controllers.getPokemon);
router.route('/api/details').get(controllers.getOnePokemon)
module.exports = router;
