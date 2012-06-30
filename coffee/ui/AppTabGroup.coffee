###
Zirconium - Unofficial Titanium Japan Community Apps
AppTabGroup Class
###

# @class
class AppTabGroup
    constructor: (glb = globals) ->
        @tabGroup = Ti.UI.createTabGroup()
        @tabGroup.addEventListener "focus", (e) ->
            glb.currentTab = e.tab
        return
    getTabGroup: () ->
        return @tabGroup
    appendTab: (param, win) ->
        tab = Ti.UI.createTab param
        tab.window = win if win?
        tab.window.containingTab = tab if tab.window?
        @tabGroup[param.tabId] = tab if param.tabId? and typeof param.tabId is "string"
        @tabGroup.addTab if param.tabId then @tabGroup[param.tabId] else tab
        return
    open: (defaultTab = 0) ->
        @tabGroup.setActiveTab defaultTab
        @tabGroup.open()
        return

# Modularization
module.exports = AppTabGroup