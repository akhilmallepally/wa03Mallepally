var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  val = Math.floor(Math.random() * Math.floor(10));
  if (req.query.val){
    val = req.query.val
  }
  res.send(`Math.round function applied to ${val} is ${Math.round(val)}`);
});

module.exports = router;
