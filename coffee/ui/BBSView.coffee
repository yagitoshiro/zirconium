###
Zirconium - Unofficial Titanium Japan Community Apps
BBSView Class
###

class BBSView
    constructor: () ->
        @win = Ti.UI.createWindow
            title: L("bbs_bbs")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
        return
    getWindow: () ->
        return @win

# Modularization
module.exports = BBSView