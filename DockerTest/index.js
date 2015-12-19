/**
 * Created by Huanli on 12/11/2015.
 */

var express = require('express');
var jwt = require('jsonwebtoken');

var PORT = 9002;

var app = express();

var secrete;

(function init() {
    var args = process.argv;
    secrete = args[2];
})();

function setToken(tokenObj, secret) {
    return jwt.sign(tokenObj, secret);
}

app.get('/token', function (req, res) {
    res.send(res, setToken(req.query, secrete));
});

app.listen(PORT);

console.log("Running on http://localhost:" + PORT);
