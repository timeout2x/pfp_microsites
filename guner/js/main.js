(function($){

	$(function(){
		if ($('#photo-gallery').length > 0) {
			$('#photo-gallery').allinone_carousel({
				skin: 'sweet',
				//skin: 'charming',
				width : 1200,
				//height : 356,
				height : 330,
				autoPlay : 4,
				numberOfVisibleItems : 3,
				
				resizeImages : true,
				
				showCircleTimer : false,
				showBottomNav : false,
				autoHideNavArrows : true,
				elementsHorizontalSpacing : 330,
				elementsVerticalSpacing : 30
				//easing:'easeOutBounce'
			});
		}
		
		$('.b-popup-link').on('click', function(){
			$('.b-popup, .b-popup__content').removeClass('hidden');
			return false
		});
		$('.b-popup__cross').on('click', function(){
			$('.b-popup, .b-popup__content').addClass('hidden');
			return false
		})
	});
	
	$(window).load(function(){
		$('#contentHolderUnit_0').addClass('active');
	})

})(jQuery)