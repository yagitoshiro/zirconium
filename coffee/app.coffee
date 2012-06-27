###
Zirconium - Unofficial Titanium Japan Community Apps
###

globals = {}
do ->
    # Load modules
    AppTabGroup = require "/ui/AppTabGroup"
    TwitterView = require "/ui/TwitterView"

    tabGroup = new AppTabGroup()
    tabParam = [{
        tabId: "tab_0"
        title: "Twitter"
        window: (new TwitterView()).getWindow()
    }, {
        tabId: "tab_1"
        title: "Right"
        window: Ti.UI.createWindow
            title: "Right"
            backgroundColor: "#FFFFFF"
    }]
    tabGroup.appendTab param for param in tabParam

    # Running
    tabGroup.open(0)
    return