
var map;


function initMap() {  
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 33.82, lng: -78.68},
    disableDefaultUI: true,
    zoomControl: true  
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  //var control = document.getElementById('floating-panel');
  //control.style.display = 'block';
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(control);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var start = document.getElementById('start').value;
      var end = document.getElementById('end').value;
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
}


$('#events').click(function() {
    initMap();
})


$('.closebtn').click(function() {
    $('#welcome').hide();
});


$('.closeEvent').click(function() {
    $('#welcome').hide();
});



if($(window).width() > 800 ) {
    $('#map').before($('#right-panel'));
};





function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    'css/img/brick.JPG',
    'css/img/brick2.JPG',
    'css/img/brick3.JPG',
    'css/img/hero-alt.JPG',
    'css/img/hero-alt2.JPG',
    'css/img/hero-alt3.JPG',
    'css/img/hero-alt4.JPG',
    'css/img/park-pray.JPG',
    'css/img/park-rose2.JPG',
    'css/img/park.JPG',
    'css/img/park3.JPG',
    'css/img/park4.JPG',
    'css/img/peek-a-boo2.JPG',
    'css/img/pond-back.JPG',
    'css/img/skyline-bw.JPG',
    'css/img/skyline-tierra.JPG',
    'css/img/skyline-tierra02.JPG',
    'css/img/skyline.JPG',
    'css/img/skyline2.JPG',
    'css/img/skyline3.JPG',
    'css/img/skyline4.JPG'
]); 

