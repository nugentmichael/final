// JavaScript Document

$(document).ready(function(){

	function initialize() {
    var myLatlng = new google.maps.LatLng(45.348285, -75.757427);
    var mapOptions = {
      zoom: 15,
      center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Algonquin Animal Adoption Centre</h1>'+
        '<div id="bodyContent">'+
        '<p>1385 Woodroffe Avenue<br>Nepean, ON<br>K2G 1V8<br><a href="tel:6137274723">(613) 727-4723</a> ' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Algonquin Animal Adoption Centre'
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});