var express = require('express');
var router = express.Router();


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

// adding to commit

//console.log(ctrlist)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res, next){
  console.log(req.body.username)
  try {
    const user = await db.collection('users').doc(req.body.username)
    if (user.empty) {
        return -1
    }
    else 
    console.log('success')
    res.redirect('list')
} catch(err) {
    console.log(err)
}
})


const ctrroster = []
getRosterData().then(function(result){
  result.forEach(doc => {
    ctrroster.push(doc)
  })
})

/* GET sign in page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign In' });
});

/* GET HOME page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET form page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/form', function(req, res) {
  console.log(req.body)
  let data = {
    "name": req.body.name,
    "year": req.body.year,
    "P. Org": req.body.text3,
    "P. Role": req.body.text4,
    "Cohort": req.body.cohort,
    "Cohort Manager": req.body.select,
    "MOMA Link": req.body.moma_link,
    "MOMA Image": req.body.moma_image,
    "Email": req.body.email
  }
  console.log(data.Email)
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













