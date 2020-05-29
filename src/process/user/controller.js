const services = require("./services");
const messageUtils = require ("../../ultils/MessageUltils");

function UserController() {

    // get list user
    const listUser = function (request, response ) {
        services.findAll()
            .then( (result) => {
                response.json(messageUtils.buidResponseMessage(2000, "Thành công !", result));
            })
            .catch( (error) => {
                console.error(error); 
                response.json(messageUtils.buidResponseMessage(2001, "Thao tác thất bại!", error));
            });
    };

    // get user by id
    const user = function (request, response ) {
        services.findUserById(request.param.id)
            .then( (result) => {      
                response.json(messageUtils.buidResponseMessage(2000, "Thành công !", result));
            })
            .catch( (error) => {
                console.error(error); 
                response.json(messageUtils.buidResponseMessage(2001, "Thao tác thất bại!", error));
            });
    };

    // add user
    const addUser = function (request, response) {
        services.addUser(request.body)
            .then( (result) => { 
                response.json(messageUtils.buidResponseMessage(2000, "Thành công !", result));
            })
            .catch( (error) => {
                console.error(error); 
                response.json(messageUtils.buidResponseMessage(2001, "Thao tác thất bại!", error));
            });
    };

    // delete user by id
    const deleteUser = function (request, response) {
        services.deleteUserById(response.param.id)
            .then( (result) => {    
                response.json(messageUtils.buidResponseMessage(2000, "Thành công !", result));
            })
            .catch( (error) => {
                console.error(error); 
                response.json(messageUtils.buidResponseMessage(2001, "Thao tác thất bại!", error));
            });
    };

    // update user by id
    const updateUserById = function (request, response) {
        services.updateUserById (request, response)
            .then( (result) => {     
                response.json(messageUtils.buidResponseMessage(2000, "Thành công !", result));
            })
            .catch( (error) => {
                console.error(error); 
                response.json(messageUtils.buidResponseMessage(2001, "Thao tác thất bại!", error));
            });
    };


    // khai báo tổng
    return {
        listUser : listUser ,
        user     : user ,
        addUser  : addUser ,
        deleteUser : deleteUser ,
        updateUserById : updateUserById 
    };
};

module.exports = UserController();