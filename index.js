//Responsive Height based on mobile screen size
const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

//Splash screen
document.querySelector('.splashScreen').style.backgroundColor = 'white'
document.querySelector('.logo-img').classList.toggle('toggle')
setTimeout(() => {
  document.querySelector('.splashScreen').style.backgroundColor = 'black'
  document.querySelector('.logo-img').classList.toggle('toggle')
}, 500)
setTimeout(() => {
  document.querySelector('.splashScreen').style.background = 'linear-gradient(to left, white 50%, black 50%)';
  document.querySelector('.splashScreen').style.backgroundSize = '200% 100%';
  document.querySelector('.splashScreen').style.backgroundPosition = 'left';
}, 1000)
setTimeout(() => {
  document.querySelector('.splashScreen').style.backgroundPosition = 'center';
}, 1500)
setTimeout(() => {
  document.querySelector('.logo-img').src = './images/logo-mix.png';
}, 1800);

$(window).on('load', function() {
  document.querySelector('.splashScreen').style.transform = 'translateY(-100%)';
  document.querySelector('.container').style.opacity = '1';
  let index = 0;
  swipeMenu(index);

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

  var carouselEl = $('.carousel');
  var carouselItems = carouselEl.find('.item');
  carouselEl.carousel({
    interval: 2000
  }).on('slid.bs.carousel', function(event) {
    const index = carouselItems.siblings('.active').index();
    if (index == 1 || index == 2) {
      $('.slide-desc h2').toggleClass('animate');
    }
    if (index == 3) {
      $('.logo').css('filter', 'invert(1)')
      $('.carousel-indicators').css('filter', 'invert(1)');
    } else {
      $('.logo').css('filter', 'invert(0)');
      $('.carousel-indicators').css('filter', 'invert(0)');
    }
    if (index == 4) {
      $('.phone').css('right', 'auto');
      $('.phone').css('left', '15px');
      $('.phone').css('color', '#1E1E1E');
      $('.phone').css('backgroundColor', '#eee');
    } else {
      $('.phone').css('right', '15px');
      $('.phone').css('left', 'auto');
      $('.phone').css('color', '#eee');
      $('.phone').css('backgroundColor', '#1E1E1E');
    }
  })
  $('.imgContainer').swipe({
    swipeLeft: function() {
      index++
      if (index > salads.length - 1) {
        index = 0
      }
      if (index < 0) {
        index = 2
      }
      swipeMenu(index)
    },
    swipeRight: function() {
      index--;
      if (index > salads.length - 1) {
        index = 0
      }
      if (index < 0) {
        index = salads.length - 1
      }
      swipeMenu(index)
    }
  })
  $('video').swipe({
    swipeLeft: function() {
      $(this).css('transform', 'translateX(-150px) rotate(-10deg)')
    },
    swipeRight: function() {
      $(this).css('transform', 'translateX(0) rotate(0)')
    }
  })
})

$('.carousel').carousel({
  interval: false
});

//close Navigation function
function closeNav() {
  document.querySelector('.menu-icon').checked = false;
}

function swipeMenu(index) {
  document.querySelector('.name').innerText = salads[index].name
  document.querySelector('.imgContainer').style.backgroundImage = `url('${salads[index].img}')`
}
// -- Google Maps --
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 33.89494103856613,
    lng: 35.5127938237086
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
    backgroundColor: 'black',
    gestureHandling: 'cooperative',
    navigation: {
      mouseWheelZoomEnabled: false,
      browserTouchPanEnabled: false
    },
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#1E1E1E"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#263c3f"
        }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6b9a76"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#1E1E1E"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#f3d19c"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#746855"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#1f2835"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#f3d19c"
        }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#2f3948"
        }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#17263c"
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#515c6d"
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#17263c"
        }],
      },
    ],
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.initMap = initMap;
