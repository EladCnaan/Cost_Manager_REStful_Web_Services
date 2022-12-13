const express = require('express');
const router = express.Router();
const User = require('../models/users'); // We will take information from an existing path, transfer it to the User variable
const Cost = require('../models/costs');
const validator = require('../public/javascripts/inputValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// The first requirement in the assignment - add cost item to a specific user
router.post('/add_cost_item', function (req, res, next) {
  /*
   * After checking if the client has not entered data and the input is empty,
   * we will return an error message and an appropriate status
   */
  if(!req.body.description ||
      !req.body.category ||
      !req.body.sum ||
      !req.body.month ||
      !req.body.year ||
      !req.body.userID) {
    res.status(400).send('Some of the fields are empty');
    return;
  }
  // if the month input is not valid
  if(!validator.isMonthValid(req.body.month)) {
    res.status(400).send('Invalid month input');
    return;
  }
  // if the year input is not valid
  if(!validator.isYearValid(req.body.year)) {
    res.status(400).send('Invalid year input');
    return;
  }
  // if the sum input is not valid
  if(!validator.isSumValid(req.body.sum)) {
    res.status(400).send('Invalid sum input');
    return;
  }
  // if user id input is not valid
  if(!validator.isUserIDValid(req.body.userID)) {
    res.status(400).send('Invalid user ID input');
    return;
  }
  // check if the user exists
  User.findOne({id: req.body.userID}).then(user => {
    // if the user doesn't exist
    if(!user) {
      res.status(404).send('The user was not found');
      return;
    }
    // create a new cost item for this user
    Cost.create(req.body).then(costItem => {
      res.status(200).send(costItem); // Send the cost item itself
    }).catch(next);
  }).catch(next);
});

// The second requirement in the assignment
// We will show all the items of a specific user
router.post('/detailed_report', function (req, res, next) {
  // if some fields are missing or not provided
  if(!req.body.month ||
      !req.body.year ||
      !req.body.userID) {
    res.status(400).send('Some of the fields are empty');
    return;
  }
  // if month input is not valid
  if(!validator.isMonthValid(req.body.month)) {
    res.status(400).send('Invalid month input');
    return;
  }
  // if year input is not valid
  if(!validator.isYearValid(req.body.year)) {
    res.status(400).send('Invalid year input');
    return;
  }
  // if user id input is not valid
  if(!validator.isUserIDValid(req.body.userID)) {
    res.status(400).send('Invalid user ID input');
    return;
  }
  // check if the user exists
  User.findOne({id: req.body.userID}).then(user => {
    // if the user doesn't exist
    if(!user) {
      res.status(404).send('The user was not found');
      return;
    }
    // find all the cost items for this user for specific month and year
    Cost.find({month: req.body.month, year: req.body.year, userID: req.body.userID}).then(costItems => {
      // If there are no items for this user, we will return an appropriate
      // status and send an error message
      if(costItems.length === 0) {
        res.status(404).send("Cost items for this user were not found");
      }
      else {
        res.status(200).send(costItems); // costItems = Send the user items, from the array
      }
    }).catch(next);
  }).catch(next);
});

module.exports = router;
