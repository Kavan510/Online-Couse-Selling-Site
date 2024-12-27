const mongoose = require('mongoose')
const ObjectId=mongoose.ObjectId;

const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, unique: true },
    password: String
});





const Usermodel= mongoose.model('users',User);

module.exports = {
    Usermodel:Usermodel,
}