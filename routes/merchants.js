let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/input/:val', function(req, res, next) {
	if (req.params.val === "0") {
		console.log("Button is now not pressed");
	} else if (req.params.val === "1") {
		console.log("Button is now pressed");
	} else {
		// Invalid response
	}
	res.send('done');
});

module.exports = router;
