###
Zirconium - Unofficial Titanium Japan Community Apps
TiDocsView Class
###

class TiDocsView
    constructor: () ->
        @win = Ti.UI.createWindow
            title: L("td_tidocs_full")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
        return
    getWindow: () ->
        return @win

# Modularization
module.exports = TiDocsView