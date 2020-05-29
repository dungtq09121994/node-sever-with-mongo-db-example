const Account = require('./model');
const messageUtils = require ("../../ultils/MessageUltils");

function AccountController() {
    const register = function (req, res) {
        //console.log("---", req.body.userName);
        Account.findOne({userName: req.body.userName}, (err, account) => {
            if(account == null) {  // check da ton tai user chua
                 new Account(req.body).save()
                                        .then(result => { res.json(messageUtils.buidResponseMessage(2000, "Thao tác thành công", result))})
                                        .catch(err => { res.json(messageUtils.buidResponseMessage(2002, "Tạo tài khoản thất bại"), err)})

            } else {
                res.json(messageUtils.buidResponseMessage(2002, "User đã tồn tại", null));
            }
        })
    };

    
    return {
        register : register 
    }
}

module.exports = AccountController();