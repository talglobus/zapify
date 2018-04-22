let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	"use strict";
	res.render('index', { title: 'Merchants Endpoint' });
});

/* GET users listing. */
router.get('/input/:val', (req, res, next) => {
	if (req.params.val === "0") {
		console.log("Button is now not pressed");
	} else if (req.params.val === "1") {
		console.log("Button is now pressed");
	} else {
		// Invalid response
	}
	res.send('done');
});

router.post('/transaction', (req, res, next) => {
	"use strict";
	res.send("test");
});

router.post('/nearby', (req, res, next) => {
	"use strict";
	res.send("test");

});

router.post('/ping', (req, res, next) => {
	"use strict";
	res.send("test");
});

module.exports = router;
