// Default JavaScript Functions and Initiations
$(document).ready(function() {
  //URL
  setURL()
  setTendina()
  // Disable scroll on hash
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }

	// Initiate page
	setPage();

  // convert SVG Images
  $('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          
          // Replace image with new SVG
          $img.replaceWith($svg);
      });
  });

  // dropdown
  $('.tendina_dropdown a[target*="iframe"]').click(function(event) {
	  event.preventDefault();
    // console.log('it works')

    if (!$(this).hasClass('active')) {
      var thisHref = $(this).attr('href');
      var categoryID = $(this).closest('.root_').find('.link_').attr('id');
      TweenLite.to($('.main_iframe'), 0.3, {opacity:0});
      window.location.hash = '#!'+categoryID

      setTimeout(function() {
        $("#iframe").attr("src", thisHref);
      },300);

    } else {
      
    }
    

	});

  $('.tendina_dropdown a.more').click(function(event) {
    setScrollbars()   
  });

  $('.list-menu a[class*="_view"]').click(function(event) {
	  event.preventDefault();
	  detectViewSize($(this).attr('class'),'yes')

	  $('.list-menu a').removeClass('on');
  	$(this).addClass('on');
	});

  $(window).resize(function () {
    setPage();
  });

  //nav bar header
  $('.trigger_menu').click(function(event) {
    event.preventDefault();
    setTriggerMenu();
  });


  // go to styleguide
  $('.cta_to_styleguide').click(function(event) {
    event.preventDefault();
    var thisHref = $(this).attr('href');
    ctaToStyleguide(thisHref);

  });

  $('.cta_to_homepage').click(function(event) {
    event.preventDefault();
    var thisHref = $(this).attr('href');
    ctaToHomepage(thisHref);

  });

  $('.home_hero .circle').click(function(event) {
    event.preventDefault();
    $(window).delay(0).animate({scrollTop:640 },640);

  });

  $('.nav_page a').click(function(event) {
    event.preventDefault();
    
  });
}); // end document ready






