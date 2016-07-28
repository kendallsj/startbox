$(document).ready(function() {
  setIframe()
  if ($('body').hasClass('nav_tab_sticky')) {
  	$('.nav-tabs a').click(function(event) {
	  	var navTab = $( ".tab-content" )
			var navTabOffset = navTab.offset().top + 10
	  	$(window).delay(0).animate({scrollTop:navTabOffset },600);
  	});
  }
  
});


$(window).on('scroll', function() {
	var scrollPos = $(this).scrollTop();
	
	if ($('body').hasClass('nav_tab_sticky')) {
		var navTab = $( ".tab-content" )
		var navTabOffset = navTab.offset().top

		if (scrollPos >= navTabOffset) {
			$('body').addClass('nav_tab_sticky_yes');
		}  else if (scrollPos < navTabOffset ) {
			$('body').removeClass('nav_tab_sticky_yes');
		}
	}

});