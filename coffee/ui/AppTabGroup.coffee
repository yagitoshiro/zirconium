###
Zirconium
AppTabGroup Class
###

class AppTabGroup
    constructor: (glb = globals) ->
        @tabGroup = Ti.UI.createTabGroup()
        @tabGroup.addEventListener "focus", (e) ->
            glb.currentTab = e.tab
        return
    getTabGroup: () ->
        return @tabGroup
    appendTab: (param) ->
        tab = Ti.UI.createTab param
        @tabGroup[param.tabId] = tab if param.tabId? and typeof param.tabId is "string"
        @tabGroup.addTab if param.tabId then @tabGroup[param.tabId] else tab
        return
    open: (defaultTab = 0) ->
        Ti.API.info defaultTab
        @tabGroup.setActiveTab defaultTab
        @tabGroup.open()
        return

# Modularization
module.exports = AppTabGroup