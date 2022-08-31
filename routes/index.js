var express = require('express');
var router = express.Router();
var rosterController = require('../controllers/rosterController')


const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

/**
 * 
 * @returns Roster Data in form of a list of Documents in Collection
 */
async function getRosterData(){
  const data = await db.collection('ctrroster').orderBy("Name").get();
  if (data.empty){
      return -1
    }
    else return data
}



//console.log(ctrlist)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const ctrroster = []
getRosterData().then(function(result){
  result.forEach(doc => {
    ctrroster.push(doc)
  })
})

router.get('/list', function(req, res, next) {
  res.render('list', {roster: ctrroster})
})

router.get('/favorites', function(req, res, next) {
  // TODO: Make Favorites Page
  res.render('error');
});

router.get('/updateInformation', function(req, res, next) {
  //TODO: Make Info Update Form
  res.render('error');
});
module.exports = router;
