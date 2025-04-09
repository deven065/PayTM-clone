const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/paytm');

// Create a schema for the Users
const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minlength : 3,
        maxlength : 30
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    },  
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    }
});

// Create a mdoel from the Schema
const User = mongoose.model("User", userSchema);

module.exports = {
    User
};