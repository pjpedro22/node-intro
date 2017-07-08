var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

var options = {
    uri: 'http://api.open-notify.org/iss-now.json',
    json: true
};

function getIssPosition() {

  return request(options)

  .then(function (response) {

        console.log(response, "the raw response from our API")



      // Parse as JSON

        var issResponseObject = JSON.parse(response)

        //console.log(issResponseObject, "after parsing our response we have this object");



       //make a new object that we can return later

        var issLatLngObject = {};



       //using dot notation, assign our keys, lat and lng, the values from our parsed resposne

        issLatLngObject.lat = issResponseObject.iss_position.latitude

        issLatLngObject.lng = issResponseObject.iss_position.longitude



       //return our lat and lng object so that it can be used later!

        //console.log(issLatLngObject);

        return issLatLngObject;

          // Return object with lat and lng

    }

  )

}

getIssPosition();

function getAddressPosition(address) {

}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}