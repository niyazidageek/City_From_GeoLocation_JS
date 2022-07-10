var latitude, longtitude;

navigator.geolocation.getCurrentPosition((position) => {
  latitude = position.coords.latitude;
  longtitude = position.coords.longitude;
});

getCountry(latitude,longtitude)

function getCountry(latitude, longtitude) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}