const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});


/**
 * gets roster data from ctrroster collection
 * @returns Roster Data in form of a list of Documents in Collection
 */
async function get_roster_data(){
    const data = await db.collection('ctrroster').orderBy("Name").get();
    if (data.empty){
        return -1
      }
      else return data
  }

  /**
   * Gets data from Firestore and renders the list.jade page with roster
   * @param {*} req HTTP Request 
   * @param {*} res HTTP Response
   */
function display_list(req, res){
    const ctrroster = []
    get_roster_data().then(function(result){
        result.forEach(doc => {
        ctrroster.push(doc)
        //console.log(ctrroster)
    })
    res.render('list', {title: 'List - Cloud Technical Roster', roster: ctrroster})
})}

async function add_fave(req, res){
    // let fave = {
    //     "Name": req.body.name,
    //     "LDAP": req.body.ldap,
    //     "Year Start": Number(req.body.year),
    //     "P. Org": req.body.text3,
    //     "P. Role": req.body.text4,
    //     "Cohort": req.body.cohort,
    //     "Cohort Manager": req.body.select,
    //     "MOMA Link": req.body.moma_link,
    //     "MOMA Image": req.body.moma_image,
    //     "Email": req.body.email,
    //     "Email w/ Comma": req.body.email,
    //     "Start Date": req.body.start_date,
    //     "Favorited": "yes"
    //   }
    //   await db.collection('user').doc('test user').add(fave)
    console.log("Added to favorites");
}

module.exports = {get_roster_data, display_list, add_fave}