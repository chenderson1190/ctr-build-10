var express = require('express');
var router = express.Router();

// Fire Store access Code
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

async function getData(){
  const data = await db.collection('ctrroster').orderBy("Name").get();
  if (data.empty){
      return -1
    }
    else return data
}
const ctrlist = []
getData().then(function(result){
  console.log(result);
  result.forEach(doc => {
    console.log(doc.get('P Org'))
    ctrlist.push(doc)
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  // TODO: Make List Controller
  console.log(ctrlist[1].get('Name'))
  res.render('list', {roster: ctrlist});
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
