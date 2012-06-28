###
Zirconium - Unofficial Titanium Japan Community Apps
NewsView Class
###

class NewsView
    constructor: () ->
        @win = Ti.UI.createWindow
            title: L("tn_news")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
        return
    getWindow: () ->
        return @win

# Modularization
module.exports = NewsView