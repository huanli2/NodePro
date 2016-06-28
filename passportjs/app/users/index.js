/**
 * Created by lih on 6/24/2016.
 */
var user = (function () {

    function user(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return user;
})();

var users = [new user(1, 'franky', 'luos'), new user(2, 'gail', 'huanli')];

module.exports = {
    findOne: find("username"),
    findById: find("id")
};

function find(property) {
    return function findUser(user, callback) {
        var result = false;
        users.forEach(function (u) {
            if (u[property] == user[property]) {
                return result = u;
            }
        });

        return callback(null, result);
    }
}

