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
    document.querySelector('.logo-img').src = './images/logo-mix.png'
  }, 1800)


//close Navigation function
function closeNav() {
  document.querySelector('.menu-icon').checked = false;
}



let index =0;
swipeMenu(index)

//Detect swipe on menu container
let touchstartX = 0
let touchendX = 0

function swipeMenu(index){
  document.querySelector('.name').innerText = salads[index].name
  document.querySelector('.imgContainer').style.backgroundImage = `url('${salads[index].img}')`
}

function checkDirectionMenu() {
  if (touchendX < touchstartX){
    console.log('swiped left!')
      index++
  }
  if (touchendX > touchstartX){
    console.log('swiped right!')
      index--;
  }
  if(index>salads.length-1){
    index=0
  }
  if(index<0){
    index=salads.length-1
  }
  swipeMenu(index)
  console.log(index)
}

function checkDirectionVideo() {
  if (touchendX < touchstartX){
    console.log('swiped left!')
  document.querySelector('video').style.transform ='translateX(-150px) rotate(-10deg)'
  }
  if (touchendX > touchstartX){
    console.log('swiped right!')
      document.querySelector('video').style.transform ='translateX(0) rotate(0)'
  }
}


document.querySelector('.imgContainer').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.querySelector('.imgContainer').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirectionMenu()
})



document.querySelector('video').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.querySelector('video').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirectionVideo()
})



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
    styles: [
      { elementType: "geometry", stylers: [{ color: "#1E1E1E" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#1E1E1E" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
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
