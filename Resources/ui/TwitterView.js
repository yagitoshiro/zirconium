/*
Zirconium - Unofficial Titanium Japan Community Apps
TwitterView Class
*/

var TwitterView;

TwitterView = (function() {
  var timelineCompose, twitCompose;

  function TwitterView() {
    var tabBar, timeline, writeButton;
    this.win = Ti.UI.createWindow({
      title: L("tv_twitter"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF",
      tabBarHidden: isiPhone ? true : void 0
    });
    writeButton = Ti.UI.createButton({
      systemButton: Ti.UI.iPhone.SystemButton.COMPOSE
    });
    writeButton.addEventListener("click", function(e) {
      writeButton.removeEventListener("click", arguments.callee);
      (twitCompose(writeButton, arguments.callee)).open();
    });
    this.win.rightNavButton = writeButton;
    if (isiPhone) {
      tabBar = Ti.UI.createImageView({
        image: "/images/iPhoneCustomTabBar.png",
        hires: true,
        left: 0,
        bottom: 0,
        zIndex: 999
      });
      this.win.add(tabBar);
    }
    timeline = Ti.UI.createTableView({
      backgroundColor: "#FFFFFF",
      data: []
    });
    this.win.add(timeline);
    timelineCompose(timeline);
    return;
  }

  TwitterView.prototype.getWindow = function() {
    return this.win;
  };

  twitCompose = function(elements, callback) {
    var win;
    win = Ti.UI.createWindow({
      title: L("tv_tweet"),
      barColor: L("appcColor"),
      backgroundColor: "#FFFFFF",
      modal: true,
      leftNavButton: Ti.UI.createButton({
        title: L("tv_close")
      }),
      rightNavButton: Ti.UI.createButton({
        title: L("tv_post")
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

  timelineCompose = function(timeline) {
    var callback, getJSON;
    getJSON = require("/utils").getJSON;
    callback = function(json) {
      return timeline.data = json.results.map(function(tweet) {
        var row, userTweet;
        row = Ti.UI.createTableViewRow({
          className: "tweet",
          height: Ti.UI.SIZE,
          backgroundColor: "#FFFFFF"
        });
        row.add(Ti.UI.createLabel({
          text: tweet.from_user_name,
          font: {
            fontWeight: "bold",
            fontStyle: "normal"
          },
          color: "#333333",
          backgroundColor: "#FFFFFF",
          top: 6,
          left: 68,
          width: Ti.UI.SIZE,
          height: Ti.UI.SIZE
        }));
        userTweet = Ti.UI.createLabel({
          text: tweet.text,
          font: {
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal"
          },
          color: "#363636",
          backgroundColor: "#FFFFFF",
          top: 24,
          bottom: 6,
          left: 68,
          right: 10,
          width: Ti.UI.SIZE,
          height: Ti.UI.SIZE
        });
        userTweet.addEventListener("click", function(e) {
          var bindFunction, singleTweet;
          bindFunction = arguments.callee;
          userTweet.removeEventListener("click", bindFunction);
          singleTweet = Ti.UI.createWindow({
            title: "Individual Tweet",
            barColor: L("appcColor"),
            backgroundColor: "#FFFFFF"
          });
          singleTweet.addEventListener("close", function(e) {
            return userTweet.addEventListener("click", bindFunction);
          });
          return globals.currentTab.open(singleTweet);
        });
        row.add(userTweet);
        row.add(Ti.UI.createImageView({
          image: tweet.profile_image_url,
          hires: true,
          preventDefaultImage: true,
          backgroundColor: "#FFFFFF",
          top: 10,
          bottom: 6,
          left: 10,
          width: Ti.UI.SIZE,
          height: Ti.UI.SIZE
        }));
        return row;
      });
    };
    getJSON("GET", "http://search.twitter.com/search.json?q=%23titaniumjp", null, callback);
  };

  return TwitterView;

})();

module.exports = TwitterView;
