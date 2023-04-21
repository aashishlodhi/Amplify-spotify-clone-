var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/search.ejs', function(req, res, next){
//  res.render('search.ejs');
// });

module.exports = router;
