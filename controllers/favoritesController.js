const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

async function get_roster_data(username){
    const data = await db.collection('users').doc(username).get('favorites');
    //const display_data = await db.collection('ctrroster').get
    if (!data.exists){
        return -1
      }
      else {
        return data
      }
  }
async function get_favorites(username){
    console.log(username)
    const data = await db.collection('users').doc('test user')
    //const doc = await data.get()
    //const display_data = await db.collection('ctrroster').get
    if (data.empty){
        console.log('not found')
        return -1
      }
      else {
        //console.log(data.get('favorites'))
        return data
      }
}
function render_favorites(req, res){
    console.log('auth token:', req.cookies['AuthToken'], "username:", req.cookies['Username'])
    get_favorites(req.cookies['Username']).then(result => {
        console.log(result.get('favorites'))
    })
    if(req.cookies['AuthToken']) {
        res.render('favorites', { roster: ['placeholder']});
    }
    else {
        res.render('error')
    }
}

module.exports = {render_favorites}