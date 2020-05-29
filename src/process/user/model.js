const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        trim: true,
    },
    fullName :{
        type: String,
        required: true, // not null
        unique: true, // khong trung
        trim: true
    },
    phone :  {
        type: String,
        unique: true
    },
    sex : String,
    birthDay : {
        type: Date,
        default: Date.now
    },
    address : String


});


module.exports = mongoose.model("User", userSchema, "User");

