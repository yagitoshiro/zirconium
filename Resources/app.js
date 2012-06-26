/*
Zirconium - Unofficial Titanium Japan Community Apps
*/

var zr;

zr = {};

(function() {
  var param, tab, tabGroup, tabParam, tabs, _i, _len;
  tabGroup = Ti.UI.createTabGroup();
  tabParam = [
    {
      title: "Left",
      window: Ti.UI.createWindow({
        title: "Left",
        backgroundColor: "#FFFFFF"
      })
    }, {
      title: "Right",
      window: Ti.UI.createWindow({
        title: "Right",
        backgroundColor: "#FFFFFF"
      })
    }
  ];
  tabs = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = tabParam.length; _i < _len; _i++) {
      param = tabParam[_i];
      _results.push(Ti.UI.createTab(param));
    }
    return _results;
  })();
  for (_i = 0, _len = tabs.length; _i < _len; _i++) {
    tab = tabs[_i];
    tabGroup.addTab(tab);
  }
  tabGroup.setActiveTab(0);
  tabGroup.open();
})();
