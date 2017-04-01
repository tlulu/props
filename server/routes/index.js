var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/', function (req, res) {
  res.send('Hello World!');
})

// get user information
router.get('/user/:id', function(req, res) {
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

// add new user
router.post('/users', function(req, res) {
  models.User.create({
  	first_name: req.body.first_name,
  	last_name: req.body.last_name,
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});

// get all payments
router.get('/payments', function(req, res) {
  models.Payment.findAll({}).then(function(payments) {
    res.json(payments);
  });
});

// add new payments
router.post('/payments', function(req, res) {
  models.Payment.create({
  	recipient: req.body.recipient_id,
  	amount: req.body.amount,
    state: "PENDING",
    memo: req.body.memo
  }).then(function(payment) {
    res.json(payment);
  });
});

module.exports = router;