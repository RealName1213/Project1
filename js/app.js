jQuery(function ($) {

	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});

	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('main-nav-change');
		} else {
			$('.main-nav').removeClass('main-nav-change');
		}
	});

	$(window).scroll(function(event) {
		Scroll();
	});

	$('.toggle-menu').jPushMenu();

	$('#main-navigation').onePageNav({
	    filter: ':not(.external)'
	});

	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.nav-menu').find('a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.nav-menu li.scroll')
				.removeClass('current')
				.eq(i).addClass('current');			
			}
		})
	};

	new WOW().init();

	smoothScroll.init();
	
	$('#count-down').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.counter').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	$('.bx-slider').bxSlider({
  	  pager: false,		  	
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: '<i class="fa fa-angle-right"></i>',
	  prevText: '<i class="fa fa-angle-left"></i>'
	});


	$(window).load(function(){'use strict';
		var $achievment_selectors = $('.achievment-filter >li>a');
		var $achievment = $('.achievment-items');
		$achievment.isotope({
			itemSelector : '.achievment-item',
			layoutMode : 'fitRows'
		});
		
		$achievment_selectors.on('click', function(){
			$achievment_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$achievment.isotope({ filter: selector });
			return false;
		});
	});
});