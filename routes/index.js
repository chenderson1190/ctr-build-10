var express = require('express');
var router = express.Router();

/* GET sign in page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET HOME page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});


router.get('/list', function(req, res, next) {
  // TODO: Make List Controller
  res.render('list', {title: 'Hello World!'});
});

router.get('/favorites', function(req, res, next) {
  // TODO: Make Favorites Page
  res.render('error');
});

router.get('/updateInformation', function(req, res, next) {
  //TODO: Make Info Update Form
  res.render('error');
});
module.exports = router;
