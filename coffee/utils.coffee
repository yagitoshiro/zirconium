###
Zirconium - Unofficial Titanium Japan Community Apps
Utilities Module
###

exports.getJSON = (method, uri, params, callback) ->
    http = Ti.Network.createHTTPClient()
    http.timeout = 60000 # 1min
    http.onload = ->
        json = JSON.parse http.responseText
        callback(json)
    http.open method, uri
    if method is "GET" or method is "get"
      http.send null
    else if method is "POST" or method is "post"
      http.send params
    return