'use strict';

var express = require('express');
var weixin = require('weixin-apis');
var app = express();

weixin.configurate({
    app: app,
    token : 'weixin',
    appid : 'wxc2d82aa2e44a2faa',
    secret : '9ef7661014dd0dbd098b483fee803d58'
});

weixin.on('textMsg', function(data) {
    var msg = {
        toUserName : data.fromUserName,
        fromUserName : data.toUserName,
        msgType : 'text',
        content : data.content
    };
    weixin.sendMsg(msg);
});

app.listen(80);