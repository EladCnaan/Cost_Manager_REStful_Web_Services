const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    birthday: String,
    martialStatus: String
});
// creating a constructor function that represents the users
const User = mongoose.model('users', UsersSchema);

module.exports = User;
