var express = require('express');
var router = express.Router();
var config = require('../config');
var cloudinary = require('cloudinary');
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
    //res.send('Hi');
    res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
	
	var imageStream = fs.createReadStream(req.files.image.path, { encoding: 'binary' })
    , cloudStream = cloudinary.uploader.upload_stream(function() { res.redirect('/'); });

  imageStream.on('data', cloudStream.write).on('end', cloudStream.end);
});

module.exports = router;
