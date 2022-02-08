// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.12959758513455,11.028864238838754],
    [77.13086117205872,11.028313016264361],
    [77.12611102121448,11.026199986821743],
    [77.12199266383203,11.02541908079347],
    [77.12016748271934,11.025120498528732],
  ];
   
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaWppdGg0NjcyIiwiYSI6ImNreDc5ZHY0bDE1ankycm81Mm4xaWNoZ3UifQ.Jb046PtQrRICraUzlnHniw';
   
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.12959758513455,11.028864238838754],
    zoom: 14,
  });
   
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let counter = 0;
 const marker= new mapboxgl.Marker()
 .setLngLat(busStops[counter])
 .addTo(map);

  // counter here represents the index of the current bus stop
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    marker.setLngLat(busStops[counter])
    marker.addTo(map)
    counter ++
    setTimeout(move,1000)
}

 