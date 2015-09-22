(function(Vco){
	'use strict';



	Vco.set('mod.main', function(){
		var api = {};

		api.init = function(){
			console.log('main init');

		};

		return api;
	});

	Vco.get('mod.main').init();



}(window.Vco));


