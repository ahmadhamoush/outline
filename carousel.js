$(window).on('load',function(){
  document.querySelector('.splashScreen').style.transform = 'translateY(-100%)'
  document.querySelector('.container').style.opacity = '1'

})

$(".carousel").swipe({
excludedElements: "input, select, textarea, .noSwipe",
swipeUp: function() {
$(this).carousel('next');
},
swipeDown: function() {
$(this).carousel('prev');
},
allowPageScroll: 'vertical'
});

$(function(){
  var carouselEl = $('.carousel');
  var carouselItems = carouselEl.find('.item');
  carouselEl.carousel({
    interval: 2000
  }).on('slid.bs.carousel', function (event) {
    const index = carouselItems.siblings('.active').index();
    if(index ==1 || index == 2){
      $('.slide-desc h2').toggleClass('animate')
    }
    if(index ==3){
      // $('.logo').css('filter','invert(1)')
      // $('.carousel-indicators').css('filter','invert(1)')
        // $('.categoriesContainer').addClass('categorienAnim')

    }else{
        $('.logo').css('filter','invert(0)')
            $('.carousel-indicators').css('filter','invert(0)')
    }
    if(index==4){
          $('.phone').css('right','auto')
      $('.phone').css('left','15px')
          $('.phone').css('color','black')
              $('.phone').css('backgroundColor','white')
    }else{
      $('.phone').css('right','15px')
  $('.phone').css('left','auto')
      $('.phone').css('color','white')
          $('.phone').css('backgroundColor','black')
    }

    console.log('Slide: ' + index)
  })
})

$('.carousel').carousel({interval:false});
