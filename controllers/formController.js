const Firestore = require('@google-cloud/firestore');

// Access Firestore Database
const db = new Firestore({
  projectId: 'ctr-build-10',
  keyFilename: './ctr-build-10-945db5e1aa0d.json',
});

function render_form(req, res){
    res.render('form', { title: 'Form - Cloud Technical Roster' })
}

async function add_data(req, res){
    let data = {
        "Name": req.body.name,
        "LDAP": req.body.ldap,
        "Year Start": Number(req.body.year),
        "P. Org": req.body.text3,
        "P. Role": req.body.text4,
        "Cohort": req.body.cohort,
        "Cohort Manager": req.body.select,
        "MOMA Link": req.body.moma_link,
        "MOMA Image": req.body.moma_image,
        "Email": req.body.email,
        "Email w/ Comma": req.body.email,
        "Start Date": req.body.start_date,
        "Favorited": "no"
      }
      const addData = await db.collection('ctrroster').add(data)
      res.render('form')
}

module.exports = {add_data, render_form}