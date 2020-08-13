var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body);
  res.status(200).json({ username: req.body.username, password: req.body.password });
});

module.exports = router;
