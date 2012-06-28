/*
Zirconium - Unofficial Titanium Japan Community Apps
*/

var globals;

globals = {};

(function() {
  var AppTabGroup, BBSView, NewsView, OtherView, TiDocsView, TwitterView, param, tabGroup, tabParam, _i, _len;
  AppTabGroup = require("/ui/AppTabGroup");
  TwitterView = require("/ui/TwitterView");
  BBSView = require("/ui/BBSView");
  TiDocsView = require("/ui/TiDocsView");
  NewsView = require("/ui/NewsView");
  OtherView = require("/ui/OtherView");
  tabGroup = new AppTabGroup();
  tabParam = [
    {
      tabId: "tab_0",
      title: L("tv_twitter"),
      window: (new TwitterView()).getWindow()
    }, {
      tabId: "tab_1",
      title: L("bbs_bbs"),
      window: (new BBSView()).getWindow()
    }, {
      tabId: "tab_2",
      title: L("td_tidocs"),
      window: (new TiDocsView()).getWindow()
    }, {
      tabId: "tab_3",
      title: L("tn_news"),
      window: (new NewsView()).getWindow()
    }, {
      tabId: "tab_4",
      title: L("or_other"),
      window: (new OtherView()).getWindow()
    }
  ];
  for (_i = 0, _len = tabParam.length; _i < _len; _i++) {
    param = tabParam[_i];
    tabGroup.appendTab(param);
  }
  tabGroup.open(0);
})();
