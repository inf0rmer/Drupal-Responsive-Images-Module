(function( $ ){
	jQuery.fn.responsiveImages = function( options ) {

		var settings = {
			'sizes' 			: [480, 768, 992, 1382],
			'resizeEvent' 		: true,
			'bustCache' 		: false
		};

		if ( options ) {
			$.extend( settings, options );
		}

		return this.each(function(){
			var $this = this,
				handler,
				lastSize,
				sizes = settings.sizes;

			handler = function() {
				// Calculate screen size
				var screenWidth = document.documentElement.clientWidth,
					sizeToUse;

				if (lastSize == screenWidth) {
					return;
				}

				// Determine in which bracket the screen width falls into
				for (var i = sizes.length; i--; ) {
					if (screenWidth >= sizes[i]) {
						lastSize = sizeToUse = sizes[i];
						break;
					}
				}

				lastSize = sizeToUse = (!sizeToUse) ? 480 : sizeToUse;

				// Loop through all elements and change the source
				var $imgs = $this.add($this.find('img'));

				$imgs.each(function(){
					var $img = $(this);
					$img
					.attr('src', $img.attr('data-src-' + sizeToUse))
					.removeAttr('width')
					.removeAttr('height');
				});
			};

			handler.apply();

			// Declare a window resize event to call the handler function
			if (settings.resizeEvent) {
				$(window).resize(handler);
			}
		});
	};
})(jQuery);