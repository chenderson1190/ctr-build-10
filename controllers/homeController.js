function render_home(req, res){
    res.render('home', { title: 'Home' });
}

module.exports = {render_home}