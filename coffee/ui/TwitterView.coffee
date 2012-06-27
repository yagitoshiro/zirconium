###
Zirconium - Unofficial Titanium Japan Community Apps
TwitterView Class
###

class TwitterView
    constructor: () ->
        # Instance Variables
        @win = Ti.UI.createWindow
            title: "Twitter"
            backgroundColor: "#FFFFFF"
        # Private Variables
        writeButton = Ti.UI.createButton
            systemButton: Ti.UI.iPhone.SystemButton.COMPOSE
        writeButton.addEventListener "click", (e) ->
            writeButton.removeEventListener "click", arguments.callee
            (twitCompose(writeButton, arguments.callee)).open()
            return
        @win.rightNavButton = writeButton
        return
    getWindow: () ->
        return @win

    # [Function] Tweet Compose
    twitCompose = (elements, callback) ->
        win = Ti.UI.createWindow
            title: "新規ツイート"
            backgroundColor: "#FFFFFF"
            modal: true
            leftNavButton: Ti.UI.createButton
                title: "閉じる"
            rightNavButton: Ti.UI.createButton
                title: "送信"
        win.addEventListener "close", (e) ->
            elements.addEventListener "click", callback
        win.leftNavButton.addEventListener "click", (e) ->
            win.close()
        return win

# Modularization
module.exports = TwitterView