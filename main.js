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
        case '文本':
            weixin.sendTextMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                content: new Date() + data.content
            });
            break;
        case '图片':
            weixin.sendImageMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                mediaId: 'SpziRkA-oI4FdoP1dopPEVFUfzw3k7hywVGrLFqJ6DkHLtgnvMlqodCYiqY1otMc'
            });
            break;
        case '视频':
            weixin.sendVideoMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                mediaId: 'mWw5OqtxNP8YRjrEpiBNtKFp45w1fs5K4XOO9mtfaFtRe_D0omz623E7Dxu1v-3M',
                title: '这是视频消息的标题',
                description: '这是视频消息的描述'
            });
            break;
        case '音乐':
            weixin.sendMusicMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                title: '这是音乐的标题',
                description: '这是音乐的描述',
                musicUrl: 'http://sc.111ttt.com/up/mp3/347508/FCAF062BECD1C24FAED2A355EF51EBDD.mp3',
                HQMusicUrl: 'http://sc.111ttt.com/up/mp3/347508/FCAF062BECD1C24FAED2A355EF51EBDD.mp3',
                thumbMediaId: 'oqd3Be5QjUQDdhmwpvT6KJaLAvXEQZDKsjd_L7E-Ix8xv-83MSVBTdXZddTh1U4q'
            });
            break;
        case '图文':
            weixin.sendNewsMsg({
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                articles: [{
                    title: '这是第一条图文消息',
                    description: '这是第一个图文消息描述',
                    picUrl: 'https://www.baidu.com/img/bd_logo1.png',
                    url: 'http://www.baidu.com'
                }, {
                    title: '这是第一条图文消息',
                    description: '这是第一个图文消息描述',
                    picUrl: 'https://www.baidu.com/img/bd_logo1.png',
                    url: 'http://www.baidu.com'
                }, {
                    title: '这是第一条图文消息',
                    description: '这是第一个图文消息描述',
                    picUrl: 'https://www.baidu.com/img/bd_logo1.png',
                    url: 'http://www.baidu.com'
                }]
            });
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
    weixin.sendImageMsg({
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        mediaId: data.mediaId
    });
});

// 语音消息
weixin.on('voiceMsg', function(data) {
    console.log(data);
    weixin.sendVoiceMsg({
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
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
        mediaId: 'mWw5OqtxNP8YRjrEpiBNtKFp45w1fs5K4XOO9mtfaFtRe_D0omz623E7Dxu1v-3M',
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

// 添加客服帐号
// weixin.addKFAccount({
//     "kf_account": "test1@gmail.com",
//     "nickname": "客服1",
//     "password": "123456"
// }, function(data) {
//     console.log(data);
// });

// 获取所有客服账号
// weixin.getKFList(function(data) {
//     console.log(data);
// });


// weixin.sendCustomMsg({
//     'touser': 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
//     'msgtype': 'text',
//     'text': {
//         'content': 'Hello world'
//     }
// });

// 自定义菜单查询接口
// weixin.getMenu(function(data) {
// console.log(data);
// });

// 自定义菜单删除接口
// weixin.deleteMenu(function(data) {
// console.log(data);
// });

// 自定义菜单创建接口
var menuObj = {
    "button": [{
        "name": "扫码",
        "sub_button": [{
            "type": "scancode_waitmsg",
            "name": "扫码带提示",
            "key": "rselfmenu_0_0",
            "sub_button": []
        }, {
            "type": "scancode_push",
            "name": "扫码推事件",
            "key": "rselfmenu_0_1",
            "sub_button": []
        }]
    }, {
        "name": "发图",
        "sub_button": [{
            "type": "pic_sysphoto",
            "name": "系统拍照发图",
            "key": "rselfmenu_1_0",
            "sub_button": []
        }, {
            "type": "pic_photo_or_album",
            "name": "拍照或者相册发图",
            "key": "rselfmenu_1_1",
            "sub_button": []
        }, {
            "type": "pic_weixin",
            "name": "微信相册发图",
            "key": "rselfmenu_1_2",
            "sub_button": []
        }]
    }, {
        "name": "发送位置",
        "type": "location_select",
        "key": "rselfmenu_2_0"
    }]
};
// weixin.createMenu(menuObj, function(data) {
//     console.log(data);
// });

// 获取自定义菜单配置接口
// weixin.getCurrentSelfMenuInfo(function(data) {
//     console.log(data);
// });

// weixin.getCurrentAutoReplyInfo(function(data) {
//     console.log(data);
// });

// 获取素材总数
weixin.getMaterialCount(function(data) {
    console.log(data);
});









app.listen(80);
