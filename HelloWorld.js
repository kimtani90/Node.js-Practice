
/**
 * Module dependencies.
 */

var express = require('express')
//  , routes = require('./routes')
//  , user = require('./routes/user')
  , http = require('http');
//  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);


var router=express.Router();
console.log(router);
router.route('/')
.get(function(req,res){
	res.send("Hello World");
});

app.use('/api', router);
app.listen(app.get('port'));
console.log('Server listening at port'+app.get('port'));
