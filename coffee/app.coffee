###
Zirconium - Unofficial Titanium Japan Community Apps
###

zr = {}
do ->
    tabGroup = Ti.UI.createTabGroup()
    tabParam = [{
        title : "Left"
        window: Ti.UI.createWindow
            title: "Left"
            backgroundColor: "#FFFFFF"
    },{
        title : "Right"
        window: Ti.UI.createWindow
            title: "Right"
            backgroundColor: "#FFFFFF"
    }]
    tabs = (Ti.UI.createTab param for param in tabParam)
    tabGroup.addTab tab for tab in tabs
    tabGroup.setActiveTab 0
    tabGroup.open()
    return