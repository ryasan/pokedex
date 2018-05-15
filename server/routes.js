const router = require('express').Router();
const controllers = require('./controllers');

router.route('/api/pokemon').get(controllers.getPokemon);

module.exports = router;
