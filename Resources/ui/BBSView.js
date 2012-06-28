/*
Zirconium - Unofficial Titanium Japan Community Apps
BBSView Class
*/

var BBSView;

BBSView = (function() {

  function BBSView() {
    this.win = Ti.UI.createWindow({
      title: L("bbs_bbs"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF"
    });
    return;
  }

  BBSView.prototype.getWindow = function() {
    return this.win;
  };

  return BBSView;

})();

module.exports = BBSView;
