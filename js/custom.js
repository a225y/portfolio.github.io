
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#vedio').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
	$('#Portfolio').parallax("100%",0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('.photography-thumb a').nivoLightbox({
        effect: 'fadeScale',
    });

});
// isotope----------------------------------

$(window).load(function(){
    var $container = $('.photography-thumb');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.iso-section ul li a').click(function(){
        $('.iso-section .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

//animatedModal
$(function(){
	$('#demo01').animatedModal({
	modalTarget:'modal',
    animatedIn:'fadeInRight',
    animatedOut:'fadeOutUp',
    animationDuration:'1s',
    color:'#fff',
		});
	});
	

           

/* Istope Portfolio
-----------------------------------------------
$('.iso-section').isotope({
	itemSelector: '.photography-thumb',
	layoutMode: 'fitRows'
	});
// isotope click function
$('.iso-section ul li a').click(function(){
	$('.iso-section ul li a').removeClass('active');
	$(this).addClass('active');
	
	var selector=$(this).attr('data-filter');
	$('.iso-section').isotope({
		filter: selector
		});
		return false;
	});
*/

