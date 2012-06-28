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
      title: L("tv_twitter"),
      window: (new TwitterView()).getWindow()
    }, {
      tabId: "tab_1",
      title: "BBS",
      window: Ti.UI.createWindow({
        title: "BBS",
        barColor: L("appcColor"),
        backgroundColor: "#FFFFFF"
      })
    }, {
      tabId: "tab_2",
      title: "TiDocs",
      window: Ti.UI.createWindow({
        title: "TiDocs",
        barColor: L("appcColor"),
        backgroundColor: "#FFFFFF"
      })
    }, {
      tabId: "tab_3",
      title: "News",
      window: Ti.UI.createWindow({
        title: "News",
        barColor: L("appcColor"),
        backgroundColor: "#FFFFFF"
      })
    }, {
      tabId: "tab_4",
      title: "Other",
      window: Ti.UI.createWindow({
        title: "Other",
        barColor: L("appcColor"),
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
