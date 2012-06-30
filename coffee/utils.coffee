###
Zirconium - Unofficial Titanium Japan Community Apps
Utilities Module
###

# リモートに存在するJSONを取得する関数
# @param {String} method "GET" or "POST"
# @param {String} uri 取得したいURIを記述
# @param {Object} params クエリパラメータをオブジェクトで与える
# @param {Function} callback 取得したJSONを用いて行う処理関数
exports.getJSON = (method, uri, params, callback) ->
    http = Ti.Network.createHTTPClient()
    http.timeout = 60000 # 1min
    http.onload = ->
        json = JSON.parse http.responseText
        callback(json)
    http.open method, uri
    http.send params
    return