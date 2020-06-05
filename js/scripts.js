(function ($, root, undefined) {

	$(function () {

		'use strict';

		$(".nav-main .nav-toggle").click(function(){
			$(".nav-block").animate({
				right:0
			},400);
		});
		
		$(".nav-main .nav-block .close").click(function(){
			$(".nav-block").animate({
				right:"-290px"
			},400);
		});
		
		$(".home-service .item").hover(function(){
			$(this).addClass("colored");
			$(this).find(".hover").stop(true,false).slideDown();
		},function(){
			$(this).removeClass("colored");
			$(this).find(".hover").stop(true,false).slideUp();
		});
		
		var winwid = $(window).width();
		if(winwid<992){
			$(".nav-top ul").clone(".nav-top ul").appendTo(".nav-main .nav-block");
			$(".nav-main .nav-buttons").appendTo(".nav-main .nav-block");
		}
		// if(winwid>= 992){
			// var status1 = true;
			// var status2 = false;
			
			// var hdHigh = $(".header").outerHeight();
			// hdHigh+= "px";
			// $(".hd-bg").css("height",hdHigh);
			
			// function stickyNav(){
				// if ($(window).scrollTop() > 500) {
					// if(status1){
						// $('.header').addClass("sticky");
						// $('.header.sticky').stop(true,false).animate({
							// top:'0',
						// },400);
						// status1 = false;
						// status2 = true;
					// }
				// }
				// else {
					// if(status2){
						// $('.header.sticky').stop(true,false).animate({
							// top:'-95px',
						// },400,function(){
							// $('.header').removeClass("sticky");	
							// $('.header').removeAttr("style");
						// });
						// status1 = true;
						// status2 = false;
					// }
				// }
			// }
			
			// $(window).on("scroll",function(){
				// stickyNav();
			// });
			// stickyNav();
				
		// }
		
		
		
		if(winwid>= 992){
			$(".header .nav-main ul li").hover(function(){
				$(this).find(".sub-menu").stop(true,false).fadeIn(200);
			},function(){
				$(this).find(".sub-menu").stop(true,false).fadeOut(200);
			});
		}
		else{
			$(".header .nav-main ul li").click(function(event){
				var target = $( event.target );
				if (target.is( "li" )){
					if($(this).hasClass("open")){
						$(this).find(".sub-menu").stop(true,false).slideUp();
						$(".header .nav-main ul li").removeClass("open");
						return;
					}
					$(".header .nav-main ul li").removeClass("open");
					$(this).addClass("open");
					$(".header .nav-main ul li .sub-menu").stop(true,false).slideUp();
					$(this).find(".sub-menu").stop(true,false).slideDown();
				}
			});
		}
		
		
		
		if($('.theme-slider').length){
			$('#theme-slider1').owlCarousel({
				nav:false,
				items:1,
				mouseDrag:false,
				touchDrag:false,
				pullDrag:false,
				loop:false,
				dots:false,
			});
			$('#theme-slider2').owlCarousel({
				nav:false,
				items:1,
				mouseDrag:true,
				touchDrag:true,
				pullDrag:true,
				loop:true,
				dots:false,
			});

		}
		
	});

})(jQuery, this);
