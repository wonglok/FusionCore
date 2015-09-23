(function(Vco, $){
	'use strict';

	Vco.set('mod.fusionCore', function(){
		var api = {};

		var mod = {

			delegateDom: function(){
				$( '.core-partition-group' ).on( 'click', '.core-partition', function() {
					var $self = $(this);
					var $parent = $self.parent();

					var cardIndex = $self.attr('cp');
					var parentIndex = $parent.attr('show');

					// console.log(cardIndex);
					// console.log(parentIndex);
					// console.log(cardIndex === parentIndex);

					if (parentIndex === cardIndex){
						// parent.attr('show', "");
					}else{
						$parent.attr('show', cardIndex.toString());
					}

				});
			},
			handle: function(){
				var group = $('.core-partition-group');

				var current = parseInt(group.attr('show'), 10);
				if (current <= 5){
					group.attr('show', current + 1);
				}else{
					group.attr('show', 1);
				}
			},
			loop: function(){
				setTimeout(mod.loop, 3000);
				mod.handle();

			},
			init: function(){
				// mod.delegateDom();
				// mod.loop();
			}

		};


		api.init = mod.init;
		return api;
	});

}(window.Vco, window.$));


