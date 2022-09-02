var express = require('express');
var router = express.Router();
var listController = require('../controllers/listController')
var formController = require('../controllers/formController')
var favoritesController = require('../controllers/favoritesController')
var indexController = require('../controllers/indexController')
var homeController = require('../controllers/homeController')

/* GET Login page. */
router.get('/', indexController.render_index)

// POST Login Information
router.post('/', indexController.login)

/* GET Home page. */
router.get('/home', homeController.render_home)

/* GET form page. */
router.get('/form', formController.render_form)

// POST Update Form Information
router.post('/form', formController.add_data)

// POST Favorite Information
router.post('/list', listController.add_fave)

// GET List
router.get('/list', listController.display_list)



// GET Favorites
router.get('/favorites', favoritesController.render_favorites)

module.exports = router;













