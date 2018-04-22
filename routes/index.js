let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.header('Access-Control-Allow-Origin', '*');
	res.render('index', { title: 'Zapify' });
});

module.exports = router;
