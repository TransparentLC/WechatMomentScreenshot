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
        +     '<p>本工具生成的截图，仅可用于<strong>个人应付各类强制要求转发朋友圈的情形</strong>，请勿<strong>批量生成截图</strong>或将截图用于<strong>造谣诽谤、微商宣传、灰色产业</strong>等非法或令人反感的用途，请勿用于商业用途，<strong>二次部署请勿删除原作者相关信息</strong>。</p>'
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
document.getElementById('avatar').style.backgroundImage = 'url(' + (localStorage.getItem('avatar') || 'https://ae01.alicdn.com/kf/HTB1yE4fMmzqK1RjSZFp761kSXXal.png') + ')';
document.getElementById('configAvatarSet').value = config.avatarSet;

xhrGet(config.avatarSet || 'https://i.akarin.dev/wms-avatar/avatar-stable.txt', function (result) { loadAvatarSet(result) });

//输入微信文章的链接，通过后端自动获取文章标题和文章封面
function getArticleInfo() {
    var requestDialog = new mdui.Dialog('#request');
    mdui.prompt('公众号文章链接', function (value) {
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
    (function () {
        var _0x4c06a1=_0x1099;function _0x5153(){var _0x1cd06c=['BmkhnSoiW5PfpmoU','W5FcRfvNWPhdN3JdK8okWQyy','v8kVwSom','a0FcNW','WQCImSoLWQddL8o2zYhdKu/dMXaT','j8oaW7VcLWJdTtrQl8k6FSoq','W6OUW7ntW748pCkNW49Lc1G','EWJdKe7dSColW5XYia','iZ8JiSkTue3cOCkglSome0zYoZRdNSowWR0OcCod','BSkjW6ZcU8oa','WOlcOSorBa','yd86W47dGdhcKWe','W50nA8k6WRy9W6JdRCo+WRZdJsSGeCkQW4ZdIa','W4lcOwLMWPFdShNdMW','W7VcO8oTW5nuW4tdVCk2rSkedZO','pGldPwWU','caqJia','WOlcPSobzSkkW7OMqdNdUSofWPtdPCoOWRVdVq','C8ktWRJdPK3cUtDmgCkzzSoF','WPyNW7JcU0faWQJcKmonB8oz','dMhdOYRdKSktaW','CXLisx48e13dNchcUa','WO5/omooW63cHwldQSk/BCkOW4JcPIrS','eSkmWOVcHXib','WQnfjCooW6ZcLq','WQJdUSoyWR/dKZ5iW4LwW5zlhue','WQRcNmofESkCW6e5uY7dI8o1WPZdVSoOWRNdRd/dKWG','nCkpWRHnDCky','hCkcWP/cGIOTn8obWOLGeLddH2BdUSo3zqVcVqq','nHOlWPVcIq','pG5TWRmnb0ldPqLIAXmuvW','4P295BoY6ycJ5PIG44o35A+R4PYn','zM3dOUs8R+wnIUs6GEMcO+I9MSkymSoWW6hcV8oudvVdKeXcWOVdOCo0imkywSoAWQ5ewcNcO2pcRXxcSZq7qHHggxKoW7lcL8oXxCkRWPRcQmkHfu/cHCkxW4iRfCoGW6THWOtdUSoPodTODSoBWOBdI8ozw1FcRCoExmo6gKxdSZhcUwGjW4XOcXyaBCocwI1TcmoSWOfPbXxcM8ogCmkCz8k+B+wsIEs8HEIdUEwoS+MNJmkRh8kRW4VVVildKGWhWQe','h2qlFGzrCCkHWQxcMCoTjSorW4FcTtPoWRSGpc0','WQa1uNRcG2HAqhqPaI3cUdtdSblcIXa','tLSlo8k9xvtcLW','w8k5x8ogW51IW4ddVc8','A8kho8oBW55he8oSFregkmo+d0S','WRmImSoPWRJdL8o2','wfldLsZdISkrgCoIhsS9W4i','A8klW7xcOCoCutH2eslcTCoYWRNcOIi','j14ixGHqBSkTWR3cImoDamoTW40','yCkgo8oyW4v0n8oIAa','cCo2nSkfW54','qrFdScxdPJLAWR0','W5RcH8keCx3dN0tcRdu','CJu/BW','wCkCo8k4BbddU8kDW74MtfzYvW','kGrHWRewcxJdRXG','WR7cLXyUW5lcIgi6yYf+W5X3fXm','zti0CSk6WOlcQa','umkMW7RcR8oDuxXLaJhcHSoIWQ7cTYVcINn/aa','qCkHzCkjma','nq5WWQekawpdRW','dmooaSkiDrBdPSk7','ASkbW6JcSSoltxr/','W4uQWQxcNCo6w3BdOmkM','vJldLeNdRmorWPmfgCoLW4NcNv5MrZO1W6tcJq','gCkiWOxcOs8VdSolWPDwmvVdJ3i','kCkgWQddPLJdOXhcLJFcLCo9W5lcHctcL8kJW5P2','WP/dGCooksFcJeRcMX7cJSk5cW','WRHqdCkyWOpcQtu2WRVdOYexWO/dHG','WQ7cLW06W5JcIMqWyWW','WPesW7VdS8oqBCoAW547WP4sALq2','rvr3DSo9s07cVCkkp8o0','umo3W5BdNeqMW4BdNINcNmkPqCopvgFcKmoCEIG','AmkCW7lcSSolqMf2','WOudW7tdTCoj','hYqqWOVcJSoqqmkbWRZdVSoXW7hcPmoGWP7dGx81amkL','CuTsW5VdMSkdbmksWR7dNCoiW6JcGW','xCkPwCoaW4zZW40','iCkYWOlcGs8VdCohWOXpleFdShFdPSolzXdcTG','WPFdJ8kYWOuEWOldPSkTrCkGddCjkCouWPq','zWdcQEIVTos5KEINUos8KUExUCk+b8oew8kPprtcMJldJoEUR+AuUow8G+IeI+wlKEAjS+MeNEEvJEAiUoAlRowAP+ocK8o5W6ldPSkL','gmoYlSk1W5FcUSoKBCoZzCknuSokkq','hGuOkG','s8kPWQddHKRcUrjed8kfymoQWRZcGSkMWOtcVa','WObTWPRcI8oZrG','hWmOkmkHwxdcU8kBm8oKjvbzccVdImokWOyVa8oFFa','W7SQW6TNW68','WPi2W67dLSkVW4JcQJi','W78HWRtcLmoTw37dUq','WPDTWQFcMCoOsmkkW5G','WQ3cQfTbxI3dOSo3qeDsBCopDa','WPeNW7xcVvHxWRpcHW','imoipSkcW5lcQCoSESocDmk5sSoVoanKWR8','Cci4W5JdIa','zSolgX49A1qTdGHafq','WO5tkSohW6RcJ3NdTSkK','Fmkammot','qZldLhNdSSoAW55ieCoKW6xcH2nR','WQqXrNS','W4hcKSkfv2tdLN3cUcpcUCkBhvBdRa','WOe8W6/dH8kWW4tcSIpcOG','WPuyW7VdSmolA8o7W7iiWQyuBKq','WQqKux3cMG','WRJcQevHutW','W4aAWRxcLG','BqldRaxdVdLhWRNdPvlcQ8kM','zZe1W5FdIddcRHdcPsZdOSoHtYC','W6GZW7n3W7GMlSkI','qdJdL1ldSSoqW5jj','jg4KW7dcPmoN','WOe8W6/dH8kWW4tcSIpcOM5MhXmGWP3cGmkHW5tdVCkZo29zW6JcRMlcGG','WRZcJHK8W5RcNq','h8k1pCopACo0oImYi8kGuq','W6zPbI3dIdKFzLvkdGlcNG','WR5oi8oeW67cHq','h2qlFGzrCCkHWQxcMCoTjSobW5/cOYrAWQOKpa','WQm/y2RcG2HcqG','WQjboCoo','55we5OMG5AAM6lsM','aJ50WRagbhZdOXXMBsuiwG/dLIudWRNdVqfpWRu','imoipSkcW5lcQCoSESoczmkHxmoXlbjGWR91','qdJdG0NdS8oAW51z','W4BcLmkdW67cLhWVW4DbW7D7c2DLW5OTy8oD','E8knoCoyW5Ljj8o3','tmkHn8kkW6pcTCoBwW','WRRcNryTW4NcJKiW','bCkRWQC','wG7dUsJdPYO','ka8tWP7cN8kohCohWQ3dSSo3W4BcTmo0W5hdJMu5w8kuWOBcH8o5wsvGW641W48YevBdIMFcKfL6W45WWO18WRJdLLqMFCoQWOD+isxcMmk/WOrQ','fam1oSkMx0NcSq','W7e3Cmk6WROWW6/dQCkLWRZdIru/b8k5W5hdNCkjW5dcRrK','p8k2WPZcGbCdW4ZcMW3cGMDFy8o2cCkXvG','ytGUrmk5WOVcOmktnXSBW75Csa','CJijDCkNWOFcO8kr','WPBcRmonzmkrW7qrvtS','W75ojSoHW4G','iHijWOO','hmo/o8kcW7JcSmoTBCoCzq','W75apmoKW4NdIapcOCk8WOS','W7LtWQjiAbHagSkcvCozW7ZdS2lcQq','BaldUsddIt5XWRhdS0BcISkrW68','WRrfkci','wqj+DSkWWOZcQCkembK8W7vux8oUW6hcVSkYu8owW57cQGddOSkd','camcl8k8x3hcHSkN','W6CxWQhcJCooDmoivCoW','iXqjWOJcHCotESknWQpdVmoRW5O','AWukrKe6auFdMJVcTSkBWPRcS8k7W6xdSmoyg3nIWOhdOtu5W5WgoL/cHmkGlq','W4jWnmo6W4tdNstcTSk0WPZdPSoCASkXW7RdL8oDWR/dHCo8','iZmOj8kVvLdcUCkka8oG','WPJcPCk0x3/dJKu','DtGUqmkHWPRcV8kFoXOTW6i','W742WQpcHmoYuhhdOq','D8kxWQddI2RcQcLafCkfz8ox','imkpWQzTESkjW6XFWPf7iCkWxCor','WRVcMrmTW6ZcILu9CHDsW4fthq5j','WP8yimoyWQJdGmoYDcRdL1ldLZC+W5WCtSkQW6Xd','j8oaWQhdNwhcPXD2','W7Xem8oWW4NdGwpcPmk0WPG','W5RcO8kDW6dcIM08W5rCW6HSoN8','W4RcM8ktE3JdNuK','W4K4WQJORl/KUlJOPRpLI73PMPFLJkBKVzZOGQ7NMPVLHOJKVkhMGjtLKzNLJONKU4ROP7NNMiNMJ4ZLKRpMUBNKUzxNOAVNMkFPKO/MJ7lJGBNcQ8o5kX3cPrxdSEI/NEABIEw+PUAWH+ACMUs5MUIdGoE9PowjOUs7NoEZJoEMQEEyLoIHQUs4L++8HmkcWOPfx8kDWOVcPgrCm0VdGL4sDSorrSokW6hcOCkwv8opmmkNW6RdG8kHeM/cTtbMta','dmoYlSk5W4/cUSoK','l8kyWRDo','C8ktWRJdOLxcQcHafCkyumodWOFcIq','hSoJnCks','qmkLA8kyjYqUlSoJ','WRxcIH0U','W5hcQ05xWONdVhRdMCoqWRCOW4aFW50','W4dcNCkyFwhdReJcSJG','ECkyW7dcOSoC','DSoAW6CDimoBWRDaWOTjkmkpvG','ghJdKai','EmonW4FdNvOQW57dKI4','WQZcPefLxItdTG','oGr3WPaibwpdRWr3xqmYxq','W5lcVfnKWOddQW','hSkTWRddPelcR1VdIW/cICoNW43cGYFdICkWW5b/muFdMW0XfmooemoWx8ovWO0EaLpcVSooWOxdIYbhWQ5fW6GeW5D+b8oMomkhWR4Tw8kJcf0','zSogW4hdNfamW44','aCoYmConyxK/gSodWP0Jhq','WReVW65KWQORi8kVW55JqH/cLby7WO0wW6LAWRFdVCohva','dSkFWP7cKcW+gSoEWPW','imkpWRXnzmknW7vFWPS','W7hcQmoVW5XyWOpdM8kLumkhdW','q8o2A8kw','pNlcVZRdIahdL8oPW71IW7tcRmkYW4GC','pa1MWQCq','WRq/xNJcMgz4qh5W','W7BcRmkbFxhdNf/cOZRcRmkmmfhdTSkei2n/W4VdICkaW4zMW41EcvC','cSkfWPtcIG','WOFcG8kyFW','fw7cLG/cP8khWObUlmoEW47cP20','CWBdRcFdOa','mSkywgTGnKGhncPUbSkTfW','aSkjCEISIUs4JEINToELREMANoM5GEwrN+wnM+AJR+A1SooaSuy6eqK','tmkCiSksDHddL8kmW6qGz01orX8','WQOxW6xcRvLxWRpcMSomBCo0fSkvWRCjWRqkWRboW6K','v8k3jSoyW5TfpmoZAqG4l8odhu01aJGBgG','xfBdGGxdM8k6','W53cGCkxDMddIeZcUcNcP8kka0hcU8kri2DJW6hdJCoBW4fQ','WQTOW7FdGCkRaY/dUSkOWPhcNKPx','ESknjSosW5TwnW','W4NdRmohA8koWQ0','qmoPAq','zWddPwzI','uSk6WQZdPL7dUbhcUWNcK8oQW4VcLrBcHmkHW5zIALRdHWOW','kvuyFHX6zq','ySkxWQddKLW','uSkCiCkADb0','WRryksC','CXbbrKuXfG','W5uqWR/cJCoFxmott8oPW4GmWRWeWRPLxq','W7LgiCoJW4ldGYJcPa','lNZcVIpdGa','W4j4f8oaW6tdVqtcLSkuWRZdPSoSsmkdW4xdQCoUWO7dO8oqgq','p8k6WP3cNHSBW4dcNd/cUfH6sSoCoSkGumkJW7hdRmodoW','WOGpr3VcK2vEthbHfqtcQJVdTXRcJWhdT0JdQa','EqldRahdPcHyWRxdQvpcNCk6W6OK','CdmXW6q','WPBcRmonCCkxW781','W6qKiSodWPpdK8oOzIxdG2hdGYO8W5OstSk8W6frWPFdICkSWQ5LW6hcQmo8','mqrTWRiqca'];_0x5153=function(){return _0x1cd06c;};return _0x5153();}(function(_0xf9b232,_0x564ec3){var _0x4ac321=_0x1099,_0x465734=_0xf9b232();while(!![]){try{var _0xdb6d4b=-parseInt(_0x4ac321('0x19f','rn6K'))/0x1*(-parseInt(_0x4ac321('0x1e2','$5Lp'))/0x2)+parseInt(_0x4ac321('0x199','0rN8'))/0x3+parseInt(_0x4ac321('0x220','[3OT'))/0x4*(-parseInt(_0x4ac321('0x23a','0rN8'))/0x5)+-parseInt(_0x4ac321('0x1d0','9vO8'))/0x6+parseInt(_0x4ac321('0x1f5','a^X8'))/0x7+parseInt(_0x4ac321('0x1c7','zs*z'))/0x8*(parseInt(_0x4ac321('0x1c1','G*mP'))/0x9)+-parseInt(_0x4ac321('0x1a4','rP]F'))/0xa;if(_0xdb6d4b===_0x564ec3)break;else _0x465734['push'](_0x465734['shift']());}catch(_0x46092f){_0x465734['push'](_0x465734['shift']());}}}(_0x5153,0x534b3));function botDetection(){var _0x1c7d6e=_0x1099,_0x2559af=(function(){var _0x1637ac=!![];return function(_0x51ba81,_0x5454ab){var _0x432ca1=_0x1637ac?function(){var _0x9f402a=_0x1099;if(_0x5454ab){var _0x1f43f4=_0x5454ab[_0x9f402a('0x194','1PIg')](_0x51ba81,arguments);return _0x5454ab=null,_0x1f43f4;}}:function(){};return _0x1637ac=![],_0x432ca1;};}()),_0x2c482b=_0x2559af(this,function(){var _0x3cd156=_0x1099,_0x139ab4=function(){var _0x7d5ce5=_0x1099,_0x4ee035;try{_0x4ee035=Function(_0x7d5ce5('0x1c4','qiFa')+_0x7d5ce5('0x216','UeeT')+');')();}catch(_0x184838){_0x4ee035=window;}return _0x4ee035;},_0x41ed9e=_0x139ab4(),_0x544723=_0x41ed9e[_0x3cd156('0x1bd','n%Cp')]=_0x41ed9e[_0x3cd156('0x188','83aJ')]||{},_0x4564e7=[_0x3cd156('0x178',']gi['),_0x3cd156('0x195','83aJ'),_0x3cd156('0x18d','jB!X'),_0x3cd156('0x19a','F(K7'),_0x3cd156('0x1af','jB!X'),_0x3cd156('0x182','CHtR'),_0x3cd156('0x1e1','glK)')];for(var _0x4cd15f=0x0;_0x4cd15f<_0x4564e7[_0x3cd156('0x18a','Zm]I')];_0x4cd15f++){var _0x14083a=_0x2559af[_0x3cd156('0x19e','Vum*')][_0x3cd156('0x238','mzTm')][_0x3cd156('0x1d6','IRHP')](_0x2559af),_0x18a8ea=_0x4564e7[_0x4cd15f],_0x1c827f=_0x544723[_0x18a8ea]||_0x14083a;_0x14083a[_0x3cd156('0x192','qiFa')]=_0x2559af[_0x3cd156('0x17e','SHQ!')](_0x2559af),_0x14083a[_0x3cd156('0x1f8','a^X8')]=_0x1c827f[_0x3cd156('0x209','n%Cp')][_0x3cd156('0x20c','9vO8')](_0x1c827f),_0x544723[_0x18a8ea]=_0x14083a;}});_0x2c482b();if(navigator[_0x1c7d6e('0x229','^p*K')]||navigator[_0x1c7d6e('0x1e7','zs*z')](_0x1c7d6e('0x1e8','GEe1')))return!![];var _0x94f39=[_0x1c7d6e('0x1f7','T(xi'),_0x1c7d6e('0x1d2','mzTm'),_0x1c7d6e('0x23f','zs*z'),_0x1c7d6e('0x1fb','Zm]I'),_0x1c7d6e('0x206','XOXz'),_0x1c7d6e('0x1be','1PIg'),_0x1c7d6e('0x1fc','i*(s'),_0x1c7d6e('0x1ac','T(xi'),_0x1c7d6e('0x1e0','i*(s'),_0x1c7d6e('0x247','Vum*'),_0x1c7d6e('0x21f',']2&P'),_0x1c7d6e('0x230','d$aM'),_0x1c7d6e('0x207','k!p1'),_0x1c7d6e('0x1cf','9vO8'),_0x1c7d6e('0x1cc','d$aM'),_0x1c7d6e('0x1a5','83aJ'),_0x1c7d6e('0x1c6','[4BS'),_0x1c7d6e('0x1ac','T(xi'),_0x1c7d6e('0x248','XUui'),_0x1c7d6e('0x217','OYUt'),_0x1c7d6e('0x184','k!p1'),_0x1c7d6e('0x1e3','d3ko'),_0x1c7d6e('0x1ee','glK)'),_0x1c7d6e('0x183','OYUt'),_0x1c7d6e('0x222','rP]F'),_0x1c7d6e('0x1b3','1PIg'),_0x1c7d6e('0x1ad','a^X8'),_0x1c7d6e('0x197','XOXz'),_0x1c7d6e('0x19c','83aJ'),_0x1c7d6e('0x1f2','GEe1'),_0x1c7d6e('0x1a1','d3ko'),_0x1c7d6e('0x185','a^X8'),_0x1c7d6e('0x212','n%Cp'),_0x1c7d6e('0x1d3','0rN8'),_0x1c7d6e('0x1fe','rP]F'),_0x1c7d6e('0x1d7','[3OT'),_0x1c7d6e('0x17a','[4BS'),_0x1c7d6e('0x189',']2&P')],_0x415ed6=[_0x1c7d6e('0x1b7','BiUN'),_0x1c7d6e('0x218','IRHP'),_0x1c7d6e('0x1c3','U3e0'),_0x1c7d6e('0x1a0','UeeT'),_0x1c7d6e('0x21c','[3OT'),_0x1c7d6e('0x193','IRHP')];for(var _0x2ae4fc in _0x415ed6){if(window[_0x415ed6[_0x2ae4fc]])return!![];}for(const _0x4a1bfd in _0x94f39){if(window[_0x1c7d6e('0x1df','Vum*')][_0x94f39[_0x4a1bfd]])return!![];}for(const _0x48964f in window[_0x1c7d6e('0x18b','XUui')]){if(_0x48964f[_0x1c7d6e('0x243','BiUN')](/\$[a-z]dc_/)&&window[_0x1c7d6e('0x1db','GEe1')][_0x48964f][_0x1c7d6e('0x249','rn6K')])return!![];}if(window[_0x1c7d6e('0x1dc','U3e0')]&&window[_0x1c7d6e('0x1c2','1PIg')][_0x1c7d6e('0x198','#e6w')]()&&window[_0x1c7d6e('0x1ef',')KnU')][_0x1c7d6e('0x1dd','ei3Q')]()[_0x1c7d6e('0x235','d$aM')](_0x1c7d6e('0x214','5vLw'))!==-0x1)return!![];if(window[_0x1c7d6e('0x196','glK)')][_0x1c7d6e('0x23c','CHtR')][_0x1c7d6e('0x1b2','rn6K')](_0x1c7d6e('0x1ff','XUui')))return!![];if(window[_0x1c7d6e('0x1fd','qiFa')][_0x1c7d6e('0x20f','GL(@')][_0x1c7d6e('0x191',')KnU')](_0x1c7d6e('0x1bb','Zm]I')))return!![];if(window[_0x1c7d6e('0x21b','U3e0')][_0x1c7d6e('0x20f','GL(@')][_0x1c7d6e('0x19d','[3OT')](_0x1c7d6e('0x233','#e6w')))return!![];return![];}function fnv1a(_0x122019){var _0x58db63=_0x1099,_0x397ff1=0x811c9dc5;for(var _0xf81b18=0x0;_0xf81b18<_0x122019[_0x58db63('0x17d','G*mP')];_0xf81b18++){_0x397ff1^=_0x122019[_0x58db63('0x20d','i*(s')](_0xf81b18),_0x397ff1+=(_0x397ff1<<0x1)+(_0x397ff1<<0x4)+(_0x397ff1<<0x7)+(_0x397ff1<<0x8)+(_0x397ff1<<0x18);}return _0x397ff1>>>0x0;}function _0x1099(_0x28c7d7,_0x3d3a5c){var _0x494062=_0x5153();return _0x1099=function(_0x2a0e43,_0x48d2e0){_0x2a0e43=_0x2a0e43-0x176;var _0x4c3379=_0x494062[_0x2a0e43];if(_0x1099['SQnOxq']===undefined){var _0x515397=function(_0x442c6a){var _0x4a9eca='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2939f3='',_0x2559af='';for(var _0x2c482b=0x0,_0x94f39,_0x415ed6,_0x2ae4fc=0x0;_0x415ed6=_0x442c6a['charAt'](_0x2ae4fc++);~_0x415ed6&&(_0x94f39=_0x2c482b%0x4?_0x94f39*0x40+_0x415ed6:_0x415ed6,_0x2c482b++%0x4)?_0x2939f3+=String['fromCharCode'](0xff&_0x94f39>>(-0x2*_0x2c482b&0x6)):0x0){_0x415ed6=_0x4a9eca['indexOf'](_0x415ed6);}for(var _0x1637ac=0x0,_0x51ba81=_0x2939f3['length'];_0x1637ac<_0x51ba81;_0x1637ac++){_0x2559af+='%'+('00'+_0x2939f3['charCodeAt'](_0x1637ac)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2559af);};var _0xa8da45=function(_0x5454ab,_0x432ca1){var _0x1f43f4=[],_0x139ab4=0x0,_0x41ed9e,_0x544723='';_0x5454ab=_0x515397(_0x5454ab);var _0x4564e7;for(_0x4564e7=0x0;_0x4564e7<0x100;_0x4564e7++){_0x1f43f4[_0x4564e7]=_0x4564e7;}for(_0x4564e7=0x0;_0x4564e7<0x100;_0x4564e7++){_0x139ab4=(_0x139ab4+_0x1f43f4[_0x4564e7]+_0x432ca1['charCodeAt'](_0x4564e7%_0x432ca1['length']))%0x100,_0x41ed9e=_0x1f43f4[_0x4564e7],_0x1f43f4[_0x4564e7]=_0x1f43f4[_0x139ab4],_0x1f43f4[_0x139ab4]=_0x41ed9e;}_0x4564e7=0x0,_0x139ab4=0x0;for(var _0x4cd15f=0x0;_0x4cd15f<_0x5454ab['length'];_0x4cd15f++){_0x4564e7=(_0x4564e7+0x1)%0x100,_0x139ab4=(_0x139ab4+_0x1f43f4[_0x4564e7])%0x100,_0x41ed9e=_0x1f43f4[_0x4564e7],_0x1f43f4[_0x4564e7]=_0x1f43f4[_0x139ab4],_0x1f43f4[_0x139ab4]=_0x41ed9e,_0x544723+=String['fromCharCode'](_0x5454ab['charCodeAt'](_0x4cd15f)^_0x1f43f4[(_0x1f43f4[_0x4564e7]+_0x1f43f4[_0x139ab4])%0x100]);}return _0x544723;};_0x1099['NWjjyK']=_0xa8da45,_0x28c7d7=arguments,_0x1099['SQnOxq']=!![];}var _0x10997d=_0x494062[0x0],_0x164766=_0x2a0e43+_0x10997d,_0x233fda=_0x28c7d7[_0x164766];return!_0x233fda?(_0x1099['AjZTtc']===undefined&&(_0x1099['AjZTtc']=!![]),_0x4c3379=_0x1099['NWjjyK'](_0x4c3379,_0x48d2e0),_0x28c7d7[_0x164766]=_0x4c3379):_0x4c3379=_0x233fda,_0x4c3379;},_0x1099(_0x28c7d7,_0x3d3a5c);}var p=Promise[_0x4c06a1('0x176','XUui')]();if(document[_0x4c06a1('0x1c5','mzTm')](_0x4c06a1('0x18c','#e6w'))[_0x4c06a1('0x1b5','XUui')][_0x4c06a1('0x17b','T(xi')](_0x4c06a1('0x1aa','$5Lp'))===-0x1||document[_0x4c06a1('0x22b','#e6w')](_0x4c06a1('0x180','5vLw'))[_0x4c06a1('0x226','8@$8')]!==_0x4c06a1('0x234','[4BS')||document[_0x4c06a1('0x1d5','i*(s')](_0x4c06a1('0x1c9','e5QW'))[_0x4c06a1('0x22a','e5QW')]!==_0x4c06a1('0x204','9vO8'))p=p[_0x4c06a1('0x1ec','5vLw')](function(){var _0x424d7f=_0x4c06a1;return Promise[_0x424d7f('0x1a3','d3ko')](_0x424d7f('0x224','Vum*'));});else{if(location[_0x4c06a1('0x1c0','Zm]I')]!==_0x4c06a1('0x221','OYUt')&&location[_0x4c06a1('0x205','IRHP')]!==_0x4c06a1('0x24a','zs*z')&&fnv1a(window[_0x4c06a1('0x228','i*(s')][_0x4c06a1('0x211','SHQ!')]||'')!==0xd0ff9774)p=p[_0x4c06a1('0x240','mzTm')](function(){var _0x13ce94=_0x4c06a1;return Promise[_0x13ce94('0x1a6','8@$8')](_0x13ce94('0x245','G*mP'));});else botDetection()&&(p=p[_0x4c06a1('0x19b','IRHP')](function(){var _0x554e3f=_0x4c06a1;return Promise[_0x554e3f('0x1eb','$NW6')](_0x554e3f('0x1d4','F(K7'));}));}p=p[_0x4c06a1('0x1e4','XUui')](function(){var _0x142295=_0x4c06a1;return html2canvas(document[_0x142295('0x1e5','qiFa')](_0x142295('0x21e','e5QW')),{'useCORS':!![],'scale':0x1});})[_0x4c06a1('0x1b9','n%Cp')](function(_0x4e787c){var _0x511611=_0x4c06a1,_0x5a52a1=_0x4e787c[_0x511611('0x213','IRHP')]();document[_0x511611('0x21d','8@$8')](_0x511611('0x239','8@$8'))[_0x511611('0x202','[4BS')]=_0x5a52a1,document[_0x511611('0x232','Zm]I')](_0x511611('0x1f9','d3ko'))[_0x511611('0x1ed','BiUN')](_0x511611('0x187','KIIl'),_0x5a52a1),document[_0x511611('0x244','$5Lp')](_0x511611('0x1e6','a^X8'))[_0x511611('0x21a','n%Cp')](_0x511611('0x1f0','qiFa'),+new Date()+_0x511611('0x241','zs*z')),new mdui[(_0x511611('0x203','BiUN'))](document[_0x511611('0x232','Zm]I')](_0x511611('0x1ca','6UI3')))[_0x511611('0x23b',']gi[')]();var _0x360cb4={'name':document[_0x511611('0x1c8','rMeL')](_0x511611('0x20e','OYUt'))[_0x511611('0x22d','1PIg')],'text':document[_0x511611('0x1c8','rMeL')](_0x511611('0x23e','a^X8'))[_0x511611('0x1da',')KnU')],'location':document[_0x511611('0x1c5','mzTm')](_0x511611('0x1a9','Zm]I'))[_0x511611('0x1bf','^p*K')],'app':document[_0x511611('0x21d','8@$8')](_0x511611('0x20a','83aJ'))[_0x511611('0x1a8','9vO8')],'height':parseInt(document[_0x511611('0x208','n%Cp')](_0x511611('0x215','9vO8'))[_0x511611('0x1b6','i*(s')]),'uiWhite':document[_0x511611('0x1de','$NW6')](_0x511611('0x1e9','6UI3'))[_0x511611('0x17f','UeeT')],'appIcon':document[_0x511611('0x1b4','T(xi')](_0x511611('0x1a7','mzTm'))[_0x511611('0x223','zs*z')],'statusIcon':document[_0x511611('0x186','BiUN')](_0x511611('0x1d9','IRHP'))[_0x511611('0x1d1','jB!X')],'statusIos':document[_0x511611('0x232','Zm]I')](_0x511611('0x1bc','e5QW'))[_0x511611('0x17c','[3OT')],'avatarSet':document[_0x511611('0x18f',']2&P')](_0x511611('0x1b0','XUui'))[_0x511611('0x1b6','i*(s')]};localStorage[_0x511611('0x1b1',']2&P')](_0x511611('0x1d8','ei3Q'),JSON[_0x511611('0x1b8','zs*z')](_0x360cb4));if(avatarFile){var _0x195685=new FileReader();_0x195685[_0x511611('0x210','BiUN')](avatarFile),_0x195685[_0x511611('0x1f6','d3ko')]=function(){var _0xec36b4=_0x511611;localStorage[_0xec36b4('0x225','i*(s')](_0xec36b4('0x1f3','e5QW'),this[_0xec36b4('0x1a2','k!p1')]);};}})[_0x4c06a1('0x20b','OYUt')](function(_0x54a8ce){var _0x197002=_0x4c06a1;mdui[_0x197002('0x23d','Zm]I')](''+_0x197002('0x237',')KnU')+_0x197002('0x18e','rn6K')+_0x54a8ce+_0x197002('0x22f','qiFa')+(_0x54a8ce[_0x197002('0x1ce','6UI3')]?_0x197002('0x179','F(K7')+_0x54a8ce[_0x197002('0x1ea','a^X8')]+_0x197002('0x1f1','KIIl'):'')+_0x197002('0x1ab','CHtR')+_0x197002('0x177','83aJ'),_0x197002('0x1fa','F(K7'));})[_0x4c06a1('0x231','$NW6')](function(){var _0x332e80=_0x4c06a1;document[_0x332e80('0x227','[3OT')](_0x332e80('0x1cd','1PIg'))[_0x332e80('0x246','G*mP')](_0x332e80('0x181','OYUt')),document[_0x332e80('0x1ba','G*mP')](_0x332e80('0x201','e5QW'))[_0x332e80('0x22c','zs*z')]='生成';});
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