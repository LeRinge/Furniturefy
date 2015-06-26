var express = require('express');
var router = express.Router();
var config = require('../config');
var cloudinary = require('cloudinary');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' , imageURL:'http://res.cloudinary.com/hfhpkva95/image/upload/v1435295611/vucpreq4irbaklkt1k1m.png' });
});

module.exports = router;
