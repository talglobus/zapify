let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	// res.header('Access-Control-Allow-Origin', '*');
	// res.render('index', { title: 'Zapify' });
	res.header('Access-Control-Allow-Origin', '*');
	res.sendFile('../public/index.html')
});

module.exports = router;
