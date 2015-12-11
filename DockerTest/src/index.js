/**
 * Created by Huanli on 12/11/2015.
 */

var express = require('express');

var PORT = 9002;

var app = express();

app.get('/', function (req, res) {
    res.send('hello world\n');
});

app.listen(PORT);

console.log("Running on httP://localhost:" + PORT);
