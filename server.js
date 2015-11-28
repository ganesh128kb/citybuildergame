/*-----------NPM--------*/
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var port = Number(process.env.PORT || 3000);

/*-----------End NPM--------*/

/*-----------Initialization Modules--------*/
var app = express();
var logDirectory = __dirname + '/log'
var configDB = require('./config/database.js');
var connection = mysql.createPool(configDB.Obj);
//console.log(connection)
/*-----------End Initialization Modules--------*/

/*--------Body Parsing--------*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/*------Create MiddleWare--------*/
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

// Setup the logger
app.use(morgan('combined', {stream: accessLogStream}))
app.use(morgan('combined')); //Cmd Logger
/*------End	 MiddleWare--------*/

/*--------Template Engine--------*/
app.engine('html',require('ejs').renderFile); // render HTML Files
app.use('/public',express.static(__dirname+'/public')); // Folder Access

require('./routes/page.js')(app,connection); //Page Routing & Web Service - GET/POST

/*------ End Routing ---------*/

/*var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  //console.log('Example app listening at http://%s:%s', host, port);
  console.log('Example app listening at http:', port);
})*/

/*------- Server ---------*/
app.listen(port);