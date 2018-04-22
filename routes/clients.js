let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	"use strict";
	res.render('index', { title: 'Clients Endpoint' });
});

/* GET home page. */
router.post('/new', function(req, res, next) {
	"use strict";
	res.send("test");
});

router.post('/ping', (req, res, next) => {
	"use strict";
	res.send("test");
});

module.exports = router;
