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

    const login = function (req, res) {
        Account.findOne({userName: req.body.userName}).exec( function(err, account){
            if(err) {
                return res.json(messageUtils.buidResponseMessage(2002, "Tạo tài khoản thất bại"), err);
            } else if (!account) {
                return res.json(messageUtils.buidResponseMessage(2003, "tài khoản hoặc mật khẩu không chính xác"), "");
            }
            if(account.password == req.body.password) {
                req.session.account =   account;
                res.json({
                    user: user,
                    "login": "success"
                })
            } else {
                return res.json(messageUtils.buidResponseMessage(2003, "tài khoản hoặc mật khẩu không chính xác"), "");
            }
        })
    }
    return {
        register : register ,
        login : login
    }
}

module.exports = AccountController();