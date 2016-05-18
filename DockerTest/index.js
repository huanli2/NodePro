/**
 * Created by Huanli on 12/11/2015.
 */

var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();

var PORT = 9002;

var secrete;

app.use(function (req, res, next) {
    console.log('Hello world!')
    next()
})

app.use(function __helloWorld(req, res, next) { // <-- '__helloWorld' will be printed now 
    next()
})

app.get('/token', function (req, res) {
    res.send(res, setToken(req.query, secrete));
});

(function init() {
    var args = process.argv;
    secrete = args[2];
	
	var path = require('path');
    var filepath = path.join(__dirname, './docs/routes.gernerated.txt');
    var print = require('express-print-routes')(app, filepath);
})();


function setToken(tokenObj, secret) {
    return jwt.sign(tokenObj, secret);
}

app.listen(PORT);

console.log("Running on http://localhost:" + PORT);
