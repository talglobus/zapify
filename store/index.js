/*
 * © 2018 Tal Globus. All Rights Reserved.
 */

let MongoClient = require('mongodb').MongoClient;

let uri = "mongodb+srv://kay:zippass@cluster0.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});