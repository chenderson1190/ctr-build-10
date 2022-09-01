const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

function render_index(req, res){
    res.render('index', {title: 'Sign in'})
}

async function login(req, res, next){
    try {
      const user = await db.collection('users').doc(req.body.username)
      if (user.empty) {
          return -1
      }
      else 
        res.redirect('home')
  } catch(err) {
      console.log(err)
  }
}

module.exports = {render_index, login}