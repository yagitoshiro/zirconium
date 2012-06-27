/*
Zirconium - Unofficial Titanium Japan Community Apps
*/

var globals;

globals = {};

(function() {
  var AppTabGroup, TwitterView, param, tabGroup, tabParam, _i, _len;
  AppTabGroup = require("/ui/AppTabGroup");
  TwitterView = require("/ui/TwitterView");
  tabGroup = new AppTabGroup();
  tabParam = [
    {
      tabId: "tab_0",
      title: "Twitter",
      window: (new TwitterView()).getWindow()
    }, {
      tabId: "tab_1",
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
