var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.argv[3] || process.env.PORT || 1337;
var morgan = require('morgan');
var fs = require( 'fs' );


var router = express.Router();

// set current environment
var logsPath = './logs/';

// catch all exceptions to avoid server crashes
process.on('uncaughtException', function (err){
	console.log("Caught exception: " + err);
	logger.log('error', "Caught exception: " + err);
});


app.use(morgan('dev')); // log every request to the console


//create log files if they don't exist
if ( !fs.existsSync( logsPath ) ) {
	// Create the directory if it does not exist
	fs.mkdirSync( logsPath );
}

var createLogFiles = function(){
	if( !fs.existsSync(logsPath + 'all-logs.log') ){
		fs.writeFile( logsPath + 'all-logs.log', function(err){
			if(err){
				return console.log(err);
			}
		});
	}

	if( !fs.existsSync(logsPath + 'exceptions.log') ){
		fs.writeFile( logsPath + 'exceptions.log', function(err){
			if(err){
				return console.log(err);
			}
		});
	}
}

createLogFiles();

// set winston logger
var winston = require('winston');

winston.emitErrs = true;

var logger = new (winston.Logger)({
	transports: [
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		}),
		new winston.transports.File({
			level: 'info',
			filename: logsPath + 'all-logs.log',
			handleExceptions: true,
			json: true,
			maxsize: 5242880, //5MB
			maxFiles: 5,
			colorize: false
		})
	],
	exitOnError: false,
	exceptionHandlers: [
		new winston.transports.File({ filename: logsPath + 'exceptions.log' })
	]
});

module.exports = logger;
module.exports.stream = {
	write: function(message, encoding){
		logger.info(message);
	}
};




//allow crossdomain required for accesing from web using grunt
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Credentials', "true");
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization, api_key, token');
	if ('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
});



app.use('/api', router);


app.get('/api/ping', function (req, res, next) {
	process.nextTick(function() {
		res.status(200).send("pong");
	});
});





// launch ======================================================================

server.listen(port);
console.log('The magic happens on port ' + port );
