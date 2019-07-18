// This delivery zone of Riga.
function initDeliveryMap() {
  var map = new google.maps.Map(document.getElementById('delivery-map'), {
    zoom: 12,
    center: {lng: 24.105, lat: 56.946},
    disableDefaultUI: true
  });


  // Define the LatLng coordinates for the polygon's path.
  var deliveryCoords = [
    {lng: 24.165, lat: 56.973},
    {lng: 24.208, lat: 56.9655},
    {lng: 24.229, lat: 56.960},
    {lng: 24.2425, lat: 56.9435},
    {lng: 24.213, lat: 56.932},
    {lng: 24.181, lat: 56.9305},
    {lng: 24.1395, lat: 56.8965},
    {lng: 24.078, lat: 56.899},
    {lng: 24.031, lat: 56.927},
    {lng: 24.009, lat: 56.931},
    {lng: 23.993, lat: 56.946},
    {lng: 23.9876, lat: 56.949},
    {lng: 23.997, lat: 56.953},
    {lng: 23.9975, lat: 56.960},
    {lng: 24.0005, lat: 56.964},
    {lng: 24.035, lat: 56.980},
    {lng: 24.058, lat: 56.985},
    {lng: 24.110, lat: 56.991},
    {lng: 24.131, lat: 56.988}
  ];


  // Construct the polygon.

  var deliveryRiga = new google.maps.Polygon({
    paths: deliveryCoords,
    strokeColor: '#FFA500',
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: '#FFA500',
    fillOpacity: 0.2
  });

  deliveryRiga.setMap(map);

  /* Autocomplete */

  var input = /** @type {!HTMLInputElement} */(document.getElementById('pac-input'));
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);

  var changeIcon = '../images/poly-yes.png';
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({

    map: map,
    animation: google.maps.Animation.DROP,
    icon: changeIcon

  });

  autocomplete.addListener('place_changed', function () {

    var place = autocomplete.getPlace();

    infowindow.close();
    marker.setVisible(false);

    if (!place.geometry) {

      // User entered the name of a Place that was not suggested and

      // pressed the Enter key, or the Place Details request failed.

      window.alert("No details available for input: '" + place.name + "'");

      return;
    }

    changeIcon = google.maps.geometry.poly.containsLocation(place.geometry.location, deliveryRiga) ? '../images/poly-yes.png' : '../images/poly-no.png';
    marker = new google.maps.Marker({map: map, animation: google.maps.Animation.DROP, icon: changeIcon});
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    map.setCenter(place.geometry.location);

    var address = '';

    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');

    }

    infowindow.setContent('<div class="check-delivery" ><span class="place-name">' + address + '</span></div>');
    infowindow.open(map, marker);
  });


  var styledMapType = new google.maps.StyledMapType(
    [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{"saturation": 36}, {"color": "#e5e5e5"}, {"lightness": 40}]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
    }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{"visibility": "off"}]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#000000"}, {"lightness": "20"}]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{"color": "#000000"}, {"lightness": 20}]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{"color": "#000000"}, {"lightness": 21}]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#f46900"}]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#f0812c"}, {"lightness": 17}]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{"color": "#434343"}, {"lightness": "0"}, {"gamma": "1"}]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{"color": "#f46900"}, {"lightness": "0"}]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [{"lightness": "0"}]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{"color": "#e5e5e5"}]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.stroke",
      "stylers": [{"lightness": "00"}]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{"color": "#000000"}, {"lightness": 19}, {"visibility": "off"}]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{"color": "#d8d8d8"}, {"lightness": "20"}, {"saturation": "-100"}]
    }, {"featureType": "water", "elementType": "labels", "stylers": [{"color": "#262626"}]}],

    {name: 'Styled Map'});

  //Associate the styled map with the MapTypeId and set it to display.

  map.mapTypes.set('styled_map', styledMapType);

  map.setMapTypeId('styled_map');

}
