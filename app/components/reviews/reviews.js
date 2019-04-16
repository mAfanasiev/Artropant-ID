$(function() {
	$('.reviews__list').slick({
	    infinite: true,
	    slidesToScroll: 1,
	    slidesToShow: 3,
	    dots: true,
	    centerMode: true,
	    variableWidth: true,
	    // стартовий слайд
	    initialSlide: 1,
	    responsive: [
	    	{
	            breakpoint: 1750,
	            settings: {
	              slidesToShow: 3,
	              centerMode: true,
	              initialSlide: 1
	            } 
	        },
	    	{
	            breakpoint: 1302,
	            settings: {
	              slidesToShow: 3,
	              centerMode: true,
	              initialSlide: 1
	            } 
	        },
	        {
	            breakpoint: 1024,
	            settings: {
	              slidesToShow: 2,
	              centerMode: false,
	              initialSlide: 0
	            } 
	        },
	        {
	            breakpoint: 768,
	            settings: {
	              slidesToShow: 1,
	              centerMode: false
	            } 
	        },
	        {
	            breakpoint: 479,
	            settings: {
	              slidesToShow: 1,
	              centerMode: false
	            } 
	        }
	    ]
  	});

  	
    $('.reviews__more').on('click', function() {
        $(this).parent().find('.reviews__body').toggleClass('open');
        $(this).parent().toggleClass('open');
        $(this).toggleClass('open');
    });

    // видаляємо класи open при прокрутці слайду
    $('.reviews__list').on('afterChange', function(event, slick, currentSlide){
      $(this).find('.slick-slide').not('.slick-active').find('.open').removeClass('open');
    });

});