var express = require('express');
var router = express.Router();

// <<<<<<< Updated upstream
// =======
// // Fire Store access Code
// const Firestore = require('@google-cloud/firestore');

// const db = new Firestore({
//   projectId: 'ctr-build-10',
//   keyFilename: '/ctr-build-10-945db5e1aa0d.json',
// });

// const ctrroster = db.collection('ctrroster');
// const names = await ctrroster.where('Name', '!=', null).get();
// if (names.empty) {
//   console.log('No Matches found');
// }
// names.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });

// >>>>>>> Stashed changes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
