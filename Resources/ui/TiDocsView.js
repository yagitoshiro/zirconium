/*
Zirconium - Unofficial Titanium Japan Community Apps
TiDocsView Class
*/

var TiDocsView;

TiDocsView = (function() {

  function TiDocsView() {
    this.win = Ti.UI.createWindow({
      title: L("td_tidocs"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF"
    });
    return;
  }

  TiDocsView.prototype.getWindow = function() {
    return this.win;
  };

  return TiDocsView;

})();

module.exports = TiDocsView;
