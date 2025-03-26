const express = require('express');
const router = express.Router();

//Setting additional routes for the backend
router.use('/lists', require('./lists/lists'));
router.use('/contact', require('./contact/contact'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
