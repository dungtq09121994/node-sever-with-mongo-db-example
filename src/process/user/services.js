const user = require("./model");
function UserService() {
    return {
        findAll : () => user.find(),
        findUserById : (id) => user.findById(id),
        addUser: (data) => new user(data).save(),
        deleteUserById: id => user.findByIdAndRemove(id),
        updateUserById: (id,data) => user.findByIdAndUpdate(id, data)
    }
};

module.exports = UserService();