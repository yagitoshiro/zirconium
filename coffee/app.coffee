###
Zirconium - Unofficial Titanium Japan Community Apps
###

globals = {}
do ->
    # Load modules
    AppTabGroup = require("/ui/AppTabGroup")

    tabGroup = new AppTabGroup()
    tabParam = [{
        tabId: "tab0"
        title: "Left"
        window: Ti.UI.createWindow
            title: "Left"
            backgroundColor: "#FFFFFF"
    }, {
        tabId: "tab1"
        title: "Right"
        window: Ti.UI.createWindow
            title: "Right"
            backgroundColor: "#FFFFFF"
    }]
    tabGroup.appendTab param for param in tabParam

    # Running
    tabGroup.open(0)
    return