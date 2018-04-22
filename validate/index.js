/*
 * © 2018 Tal Globus. All Rights Reserved.
 */

const Validator = require('jsonschema').Validator;
let validator = new Validator();

let validate = null;

const CLIENT_NEW = {
	"id": "/ClientNew",
	"type": "object",
	"properties": {
		"name": {
			"type": "object",
			"properties": {
				"first": {"type": "string"},
				"last": {"type": "string"}
			}
		},
		"photo": {"type": "string"},
		"telephone": {"type": "string"}
	}
};

const CLIENT_PING = {
	"id": "/ClientPing",
	"type": "object",
	"properties": {
		"userid": {"type": "string"},
		"location": {
			"type": "object",
			"properties": {
				"latitude": {"type": "number"},
				"longitude": {"type": "number"}
			}
		}
	}
};

const MERCHANT_TRANSACTION = {
	"id": "/MerchantTransaction",
	"type": "object",
	"properties": {
		"merchant": {
			"type": "object",
			"properties": {
				"userid": {"type": "string"}
			}
		},
		"client": {
			"type": "object",
			"properties": {
				"userid": {"type": "string"},
				"photo": {"type": "string"}
			}
		},
		"transaction": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"itemid": {"type": "string"},
					"name": {"type": "string"},
					"price": {"type": "number"}
				}
			}
		}
	}
};

const MERCHANT_NEARBY = {
	"id": "/MerchantNearby",
	"type": "object",
	"properties": {
		"userid": {"type": "string"}
	}
};

const MERCHANT_PING = {
	"id": "/MerchantPing",
	"type": "object",
	"properties": {
		"userid": {"type": "string"},
		"location": {
			"type": "object",
			"properties": {
				"latitude": {"type": "number"},
				"longitude": {"type": "number"}
			}
		}
	}
};

// validator.addSchema(CLIENT_NEW, CLIENT_NEW.id);
// validator.addSchema(CLIENT_PING, CLIENT_PING.id);
// validator.addSchema(MERCHANT_TRANSACTION, MERCHANT_TRANSACTION.id);
// validator.addSchema(MERCHANT_NEARBY, MERCHANT_NEARBY.id);
// validator.addSchema(MERCHANT_PING, MERCHANT_PING.id);

module.exports = {
	validate: validator.validate,
	SCHEMAS: {
		CLIENT_NEW, CLIENT_PING, MERCHANT_TRANSACTION, MERCHANT_NEARBY, MERCHANT_PING
	}
};