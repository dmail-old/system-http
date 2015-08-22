/* global System */

/*
nodejs can now import module using http/https request
*/

require('system-platform');

global.platform.ready(function(){
	return System.import('./node_modules/ressource/index.js').then(function(exports){
		return exports.default;
	}).then(function(ressource){
		System.fetch = function(load){
			return ressource.get(load.address).then(function(response){
				return response.text();
			});
		};
	});
});