###
Zirconium - Unofficial Titanium Japan Community Apps
OtherView Class
###

class OtherView
    constructor: () ->
        @win = Ti.UI.createWindow
            title: L("or_other")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
        return
    getWindow: () ->
        return @win

# Modularization
module.exports = OtherView