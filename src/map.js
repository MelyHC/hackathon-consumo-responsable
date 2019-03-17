const createMarker = (place) => {
  // Creamos un marcador
  const marker = new google.maps.Marker({
    map: map,
    position: place.coords
  });

  // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent(place.name);
    infowindow.open(map);
  });
}

let map;
let infowindow;

window.onload = () => {
  // Creamos un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(pos => {

    lat = pos.coords.latitude;
    lon = pos.coords.longitude;

    const myLatlng = new google.maps.LatLng(lat, lon);
    const mapOptions = {
      center: myLatlng,
      zoom: 15,
    };

    map = new google.maps.Map(googleMap, mapOptions);

    // Creamos el infowindow
    infowindow = new google.maps.InfoWindow();
    markerRest.forEach(colocationMarker => createMarker(colocationMarker))
  });
}
