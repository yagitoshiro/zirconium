/*
Zirconium - Unofficial Titanium Japan Community Apps
TwitterView Class
*/

var TwitterView;

TwitterView = (function() {
  var twitCompose;

  function TwitterView() {
    var writeButton;
    this.win = Ti.UI.createWindow({
      title: "Twitter",
      backgroundColor: "#FFFFFF"
    });
    writeButton = Ti.UI.createButton({
      systemButton: Ti.UI.iPhone.SystemButton.COMPOSE
    });
    writeButton.addEventListener("click", function(e) {
      writeButton.removeEventListener("click", arguments.callee);
      (twitCompose(writeButton, arguments.callee)).open();
    });
    this.win.rightNavButton = writeButton;
    return;
  }

  TwitterView.prototype.getWindow = function() {
    return this.win;
  };

  twitCompose = function(elements, callback) {
    var win;
    win = Ti.UI.createWindow({
      title: "新規ツイート",
      backgroundColor: "#FFFFFF",
      modal: true,
      leftNavButton: Ti.UI.createButton({
        title: "閉じる"
      }),
      rightNavButton: Ti.UI.createButton({
        title: "送信"
      })
    });
    win.addEventListener("close", function(e) {
      return elements.addEventListener("click", callback);
    });
    win.leftNavButton.addEventListener("click", function(e) {
      return win.close();
    });
    return win;
  };

  return TwitterView;

})();

module.exports = TwitterView;
