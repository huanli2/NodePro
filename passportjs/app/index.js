var express = require('express');
var app = express();
var passport = require('./passport');

var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var bodyParser = require('body-parser');


var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redis = require('redis').createClient();

redis.on('connect', function() {
    console.log('connected');
});

redis.on('error', function() {
    console.log('error');
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({limit: '10mb'}));

app.use(session({
    store: new redisStore({host: 'localhost', port:6379, client: redis}),
    //cookie:{maxAge: 60 * 1000},
    secret: "ryeuryue",
    saveUninitialized: false,
    resave: false
}));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(flash());

app.get('/', function (req, res) {
    console.log(req.session);
    if (req.session.isVisit) {
        ++req.session.isVisit;
        res.send(req.session.isVisit + ' times to visit this page');
    } else {
        req.session.isVisit = 1;
        res.send("welcome to visit this page");
        console.log(req.session);
    }
});

app.post('/login',
    function (req, res, next) {
        passport.authenticate('local', function(err, user, msg){
            res.cookie('isVisit', 1,  {maxAge: 6 * 1000});
            res.send(user);
        }) (req, res, next);
    });

app.get('/user', function (req, res) {
    console.log(req.session);
    res.send("get user success");
});



module.exports = app;
