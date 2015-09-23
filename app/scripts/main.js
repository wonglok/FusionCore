(function(Vco){
	'use strict';

	Vco.set('mod.main', function(){
		var api = {};
		var fusionCore = Vco.get('mod.fusionCore');


		api.init = function(){
			console.log('main init');
			fusionCore.init();
		};

		return api;
	});

	Vco.get('mod.main').init();



}(window.Vco));


