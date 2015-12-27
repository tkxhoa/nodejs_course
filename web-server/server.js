var express = require('express');
var app = express();
var PORT = '80';

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });
var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log(req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

// /about
// About Us
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
}); 

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});