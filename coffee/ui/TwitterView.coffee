###
Zirconium - Unofficial Titanium Japan Community Apps
TwitterView Class
###

class TwitterView
    constructor: () ->
        # Instance Variables
        @win = Ti.UI.createWindow
            title: L("tv_twitter")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
            tabBarHidden: true if isiPhone
        # New Tweet Button
        writeButton = Ti.UI.createButton
            systemButton: Ti.UI.iPhone.SystemButton.COMPOSE
        writeButton.addEventListener "click", (e) ->
            writeButton.removeEventListener "click", arguments.callee
            (twitCompose(writeButton, arguments.callee)).open()
            return
        @win.rightNavButton = writeButton
        # iPhone Custom Tab Bar
        if isiPhone
            tabBar = Ti.UI.createImageView
                image: "/images/iPhoneCustomTabBar.png"
                hires: true
                left: 0
                bottom: 0
                zIndex: 999
            @win.add tabBar
        # Timeline View
        timeline = Ti.UI.createTableView
            backgroundColor: "#FFFFFF"
            data: []
        @win.add timeline
        timelineCompose timeline
        return
    getWindow: () ->
        return @win

    # [Function] Tweet Compose
    twitCompose = (elements, callback) ->
        win = Ti.UI.createWindow
            title: L("tv_tweet")
            barColor: L("appcColor")
            backgroundColor: "#FFFFFF"
            modal: true
            leftNavButton: Ti.UI.createButton
                title: L("tv_close")
            rightNavButton: Ti.UI.createButton
                title: L("tv_post")
        win.addEventListener "close", (e) ->
            elements.addEventListener "click", callback
        win.leftNavButton.addEventListener "click", (e) ->
            win.close()
        return win

    # [Function] Timeline Composer
    timelineCompose = (timeline) ->
        getJSON = require("/utils").getJSON
        callback = (json) ->
            timeline.data = json.results.map (tweet) ->
                row = Ti.UI.createTableViewRow
                    className: "tweet"
                    height: Ti.UI.SIZE
                    backgroundColor: "#FFFFFF"
                # User name
                row.add Ti.UI.createLabel
                    text: tweet.from_user_name
                    font:
                        fontWeight: "bold"
                        fontStyle: "normal"
                    color: "#333333"
                    backgroundColor: "#FFFFFF"
                    top: 6
                    left: 68
                    width: Ti.UI.SIZE
                    height: Ti.UI.SIZE
                # User tweet
                userTweet = Ti.UI.createLabel
                    text: tweet.text
                    font:
                        fontSize: 12
                        fontWeight: "normal"
                        fontStyle: "normal"
                    color: "#363636"
                    backgroundColor: "#FFFFFF"
                    top: 24
                    bottom: 6
                    left: 68
                    right: 10
                    width: Ti.UI.SIZE
                    height: Ti.UI.SIZE
                userTweet.addEventListener "click", (e) ->
                    bindFunction = arguments.callee
                    userTweet.removeEventListener "click", bindFunction
                    singleTweet = Ti.UI.createWindow
                        title: "Individual Tweet"
                        barColor: L("appcColor")
                        backgroundColor: "#FFFFFF"
                    singleTweet.addEventListener "close", (e) ->
                        userTweet.addEventListener "click", bindFunction
                    globals.currentTab.open singleTweet
                row.add userTweet
                # User icon
                row.add Ti.UI.createImageView
                    image: tweet.profile_image_url
                    hires: true
                    preventDefaultImage: true
                    backgroundColor: "#FFFFFF"
                    top: 10
                    bottom: 6
                    left: 10
                    width: Ti.UI.SIZE
                    height: Ti.UI.SIZE
                return row
        getJSON("GET",
                "http://search.twitter.com/search.json?q=%23titaniumjp",
                null,
                callback)
        return

# Modularization
module.exports = TwitterView