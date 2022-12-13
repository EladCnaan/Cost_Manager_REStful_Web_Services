const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostsSchema = new Schema({
    description: String,
    category: String,
    sum: Number,
    month: Number,
    year: Number,
    userID: Number
});
// creating a constructor function that represents the costs of a specific user
const Cost = mongoose.model('costs', CostsSchema);

module.exports = Cost
