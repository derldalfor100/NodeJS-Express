var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './uploads'});

/* GET users listing. Get a response to show the selected page*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// POST - a request to update the server.
router.post('/register', upload.single('profileimage'), function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.name.password2;
  if(req.file){// if the file's been uploaded
    console.log('Uploading File..');
    var profileimage = req.file.filename;
  }else{
    console.log('No File Uploaded..');
    var profileimage = 'noimage.jpg';
    console.log('da');
  }
});

module.exports = router;
