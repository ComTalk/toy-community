const express = require('express');
const router = express.Router();

const user = require('../data/user.json');

router.get('/', function(req, res, next) {
  res.json({
    user: user
  });
});

module.exports = router;