/*
Zirconium - Unofficial Titanium Japan Community Apps
Entryponit
*/

var console, globals, isiPhone;

globals = {};

console = {};

if (Ti.Platform.name === "iPhone OS") {
  isiPhone = true;
} else {
  isiPhone = false;
}

(function() {
  var AppTabGroup, BBSView, NewsView, OtherView, TwitterView, param, tabGroup, tabParam, _i, _len;
  AppTabGroup = require("/ui/AppTabGroup");
  TwitterView = require("/ui/TwitterView");
  NewsView = require("/ui/NewsView");
  BBSView = require("/ui/BBSView");
  OtherView = require("/ui/OtherView");
  tabGroup = new AppTabGroup();
  tabParam = [
    {
      tabId: "tab_0",
      title: L("tv_twitter"),
      icon: "images/light_bird.png",
      window: (new TwitterView()).getWindow()
    }, {
      tabId: "tab_1",
      title: L("tn_news"),
      icon: "images/light_pages.png",
      window: (new NewsView()).getWindow()
    }, {
      tabId: "tab_2",
      title: L("bbs_bbs"),
      icon: "images/light_chat.png",
      window: (new BBSView()).getWindow()
    }, {
      tabId: "tab_3",
      title: L("or_other"),
      icon: "images/light_more.png",
      window: (new OtherView()).getWindow()
    }
  ];
  for (_i = 0, _len = tabParam.length; _i < _len; _i++) {
    param = tabParam[_i];
    tabGroup.appendTab(param);
  }
  tabGroup.open(0);
})();
