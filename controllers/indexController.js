const Firestore = require('@google-cloud/firestore');
const crypto = require('crypto')
const cookieParser = require('cookie-parser')

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex')
}
const authTokens = {}

function render_index(req, res){
    res.render('index', {title: 'Sign In'})
}

async function login(req, res, next){
    try {
      const user = await db.collection('users').doc(req.body.username)
      if (user) {
        const authToken = generateAuthToken();
        authTokens[authToken] = user;
        res.cookie('AuthToken', authToken)
        res.cookie('Username', req.body.username)
        res.redirect('home')
        return;
      }
      else 
        return -1
  } catch(err) {
      console.log(err)
  }
}

module.exports = {render_index, login}