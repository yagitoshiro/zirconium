/*
Zirconium - Unofficial Titanium Japan Community Apps
OtherView Class
*/

var OtherView;

OtherView = (function() {

  function OtherView() {
    this.win = Ti.UI.createWindow({
      title: L("or_other"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF"
    });
    return;
  }

  OtherView.prototype.getWindow = function() {
    return this.win;
  };

  return OtherView;

})();

module.exports = OtherView;
