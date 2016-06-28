/**
 * Created by lih on 6/24/2016.
 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const openIdStrategy = require('passport-openid').Strategy;
const users = require('../users');

passport.use(new LocalStrategy(
    function (username, password, done) {
        users.findOne({username: username}, function (err, user) {
            if (err) {return done(err); }
            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            if(user.password !== password) {
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        })
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    users.findById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;
