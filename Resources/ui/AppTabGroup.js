/*
Zirconium - Unofficial Titanium Japan Community Apps
AppTabGroup Class
*/

var AppTabGroup;

AppTabGroup = (function() {

  function AppTabGroup(glb) {
    if (glb == null) {
      glb = globals;
    }
    this.tabGroup = Ti.UI.createTabGroup();
    this.tabGroup.addEventListener("focus", function(e) {
      return glb.currentTab = e.tab;
    });
    return;
  }

  AppTabGroup.prototype.getTabGroup = function() {
    return this.tabGroup;
  };

  AppTabGroup.prototype.appendTab = function(param, win) {
    var tab;
    tab = Ti.UI.createTab(param);
    if (win != null) {
      tab.window = win;
    }
    if (tab.window != null) {
      tab.window.containingTab = tab;
    }
    if ((param.tabId != null) && typeof param.tabId === "string") {
      this.tabGroup[param.tabId] = tab;
    }
    this.tabGroup.addTab(param.tabId ? this.tabGroup[param.tabId] : tab);
  };

  AppTabGroup.prototype.open = function(defaultTab) {
    if (defaultTab == null) {
      defaultTab = 0;
    }
    this.tabGroup.setActiveTab(defaultTab);
    this.tabGroup.open();
  };

  return AppTabGroup;

})();

module.exports = AppTabGroup;
