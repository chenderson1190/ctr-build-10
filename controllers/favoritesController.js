const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

async function get_favorites(username){
    const data = await db.collection('users').doc('test user').get()
    
    if (data.empty){
        console.log('not found')
        return -1
      }
      else {
        return data
      }
}
async function render_favorites(req, res){
        get_favorites(req.cookies['Username']).then(async result => {
            var favs = []
            const favs_list = []
            favs = Object.values(result.get('favorites'))
            favs.forEach(async item => {
                const data = await db.collection('ctrroster').doc(favs[0]).get().then(function(result){
                    favs_list.push(result)
                })
                if(req.cookies['AuthToken']) {
                    res.render('favorites', { title: 'Favorites - Cloud Technical Roster', roster: favs_list});
                }
                else {
                    res.render('nofavorites')
                }
            })
            
        })
    
}

module.exports = {render_favorites}