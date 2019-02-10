$(function(){
	

	/* ==========================================================================
		revolution-slider
   ========================================================================== */	
  
    if (jQuery("#slider1").length) {
        jQuery("#slider1").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
					},
            gridwidth:1170,
            gridheight:620
        });
    };


/* ==========================================================================
		revolution-slider style-2
   ========================================================================== */
   
    if (jQuery("#slider2").length) {
        jQuery("#slider2").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"off",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
					},
            gridwidth:1170,
            gridheight:720
        });
    };	
	
//scroll top button

	$(window).on('scroll',function(){
		var winscroll = $(window).scrollTop();
		if(winscroll > 500 ){
			$(".scroll_top").fadeIn(1000);
		}else{
			$(".scroll_top").fadeOut(1000);
		}
	});

	 $(".scroll_top").on('click',function(){
			 $('html, body').animate({
				 scrollTop:0
			 },800)
	});
	
//scroll top button end	

//Banner //

	$('.all_slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        arrows: true,
		nextArrow: ".nxtbtn",
        prevArrow: ".prevbtn",
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
//top fixed menue
		$(document).ready(function(){
		var a = $(".header_three");
		var pos = a.position();
		$(window).scroll(function(){
			var windowpos = $(window).scrollTop();
			if (windowpos >= pos.top){
				a.addClass("mvw");
			} else {
				a.removeClass("mvw");
			}
		});
	});

