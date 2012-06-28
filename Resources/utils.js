/*
Zirconium - Unofficial Titanium Japan Community Apps
Utilities Module
*/

exports.getJSON = function(method, uri, params, callback) {
  var http;
  http = Ti.Network.createHTTPClient();
  http.onload = function() {
    var json;
    json = JSON.parse(http.responseText);
    return callback(json);
  };
  http.open(method, uri);
  if (method === "GET" || method === "get") {
    http.send(null);
  } else if (method === "POST" || method === "post") {
    http.send(params);
  }
};
