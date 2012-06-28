/*
Zirconium - Unofficial Titanium Japan Community Apps
NewsView Class
*/

var NewsView;

NewsView = (function() {

  function NewsView() {
    this.win = Ti.UI.createWindow({
      title: L("tn_news"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF"
    });
    return;
  }

  NewsView.prototype.getWindow = function() {
    return this.win;
  };

  return NewsView;

})();

module.exports = NewsView;
