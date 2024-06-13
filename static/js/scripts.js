/*
Author       : Masum Billah.
Template Name: Tripx - Tour & Travel Agency Template
Version      : 1.0
*/


(function($) {
	'use strict';

		// Counter Js
		jQuery(document).ready(function($) {
			$('.counter_num').counterUp({
				delay: 10,
				time: 1000
			});
			
			//Active Menu
			$(".mobile_menu").simpleMobileMenu({			
				"menuStyle": "slide"
			});
			
			
			
		});
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.preloader').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		
		
		/*END PRELOADER JS*/		

		
		/*START Home Slider JS*/	
		
		$('.home-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  speed: 500,
		  cssEase: 'linear',
		  fade: true,
		  adaptiveHeight: true
		});
		

		
		/*START MENU JS
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		END MENU JS*/	

		/*START PACKAGE JS*/	
		$("#top-package").owlCarousel({
			items:3,
			dots:false,
			nav:true,
			navText: ["<i class='fa-solid fa-arrow-left-long'></i>" ,"<i class='fa-solid fa-arrow-right-long'></i>"],
			margin: 30,
			slideSpeed:1000,
			autoPlay:true,
			loop: true,
			responsive:{
				0:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:3,
			
				}
			}
		});
		
		/*END PACKAGE JS*/
			

		/*Image Popup*/
		 $('.gallery_enlarge_icon').magnificPopup({
			 type:'image',
			 gallery:{
				enabled:true
			  }
		});		

		/*START Gallery Masonry*/
		
		 $('.portfolio-grid').imagesLoaded(function() {
        	$('.portfolio-grid').masonry({
        		itemSelector: '.portfolio-item', 			
        		isAnimated: true 	
        	});
        });
		
		
		/*START Tour Details Slider JS*/	
		$('.tour_slider').slick({
			
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: true,
		  asNavFor: '.tour_slider_nav'
		});
		
		 $('.tour_slider_nav').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  asNavFor: '.tour_slider',
			  dots: true,
			  arrows: false,
			  centerMode: true,
			  focusOnSelect: true
		});
		
		

		 /*START Testimonials LOGO*/	
		$('#testimonial-slider').owlCarousel({
			items : 1,
			autoplay: true,
			center: true,
			loop: true,
			navText: ["<i class='ti-arrow-left'></i>" ,"<i class='ti-arrow-right'></i>"],
			nav: true,
			dots: false,
			margin: 0,
			responsive:{
				0:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:1,
			
				}
			}
		});
		
		/*END Testimonials LOGO*/
		

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
			margin: 0,
			autoPlay: 5000, //Set AutoPlay to 3 seconds
			items : 6,
			nav: false,
			dots: false,
			loop: true,
			responsive:{
				0:{
					items:2,
					
				},
				600:{
					items:3,
					
				},
				1000:{
					items:6,
			
				}
			}
		});
		/*END PARTNER LOGO*/
		
	
	
			
})(jQuery);