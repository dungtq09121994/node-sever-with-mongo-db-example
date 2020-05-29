const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema ({
    userName : {
        type : String, 
        required : true,
        unique: true,
        trim: true,
        minlength : 2
    },
    password: {
        type : String,
        required: true,
        trim: true,
        minlength: 6
    },
    password_confirm : {
        type: String,
        required: true,
        trim : true,
        minlength : 6 
    } 
});

module.exports = mongoose.model("Account", accountSchema, "Account");