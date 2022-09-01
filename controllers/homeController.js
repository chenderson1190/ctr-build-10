function render_home(req, res){
    res.render('home', { title: 'Home - Cloud Technical Roster' });
}

module.exports = {render_home}