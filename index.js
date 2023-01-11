//Responsive Height based on mobile screen size
const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

//Splash screen
setTimeout(() => {
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
})

//close Navigation function
function closeNav() {
  document.querySelector('.menu-icon').checked = false;
}


//show options container on click
function showOptions(e) {
      document.querySelector('.optionsContainer').classList.toggle('showOptions')
      document.querySelectorAll('.optionsContainer ul li').forEach(item => item.classList.add('animate'))

}

var body = document.querySelector('.slide4');
var except = document.querySelector('.optionsContainer');
var except2 = document.querySelector('.categoriesContainer');

//hiding options
body.addEventListener("click", function(ev) {
  except.classList.remove('showOptions')

}, false);
except.addEventListener("click", function(ev) {

  ev.stopPropagation();
}, false);
except2.addEventListener("click", function(ev) {

  ev.stopPropagation();
}, false);



let index = 1;
document.querySelector('.name').innerText = salads[index].name
document.querySelector('.desc').innerText = salads[index].desc
    document.querySelector('.price').innerText = salads[index].price +',000L.L'
document.querySelector('.img').src = salads[index].img

//Detect swipe on menu container
let touchstartX = 0
let touchendX = 0

function checkDirection() {
  if (touchendX < touchstartX){
    console.log('swiped left!')
    if(index==2){
      index =0
    }
    document.querySelector('.name').innerText = salads[index].name
    document.querySelector('.desc').innerText = salads[index].desc
    document.querySelector('.price').innerText = salads[index].price+',000L.L'
    document.querySelector('.img').src = salads[index].img
  index++;

  }
  if (touchendX > touchstartX){
    console.log('swiped right!')
      if(index==0){
        index =2
      }
      document.querySelector('.name').innerText = salads[index].name
      document.querySelector('.desc').innerText = salads[index].desc
          document.querySelector('.price').innerText = salads[index].price+',000L.L'
      document.querySelector('.img').src = salads[index].img
    index--;
  }
  console.log(index)
}

document.querySelector('.menu-right').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.querySelector('.menu-right').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
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
    zoom: 19,
    center: uluru,
    backgroundColor: 'black',
    gestureHandling: 'greedy',
    navigation: {
      mouseWheelZoomEnabled: false,
      browserTouchPanEnabled: false
    },
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
