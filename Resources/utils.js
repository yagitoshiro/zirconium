/*
Zirconium - Unofficial Titanium Japan Community Apps
Utilities Module
*/

exports.getJSON = function(method, uri, params, callback) {
  var http;
  http = Ti.Network.createHTTPClient();
  http.timeout = 60000;
  http.onload = function() {
    var json;
    json = JSON.parse(http.responseText);
    return callback(json);
  };
  http.open(method, uri);
  http.send(params);
};
