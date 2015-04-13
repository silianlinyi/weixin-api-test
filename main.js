'use strict';

var express = require('express');
var Weixin = require('weixin-apis');
var app = express();

app.get('/', function(req, res) {
    res.end("Hello world");
});

// 配置参数
var weixin = new Weixin({
    app: app,
    appid: 'wxc2d82aa2e44a2faa',
    appsecret: '9ef7661014dd0dbd098b483fee803d58',
    token: 'weixin'
});

// weixin.getAccessToken(function(data) {
//     console.log(data);
// });

// 获取微信服务器IP地址
// weixin.getWeixinIPList(function(data) {
//     console.log(data);
// });

// 接收所有普通消息
weixin.on('allMsg', function(data) {
    console.log('allMsg');
    console.log(data);
});

// 文本消息
weixin.on('textMsg', function(data) {
    console.log(data);
    switch (data.content) {
        case 'text':
            weixin.sendTextMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                content: data.content
            });
            break;
        case 'music':
            weixin.sendMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                msgType: data.msgType,
                
            })
            break;
        default:
            weixin.sendTextMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                content: data.content
            });
    }

});

// 图片消息
weixin.on('imageMsg', function(data) {
    console.log(data);
    weixin.sendMsg({
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        msgType: 'image',
        mediaId: data.mediaId
    });
});

// 语音消息
weixin.on('voiceMsg', function(data) {
    console.log(data);
    weixin.sendMsg({
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        msgType: 'voice',
        mediaId: data.mediaId
    });
});

// 视频消息
weixin.on('videoMsg', function(data) {
    console.log(data);
    weixin.sendMsg({
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        msgType: 'video',
        mediaId: 'LmDxeclZTcY-gO81eN_Bneu6V27twoBqnagAId-3mTFu7iU6eCiNMnwr5BdNOVJZ',
        title: '这是视频消息的标题',
        description: '这是视频消息的描述'
    });
});

// 小视频消息
weixin.on('shortvideoMsg', function(data) {
    console.log(data);
});

// 地理位置消息
weixin.on('locationMsg', function(data) {
    console.log(data);
});

// 链接消息
weixin.on('linkMsg', function(data) {
    console.log(data);
});

// 接收所有事件推送
weixin.on('allEventMsg', function(data) {
    console.log('allEventMsg');
    console.log(data);
});

// 关注事件监听
weixin.on('subscribeEventMsg', function(data) {
    console.log(data);
});

// 取消关注事件监听
weixin.on('unsubscribeEventMsg', function(data) {
    console.log(data);
});

// 上报地理位置事件
weixin.on('LOCATIONEventMsg', function(data) {
    console.log(data);
});

// 点击菜单拉取消息时的事件推送
weixin.on('CLICKEventMsg', function(data) {
    console.log(data);
});

// 点击菜单跳转链接时的事件推送
weixin.on('VIEWEventMsg', function(data) {
    console.log(data);
});













app.listen(80);
