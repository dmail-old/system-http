/* global System */

require('../index.js');

var port = 8000;
var host = '127.0.0.1';

global.platform.ready(function(){
	var server = require('http').createServer(function(request, response){
		response.writeHead(200, {'content-type': 'application/javascript'});
		response.end('export default true');
	}).listen(port, host);
	
	System.import('http://' + host + ':' + port + '/index.js').then(function(exports){
		console.log(exports);
	}).catch(function(e){
		console.log('an error occured', e);
	}).then(function(){
		server.close();
	});
});