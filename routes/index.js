var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');

cloudinary.uploader.upload("MongoDB.jpg",
function(result) { console.log(result) })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Heroku!!' });
});

module.exports = router;
