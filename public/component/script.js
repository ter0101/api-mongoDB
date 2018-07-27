function searchOnclick(lat, ing) {
  var lat = document.getElementById("lat");
  var ing = document.getElementById("ing");
  console.log("lat: " + lat.value, "ing: " + ing.value);
  search(lat,ing);
}

function search(lat, ing) {
  fetch("/api/ninja?ing=" + ing + "&lat=" + lat)
    .then(function(data) {
      // Here you get the data to modify as you please
      return data.json();
    })
    .catch(function(error) {
      // If there is any error you will catch them here
    });
}
