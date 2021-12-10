const request = require("request");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibzBtNHIiLCJhIjoiY2t3eDc3azRhMGF6azJ1cTFkN2hhNjFjOCJ9.KwxBeaZr7dJYyw6qq1KAlA`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Error has occurred",undefined);
    } else if (res.body.message) {
      callback(res.body.message,undefined);
    } else if (res.body.features.length == 0) {
    callback("cant find the place",undefined);
    } else {
      callback(undefined, {
        longtitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1],
      });
    }
  });



};
module.exports = geocode;