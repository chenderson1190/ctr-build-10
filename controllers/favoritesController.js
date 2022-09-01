function render_favorites(req, res){
    if(req.cookies['AuthToken']) {
        res.render('favorites');
    }
    else {
        res.render('error')
    }
}

module.exports = {render_favorites}