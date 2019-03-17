const googleMap = document.getElementById('map');
// console.log(googleMap.src ='hola')
window.onload = () => {
  const validateLocation = Object.keys(navigator.geolocation)
  if (validateLocation.length) {
    // Creamos un mapa con las coordenadas actuales
    navigator.geolocation.getCurrentPosition(pos => {

      lat = pos.coords.latitude;
      lon = pos.coords.longitude;

      googleMap.src = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31205.143386384454!2d${lat}!3d${lon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sreciclaje+!5e0!3m2!1ses-419!2spe!4v1552832477606`
    });
  } else {    
    googleMap.src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31205.143386384454!2d-77.00885709517585!3d-12.136566264291682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sreciclaje+!5e0!3m2!1ses-419!2spe!4v1552832477606"
  }
}
