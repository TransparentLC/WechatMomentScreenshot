function loadScript(url) {
    var el = document.createElement('script');
    el.src = url;
    document.body.appendChild(el);
}

function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.onload = function () { callback(xhr.responseText) };
    xhr.send();
}

location.hash = '';

mdui.confirm(''
        + '<div class="mdui-typo">'
        +     '<p>'
        +         '使用本工具<strong>不需要强制关注任何公众号或转发任何内容到朋友圈</strong>。如果你发现有公众号存在类似<strong>“关注○○，发送○○，转发○○到朋友圈领取○○”</strong>的行为，请对此类<strong>诱导行为</strong>进行<strong>投诉</strong>。'
        +         '<a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl#3dot3_3" target="_blank">什么是诱导行为？</a>'
        +     '</p>'
        +     '<p>请勿以<strong>“关注○○，发送○○获取工具地址”</strong>或类似方式使用本工具为自己的公众号引流，或将这个工具和源代码的链接通过“关注可见”、“登录可见”、“回复可见”等方式隐藏。如果想要推荐的话，请<strong>直接在正文里留下地址或二维码</strong>～</p>'
        +     '<p>源代码<strong>免费</strong>发布于 <a href="https://github.com/TransparentLC/WechatMomentScreenshot" target="_blank">https://github.com/TransparentLC/WechatMomentScreenshot</a>，如果你通过付费途径获取了源代码，你有权给予差评并要求对方退款。</p>'
        +     '<p>本工具生成的截图，仅可用于<strong>个人应付各类强制要求转发朋友圈的情形</strong>，请勿<strong>批量生成截图</strong>或将截图用于<strong>造谣诽谤、微商宣传、灰色产业、数字藏品</strong>等非法或令人反感的用途，请勿用于商业用途，<strong>二次部署请勿删除原作者相关信息</strong>。</p>'
        +     '<p>当你生成截图时，你应该确定你可以接受向他人发送该截图将会带来的后果和影响，否则请不要使用本工具并离开当前页面。</p>'
        +     '<p>本工具谢绝肖战粉丝（<a href="https://w.url.cn/s/AC2atup" target="_blank">#我是普通人,我讨厌肖战#</a>）和<a href="https://m.weibo.cn/detail/4777390159170190" target="_blank">彳亍的“阿苇岛匿名版”(　^ω^)</a> 用户（请移步 A 岛正统继承者 <a href="https://nmbxd.com/" target="_blank">X 岛</a>）使用。</p>'
        + '</div>',
    '在开始使用之前……',
    function () {},
    function () { location.href = 'about:blank' },
    {
        modal: true,
        closeOnEsc: false,
        history: false,
    }
);

mdui.alert(''
        + '<div class="mdui-typo">'
        + '<p><strong>“极客星球/宇宙领域科技”</strong>在自行部署本工具时，<strong>抹去了原作者和 repo 的相关信息</strong>，并且通过缩小字号、设置隐藏样式等方式<strong>与相关的检测代码进行恶意对抗</strong>（<a href="https://web.archive.org/web/20230624084502/http://www.jikexq.cc/p/" target="_blank">Wayback Machine 快照</a>）。</p>'
        + '<p><img src="https://cc-im-kefu-cos.7moor-fs1.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/BaY_kUl4.png"></p>'
        + '<p>此外，该网站<strong>完全复制了原作者的打赏页面及页面上记录的打赏留言内容</strong>（<a href="https://web.archive.org/web/20230624084633/http://www.jikexq.cc/donate/" target="_blank">Wayback Machine 快照</a>），同样替换了<strong>包括收款码在内</strong>的原作者相关信息（左为原版，右为复制品）。</p>'
        + '<p><img src="https://cc-im-kefu-cos.7moor-fs1.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/qN4r10oS.png"></p>'
        + '<p>本工具的原作者在此声明：原作者与“极客星球/宇宙领域科技”<strong>不存在任何关联</strong>，对此类一边自称“写免费好用的新功能”，实际上却在进行着<strong>无断转载</strong>的行为表示<strong style="color:red">强烈谴责</strong>，请“极客星球/宇宙领域科技”<strong style="color:red">立即停止此类行为</strong>。</p>'
        + '<p>在“极客星球/宇宙领域科技”删除相关页面前，此弹窗将一直保留。</p>'
        + '</div>',
    'Hall of Shame',
    function () {},
    {
        modal: true,
        closeOnEsc: false,
        history: false,
    }
);

// 你没看错，这个就是远程控制的黑名单检测
// 有人想要对抗删除原作者信息和源代码链接的检测代码，那我只能再加一些东西了
(function () {
    var _0x21f88c=_0x4211;(function(_0x378a80,_0x2395fe){var _0x4b9627=_0x4211,_0x111a75=_0x378a80();while(!![]){try{var _0x1f7551=-parseInt(_0x4b9627('0x147','6wpg'))/0x1+-parseInt(_0x4b9627('0x153','Y3gW'))/0x2*(-parseInt(_0x4b9627('0x139','0bQb'))/0x3)+-parseInt(_0x4b9627('0x129','F@4q'))/0x4*(-parseInt(_0x4b9627('0x125','2nA7'))/0x5)+parseInt(_0x4b9627('0x12f','[*cL'))/0x6*(-parseInt(_0x4b9627('0x157','FmF8'))/0x7)+-parseInt(_0x4b9627('0x12d','[*cL'))/0x8+parseInt(_0x4b9627('0x12b','E3oO'))/0x9*(-parseInt(_0x4b9627('0x138','Gg40'))/0xa)+parseInt(_0x4b9627('0x15b','aJy7'))/0xb*(parseInt(_0x4b9627('0x150','@L46'))/0xc);if(_0x1f7551===_0x2395fe)break;else _0x111a75['push'](_0x111a75['shift']());}catch(_0x4b4d39){_0x111a75['push'](_0x111a75['shift']());}}}(_0x3ef6,0x72c16));var _0x1428d8=(function(){var _0x1cce87=!![];return function(_0x1145ce,_0x17565e){var _0x1a15a4=_0x1cce87?function(){var _0x3accde=_0x4211;if(_0x17565e){var _0x326649=_0x17565e[_0x3accde('0x143','n)8s')](_0x1145ce,arguments);return _0x17565e=null,_0x326649;}}:function(){};return _0x1cce87=![],_0x1a15a4;};}()),_0x63959f=_0x1428d8(this,function(){var _0x5af8fe=_0x4211,_0x13c3ce;try{var _0x2c1230=Function(_0x5af8fe('0x140','$&kj')+_0x5af8fe('0x15c','Gg40')+');');_0x13c3ce=_0x2c1230();}catch(_0x2474b8){_0x13c3ce=window;}var _0x249386=_0x13c3ce[_0x5af8fe('0x12a','pE(y')]=_0x13c3ce[_0x5af8fe('0x13d','52O&')]||{},_0x27d05c=[_0x5af8fe('0x14f','P7zD'),_0x5af8fe('0x126','2nA7'),_0x5af8fe('0x148','aJy7'),_0x5af8fe('0x135','6ENc'),_0x5af8fe('0x12e','9(NJ'),_0x5af8fe('0x14e','[lnt'),_0x5af8fe('0x13c','4T4e')];for(var _0x509c82=0x0;_0x509c82<_0x27d05c[_0x5af8fe('0x167','4T4e')];_0x509c82++){var _0x4f293d=_0x1428d8[_0x5af8fe('0x149','Y3gW')][_0x5af8fe('0x142','^zMp')][_0x5af8fe('0x14a','OpUZ')](_0x1428d8),_0x11ce84=_0x27d05c[_0x509c82],_0x2cdcc9=_0x249386[_0x11ce84]||_0x4f293d;_0x4f293d[_0x5af8fe('0x14b','KZb$')]=_0x1428d8[_0x5af8fe('0x136','Gg40')](_0x1428d8),_0x4f293d[_0x5af8fe('0x160','Nevx')]=_0x2cdcc9[_0x5af8fe('0x15d','0bQb')][_0x5af8fe('0x14c','(^ZR')](_0x2cdcc9),_0x249386[_0x11ce84]=_0x4f293d;}});_0x63959f();function _0x4211(_0x4866c6,_0x51ca5c){var _0x1c1919=_0x3ef6();return _0x4211=function(_0x63959f,_0x1428d8){_0x63959f=_0x63959f-0x122;var _0x260e3e=_0x1c1919[_0x63959f];if(_0x4211['pYTORO']===undefined){var _0x3ef690=function(_0x2a6701){var _0x252480='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x469d58='',_0x1cce87='';for(var _0x1145ce=0x0,_0x17565e,_0x1a15a4,_0x326649=0x0;_0x1a15a4=_0x2a6701['charAt'](_0x326649++);~_0x1a15a4&&(_0x17565e=_0x1145ce%0x4?_0x17565e*0x40+_0x1a15a4:_0x1a15a4,_0x1145ce++%0x4)?_0x469d58+=String['fromCharCode'](0xff&_0x17565e>>(-0x2*_0x1145ce&0x6)):0x0){_0x1a15a4=_0x252480['indexOf'](_0x1a15a4);}for(var _0x13c3ce=0x0,_0x2c1230=_0x469d58['length'];_0x13c3ce<_0x2c1230;_0x13c3ce++){_0x1cce87+='%'+('00'+_0x469d58['charCodeAt'](_0x13c3ce)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1cce87);};var _0x4f3a8f=function(_0x249386,_0x27d05c){var _0x509c82=[],_0x4f293d=0x0,_0x11ce84,_0x2cdcc9='';_0x249386=_0x3ef690(_0x249386);var _0x2474b8;for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x509c82[_0x2474b8]=_0x2474b8;}for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8]+_0x27d05c['charCodeAt'](_0x2474b8%_0x27d05c['length']))%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84;}_0x2474b8=0x0,_0x4f293d=0x0;for(var _0x3465b9=0x0;_0x3465b9<_0x249386['length'];_0x3465b9++){_0x2474b8=(_0x2474b8+0x1)%0x100,_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8])%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84,_0x2cdcc9+=String['fromCharCode'](_0x249386['charCodeAt'](_0x3465b9)^_0x509c82[(_0x509c82[_0x2474b8]+_0x509c82[_0x4f293d])%0x100]);}return _0x2cdcc9;};_0x4211['IbbqAK']=_0x4f3a8f,_0x4866c6=arguments,_0x4211['pYTORO']=!![];}var _0x421140=_0x1c1919[0x0],_0x102cf3=_0x63959f+_0x421140,_0x21ae12=_0x4866c6[_0x102cf3];return!_0x21ae12?(_0x4211['DxvYnA']===undefined&&(_0x4211['DxvYnA']=!![]),_0x260e3e=_0x4211['IbbqAK'](_0x260e3e,_0x1428d8),_0x4866c6[_0x102cf3]=_0x260e3e):_0x260e3e=_0x21ae12,_0x260e3e;},_0x4211(_0x4866c6,_0x51ca5c);}function _0x3ef6(){var _0x7f942f=['WRypWP4+W6lcKZ7dV3zmW63cTbedW7RcRb/cH8oK','y8o8xZbnW4BcN8o9BSkYfSkB','i1ZcIu7cLCkUAvJdTa','W5XmiJHD','y2zWDSoKW4HwWQjPemo3gW','W4zSnxe','W4FdUeJcTM7dJmkcxmomW6pdNwekW7GdyNdcRCoNhbBdMX8','t1FcVh/dSXpdTY7cK8kAocW','jmo1W6hdUq','W4mprYKNAhHMWOSHvq','DNagW6G','dWTEsc3dPCoBWOxdMW','emkAW7nT','jJfwySojW4n3WR8','WOZdLSoMoGi','W7RdNSoz','m8oIzCokWPpdL38jWQS','q2yPptBcVbhdP8k3WQZcUa','W6rdFmoQrSk/ACkWi8oF','WPvshw4HDefFWPmS','W77dNSonmmo3FsbN','W4fUmhxdJW','WQFcS2NKVAhMI4ZORB3PLy3NMyJNVl3NQy/VVAa','WQ3dHaBdN8kyBKyuySoAW7q','WQtdJ8k8W4NdSCkDe20','r8k5W5Phv1Ka','vWBdJZOJeSokW7BcQIJcM2xdOq','FmkUWR/cR8kfW513W77dI8otWOJdVmkQ','AN4TzCoKW4HwWRnpamoSg23dJt8ru8kcWONcQ8oDW7RcGCkfW4WWDNODWQ0xW5a','zSoaW7NcIJhcIhtdUW','WQJcV8oyDa','WOaTAs7dUCo+EqVdRr0','W6HmWPrqW7pcQWqR','ymk6mmoEWQy','ut9HWPu','g8oSoSk6WRTmeCknWPJcHMZcNCkT','ECoCj8oy','WRtcTmoAFXZcTa','WRaAkCkSxCk/c8kokSol','WQBdJqPQsmoR','d8oNbmk1WPK3lqq','WQxdJSkRW5JdP8kZga','Cmo1rrJdOqW','W7rGomozWPpdPmoCwZNdJqNdMHldKHyZW7VcRSoOp1KiWR/dVHK0uh7cR2/dVMtdQM3cSmotW4/cGa','gSkrtSoeW7OSxq','wmk6E8oK','ESoLWO/dUbLoW6rqW4hcI1ZcLq','bCkrW6W','fhS/W4VcPCkZyCoDp8kRs0G','W7JcRdLYW6pcRSog','WOuScxJdUCoyFaa','qgiHBeBcHr7dKmkF','uHnsWRZdRCk8WO3cSmkAhCkew8oJ','dSkkWPVdP33cTmoBDXa','vbDuWR7cNSoiW6ZcP8klma','WOqnzMWDWPC7kCkSWO5Doa','776s55EY5lUz5zYP6l+G6l6/5P6p5BsP5ysB5PwG5OUr5y+d5lQB5y+J5lYa6igO55U35yA45l+a5Ogr772v5OQk5A6U5zYS5yEc5lUr6l685yYs5l6y55Aw6kAb5yMg55QO6ko95lMR776x5BwL6kcH5y2E5l2Z6ikZ5yU55yEj6BMe5zkQ5y2i44o7W4nmpmoK','m8k9vWyop8k7p8ovkSoMW4BdOSkmW4FdOIblaSoSWOJdHuVdTMGAW557W6xdVW4KkqxdQYJdMSkHv3BdG8obimkGW6pdQ8onW7rKy17cILuPW4ueW6lcRSk7W5aVWPJcGq','WPWqf+IUREs+JUwTGUwoKUs9MEIdUUIgPow3LUMdLEE9JUEAMEMHIEMCNUwCJ+wCME+9UCoCCwmupMrbWP9othTYzmkGWQWUWR4XWQPBCwRcHCoaW5lcG8o4mCkxEXm2uSkRW7tcJ8kGW4ivW7X5W6VdJmoqtMr5WQBdQSkVW4OYW5OtWQJdQr/dOSkWWRq+WQukWOZdHYxdP8ofcSojwhrCvKG/u8o9WQ/dJ8kdA07cQYtdHCksqmkHWPddTKfsjw3cS8k5W6bPDgyIW5q','xmk2sWjnoCoTFSoolCkVWPtdVmosWP3cPgPwd8o0WPlcHvS','DvrcWOXs','C2PTyG','WRpcTCofzbpcSqyk','kdi3pSkYWPzlWQbChSo8gG','iCkCWPRcRc3cQ1xdMmkp','dCkZuG','W51Uoxi','WR7dMGvUwq','WQ/dJ8kHW47dSmkqgW','W7/cK8o/W6/dSCk2muZdOW','m8k+b2e'];_0x3ef6=function(){return _0x7f942f;};return _0x3ef6();}if(location[_0x21f88c('0x137','bk%3')]!==_0x21f88c('0x152','44*Y')&&location[_0x21f88c('0x154','P7zD')]!==_0x21f88c('0x146','XUUA')){window[_0x21f88c('0x13f','bkZ[')][_0x21f88c('0x164','hlul')]=_0x21f88c('0x132','9wme');var xhr=new XMLHttpRequest();xhr[_0x21f88c('0x13b','E3oO')](_0x21f88c('0x128','MWnk'),_0x21f88c('0x124','S0JU')),xhr[_0x21f88c('0x165','bk%3')]=function(){var _0x143f67=_0x21f88c,_0x3465b9=xhr[_0x143f67('0x144','Gg40')][_0x143f67('0x145','E3oO')]()[_0x143f67('0x155','E3oO')]('\x0a')[_0x143f67('0x13a','9wme')](function(_0x17047e){var _0x493323=_0x143f67;return _0x17047e[_0x493323('0x162','F@4q')]();});_0x3465b9[_0x143f67('0x122','52O&')](location[_0x143f67('0x168','k6r!')])!==-0x1&&mdui[_0x143f67('0x161','@L46')](''+_0x143f67('0x134','9wme')+_0x143f67('0x156','pE(y')+location[_0x143f67('0x158','52O&')]+_0x143f67('0x131','pE(y')+_0x143f67('0x133','Y3gW')+_0x143f67('0x123','k!%T'),function(){},{'modal':!![],'closeOnEsc':![],'closeOnConfirm':![],'history':![]});},xhr[_0x21f88c('0x15e','bk%3')]();}
})();
/*
if (location.hostname !== 'akarin.dev' && location.hostname !== 'transparentlc.github.io') {
    window.atob.btoa = 'Source: https://github.com/TransparentLC/WechatMomentScreenshot';
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://i.akarin.dev/wms-blacklist.txt');
    xhr.onload = function () {
        var blacklist = xhr.responseText.trim().split('\n').map(function (e) {return e.trim()});
        if (blacklist.indexOf(location.hostname) !== -1) {
            mdui.alert(''
                    + '<div class="mdui-typo">'
                    + '<p>你所访问的网站（' + location.hostname + '）由于在转载本工具时抹去了原作者相关信息，或存在其他违反使用规则的行为，已被原作者列入黑名单。</p>'
                    + '<p>请保存原作者自己部署的页面地址：<a href="https://akarin.dev/WechatMomentScreenshot/">https://akarin.dev/WechatMomentScreenshot/</a></p>'
                    + '</div>',
                function () {},
                {
                    modal: true,
                    closeOnEsc: false,
                    closeOnConfirm: false,
                    history: false,
                }
            );
        }
    };
    xhr.send();
}
*/

if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) loadScript('https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/fuckWechat.min.js');

if (!window.Promise) loadScript('https://cdn.jsdelivr.net/npm/promise-polyfill/dist/polyfill.min.js');

var avatarURL = [];

function loadAvatarSet(s, n) {
    avatarURL = s.split('\n').filter(Boolean).map(function (e) {
        return e.trim();
    });
    if (n) mdui.snackbar('加载成功，头像库中一共有 ' + avatarURL.length + ' 个头像');
}
var emoticon = [];
xhrGet('https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/emoticon.json', function (result) { emoticon = JSON.parse(result) });

// 读取配置
var configDefault = {
    name: 'A 营销号免费广告姬',
    text: '很实用的教程[微笑]\n需要收集五个赞 谢谢大家啦～(　^ω^)',
    location: '',
    app: '',
    height: 1920,
    uiWhite: false,
    firstAvatar: false,
    appIcon: false,
    statusIcon: true,
    statusIos: false,
    avatarSet: '',
};
var config;
var avatarFile;
try {
    config = JSON.parse(localStorage.getItem('config')) || {};
} catch (error) {
    config = {};
}
for (var k in configDefault) {
    if (config[k] === undefined) config[k] = configDefault[k];
}
document.getElementById('configName').value = config.name;
document.getElementById('configText').value = config.text;
document.getElementById('configLocation').value = config.location;
document.getElementById('configApp').value = config.app;
document.getElementById('configHeight').value = config.height;
document.getElementById('configUIWhite').checked = config.uiWhite;
document.getElementById('configFirstAvatar').checked = config.firstAvatar;
document.getElementById('configTopBarAppIcons').checked = config.appIcon;
document.getElementById('configTopBarStatusIcons').checked = config.statusIcon;
document.getElementById('configTopBarIos').checked = config.statusIos;
document.getElementById('avatar').style.backgroundImage = 'url(' + (localStorage.getItem('avatar') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAW9yTlQBz6J3mgAAAddQTFRFAAAA7u7u7+/v7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u9/f39vb29fX18/Pz8vLy8fHx7+/v7u7u7e3t7Ozs6+vr6urq6enp6Ojo5+fn5ubm5eXl5OTk4+Pj4uLi4eHh4ODg3t7e3d3d3Nzc2tra2dnZ2NjY2NjX19fX1tbW1dXV1dXU1NTU09PT0dHR0dHQ0NDQz8/Pzc3NzM3MzMzMysrKycjIyMjIx8fHxsbGwsLCwcHBv7+/vr++vr6+vb29vLy8u7u7ubm5uLm4uLi3t7i3tra2tbW1tLW0tLS0tLSzs7SztLOzs7Ozs7OysrOys7KysrKysrKxsbKxsbGxsbGwsLGwsbCwsLCwsLCvr7Cvr6+vr6+urq+ur66urq6urq6tra6trq2tra2tra2srK2sraysrKysq6yrq6urq6uqqquqqqqqqqqpqaqpqampqamoqKmoqaioqKiop6inqKenp6enp6empqempqampqalpaalpaWlpaWkpaSkpKSkpKOjo6OjoqOioqKioqKhoaKhoqGhoaGhoKGgoKCgoKCfn6CfoJ+fn5+fnp6enp6dnZ2dnZ2cnZycnJycnJybm5ybm5ubm5uampuampqamZqZl5eXTIgxYwAAAAx0Uk5TADw/eLHAw+Tn8PP85v07qgAAAs1JREFUeNpiGKmAiYUd0I5dqLXNBQAY/nVax93d3eYeqaWaNnTVLASHBHd3d7jXWYNDaDhn3u8C3id6LAKwu//9c+r9GwGlf0+u7yEc8OHfAngnAlL/C+B9WOB9AYyAVhgMg78SmIf2Hq32NiRCAlPYg5Wp8Ym59YOGSBhg9ubCQOsHn5/pHlt/HwMOZq5MtFIWo85I2P09y0QkKBg1MM7YjdqvEVTHcg0o+GiWtei0QkaqZyUJDEyY7Sa/esEI3+hzDRBYN+YjtGeytE5FAYFkpxU7m94zVqgBAKMnGAI7F8k9VgOAGSNu3XnQ1KxXAoDFfRR2Pn2gUwEAlnLkBVDn4eQAYEmHBT2fzt0BAuZ1kJdACgRM5S6B/pcgYCRLXQAJpg7kpUQ8devOg5bWDCUImMMS50HKIleDgJGEEz/rGfxlcrDhq4A+e4m4TadUgYERTyjdKUjQaXINIBj7kjwRDe5imRp4kop9ZsGCnt5aJFNBmEYzPPogaMEEDxDMbTYFQUdAHgEDLG+zBEGqVwUBTKh4ywpXSHJ16YBgVDl1uMA36pGvmQJjW1xt3O3BrNfrGzODLS4TFgRxa4CfXNt+l3c7MI/dWxzppBvN+s+eIJoc/vah+d3WfOlgUdv2TG+Ty3qqfQ3Tmxub+OltJlsamNO+NcUzDhOOXA43OGh+eofMDB2Me7s7xflJA4pcHWogGX5m/0VciGDlwkIvI3AiZP/CfEUoYDy5PsY6BU6EJKiWsXUm7UYweWKec5tx5OZws7trar3+BjBmeLKF1KFIKKE6khlYbY0SBWtnms5fnngGV9dSlSjo7LIhUsKdPKESA/tpHJGUgR5QiIIuiSDiGpaLgW4XIhWkZWLgG+lX+Er0CqtpiSDurxJ9holdXqekvHyMSgyM0Mgkpwnv6MPgTwneh+U9gH9kCv9QF/ax8+nB+D1Q7Z5wMP4H9gmblMKHXkdteAAAAABJRU5ErkJggg') + ')';
document.getElementById('configAvatarSet').value = config.avatarSet;

xhrGet(config.avatarSet || 'https://i.akarin.dev/wms-avatar/avatar-stable.txt', function (result) { loadAvatarSet(result) });

//输入微信文章的链接，通过后端自动获取文章标题和文章封面
function getArticleInfo() {
    var t = Date.now();
    mdui.confirm(
        '<div class="mdui-typo">'
        +     '<p><strong style="color:red">（使用本功能前，请阅读使用须知至少 5 秒）</strong></p>'
        +     '<p>本工具不得用于虚拟货币/数字藏品/数字艺术/数字文创/数字潮玩/NFT/……相关内容。</p>'
        +     '<p>如果你提交的文章链接经关键词检测涉及以上内容，将不会返回自动获取标题的结果。在进一步确认核实后，<strong>你的 IP 地址（段）将会被封禁</strong>。</p>'
        +     '<p>如果仍然有人继续尝试违反这一规则，不排除考虑关闭这一功能的可能性。</p>'
        +     '<p><strong>我们已经警告过了。</strong></p>'
        +     '<hr>'
        +     '<blockquote>'
        +         '<p>账号涉及虚拟货币相关的发行、交易与融资等内容，例如提供交易入口、指引、发行渠道引导等，包括但不限于以下类型：</p>'
        +         '<p>……</p>'
        +         '<p>账号提供与数字藏品二级交易相关的服务或内容的，也按照本条规范进行处理。</p>'
        +         '<p>一经发现此类违规行为，微信公众平台将根据违规严重程度，对违规公众账号予以责令限期整改及限制账号部分功能直至永久封号的处理。”</p>'
        +         '<p>——<a href="https://mp.weixin.qq.com/mp/opshowpage?action=newoplaw#t3-3-24" target="_blank">《微信公众平台运营规范》3.24 虚拟货币及数字藏品交易行为</a></p>'
        +     '</blockquote>'
        +     '<p>在添加相关限制前，将这个功能用于数字藏品相关的请求数占到了三分之一甚至更多 (　^ω^)</p>'
        + '</div>',
        '使用须知',
        function () {
            if (Date.now() - t < 5000) {
                return mdui.snackbar('请阅读使用须知至少 5 秒');
            }
            var requestDialog = new mdui.Dialog('#request');
            mdui.prompt('公众号文章链接（请勿提交数字藏品相关内容）', function (value) {
                var xhr = new XMLHttpRequest;
                xhr.open('GET', 'https://i.akarin.dev/wmsproxy/?url=' + encodeURIComponent(value)); //获取标题和封面的服务器
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var result = JSON.parse(xhr.responseText);
                        document.getElementById('requestAction').innerText = 'OK';

                        if (requestDialog.getState() == 'opening' || requestDialog.getState() == 'opened') {
                            if (typeof(result) != 'undefined' && result.success) {
                                document.getElementById('configArticleTitle').value = result.title;
                                document.getElementById('articleTitle').innerText = result.title;
                                document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + result.cover + '\")';
                                document.getElementById('requestResult').innerText = '获取成功！(ゝ∀･)';
                                document.getElementById('requestResultContent').innerHTML = '标题：' + result.title + '<br>封面：<a target="_blank" href="' + result.cover + '">点此查看</a>';
                            } else {
                                document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                                document.getElementById('requestResultContent').innerHTML = '输入的链接是否为微信公众号文章？<br>（链接通常以 <code>https://mp.weixin.qq.com/</code> 作为开头）';
                            }
                        }
                    } else {
                        document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                        document.getElementById('requestResultContent').innerHTML = '无法连接到服务器。';
                    }
                    requestDialog.handleUpdate();
                }
                xhr.send();
                document.getElementById('requestResult').innerText = '';
                document.getElementById('requestAction').innerText = 'CANCEL';
                document.getElementById('requestResultContent').innerHTML = '<div class="mdui-valign"><div class="mdui-spinner"></div><span class="mdui-m-l-2">获取中…… (oﾟωﾟo)</span></div>';
                mdui.updateSpinners();
                requestDialog.open();
            }, function () {});
        },
        function () {},
        {
            history: false,
            modal: true,
        },
    );
}

//删除所有发表的九宫格图片
function clearMultiImage() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('image' + i).style.backgroundImage = '';
    }
}

//将时间转换为微信中显示的格式
function getTimeString(currentDate, specificDate) {
    var cd = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000 - (currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    var sd = new Date(specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000 - (specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    if (cd.getTime() == sd.getTime()) {
        return ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else if (cd.getTime() - sd.getTime() == 60 * 60 * 24 * 1000) {
        return '昨天 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else {
        return specificDate.getFullYear() + '年' + (specificDate.getMonth() + 1) + '月' + specificDate.getDate() + '日 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    }
}

//复制短链接
function copyGitLink() {
    document.getElementById('gitLink').style.display = 'block';
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('gitLink'));
    var selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('Copy');
    selection.removeAllRanges();
    mdui.snackbar({
        message: '已复制到剪贴板～( っ*\'ω\'*c)'
    });
    document.getElementById('gitLink').style.display = 'none';
}

if (document.getElementById('shareResourceCopy')) {
    document.getElementById('shareResourceCopy').onclick = function () {
        var el = document.createElement('div');
        el.style.opacity = 0;
        el.innerText = 'https://wj.qq.com/s2/12913387/8254/';
        document.body.appendChild(el);
        var range = document.createRange();
        range.selectNodeContents(el);
        var selection = document.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('Copy');
        selection.removeAllRanges();
        mdui.snackbar({
            message: '已复制问卷链接～( っ*\'ω\'*c)'
        });
        document.body.removeChild(el);
    };
}

var commentList = [];

//添加评论
function addComment(avatar, name, content, date, reply) {
    commentList.push({
        avatar,
        name,
        content,
        date,
        reply,
    });

    var tr = document.createElement('tr');
    tr.innerHTML = '<th>' + commentList.length + '</th><th>' + name + (reply ? ('（回复' + reply + '）') : '') + '</th><th>' + content + '</th><th>' + date.toLocaleString() + '</th>';
    document.getElementById('configCommentList').append(tr);
}

//删除（最后一条）评论
function removeComment() {
    if (commentList.length) {
        commentList.pop();
        document.getElementById('configCommentList').removeChild(document.getElementById('configCommentList').lastChild);
    }
}

//替换表情文字和换行符为对应的HTML标签
function emoticonReplace(text) {
    text = text.replace(/\r?\n/g, '<br>');
    for (var i = 0; i < emoticon.length; i++) {
        text = text.replace(new RegExp(emoticon[i].name, 'g'), '<img class="emoticon" src="' + emoticon[i].URL + '">');
    }
    return text;
}

//生成随机姓名，数据来自于faker.js
//https://github.com/Marak/faker.js/blob/master/lib/locales/zh_CN/name/index.js
function randomName() {
    var firstName = ["王","李","张","刘","陈","杨","黄","吴","赵","周","徐","孙","马","朱","胡","林","郭","何","高","罗","郑","梁","谢","宋","唐","许","邓","冯","韩","曹","曾","彭","萧","蔡","潘","田","董","袁","于","余","叶","蒋","杜","苏","魏","程","吕","丁","沈","任","姚","卢","傅","钟","姜","崔","谭","廖","范","汪","陆","金","石","戴","贾","韦","夏","邱","方","侯","邹","熊","孟","秦","白","江","阎","薛","尹","段","雷","黎","史","龙","陶","贺","顾","毛","郝","龚","邵","万","钱","严","赖","覃","洪","武","莫","孔"];
    var lastName = ["绍齐","博文","梓晨","胤祥","瑞霖","明哲","天翊","凯瑞","健雄","耀杰","潇然","子涵","越彬","钰轩","智辉","致远","俊驰","雨泽","烨磊","晟睿","文昊","修洁","黎昕","远航","旭尧","鸿涛","伟祺","荣轩","越泽","浩宇","瑾瑜","皓轩","擎苍","擎宇","志泽","子轩","睿渊","弘文","哲瀚","雨泽","楷瑞","建辉","晋鹏","天磊","绍辉","泽洋","鑫磊","鹏煊","昊强","伟宸","博超","君浩","子骞","鹏涛","炎彬","鹤轩","越彬","风华","靖琪","明辉","伟诚","明轩","健柏","修杰","志泽","弘文","峻熙","嘉懿","煜城","懿轩","烨伟","苑博","伟泽","熠彤","鸿煊","博涛","烨霖","烨华","煜祺","智宸","正豪","昊然","明杰","立诚","立轩","立辉","峻熙","弘文","熠彤","鸿煊","烨霖","哲瀚","鑫鹏","昊天","思聪","展鹏","笑愚","志强","炫明","雪松","思源","智渊","思淼","晓啸","天宇","浩然","文轩","鹭洋","振家","乐驹","晓博","文博","昊焱","立果","金鑫","锦程","嘉熙","鹏飞","子默","思远","浩轩","语堂","聪健","明","文","果","思","鹏","驰","涛","琪","浩","航","彬"];
    return firstName[Math.floor(Math.random() * firstName.length)] + lastName[Math.floor(Math.random() * lastName.length)];
}

//在已选择的单张图片上添加播放视频的图标
function addPlayIcon() {
    Promise.all([
        new Promise(resolve => {
            var img = new Image;
            img.crossOrigin = 'anonymous';
            img.onload = function () { resolve(img); };
            img.src = document.getElementById('image').src;
        }),
        new Promise(resolve => {
            var img = new Image;
            img.onload = function () { resolve(img); };
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUAAAAAAADV1dX19fX4+Pj8/PzNzc2goKBAQEDy8vLLy8u/v7/d3d1qamrr6+vw8PDk5OTd3d3n5+eKiorW1tbw8PDt7e3h4eHm5uba2trq6ur09PTn5+exsbHl5eXi4uLj4+P///+1KpiJAAAAIXRSTlMzAJnY5fIUZkDJjYBKTZvMsqWNWSa6rFuOS7/Ie3NrNkgRMr3KAAAD0UlEQVR42uSX2ZaqMBBFq0EyGcBGRtuh+f+fvHRKBG3xUlTwpc+DspaS7JzUkMDHEonvY1ZqnbZOqdZldvwWi4YiA4iq1lH7VJGuKxIFHcAmYfsfhYnF//oHqMqonaWorPwD5MmmJWiT5V4BbPFodBoEUsoYOsXdQxCkj5tTWG8Ajb5b3MFIeCppDnc26cYLgB1Pn5o9vNTehGMEywbIv0a+GwUzpMYMXzkLQGRDaO9imK14NyRMJpYD2M1t440CklQwvGuXAiS3IbawQNsbQiKWAFzC3vxAwSKpIOqj50IHOPcv7xQsltr1izhTAZLefQksyU2/DSQA0Ve+TwVMqc++Mor5ACK8GncCDzpF10AQ8wCG+cMYvCgOe4J5APn1/zvwpt00AUyu34BHmUkCmJp/C161nSIAxvwMgmmAgjY/naB4DZBQ56cTJK8AzvT56QTnaYBLRI9/ei5ElykAERLyn1EPwimABH+GFYVLTJ4DWDQohhUV4ybbZwACG+cJVtUJm7x4ApBh/4WVhd05+w2QI5qClaXQ6PwXAJ7/JawuifeFRwBLy0B+LtoHAO0yQMEbpFwm6HuAxlEF8BYFbrLmDkBTI5Afh3oMYOk9iN+V7AigcAbA2+QsKAaAnBEBjCjIbwAZLQWk8pMI2Q1gQynC2wgvTPxasOkBKmfIzC6493JljN0o1RWgpBwDguHWyD4YlFcAtyGGAsA3wbiwQwAsAooCwDdBYSlwAAnuABEATWDuQeIA3KOhAfBNMG7ZPwDCjbSnAfBNwGwSHUCFZZgKMJjAKcdVB1D/PByWA7ThHpbo0HaqPwA7sWEALOwiBnsyYBWQVAC+CRIrAWAMAhmAbwJGITRuBWwANIEehQ0cf75SOgDfhLTtdIQa36UC8E3AkWoo+QCDAjJACRqTgA2ASmNiGmjPAG1kqAApA4BngsTwx+OYR4A22lKOZYCf/gAIhq4HEPx5gH/d20EKwjAURVGsGThScdj9L1Twg5MqNDTJ+WlXUGia/Lx3b80n8IuQ/4Z8I+JbMT+M+HHMB5LPSFbcSOaHUj6W+4sJv5rxyym/nvOAIiKah4locoRUPKbzQSWPaiOsfrqw+nJHcX2ewoJXNr60GlzbRXOZq7jk1e3I8nqNFZCtvvcAA0c4PMTCMZ4RINPtL8gUzyiUKy3M5nE+DzR6pNNDrRzr7QQ2LzvB5niDjmj3HHC7x/u94OAVj2aSy/qVXObTfJqKTg1Ur+WI6jWv7OZ1v43weK0VHs+gfP6UXstWei3dpNdYC69a7fds4nMG9TuD/N5B/38D8Sl28Qj+OSkAAAAASUVORK5CYII';
        }),
    ])
        .then(function (/** @type {HTMLImageElement[]} */ imgs) {
            var sourceImg = imgs[0];
            var playIcon = imgs[1];
            var canvas = document.createElement('canvas');
            canvas.width = sourceImg.width
            canvas.height = sourceImg.height
            var ctx = canvas.getContext('2d');
            ctx.drawImage(sourceImg, 0, 0)
            ctx.drawImage(playIcon, sourceImg.width / 2 - canvas.width / 4 / 2, sourceImg.height / 2 - canvas.width / 4 / 2, canvas.width / 4, canvas.width / 4);
            canvas.toBlob(function (blob) {
                URL.revokeObjectURL(document.getElementById('image').src);
                document.getElementById('image').src = URL.createObjectURL(blob);
                console.log(URL.createObjectURL(blob));
                mdui.snackbar('已添加视频播放图标');
            });
        })
}

//设置界面显示
document.getElementById('configTypeText').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeWebsite').onclick = function () {
    document.getElementById('configWebsite').style.display = 'block';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'flex';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeSingleImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'block';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'block';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeMultiImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'block';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'block';
}

//设初始值
var date = new Date();
document.getElementById('configScreenshotDate').valueAsDate = date;
document.getElementById('configScreenshotTimeHour').value = date.getHours();
document.getElementById('configScreenshotTimeMinute').value = date.getMinutes();
document.getElementById('configPostDate').valueAsDate = date;
document.getElementById('configPostTimeHour').value = date.getHours();
document.getElementById('configPostTimeMinute').value = date.getMinutes();
document.getElementById('configCommentDate').valueAsDate = date;
document.getElementById('configCommentTimeHour').value = date.getHours();
document.getElementById('configCommentTimeMinute').value = date.getMinutes();
document.getElementById('configLike').value = Math.floor(20 * Math.random());

//检验数值是否合法
document.getElementById('configPostTimeHour').addEventListener('input', function () {
    if (document.getElementById('configPostTimeHour').value > 23) {
        document.getElementById('configPostTimeHour').value = 23;
    } else if (document.getElementById('configPostTimeHour').value < 0) {
        document.getElementById('configPostTimeHour').value = 0;
    }
})
document.getElementById('configPostTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configPostTimeMinute').value > 59) {
        document.getElementById('configPostTimeMinute').value = 59;
    } else if (document.getElementById('configPostTimeMinute').value < 0) {
        document.getElementById('configPostTimeMinute').value = 0;
    }
})
document.getElementById('configScreenshotTimeHour').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeHour').value > 23) {
        document.getElementById('configScreenshotTimeHour').value = 23;
    } else if (document.getElementById('configScreenshotTimeHour').value < 0) {
        document.getElementById('configScreenshotTimeHour').value = 0;
    }
})
document.getElementById('configScreenshotTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeMinute').value > 59) {
        document.getElementById('configScreenshotTimeMinute').value = 59;
    } else if (document.getElementById('configScreenshotTimeMinute').value < 0) {
        document.getElementById('configScreenshotTimeMinute').value = 0;
    }
})
document.getElementById('configCommentTimeHour').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeHour').value > 23) {
        document.getElementById('configCommentTimeHour').value = 23;
    } else if (document.getElementById('configCommentTimeHour').value < 0) {
        document.getElementById('configCommentTimeHour').value = 0;
    }
})
document.getElementById('configCommentTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeMinute').value > 59) {
        document.getElementById('configCommentTimeMinute').value = 59;
    } else if (document.getElementById('configCommentTimeMinute').value < 0) {
        document.getElementById('configCommentTimeMinute').value = 0;
    }
})
document.getElementById('configLike').addEventListener('input', function () {
    if (parseInt(document.getElementById('configLike').value) < 0) {
        document.getElementById('configLike').value = 0;
    }
})

//上传图片
document.getElementById('configAvatar').addEventListener('change', function () {
    avatarFile = this.files[0];
    document.getElementById('avatar').style.backgroundImage = 'url(\"' + URL.createObjectURL(avatarFile) + '\")';
});
document.getElementById('configArticleIcon').addEventListener('change', function () {
    document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
});
document.getElementById('configSetSingleImage').addEventListener('change', function () {
    document.getElementById('image').src = URL.createObjectURL(this.files[0]);
});

for (var i = 1; i <= 9; i++) {
    !function (i) {
        document.getElementById('configSetMultiImage' + i).addEventListener('change', function () {
            document.getElementById('image' + i).style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
        });
    }(i);
}

document.getElementById('generate').addEventListener('click', function () {
    // 是否使用7.0以上版本白色界面？
    var useWhiteUI = document.getElementById('configUIWhite').checked;
    if (useWhiteUI) {
        document.getElementById('fakeWechatMoment').classList.add('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/black_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/black_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/black_icons/emoticon.svg';
    } else {
        document.getElementById('fakeWechatMoment').classList.remove('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/white_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/white_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/white_icons/emoticon.svg';
    }

    //设置生成的图片上的各种属性
    document.getElementById('name').innerText = document.getElementById('configName').value;
    document.getElementById('text').innerText = document.getElementById('configText').value;
    document.getElementById('articleTitle').innerText = document.getElementById('configArticleTitle').value;
    if (document.getElementById('configLocation').value == '') {
        document.getElementById('location').style.display = 'none';
    } else {
        document.getElementById('location').style.display = 'inline';
        document.getElementById('location').innerText = document.getElementById('configLocation').value;
    }

    //表情替换、朋友圈话题和URL变蓝色
    document.getElementById('text').innerHTML = emoticonReplace(
        document.getElementById('text').innerText
            .replace(/((?:^|\s)#\S+(?:$|\s))/gm, '<span style="color:#576b95">$1</span>')
            .replace(/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, '<span style="color:#576b95">$1</span>')
    );
    console.log(document.getElementById('text').innerHTML);

    //九宫格模式设定
    if (document.getElementById('configTypeMultiImage').checked) {
        for (var i = 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'inline-block';
        }
        var multiImageCount = 0;
        for (multiImageCount = 9; multiImageCount >= 1; multiImageCount--) {
            if (document.getElementById('image' + multiImageCount).style.backgroundImage != '') {
                break;
            }
        }
        //四张图的修正
        if (multiImageCount == 4) {
            document.getElementById('image5').style.backgroundImage = document.getElementById('image4').style.backgroundImage;
            document.getElementById('image4').style.backgroundImage = document.getElementById('image3').style.backgroundImage;
            document.getElementById('image3').style.backgroundImage = '';
            multiImageCount = 5;
        }
        for (var i = multiImageCount + 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'none';
        }
    }

    if (document.getElementById('configTopBarCustom').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'flex';
        document.getElementById('topBarCustomImage').src = URL.createObjectURL(document.getElementById('configTopBarCustomImage').files[0]);
    } else if (document.getElementById('configTopBarIos').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'flex';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('topBarIconIos').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ios_status.svg';
        document.getElementById('fakeWechatMoment').classList.add('iosStyle');
    } else {
        document.getElementById('topBar').style.display = 'flex';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('fakeWechatMoment').classList.remove('iosStyle');
        //设置顶栏图标
        var iconWifi = [4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 0];
        var iconSignal = [4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 0];
        var iconBattery = [20, 30, 50, 60, 80, 90, 'full'];
        if (document.getElementById('configTopBarStatusIcons').checked) {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_' + iconWifi[Math.floor(Math.random() * iconWifi.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_' + iconWifi[Math.floor(Math.random() * iconSignal.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_' + ((Math.random() > 0.75) ? 'charging_' : '') + iconBattery[Math.floor(Math.random() * iconBattery.length)] + '_48px.svg';
        } else {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_4_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_4_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_full_48px.svg';
        }
        var iconApp = [['qq', .5], ['wechat', .5], ['cloudmusic', .25], ['coolapk', .15], ['tieba', .15], ['acfun', .15]];
        iconApp.sort(function () { return (Math.random() > .5) ? 1 : -1 });
        document.getElementById('topBarAppIcons').innerHTML = '';
        if (document.getElementById('configTopBarAppIcons').checked) {
            for (var i = 0; i < iconApp.length; i++) {
                if (Math.random() < iconApp[i][1]) {
                    document.getElementById('topBarAppIcons').innerHTML += '<img class="topBarIcon" src="mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/app_' + iconApp[i][0] +'.svg">';
                }
            }
        }
    }

    //设置时间
    var configPostDate = document.getElementById('configPostDate').valueAsDate;
    configPostDate.setHours(document.getElementById('configPostTimeHour').value);
    configPostDate.setMinutes(document.getElementById('configPostTimeMinute').value);
    var configScreenshotDate = document.getElementById('configScreenshotDate').valueAsDate;
    configScreenshotDate.setHours(document.getElementById('configScreenshotTimeHour').value);
    configScreenshotDate.setMinutes(document.getElementById('configScreenshotTimeMinute').value);

    document.getElementById('time').innerHTML = getTimeString(configScreenshotDate, configPostDate);
    document.getElementById('topBarTime').innerText = document.getElementById('topBarTimeIos').innerText = ((document.getElementById('configScreenshotTimeHour').value < 10 && !document.getElementById('configTopBarIos').checked) ? ('0' + document.getElementById('configScreenshotTimeHour').value) : document.getElementById('configScreenshotTimeHour').value) + ':' + ((document.getElementById('configScreenshotTimeMinute').value < 10) ? ('0' + document.getElementById('configScreenshotTimeMinute').value) : document.getElementById('configScreenshotTimeMinute').value);

    if (document.getElementById('configApp')) {
        if (document.getElementById('configApp').value.match(/视频号 *· *(.+)/g)) {
            document.getElementById('time').innerHTML += ' <span style="color:#576b95">视频号 · ' + /视频号 *· *(.+)/g.exec(document.getElementById('configApp').value)[1] + '</span>';
        } else {
            document.getElementById('time').innerHTML += ' ' + document.getElementById('configApp').value;
        }
    }

    //加入点赞头像
    var avatarSource = avatarURL.concat();
    var avatarUsed;
    document.getElementById('likeAvatarList').innerHTML = '';
    for (var i = 0; i < parseInt(document.getElementById('configLike').value); i++) {
        if (i === 0 && document.getElementById('configFirstAvatar').checked) {
            avatarUsed = document.getElementById('avatar').style.backgroundImage.replace(/url\("(.+?)"\)/g, '$1');
        } else {
            if (avatarSource.length <= 0) {
                avatarSource = avatarURL.concat();
            }
            var avatarUsedIndex = Math.floor(Math.random() * avatarSource.length);
            avatarUsed = avatarSource[avatarUsedIndex];
            avatarSource.splice(avatarUsedIndex, 1);
        }
        var div = document.createElement('div');
        div.setAttribute('class', 'likeAvatar squareImage');
        div.setAttribute('style', 'background-image:url(\"' + avatarUsed + '\")');
        document.getElementById('likeAvatarList').appendChild(div);
    }

    //加入评论区
    document.getElementById('commentList').innerHTML = '';
    if (document.getElementById('configShowComment').checked && commentList.length) {
        document.getElementById('comment').style.display = 'block';
        for (var i = 0; i < commentList.length; i++) {
            var comment = commentList[i];
            document.getElementById('commentList').innerHTML += ''
                + '<div class="commentItem">'
                +     '<div class="commentAvatar squareImage" style="background-image: url(' + comment.avatar + ');"></div>'
                +     '<div class="content">'
                +         '<span class="commentName">' + comment.name + '</span>'
                +         '<span class="commentTime">' + getTimeString(configScreenshotDate, comment.date) + '</span>'
                +         '<div class="commentText">' + (comment.reply ? ('回复<span style="color:#576b95">' + comment.reply + '</span>: ') : '') + emoticonReplace(comment.content) + '</div>'
                +     '</div>'
                + '</div>';
        }
    } else {
        document.getElementById('comment').style.display = 'none';
    }

    //显示用于生成图片的div
    var height = Number(document.getElementById('configHeight').value);
    document.getElementById('fakeWechatMoment').style.display = 'block';
    document.getElementById('fakeWechatMoment').style.width = '1080px';
    document.getElementById('fakeWechatMoment').style.height = ((window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') > height) ? window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') : height) + 'px';

    //点赞数为0时隐藏点赞区
    document.getElementById('like').style.display = parseInt(document.getElementById('configLike').value) ? 'block' : 'none';

    //修正底部位置
    var offset = 26 + Number(window.getComputedStyle(document.getElementById('topBar')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('header')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('main')).height.replace('px', ''));
    document.getElementById('footer').style.bottom = ((offset < height - Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', ''))) ? (-height + Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', '')) + offset) : 0) + 'px';

    //按钮上的提示
    document.getElementById('generate').setAttribute('disabled', '');
    document.getElementById('generate').innerText = '生成中...';

    // 就算添加了对删除原作者信息和源代码链接的检测还是有人尝试把它改掉，嗯……
    // 另外Selenium之类的东西也是禁止的
    // 用javascript-obfuscator（https://obfuscator.io）对这部分代码加密了，但是仍然是防君子不防小人
    // 如果你只会下载jsDelivr压缩后的JS，你也看不到下面这些注释掉的未加密的代码
    // 如果你想到了可以在GitHub上找到这些未加密代码，我相信你也不会做出删除原作者信息这样的事情
    // 混淆配置：
    // String Array Threshold: 1
    // String Array Calls Transform: true
    // String Array Encoding: RC4
    // Identifier Names Generator: Mangled-shuffled
    (function () {
        var S=d;(function(N,i){var b=d,v=N();while(!![]){try{var K=-parseInt(b(0x232,'iEA9'))/0x1+parseInt(b(0x268,'lIsT'))/0x2*(parseInt(b(0x216,'zl5J'))/0x3)+-parseInt(b(0x220,'627!'))/0x4+parseInt(b(0x1db,'W%&c'))/0x5*(-parseInt(b(0x24c,'NvGH'))/0x6)+-parseInt(b(0x263,'wFuy'))/0x7*(parseInt(b(0x229,'j$fY'))/0x8)+parseInt(b(0x207,'wFuy'))/0x9*(parseInt(b(0x26a,'gh*r'))/0xa)+parseInt(b(0x1bc,'u5(c'))/0xb;if(K===i)break;else v['push'](v['shift']());}catch(y){v['push'](v['shift']());}}}(n,0x496d6));function botDetection(){var j=d;if(navigator[j(0x20a,'zl5J')]||navigator[j(0x264,'gh*r')](j(0x266,'&u&u')))return!![];var N=[j(0x233,'fsx['),j(0x1fb,'6vS('),j(0x218,'dZR&'),j(0x1e9,'(F^g'),j(0x25e,'WJO1'),j(0x1c5,'hHlX'),j(0x206,'pKfc'),j(0x269,'6h#Z'),j(0x1fa,'pKfc'),j(0x23c,'LCog'),j(0x239,'CAu1'),j(0x271,'iEA9'),j(0x26c,'7#MU'),j(0x212,'pKfc'),j(0x256,'qX2S'),j(0x214,'NvGH'),j(0x1b4,'tuFY'),j(0x257,'NxT*'),j(0x210,'pKfc'),j(0x22d,'&)am'),j(0x1cc,'gh*r'),j(0x1c8,'u5(c'),j(0x251,']vGT'),j(0x1f7,'CAu1'),j(0x1d6,'&)am'),j(0x1d4,'dZR&'),j(0x245,'iEA9'),j(0x1d0,'d0VK'),j(0x224,'tuFY'),j(0x23b,'4w3C'),j(0x25c,'qX2S'),j(0x1af,'2]%t'),j(0x1ad,'ueOA'),j(0x1da,'Cj0^'),j(0x1d5,'j$fY'),j(0x1c3,'7#MU'),j(0x23a,'gNbt'),j(0x25f,'j$fY')],i=[j(0x1df,'Cj0^'),j(0x200,'j$fY'),j(0x1b1,'pKfc'),j(0x215,'G(PT'),j(0x1cf,'L3f*'),j(0x1cc,'gh*r')];for(var v in i){if(window[i[v]])return!![];}for(const K in N){if(window[j(0x236,'iEA9')][N[K]])return!![];}for(const y in window[j(0x1f8,'hHlX')]){if(y[j(0x1b7,'ueOA')](/\$[a-z]dc_/)&&window[j(0x250,'&u&u')][y][j(0x22f,'LCog')])return!![];}if(window[j(0x237,'Cj0^')]&&window[j(0x248,'gNbt')][j(0x1c6,'7Wxi')]()&&window[j(0x247,'pKfc')][j(0x238,'j$fY')]()[j(0x252,'4w3C')](j(0x22e,'wFuy'))!==-0x1)return!![];if(window[j(0x20e,'wFuy')][j(0x259,']vGT')][j(0x1ba,'pKfc')](j(0x223,'L3f*')))return!![];if(window[j(0x209,'gh*r')][j(0x20f,'*U(%')][j(0x1ce,'u5(c')](j(0x271,'iEA9')))return!![];if(window[j(0x1b6,'&)am')][j(0x270,'vkb]')][j(0x1ca,'hHlX')](j(0x24b,'*U(%')))return!![];return![];}function d(N,i){var v=n();return d=function(p,K){p=p-0x1ad;var y=v[p];if(d['ouETxt']===undefined){var b=function(P){var V='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var C='',A='';for(var m=0x0,O,M,D=0x0;M=P['charAt'](D++);~M&&(O=m%0x4?O*0x40+M:M,m++%0x4)?C+=String['fromCharCode'](0xff&O>>(-0x2*m&0x6)):0x0){M=V['indexOf'](M);}for(var s=0x0,u=C['length'];s<u;s++){A+='%'+('00'+C['charCodeAt'](s)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(A);};var Q=function(P,V){var C=[],A=0x0,m,O='';P=b(P);var M;for(M=0x0;M<0x100;M++){C[M]=M;}for(M=0x0;M<0x100;M++){A=(A+C[M]+V['charCodeAt'](M%V['length']))%0x100,m=C[M],C[M]=C[A],C[A]=m;}M=0x0,A=0x0;for(var D=0x0;D<P['length'];D++){M=(M+0x1)%0x100,A=(A+C[M])%0x100,m=C[M],C[M]=C[A],C[A]=m,O+=String['fromCharCode'](P['charCodeAt'](D)^C[(C[M]+C[A])%0x100]);}return O;};d['WLKDLW']=Q,N=arguments,d['ouETxt']=!![];}var j=v[0x0],L=p+j,S=N[L];return!S?(d['MUIPgx']===undefined&&(d['MUIPgx']=!![]),y=d['WLKDLW'](y,K),N[L]=y):y=S,y;},d(N,i);}function fnv1a(N){var L=d,v=0x811c9dc5;for(var K=0x0;K<N[L(0x231,'7#MU')];K++){v^=N[L(0x274,'(F^g')](K),v+=(v<<0x1)+(v<<0x4)+(v<<0x7)+(v<<0x8)+(v<<0x18);}return v>>>0x0;}function n(){var D=['zCoCcmobtMPc','EwldVN3dPq','ACoGWRqAdKuDcG','W6f5WPZdHSkne8kLcCoHW7dcVmkpEfpdIW','BWKwW7NcMCo/WO/cRSkOsZNcRgddQblcNCoHW4XYW4K','W47dNN9oWOrYWQFcHmoZW6Gb','BWKsW7NcL8o+WPpcRSkRqXtcHMVdQqhcKmoKW51JW4G','W65gWOZcSGFcG8o1pCkzc2NcRCklWPe','ufZdThddPahcHHSbWPtcLLKIWRG/nCoxW7GX','WOlcP0T8WO3cTvJdPgG6W40','WPVdSCorWPXVdSoDwZNcVmo8','WPfyWQZdIJyvW48','nmkwWPJdHZVdOSkTbmkwFmoyWRtdLCoSySkJj8kkx8o+z1XqWOSTWQRcSG','EbBcQqe','WPbzWRVdMYa7W4tcSa','W7tdSSo0aapdICkGW6bpWRFcP8k5W7aK','amkwW43dN8oDWPLlwq','dmkCvCooW5NcHG','WPj8jaDFWPFdLJe6ssGbrYe','WOldPSoBWQFdM1bcv8o2W7iTW6hcL8ks','uLdcHreHDSkyWPjHW7iLkCoX','WQVcPSkXDsJdUCkmW71BWOu','tf/dV8oJhL8+','dZJdOthdMY3dUeG','W77dTcuFW4pcJ8oPW5nzW4LleamJWPfo','W6JdQSkXt8olyCk1W5ldOG','dbaod2NcHdxcTGy','hNpcNJGpyYSnes3cHCoPhHy','W4/cVdagW69lbdLpr8kEW47cJ8oNpW','tmkQEZapnCoaWRhcOq','W73dVGmAW4xcH8okW6rN','jwrLC8o5k0i','sfldRSofgv83W4ddK8kVaSkpW5xcVa','uCorpfT+o0DDWONcUcO6W68ypSkUeXfhW4u','xSoQWQyAbK4hc8kM','sZZdVMGgW5G','xdxdUg4','cmkCW5tdLSofWP4','gMpdO8oCwCk7oclcKmkzW5qL','smoMdmolqhHvW4TBW7mVW5WlWP3dLGNdT8kzFSkF','WOPtWRVdMIiU','pahcKmoseCo3WPVdNd7cLYlcRGBdGa','tdxcS8kybSoVorq','WPddLNNcJCkXv8kwWRi','dmo1ebiEgSoQWQi','W5z8WP7cJW/cLmoXlSksdxtcOCkSWOlcTwaBW4Stxa','mWxcPb0IW4Oele3dO8ouWOuqWPtdG8oNWP09WPzTF8oUiW','WPRdTbH9W7PxW7pcNSopW4RcGSoeW5bSD8k+bKpdV1BdS03cTIjUlbq','DWldRMupW6ldVSo3W7RcMtRcRmoYbSovWQXgDqFdOG','W4ldJduH','WPBcP8koW5j4cmo5AqZcQCkvgeebW4VcVCkErgbradCY','dGnnW7BcNW','WPzXnsfyWPFdNW','W6xcRCk76k+p5lQk6kAe56sE6zU76BML5zcc5y6Z5Qon5Rs644c6WQNcJCkNCW','h8k7WO7dJcRdTSk+h8kfD8oEWOFdHCkHD8kJi8kwDCo6pfTC','FNaBWOZcSsz9mMRcNmkWWR/dTW','WOzXmtbwWQddNIC7sbGBAXxcUbVdJYe','xZ/cSSkjgCoJiqxcS8oHW5ysD8oPWPddQduN','ESomb8ktWOtdKmoMWRnGh8oLuG','vs4rW7NcH8o0WOdcQW','CH7cUaO/W4KahW','weztghZcVZpcTG','wZZdQ2u','W6fKWPBdHCkfba','pJtcPN/dJbFcVYaY','ExygWOVcUI1nhW','W5NcQ8kgW5y9oCoWEXdcR8oAwuK1W5hcPmogqa','W6xdTSoSmaO','lmkAv8oxW5VcHmoNWOu','WQfybSoGfeDRW7BdMCkwfCoxjmow','WOtdVX58W7bXW6m','WR/cVmoUxCoqymkgW7FdLxVcQ2iCxCo7W5y','A8ohhSkulIFcJq','W53dQun5WQVdOW','W6lcHI4mW7vlkYrowmkOW4NcJmoYnSk3WOWCW5C','hSohW7njbSkBW6KFeCkzaCowW7zxzHVdS3DqWRjt','sZxcVSklaSoTaW/cSCkoW5iwrCoXWOtdVtqXWO7dRaOqfa','WQzwcCo5hezwW6FdSmkFhSotnmovoW','W57cTJmpW7bj','umoymxxcT8kQjCkoywFcMvZdVSoh','W6lcHIOmW7TknYrnumkfW6RcJ8o9oq','W4qzWRJdNsTK','qKacWO/cUIvAeKVcKCkRWPtdOqiWnmo3umkdWR3cJW','xmo5jWuZeSo3WQhcNSoVW5y+WQLzEdGcWOpcIwpcQCoyWQ8OgSojW4VcUG','W47cKNHo','ENObWQ/cTcrfhLpcGmkBWRldMWu','AL3dNmkVs8kIW4BdIqBcMJdcTq4','p8k/W69Bvuqan8kPW7/cKG','CmodgCkslsZcSmogo0ZdLX7cGG4','W4ZcM3fvwa','p8kqvSogW4tcImo/WPrd','W6X4WPhdLSksiSkUbCoq','W6VdQSk9t8ojz8kwW47dUq','AmoImLxcUCkRoSkcExBcQxRdGSontCooWOxdHCkwW6Ov','imktw8oThrFcOComlNO','sctdNevuyW47ot/cKW','o8kMW57dG8oyWObptWSLAxtdHMRdSx0V','W43cPSkjW4eQcSoHBrVcISohsLKv','W6KOFSosgq','WP9tWRZdQIi/W4tcSbZcTqNdOmoTzq','pWVcH8oIemo3WPJdJrxcJWxcUIRdIN0','xZ/cSSkjgCoJiqxcSW','dmkSWPVdPZxdO8kYcmkoBCoOWPldR8oR','vJ8lW73cMCo2WPG','nwLWsmooiuVcSCkQna','gCk0W6RdMdDqWO/dSSon','W4NcQ8kcW4CZdSoX','WRRcTmkTWQyHkSo7WRddM3S8W7ek','jZ0fW7tcN1RcHCo5s8kGW6GnW5ePW7NdGr7cKSkjW7b3j2zTsW','sYBdKKLvyJuHhrZcVq','WRRdNmoyWOFdLvfDw8oUW6mDW4FcRCkvBetdQaOMWP/cQG','4P2r5Bg66yc15PIY44oh5A6r4PY6','BYuaW7dcKmo0WOJcSSkW','WQ/cTmk4WOCmpmosWRtdGw4RW5OpWQ8','WO5EW6Dqva','W5BdJImjW5JcKmo6W4r0W79kcHWJWO9AlLC','W6ddO8oHjGq','ASoHovz3lebF','fqnvW6dcKG','gh3cIW8kAgGmgI8','W4pcLZ/dMCoWdSobWRZdTmkNt8kfpG','vZmrW53cGCoUWPpcRSk/uXlcVa','dSkZW6hdKa','crOptd3dQxhcSrFdGCk0WOVdLa','W4LPBUIUTEs4VUILS+wkM+MySowpI+s9OEIbR+EAGowfVEs+PoAcUowtP+wnIEs5M+INTEEBGEApTUwsHoA4Oos5KoEGTUEBQoMrVUAnQEobH8kDeGXUnwVcVUI/M+AyS+w+SEAZO+ACKEs5UoIbIEE+UUwlP+s4MoEZLEELLoEyHEIJJEs7M+++HNjeW5eXWQNcO8kCW7nayCo3W5/dT8omFSk4W4/cOSkrfcVcKtmSm8ouuCozWPT3WOxcOKpcGG','WOPtWQldII0U','rSkRWRO','gNNcHbSkyq4nfJ7cR8oK','W5hdOutKVBNLJAFKU5VPGP/OVlZcNCoBWOBcKSozCMFcUu8eWRPqW6joWRv3l3awWQCoEIDHzSoGW5WHWRddVmoQlhqFW68qWQzrzmk9i8kGWQmdac1Sb0dcMGb6W5rOlCo6nmkOW4JdR3ldJ8oiWOZcSSk9yftcGSkiW7alW5mLW6JdISkNkt7dPCoYW4jcWR/cIr1WeSojdrlcHHqgo8o0WQHLW4BdO+wsM+s9PoIdK+woQ+MMNmkuomogW4JVV7pcJtdcUvW','hWDvW4BcLL3cJmoUtmkIW48gW5K+','o8kMW5BdKmocWOj9xcaPBuxdMhddVxK+','tffE','jKNcJauhDc8EgIVcMmo1irpcUSkmWO3dHxG','drPPse5aFmo/','WOPAW6D2uepcK8k8WQ9Efa5gWPm','yfbyewVcSc7cPHW','xK9yd3O','hNpcNJWxCJqbhsZcS8o1','ESkxkJm','r8oXd8kXpYZcICobowpdUYJcSYHWo8oUEbiFWQWh','W67dTcKEW4pcH8oRW5np','wezjphRcQJxcUHpdPmkiWP4','hZZdOtJdPIhdOuddKffOWOm','W4NcN3ffu8kafCoLW6JcMmkSW599aYRcIhK','W7PmWO3cHqJcG8okpCkhea','WOxdOX9/','WQVcUmoVxCoKCq','d8k7WOBdLdZdTmoYcmkwEmogWP7dH8o7Dq','j8oflWCFb8otWQtcGmoGW4GCWRvcAJ4aWOG','tCoMkeX3lgPzWOxcVba9W7y','ASoQWQmQd0uEg8kLW47cQG7cK8kE','zdyPtCodlfZcHCkM','v8k5W5hORzxKUztOPiFKVQdNLyxdGeRdJ8khW4pdOxNcVZRdNUETIEAuOEw8NEIhMowkM+AkHUMgI+ExMUAlJoAjHUwBJ+ocS1pdMCk8FW','WQRdSwhcICkWtCkGWR/dPSkEDCk0cGlcK3S','c2tcT8oqvrZdP3VdUG','AgBdPK3dRbBcGGGkWPlcI0uDWR0','FXlcUb8+WP1oxeVdUCozWOmgWQxcJSo2WPSGW41Wy8oPiSoYW49oW5NcTCo6W6dcS0q2W47dUSovEgPaW5W3WPtdOCkgxCoiWR3cP8oiW4JdLCo8g8kbWPC','A8odhmk4','WQRdNMxcICkTtCkyWRm','W7SOySoq','W7VdO8o0nrZcLSoIWQPgWQRcKCkOW4WIydLUWOZdGmoxomotamogx8oVivKdWQ3dKmkUoMJcPcypWO7dQ8oWWRrlWOyIsSo9WROpWOVdH8kBW4ddRmkjca','DmowfCois3TPW4naW7m','W53cN2LLuCkmdCoTWQVcICkyW4DyeG','FNaBWOZcSszPdvZcGmk4WRNdGqq2','vSoFkKxcR8kjj8keE3BcQwFdLSohxCoz','WP1Rnsq','wJ/cUSkicmo+','fGvFuG','cv5Mx8oVkL3cVCkDjq5ftmkcv8oTW7ZdNCo8W5tcKmoFW7W','W5ZdMwr6WOraWRRcGSoLW7GhqG','WOTcWQNdJcu','d3FcHGGg','W4NcJM9ju8kocCoUWRW','55EY5OQb5Awl6ls8','WQfwbmoQger0W7ZdLSksd8oxpSov','WOpcSKHX','Emoxf8obq3G','oZpcQL7dOZxcQXKX','WPlcO1nrWQNcQuVdO34GW5tcGa','WR0QACor','WR7cOhinW6pcI8oBW4b4','odtdRdJdMIm','W5z0WR3cTs/cTmordSkYlxtcKCkoWRdcIL4OW7O1Cmo8','hxNcIqGoyYGC','EmkmkZFdULVcLxJcIgldLqFcKb8jWRi2WRirdG','BWKbW67cNmoSWOtcTCkcqXdcUgldQGhcImo0','WOOhF8oss1JdNCk+gCobWOjqWP7cGg/dHmoUWQ7cGG','WOBcO0L1WQ/cVe3dRW','WRZcUCkPWQW','WOJcQeL1WQ/cIvZdSMG','dXrwsvK','j8oflq8lg8oWWQJcLCo7W58','sZldS2ykW6ddHmoXW7/cTGtcQ8ovhSou','dmkwW4NdHCoFWPDhwa','uZKlW7RcNmo9WRxcOSkLuG','WQeWACoz','sujrcgS','BWKbW67cNmoSWOtcTCkcuWJcRNZdVHdcJmo0W5G','pSk8W6qDbhObg8k8','vSoljetcUSk9','FmoncCkOnYFcJSoa','W53cPSkfW4aQaSoJBq0','WR7cUmoXFCoRymkiW7RdMNVcPhq4xa'];n=function(){return D;};return n();}var p=Promise[S(0x20c,'fsx[')]();if(document[S(0x20b,'lIsT')](S(0x211,'QDSw'))[S(0x267,'*U(%')][S(0x217,'jAh#')](S(0x1b0,'7Wxi'))===-0x1||document[S(0x1b2,'eFhz')](S(0x1e5,'6h#Z'))[S(0x1f4,'6vS(')]!==S(0x1dd,'gNbt')||document[S(0x227,'hHlX')](S(0x1d1,'CAu1'))[S(0x1d2,'4w3C')]!==S(0x1e1,']riB'))p=p[S(0x1bb,'sMmP')](function(){var Q=S;return Promise[Q(0x1e7,'iEA9')](Q(0x1bd,'k(fK'));});else{if(location[S(0x21a,'jAh#')]!==S(0x1b8,'hHlX')&&location[S(0x202,'7#MU')]!==S(0x242,'dZR&')&&fnv1a(window[S(0x1cb,'Q^H1')][S(0x1f0,'G(PT')]||'')!==0xd0ff9774)p=p[S(0x1fd,'eFhz')](function(){var P=S;return Promise[P(0x1be,'jAh#')](P(0x241,'lIsT'));});else botDetection()&&(p=p[S(0x230,'LCog')](function(){var V=S;return Promise[V(0x1d3,'lIsT')](V(0x1d9,'dZR&'));}));}p=p[S(0x204,'6vS(')](function(){var C=S;return html2canvas(document[C(0x21f,'2]%t')](C(0x253,'lIsT')),{'useCORS':!![],'scale':0x1});})[S(0x260,'d0VK')](function(N){var A=S,i=N[A(0x22a,'tuFY')]();document[A(0x1c2,'ueOA')](A(0x1cd,'tuFY'))[A(0x1c4,'u5(c')]=i,document[A(0x21f,'2]%t')](A(0x24a,'LCog'))[A(0x1f3,'G(PT')](A(0x1e6,'k(fK'),i),document[A(0x1dc,'NvGH')](A(0x1de,'gh*r'))[A(0x1ea,'QDSw')](A(0x21c,'7#MU'),+new Date()+A(0x1e0,'6vS('));document[A(0x1d7,'wFuy')](A(0x24e,'zl5J'))&&new mdui[(A(0x21d,'&u&u'))](document[A(0x1c7,'cFaV')](A(0x244,'k(fK')))[A(0x219,'gNbt')]();new mdui[(A(0x1f6,'L3f*'))](document[A(0x25b,'6h#Z')](A(0x26d,'zl5J')))[A(0x1e8,'7Wxi')]();var v={'name':document[A(0x1e3,'d0VK')](A(0x1e2,'fsx['))[A(0x265,'d0VK')],'text':document[A(0x21b,']riB')](A(0x203,'pKfc'))[A(0x23f,'ueOA')],'location':document[A(0x1dc,'NvGH')](A(0x1ef,']vGT'))[A(0x24f,']riB')],'app':document[A(0x26f,'jAh#')](A(0x275,'sMmP'))[A(0x1ec,'hHlX')],'height':parseInt(document[A(0x235,'vkb]')](A(0x1c0,'hHlX'))[A(0x1ff,'7Wxi')]),'uiWhite':document[A(0x261,'WJO1')](A(0x243,'WJO1'))[A(0x240,'k(fK')],'appIcon':document[A(0x213,'CAu1')](A(0x1f9,'Q^H1'))[A(0x222,']2SD')],'statusIcon':document[A(0x21e,'k(fK')](A(0x258,'iEA9'))[A(0x276,'zl5J')],'statusIos':document[A(0x22c,']2SD')](A(0x201,'LCog'))[A(0x205,'u5(c')],'avatarSet':document[A(0x235,'vkb]')](A(0x1e4,'WJO1'))[A(0x20d,'NvGH')]};localStorage[A(0x22b,'(F^g')](A(0x25a,'qX2S'),JSON[A(0x1ed,'d0VK')](v));if(avatarFile){var K=new FileReader();K[A(0x277,'eFhz')](avatarFile),K[A(0x1f1,'fsx[')]=function(){var m=A;localStorage[m(0x254,'gh*r')](m(0x208,'6h#Z'),this[m(0x234,'jAh#')]);};}})[S(0x1b3,'cFaV')](function(N){var O=S;mdui[O(0x1c9,'u5(c')](''+O(0x23e,'zl5J')+O(0x1bf,'sMmP')+N+O(0x23d,'2ZQ&')+(N[O(0x1eb,'jAh#')]?O(0x26e,'6vS(')+N[O(0x1b5,']riB')]+O(0x25d,'jAh#'):'')+O(0x1c1,'4w3C')+O(0x255,'G(PT'),O(0x1ee,'4w3C'));})[S(0x273,'pKfc')](function(){var M=S;document[M(0x272,'dZR&')](M(0x249,'u5(c'))[M(0x228,'qX2S')](M(0x24d,'WJO1')),document[M(0x272,'dZR&')](M(0x1fc,'G(PT'))[M(0x1fe,'G(PT')]='生成';});
    })();
    /*
    // https://bot.sannysoft.com/
    function botDetection() {
        if (navigator.webdriver || navigator.hasOwnProperty('webdriver')) return true;
        var documentDetectionKeys = ["__webdriver_evaluate","__selenium_evaluate","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__driver_evaluate","__selenium_unwrapped","__fxdriver_unwrapped","webdriver","__driver_evaluate","__webdriver_evaluate","__selenium_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__selenium_unwrapped","__fxdriver_unwrapped","_Selenium_IDE_Recorder","_selenium","calledSelenium","_WEBDRIVER_ELEM_CACHE","ChromeDriverw","driver-evaluate","webdriver-evaluate","selenium-evaluate","webdriverCommand","webdriver-evaluate-response","__webdriverFunc","__webdriver_script_fn","__$webdriverAsyncExecutor","__lastWatirAlert","__lastWatirConfirm","__lastWatirPrompt","$chrome_asyncScriptInfo","$cdc_asdjflasutopfhvcZLmcfl_"];
        var windowDetectionKeys = ["_phantom","__nightmare","_selenium","callPhantom","callSelenium","_Selenium_IDE_Recorder"];
        for (var windowDetectionKey in windowDetectionKeys) {
            if (window[windowDetectionKeys[windowDetectionKey]]) return true;
        }
        for (const documentDetectionKey in documentDetectionKeys) {
            if (window.document[documentDetectionKeys[documentDetectionKey]]) return true;
        }
        for (const documentKey in window.document) {
            if (documentKey.match(/\$[a-z]dc_/) && window.document[documentKey]['cache_']) return true;
        }
        if (window.external && window.external.toString() && (window.external.toString().indexOf('Sequentum') !== -1)) return true;
        if (window.document.documentElement.getAttribute('selenium')) return true;
        if (window.document.documentElement.getAttribute('webdriver')) return true;
        if (window.document.documentElement.getAttribute('driver')) return true;
        return false;
    }

    function fnv1a(str) {
        var hval = 0x811c9dc5;
        for (var i = 0; i < str.length; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        return hval >>> 0;
    }

    var p = Promise.resolve();
    if (
        document.getElementById('aboutFooter').innerText.indexOf('✨小透明・宸✨') === -1 ||
        document.getElementById('aboutFooterBadge').href !== 'https://github.com/TransparentLC/WechatMomentScreenshot' ||
        document.getElementById('sourceRepo').href !== 'https://github.com/TransparentLC/WechatMomentScreenshot'
    ) {
        p = p.then(function () {return Promise.reject('<p>请不要删除原作者相关信息和右上角的指向源代码的链接。</p><p>这是很没有互联网分享精神的行为，<strong>Shame on you!</strong></p>')});
    } else if (location.hostname !== 'akarin.dev' && location.hostname !== 'transparentlc.github.io' && fnv1a(window.atob.btoa || '') !== 0xd0ff9774) {
        p = p.then(function () {return Promise.reject('<p>请不要移除黑名单检测。</p>')});
    } else if (botDetection()) {
        p = p.then(function () {return Promise.reject('<p>请不要使用 Selenium 等方式自动批量生成截图。</p>')});
    }
    p = p
        .then(function () {return html2canvas(document.getElementById('fakeWechatMoment'), {
            useCORS: true,
            scale: 1,
        })})
        .then(function (canvas) {
            var dURL = canvas.toDataURL();
            document.getElementById('generated').src = dURL;
            document.getElementById('save').setAttribute('href', dURL);
            document.getElementById('save').setAttribute('download', (+new Date) + '.png');
            if (document.getElementById('shareResourcePopup')) {
                (new mdui.Dialog(document.getElementById('shareResourcePopup'))).open();
            }
            (new mdui.Dialog(document.getElementById('generatedPopup'))).open();

            // 保存配置
            var config = {
                name: document.getElementById('configName').value,
                text: document.getElementById('configText').value,
                location: document.getElementById('configLocation').value,
                app: document.getElementById('configApp').value,
                height: parseInt(document.getElementById('configHeight').value),
                uiWhite: document.getElementById('configUIWhite').checked,
                appIcon: document.getElementById('configTopBarAppIcons').checked,
                statusIcon: document.getElementById('configTopBarStatusIcons').checked,
                statusIos: document.getElementById('configTopBarIos').value,
                avatarSet: document.getElementById('configAvatarSet').value,
            };
            localStorage.setItem('config', JSON.stringify(config));

            if (avatarFile) {
                var reader = new FileReader;
                reader.readAsDataURL(avatarFile);
                reader.onload = function () {
                    localStorage.setItem('avatar', this.result);
                };
            }
        })
        .catch(function (error) {
            mdui.alert(''
                + '<div class="mdui-typo">'
                +     '<p>' + error + '</p>'
                +     (error.stack ? ('<pre>' + error.stack + '</pre>') : '')
                +     '<p>你可以通过 <a href="https://github.com/TransparentLC/WechatMomentScreenshot/issues" target="_blank">Issue</a> 向作者反馈 BUG～</p>'
                + '</div>',
                '生成失败'
            );
        })
        .finally(function () {
            // document.getElementById('fakeWechatMoment').style.display = 'none';
            document.getElementById('generate').removeAttribute('disabled');
            document.getElementById('generate').innerText = '生成';
        });
    */
});