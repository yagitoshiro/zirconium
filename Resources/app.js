/*
Zirconium - Unofficial Titanium Japan Community Apps
*/

var globals;

globals = {};

(function() {
  var AppTabGroup, param, tabGroup, tabParam, _i, _len;
  AppTabGroup = require("/ui/AppTabGroup");
  tabGroup = new AppTabGroup();
  tabParam = [
    {
      tabId: "tab0",
      title: "Left",
      window: Ti.UI.createWindow({
        title: "Left",
        backgroundColor: "#FFFFFF"
      })
    }, {
      tabId: "tab1",
      title: "Right",
      window: Ti.UI.createWindow({
        title: "Right",
        backgroundColor: "#FFFFFF"
      })
    }
  ];
  for (_i = 0, _len = tabParam.length; _i < _len; _i++) {
    param = tabParam[_i];
    tabGroup.appendTab(param);
  }
  tabGroup.open(0);
})();
