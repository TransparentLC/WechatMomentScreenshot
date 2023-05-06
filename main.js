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

    //设置时间
    var configPostDate = document.getElementById('configPostDate').valueAsDate;
    configPostDate.setHours(document.getElementById('configPostTimeHour').value);
    configPostDate.setMinutes(document.getElementById('configPostTimeMinute').value);
    var configScreenshotDate = document.getElementById('configScreenshotDate').valueAsDate;
    configScreenshotDate.setHours(document.getElementById('configScreenshotTimeHour').value);
    configScreenshotDate.setMinutes(document.getElementById('configScreenshotTimeMinute').value);

    document.getElementById('time').innerHTML = getTimeString(configScreenshotDate, configPostDate);
    document.getElementById('topBarTime').innerText = ((document.getElementById('configScreenshotTimeHour').value < 10) ? ('0' + document.getElementById('configScreenshotTimeHour').value) : document.getElementById('configScreenshotTimeHour').value) + ':' + ((document.getElementById('configScreenshotTimeMinute').value < 10) ? ('0' + document.getElementById('configScreenshotTimeMinute').value) : document.getElementById('configScreenshotTimeMinute').value);

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
    document.getElementById('fakeWechatMoment').style.height = '';
    document.getElementById('fakeWechatMoment').style.height = ((window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') > height) ? window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') : height) + 'px';

    //点赞数为0时隐藏点赞区
    document.getElementById('like').style.display = parseInt(document.getElementById('configLike').value) ? 'block' : 'none';

    //修正底部位置
    var offset = Number(window.getComputedStyle(document.getElementById('topBar')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('header')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('main')).height.replace('px', ''));
    document.getElementById('footer').style.bottom = ((offset < height - Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', ''))) ? (-height + Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', '')) + offset) : 0) + 'px';

    //按钮上的提示
    document.getElementById('generate').setAttribute('disabled', '');
    document.getElementById('generate').innerText = '生成中...';

    // 就算添加了对删除原作者信息和源代码链接的检测还是有人尝试把它改掉，嗯……
    // 另外Selenium之类的东西也是禁止的
    // 用javascript-obfuscator对这部分代码加密了，但是仍然是防君子不防小人
    // 如果你只会下载jsDelivr压缩后的JS，你也看不到下面这些注释掉的未加密的代码
    // 如果你想到了可以在GitHub上找到这些未加密代码，我相信你也不会做出删除原作者信息这样的事情
    (function () {
        function _0x2ee5(){var _0x5e81db=['CWFdGwhdKCksodZcQq','rHeqhbqLWRJcSa','r1ddUeJdK8o0WPhcISoaFJ1RWR7dPq','WPdcNWCCm2Kx','lwPJCmkOW7SMlIfCW73cMG','WRr6W7tdKGuUWOHrbq','W6hcGSkrtmoPdSkbWQu','WOVcKSkAWRhcV8oIi8oXW4ZcR1ZdKYjtW73cMmomWOTYhCoa','W5aOW6tKV73LJBlKUABPGzNOVztdV8okW6qaeCootSkEAay0bHW2lX7dUmkSwwzfW77dImkXWP0knI5sjmoyt3/cKvqkWPBdKgKpaxpcU3HaWRdcRgOngCoSzqC7F8krk0ZdMrm+fCoevqWyW5zkhmoZsCoMz3nIlM45WR/dSer7drzOwLVcK8kEi35kkh49mGNdGSobWOJLK67KVQVOGy7LJjZPP6OCW53dGmoM77Y7WRJcJCovoq','W5OvW7tdHxBdLcfvWQZdT27cMuldUCkZ','bXxdMg3cJmoUeW','rmoPkCkdWRTLuq','WOS9WQ7dMmoXW6yUW7BcSCkcW4Dzmmoy','W4JdVSoVlY4','WOeaW74XDmkPWRBcOrz6aCoYW497W6iKn8obWPFdISo3','WPFdVSk2WR4hW6BdQt3dJY3dT20l','yL0cWPhdOunzW63cLJHngxRdMW','W65vW4bfW4SGqNFdMCk5WR0','55w65OQx5AwH6lEL','rSoTW4RdHSkr','DLKaWRe','WQ42WQz2erDjy8kqW58WW4SWvaRcTmo2iNVcQHq','W5rrgHj2vKhdKSobWP3dJNFdLJO','bbJcHSk9BZCjW4JcQSoDW7G','BWKNoCoIW47cPmk7x1VcR0i','W5NdUSoTpZNdV8k8jWKlW73cKGRdJW','pLr0ESk7WPRcGmkH','gCkQWQDoWRFcLdezhW','W7VcK8oXW6LwWRVcQZJdVqpdSxmsWQ4Pp8kGoZi5mq','xYZdGg3dK8kqpZpcPrmkhgSpW7VcRba2WOLZ','bCkLW5aSWOiJWOlcMefUAmkMW4xdI8o8','cCkQWQTpWRFcNdmzcq','WOq5WQNdKSoQW60tW6hcSmkgW6bsdCof','sJ4NWPxdK2znW600WRNcOSofzmkDefFdK18','vuVcJdFdNSkYrCkVW5NcHSouW40sWPy','wcmXWPtdK2fAW6q','WRhdKmolemkQfCk3WPBcNCkCW5K','WQtdSbtcGe7dKW','kw5HECkjW78+lG','WRCXW60XBSkcWQi','W7ldJfdcKCkkiSkjW5ebzgZcUCksW40Yd3r2','W43dUSo3gZ/dQSk6kW8UW6BcHW','WPn0W6VdGrFcNCoBqG','W6hdGmoLiI/dRmkHnaGPW43cLXhdIcpdMSoiWRKauW','WPS9WRJdUCoVW6O1W7BcRq','w8oVx1FcOCka','WO/cQCkYy3lcP8o6CGa5W7ZcIGRdHq','hspcMSkJnHjJW6xdRG','qrejfbeTWO3cUWrkA8okW7RcJ8oes8olBaFdLq','q1CTWP51','mupdHh3dICkYfte','vmooWRtdUW5qW7qyrJXKz3tcQLm','kCkFW5miWPqZWOlcMfv+BSkf','W50iW7pdLxRdGurvWRpdSwRcMa','WPymWQvwhXzwB8kiW44aW60kuW','WRnWW4tdUGuQWRa','Fseinv3cLmkfWO7dIWj/A8ocyMnMxmk8w3eZWR4','nKxcHZVcImoczJlcMJmcc0C','C8orWPVdSCkVpLZcHW','W70pW6/dNh7dG0HcWRpdOgFcNLq','aSoIjmkfWRNdHMdcJKJdImo8WP8ojq','lwPJCmkEW7OzlInqW6BcNSosoq','DmorWPBdOSkRphpcHCo1jSobuLfbW4y','W4ZdUSoPpYJdQG','vduRWPtdK1TEW7aY','DSovsfdcPmkcg0njW4NdGmofzhKRWP7cTW','euGtkc8jWQ7cVq','W4nFWRzhktXOxW','WO9eua','W5ddJebTFJ9mWPyDWOtcKmo8WOK','uresabSVWOVcSqrN','EapcOmkhbaP8','WQniiSoKW7RdOvNcGq','WRZcPqaWk2KuWP4IWQhcRmosWPtdPmkUWRHDi2C','zbZdKh3dKSkqpY4','seFdQwS','WQK6W6SWzmkKWRlcRri','cSkGWQzFWQJcMcKi','kMrSACkwW7SKpWPzW63cMSocoMm','WRz0W5ZdHHq','ASogW5ZdGmkyuJNcUWCwW7LEb8ozAadcLZRcH8oE','qmknpgv8mSoRWPSin8oscmoGW4dcK0ShW7eZW6RdVG','WOnUWOKI','W5ZdHclcK8owW4vhCmkOimooWPtdOSojW6xdOW','W6pdSH/cMKtdOCkudCkLW4uQmLjOW6fvaxywW69ZdHe','smoHWPBdRCkLm0BcNSo1imof','W6hdGmoLiI/dRmkHnaGPW43cHWNdNJ3dJSozWR0a','kw57wCkxW7SNlIfbW4RcJSoUma','W7tdVJpcKSoiW4LFFmkVdSo+WPZdUCojW6FdSKqnW5u','WRlcVG12WPddVCkQkZNdTNBdLCozdG','f8oIoSkLWRBdLW','W5a8WRpdQ8k9W6aVW7lcRmkfWRGcfmoyxSkrEfaLaGDKyG','iGzEW6RdV8oPW6VdQbpcJubvW5b6ySk0W4VdI3NdVSoGWOVcIa','axq1W48','rISLW6HhDfqKW7hdRSoLWRRdHG','WRL2WQ53c8oJtmoeW7BdNSoaWOSBwG','WRnieSoLW6xdRvNcKG','W7ldJflcM8khjSkfW5u7y13cU8koW5SWhMfIWQjE','oSo3omkHWRVdL2lcHG','eNHIWPusiG8GW5xdKSoeWOJdPcu','WP1eada','cmkqW6BcULigW5q0AXr2zW','4PY35BoD6yge5PIo44oL5A+U4P6X','WP89WRBdUmoZW6O2W77dSSktW7nbfCojsSkmma','WOfmWQ1xbCoIu8oiW67dJ8oWWQ0HxCoit8o5imkSWPeMAry','WRD9WR5xh8ojrW','ASogW4FdHmkjqHZcSWuAW7LcdCobBWxcKdy','W7LwW4nfW5O','wMCAWRxdVLjJW6NcJcv9mehdKmodWQGj','v1ddRMNdJCo4WORcISoCjXPKWPBdRCoSe8o3oCoTW4K/ecWOW5dcQf0','fdSSiY88WRi','WQO3W6W6','WPhdO0BcHSoD','Fs0ApfRcNSkEWPldKdHeCmoIs1bVsSkYxxa','tZ4OWP7dL2P6W7WYW6BcRSorCmkfaa','oMrCAmkjW7CKla','W5NcLmkArCo+aCkCWRxcUW','WR4xBZqRWPGQtmoWW48s','W6hcGSklBmo3cSkyWQxcUmkLW4VdQSk9WRi','WQf3W5/dHGujWRjSpw7dLXuVyComrG','WO83WRtdU8o0W6qnW7lcSSkt','mSkoW5m5WPn9W5/dNLbIBSkiW4xdH8kXBCoOBJLMoSoObZRdICoRheSaz2pcJmoPjg/cTSojxfKsyIJdVCkeW7/dUSk5W7aItqdcGCoYyIa','v0ddKCoXmYGLW6O','qrmzoLa','W7/cM1/dSCogW6O4W53cL8oUWOBdGtPtsdqEWRddPruikGFdRSo5WRNcPci','jmkiWOZdNSkvgexcMG','W4pcQCoYW4LyWRRcTdtdPrldGvuUWQq','uSo8W5/dPmkoqJNcUXmgW79K','p8owW74FlSkYsa1c','axqHWPJdLZe','WQSxBY0E','WORcHb9lWPJdQSkUodldSgVdICoMcW9IkSkAFG','B3WOWO93qKC5W7BdKde/W7lcQ8kSW4O1','dML1W4pcKJylW6qcW5/cS8oYAq','F2RdV2JdK8o0WPlcHSoBzYbNWPNdTSoRe8oZlmkLW58','u8o4W4ddGmkTuYJcUHahW4zUd8okzXG','W5NcUmoBxSo+dCkrWRlcV8kNW6ZdOCk1WQxcG8k2aH4LfaTIkamy','ls7cJSk1obLZ','Fs0ApfRcNSkEWPldKdHeCmo0xKnQt8kNDNmJWQipmSo7zCoH','W4X/W4hLP4xKUk3LVl/LPBRNMRtORkNMM4/MIzROVPxVVPNOROJKU5pOPARLIQFPM5lLJ6dKV63OGkdNMP3LHPpKV4pMGklLKAxLJi7KUzxOPyxNM4lMJQ/LKAdMUOtKUQFNOl3NMjJPKitMJ7VJGOLCWQfpW5xdT0xdIUAwJUEeGUs+IEw2OEE4H+wjG+AkTEI9PEs7OEwbLos7Ko+9OEwmVoAoQ+AGH+A2HEI/R+s4QoEzMos5LoEJTUwVJ+s8LoAFGUIVPow7QEIVG+s5G+AzHow8OoETUEwpSUEAMEs7KEAaTE+8IUs9IEAALEI/UEAGPow8UUAYVUAEI+s6V+IbO+E9PUwiPos7G+EYHUEKQUwsRE+/TqxcU8kTFCk7xIVLPi7MNBtKVABKURxNHQROPyVOVRpKUAJLGAFNMBtOR7hVVQpMR5BNQyFMIjFKU7NLJP3OG7FPMilMR5ZKV7pKVPBNLQ/KU7/KUPdLV5JMUjhNMAhKUAhNOi7VVk/KVORMM6NMIApOHy/LS7RLJO7KUOxORApKUlVLOipVV6NdLmkKiCognHZdV8o1ESo+eLr1WPNcL8oPj8kcW47dIrurWRyBpmknomo7eSkkWRytoZi','W5RdTSoWoYNdSSkTjG','AfKcWRFdPq','a8kVWP/cLSonaxZcUJS+W5XJia','WOiLzJqEWP4Iv8oPW782WRrPneBcPsHMWRWBe8km','W4xdOvhcHq','ESkQp2vSomo4WP4','vmo1W47dL8ko','ASoQW47dICkFwclcPXW','yqxdKNZdNSkh','q1RdOMVdLSo2WQJcISowFG','dCkGWQTmWQZcMGymhq','W4FcO8oOW6PDWRJcJbJdNa7dQLGc','W6bzW4nFW54c','Emk3p0vYm8o0WPCqjSoIlSoAW4C','W6XyW4fwW5yb','AmomW4aDWROiWQpcPa','WRFdL8kixmoTkmkXWQS','WRRcQXXD','WPKDWQvJaeKujCkbW5m2W7W2vvBcVSoPoWVcMaJdRxr7dYRdJ8o2CSoBW6DcW6FcNv8snSo1zfJdUCo3j3jpW7z4W51WW4BdV8okWOC5fW','W4ZdHdtcSSoiW4LCCmk0f8oJWOddHSom','WRL2WQ5Ze8oYu8oiW7RdN8o2WPC','kNLMASkEW6W','uSo8W5/dOmkwuYBcTX8hW4L4k8ol','W6NcQ0FOR4tKU7hOPjNKVRJNLAz3W5frW4ddTqqkyIBdJUETKUAvP+w/L+IeGUwkO+AlSEMhIoEuVoAiUoAjTowzPEobNZJdICoJW7G','tCoLt1FcOmkreevtW4ddK8ojBwi+','iGzEW6RdV8oPW7pdQadcRLvoW6XG','DJO+kmokWQ0eeYDXW7/cMG','xYZdN2NdJmkbbJVcPbCNkgKDW7VcUq','W6FdL0VdOmo8WRu','WOmmWRb3mGb/A8ksW5SxW4yp','w13dL8oI','mg7dOSk1W7KAmCo2WQScxvmBxG','W4bgdq','cgL1W4FcLt5XW6ypW6ZcHSo6','vuBdNmoLmIeY','sXajfWOEWRZcRaa','hLj2y8k5WPG','oSoynmkYWRZdLwJcMxNdICoqWPe1ihX5WQKt','r1ddUeZdI8oLWO7cHSomFWT3','ru7dNSoXoW','WP50egDib8oqoW'];_0x2ee5=function(){return _0x5e81db;};return _0x2ee5();}var _0x215368=_0x578d;(function(_0x2ec64f,_0x266e41){var _0x4c03c6=_0x578d,_0x17440b=_0x2ec64f();while(!![]){try{var _0x5366e3=-parseInt(_0x4c03c6('0x1fb','!Vag'))/0x1*(parseInt(_0x4c03c6('0x1bd','XHUY'))/0x2)+parseInt(_0x4c03c6('0x1ef','N8ve'))/0x3*(-parseInt(_0x4c03c6('0x254','#Bu^'))/0x4)+parseInt(_0x4c03c6('0x25c','79So'))/0x5*(parseInt(_0x4c03c6('0x21e','[Vdx'))/0x6)+parseInt(_0x4c03c6('0x210','cKOG'))/0x7+parseInt(_0x4c03c6('0x235','cDF8'))/0x8+-parseInt(_0x4c03c6('0x23c','WQPV'))/0x9*(parseInt(_0x4c03c6('0x209','cKOG'))/0xa)+parseInt(_0x4c03c6('0x205','&RyK'))/0xb;if(_0x5366e3===_0x266e41)break;else _0x17440b['push'](_0x17440b['shift']());}catch(_0x174810){_0x17440b['push'](_0x17440b['shift']());}}}(_0x2ee5,0xd1671));function _0x578d(_0x1f4b40,_0x4960ea){var _0x2ee5d7=_0x2ee5();return _0x578d=function(_0x578d27,_0x384ff6){_0x578d27=_0x578d27-0x1ae;var _0x387283=_0x2ee5d7[_0x578d27];if(_0x578d['vhITUi']===undefined){var _0x3810c6=function(_0x580975){var _0x446dd0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2c3af5='',_0x3fc41e='';for(var _0x523697=0x0,_0x4b7f14,_0x409e14,_0x1b7e84=0x0;_0x409e14=_0x580975['charAt'](_0x1b7e84++);~_0x409e14&&(_0x4b7f14=_0x523697%0x4?_0x4b7f14*0x40+_0x409e14:_0x409e14,_0x523697++%0x4)?_0x2c3af5+=String['fromCharCode'](0xff&_0x4b7f14>>(-0x2*_0x523697&0x6)):0x0){_0x409e14=_0x446dd0['indexOf'](_0x409e14);}for(var _0x18840d=0x0,_0x504aa8=_0x2c3af5['length'];_0x18840d<_0x504aa8;_0x18840d++){_0x3fc41e+='%'+('00'+_0x2c3af5['charCodeAt'](_0x18840d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3fc41e);};var _0x26834e=function(_0x13b066,_0x446ab0){var _0x417d75=[],_0x4a117b=0x0,_0x3c54c6,_0x2d2ec1='';_0x13b066=_0x3810c6(_0x13b066);var _0x3c5388;for(_0x3c5388=0x0;_0x3c5388<0x100;_0x3c5388++){_0x417d75[_0x3c5388]=_0x3c5388;}for(_0x3c5388=0x0;_0x3c5388<0x100;_0x3c5388++){_0x4a117b=(_0x4a117b+_0x417d75[_0x3c5388]+_0x446ab0['charCodeAt'](_0x3c5388%_0x446ab0['length']))%0x100,_0x3c54c6=_0x417d75[_0x3c5388],_0x417d75[_0x3c5388]=_0x417d75[_0x4a117b],_0x417d75[_0x4a117b]=_0x3c54c6;}_0x3c5388=0x0,_0x4a117b=0x0;for(var _0x10bb43=0x0;_0x10bb43<_0x13b066['length'];_0x10bb43++){_0x3c5388=(_0x3c5388+0x1)%0x100,_0x4a117b=(_0x4a117b+_0x417d75[_0x3c5388])%0x100,_0x3c54c6=_0x417d75[_0x3c5388],_0x417d75[_0x3c5388]=_0x417d75[_0x4a117b],_0x417d75[_0x4a117b]=_0x3c54c6,_0x2d2ec1+=String['fromCharCode'](_0x13b066['charCodeAt'](_0x10bb43)^_0x417d75[(_0x417d75[_0x3c5388]+_0x417d75[_0x4a117b])%0x100]);}return _0x2d2ec1;};_0x578d['Nzaejf']=_0x26834e,_0x1f4b40=arguments,_0x578d['vhITUi']=!![];}var _0x4c9c39=_0x2ee5d7[0x0],_0x45a2de=_0x578d27+_0x4c9c39,_0x184139=_0x1f4b40[_0x45a2de];return!_0x184139?(_0x578d['NAmMYU']===undefined&&(_0x578d['NAmMYU']=!![]),_0x387283=_0x578d['Nzaejf'](_0x387283,_0x384ff6),_0x1f4b40[_0x45a2de]=_0x387283):_0x387283=_0x184139,_0x387283;},_0x578d(_0x1f4b40,_0x4960ea);}function botDetection(){var _0x4c4e47=_0x578d;if(navigator[_0x4c4e47('0x257','REv&')]||navigator[_0x4c4e47('0x1f7','6w4p')](_0x4c4e47('0x223','5OH6')))return!![];var _0x26834e=[_0x4c4e47('0x227','UV$f'),_0x4c4e47('0x22f','vDB4'),_0x4c4e47('0x261','T(Tb'),_0x4c4e47('0x23f','e3br'),_0x4c4e47('0x1ec','KTyP'),_0x4c4e47('0x25a','qtx$'),_0x4c4e47('0x1ff','VguZ'),_0x4c4e47('0x1f3','H7]n'),_0x4c4e47('0x218','mX)T'),_0x4c4e47('0x25d','Ztk9'),_0x4c4e47('0x202','&RyK'),_0x4c4e47('0x203','6w4p'),_0x4c4e47('0x25b','yg)#'),_0x4c4e47('0x248','T(Tb'),_0x4c4e47('0x220','Uk%o'),_0x4c4e47('0x22d','&RyK'),_0x4c4e47('0x1d3','#[3h'),_0x4c4e47('0x1e5','5OH6'),_0x4c4e47('0x1f4','cKOG'),_0x4c4e47('0x238','VguZ'),_0x4c4e47('0x20f','T(Tb'),_0x4c4e47('0x24b','!Vag'),_0x4c4e47('0x214','T6(b'),_0x4c4e47('0x1de','%ERM'),_0x4c4e47('0x212','xZgw'),_0x4c4e47('0x1e0','xZgw'),_0x4c4e47('0x1f8','79So'),_0x4c4e47('0x23e','6w4p'),_0x4c4e47('0x22a','vDB4'),_0x4c4e47('0x244','Ztk9'),_0x4c4e47('0x1f5','XHUY'),_0x4c4e47('0x228','lHNK'),_0x4c4e47('0x25f','!Vag'),_0x4c4e47('0x1c9','cKOG'),_0x4c4e47('0x241','UV$f'),_0x4c4e47('0x243','!1&l'),_0x4c4e47('0x22b','kUkW'),_0x4c4e47('0x253','EDco')],_0x580975=[_0x4c4e47('0x239','#[3h'),_0x4c4e47('0x22c','#Bu^'),_0x4c4e47('0x1b5','UV$f'),_0x4c4e47('0x24c','Gios'),_0x4c4e47('0x1db','T6(b'),_0x4c4e47('0x1b1','Gios')];for(var _0x446dd0 in _0x580975){if(window[_0x580975[_0x446dd0]])return!![];}for(const _0x2c3af5 in _0x26834e){if(window[_0x4c4e47('0x1f1','N8ve')][_0x26834e[_0x2c3af5]])return!![];}for(const _0x3fc41e in window[_0x4c4e47('0x221','cKOG')]){if(_0x3fc41e[_0x4c4e47('0x1af','!1&l')](/\$[a-z]dc_/)&&window[_0x4c4e47('0x211','#Bu^')][_0x3fc41e][_0x4c4e47('0x1fc','kUkW')])return!![];}if(window[_0x4c4e47('0x1fa','79So')]&&window[_0x4c4e47('0x201','C^dp')][_0x4c4e47('0x237','tKvh')]()&&window[_0x4c4e47('0x1b3','lHNK')][_0x4c4e47('0x24a','T6(b')]()[_0x4c4e47('0x240','e3br')](_0x4c4e47('0x206','[Vdx'))!==-0x1)return!![];if(window[_0x4c4e47('0x251','q$59')][_0x4c4e47('0x20a','WQPV')][_0x4c4e47('0x256','UV$f')](_0x4c4e47('0x1d6','n[98')))return!![];if(window[_0x4c4e47('0x21f','tKvh')][_0x4c4e47('0x1c6','mX)T')][_0x4c4e47('0x1d4','Ztk9')](_0x4c4e47('0x1f2','$3hc')))return!![];if(window[_0x4c4e47('0x224','$3hc')][_0x4c4e47('0x225','T6(b')][_0x4c4e47('0x1c2','e3br')](_0x4c4e47('0x1c3','T6(b')))return!![];return![];}(document[_0x215368('0x1d9','Ztk9')](_0x215368('0x1e8','nayQ'))[_0x215368('0x217','79So')][_0x215368('0x1fe','5OH6')](_0x215368('0x23d','lHNK'))===-0x1||document[_0x215368('0x24d','!Vag')](_0x215368('0x24e','(%Hm'))[_0x215368('0x1b2','VguZ')]!==_0x215368('0x250','XHUY')||document[_0x215368('0x1e7','!1&l')](_0x215368('0x21d','twD^'))[_0x215368('0x222','Ztk9')]!==_0x215368('0x1c0','KTyP')?Promise[_0x215368('0x216','&RyK')](_0x215368('0x262','XS^X')):botDetection()?Promise[_0x215368('0x231','#[3h')](_0x215368('0x1c5','qtx$')):html2canvas(document[_0x215368('0x255','H7]n')](_0x215368('0x25e','UV$f')),{'useCORS':!![],'scale':0x1}))[_0x215368('0x246','5OH6')](function(_0x523697){var _0x11dabb=_0x215368,_0x4b7f14=_0x523697[_0x11dabb('0x1dc','(%Hm')]();document[_0x11dabb('0x1ed','Hpd$')](_0x11dabb('0x1f6','$3hc'))[_0x11dabb('0x1ce','Hpd$')]=_0x4b7f14,document[_0x11dabb('0x1c1','vDB4')](_0x11dabb('0x229','XS^X'))[_0x11dabb('0x200','&RyK')](_0x11dabb('0x1cc','q$59'),_0x4b7f14),document[_0x11dabb('0x255','H7]n')](_0x11dabb('0x1eb','!1&l'))[_0x11dabb('0x20b','XHUY')](_0x11dabb('0x1d8','twD^'),+new Date()+_0x11dabb('0x23b','Hpd$')),new mdui[(_0x11dabb('0x1d2','N8ve'))](document[_0x11dabb('0x20d','KTyP')](_0x11dabb('0x1f0','&RyK')))[_0x11dabb('0x1bf','qtx$')]();var _0x409e14={'name':document[_0x11dabb('0x1bb','lHNK')](_0x11dabb('0x24f','6w4p'))[_0x11dabb('0x259','Gios')],'text':document[_0x11dabb('0x1e3','6w4p')](_0x11dabb('0x1b7','Ztk9'))[_0x11dabb('0x226','(%Hm')],'location':document[_0x11dabb('0x1e7','!1&l')](_0x11dabb('0x1c7','nF3h'))[_0x11dabb('0x1d5','q$59')],'app':document[_0x11dabb('0x230','qtx$')](_0x11dabb('0x1b8','$3hc'))[_0x11dabb('0x1e4','&RyK')],'height':parseInt(document[_0x11dabb('0x23a','cDF8')](_0x11dabb('0x20c','xZgw'))[_0x11dabb('0x242','nayQ')]),'uiWhite':document[_0x11dabb('0x230','qtx$')](_0x11dabb('0x1b9','H7]n'))[_0x11dabb('0x1e2','liKa')],'appIcon':document[_0x11dabb('0x1c4','UV$f')](_0x11dabb('0x207','twD^'))[_0x11dabb('0x260','[Vdx')],'statusIcon':document[_0x11dabb('0x1cd','V^ic')](_0x11dabb('0x233','nF3h'))[_0x11dabb('0x1e1','1TUg')],'avatarSet':document[_0x11dabb('0x22e','T6(b')](_0x11dabb('0x215','#Bu^'))[_0x11dabb('0x1d5','q$59')]};localStorage[_0x11dabb('0x1da','Uk%o')](_0x11dabb('0x1bc','nayQ'),JSON[_0x11dabb('0x1d7','cKOG')](_0x409e14));if(avatarFile){var _0x1b7e84=new FileReader();_0x1b7e84[_0x11dabb('0x1cb','KTyP')](avatarFile),_0x1b7e84[_0x11dabb('0x1ba','nayQ')]=function(){var _0x2161cf=_0x11dabb;localStorage[_0x2161cf('0x20e','(%Hm')](_0x2161cf('0x1b6','cKOG'),this[_0x2161cf('0x204','mX)T')]);};}})[_0x215368('0x252','T(Tb')](function(_0x18840d){var _0x16a0c7=_0x215368;mdui[_0x16a0c7('0x1b4','UV$f')](''+_0x16a0c7('0x232','6w4p')+_0x16a0c7('0x21b','Hpd$')+_0x18840d+_0x16a0c7('0x234','79So')+(_0x18840d[_0x16a0c7('0x1ea','UV$f')]?_0x16a0c7('0x247','VguZ')+_0x18840d[_0x16a0c7('0x208','yg)#')]+_0x16a0c7('0x1ca','EDco'):'')+_0x16a0c7('0x1df','6w4p')+_0x16a0c7('0x258','79So'),_0x16a0c7('0x1e9','#[3h'));})[_0x215368('0x1d0','q$59')](function(){var _0x13b4bf=_0x215368;document[_0x13b4bf('0x236','e3br')](_0x13b4bf('0x1fd','T6(b'))[_0x13b4bf('0x249','79So')](_0x13b4bf('0x1ae','&RyK')),document[_0x13b4bf('0x213','#[3h')](_0x13b4bf('0x1dd','!Vag'))[_0x13b4bf('0x1d1','twD^')]='生成';});
    })();
    // // https://bot.sannysoft.com/
    // function botDetection() {
    //     if (navigator.webdriver || navigator.hasOwnProperty('webdriver')) return true;
    //     var documentDetectionKeys = [
    //         "__webdriver_evaluate",
    //         "__selenium_evaluate",
    //         "__webdriver_script_function",
    //         "__webdriver_script_func",
    //         "__webdriver_script_fn",
    //         "__fxdriver_evaluate",
    //         "__driver_unwrapped",
    //         "__webdriver_unwrapped",
    //         "__driver_evaluate",
    //         "__selenium_unwrapped",
    //         "__fxdriver_unwrapped",
    //         "webdriver",
    //         "__driver_evaluate",
    //         "__webdriver_evaluate",
    //         "__selenium_evaluate",
    //         "__fxdriver_evaluate",
    //         "__driver_unwrapped",
    //         "__webdriver_unwrapped",
    //         "__selenium_unwrapped",
    //         "__fxdriver_unwrapped",
    //         "_Selenium_IDE_Recorder",
    //         "_selenium",
    //         "calledSelenium",
    //         "_WEBDRIVER_ELEM_CACHE",
    //         "ChromeDriverw",
    //         "driver-evaluate",
    //         "webdriver-evaluate",
    //         "selenium-evaluate",
    //         "webdriverCommand",
    //         "webdriver-evaluate-response",
    //         "__webdriverFunc",
    //         "__webdriver_script_fn",
    //         "__$webdriverAsyncExecutor",
    //         "__lastWatirAlert",
    //         "__lastWatirConfirm",
    //         "__lastWatirPrompt",
    //         "$chrome_asyncScriptInfo",
    //         "$cdc_asdjflasutopfhvcZLmcfl_"
    //     ];
    //     var windowDetectionKeys = [
    //         "_phantom",
    //         "__nightmare",
    //         "_selenium",
    //         "callPhantom",
    //         "callSelenium",
    //         "_Selenium_IDE_Recorder",
    //     ];
    //     for (var windowDetectionKey in windowDetectionKeys) {
    //         if (window[windowDetectionKeys[windowDetectionKey]]) return true;
    //     }
    //     for (const documentDetectionKey in documentDetectionKeys) {
    //         if (window.document[documentDetectionKeys[documentDetectionKey]]) return true;
    //     }
    //     for (const documentKey in window.document) {
    //         if (documentKey.match(/\$[a-z]dc_/) && window.document[documentKey]['cache_']) return true;
    //     }
    //     if (window.external && window.external.toString() && (window.external.toString().indexOf('Sequentum') !== -1)) return true;
    //     if (window.document.documentElement.getAttribute('selenium')) return true;
    //     if (window.document.documentElement.getAttribute('webdriver')) return true;
    //     if (window.document.documentElement.getAttribute('driver')) return true;
    //     return false;
    // }
    // ((
    //     document.getElementById('aboutFooter').innerText.indexOf('✨小透明・宸✨') === -1 ||
    //     document.getElementById('aboutFooterBadge').href !== 'https://github.com/TransparentLC/WechatMomentScreenshot' ||
    //     document.getElementById('sourceRepo').href !== 'https://github.com/TransparentLC/WechatMomentScreenshot'
    // ) ?
    //     Promise.reject('<p>如一开始的说明所述，请不要删除原作者相关信息和右上角的指向源代码的链接。</p><p>既然你已经动手这么做了，去掉检测这个的代码对你来说应该也是很简单的事情，但是这样很没有互联网分享精神哦？</p><p>如果你仍然要这么做的话，毕竟我不可能阻止你使用一份开源的代码，但是我至少可以说一声：<strong>Shame on you!</strong></p>') : (
    //         botDetection() ?
    //             Promise.reject('<p>请不要使用 Selenium 等方式自动批量生成截图。</p>') :
    //             html2canvas(document.getElementById('fakeWechatMoment'), {
    //                 useCORS: true,
    //                 scale: 1,
    //             })
    //     )
    // ).then(function (canvas) {
    //     var dURL = canvas.toDataURL();
    //     document.getElementById('generated').src = dURL;
    //     document.getElementById('save').setAttribute('href', dURL);
    //     document.getElementById('save').setAttribute('download', (+new Date) + '.png');
    //     (new mdui.Dialog(document.getElementById('generatedPopup'))).open();

    //     // 保存配置
    //     var config = {
    //         name: document.getElementById('configName').value,
    //         text: document.getElementById('configText').value,
    //         location: document.getElementById('configLocation').value,
    //         app: document.getElementById('configApp').value,
    //         height: parseInt(document.getElementById('configHeight').value),
    //         uiWhite: document.getElementById('configUIWhite').checked,
    //         appIcon: document.getElementById('configTopBarAppIcons').checked,
    //         statusIcon: document.getElementById('configTopBarStatusIcons').checked,
    //         avatarSet: document.getElementById('configAvatarSet').value,
    //     };
    //     localStorage.setItem('config', JSON.stringify(config));

    //     if (avatarFile) {
    //         var reader = new FileReader;
    //         reader.readAsDataURL(avatarFile);
    //         reader.onload = function () {
    //             localStorage.setItem('avatar', this.result);
    //         };
    //     }
    // }).catch(function (error) {
    //     mdui.alert(''
    //         + '<div class="mdui-typo">'
    //         +     '<p>' + error + '</p>'
    //         +     (error.stack ? ('<pre>' + error.stack + '</pre>') : '')
    //         +     '<p>你可以通过 <a href="https://github.com/TransparentLC/WechatMomentScreenshot/issues" target="_blank">Issue</a> 向作者反馈 BUG～</p>'
    //         + '</div>',
    //         '生成失败'
    //     );
    // }).finally(function () {
    //     // document.getElementById('fakeWechatMoment').style.display = 'none';
    //     document.getElementById('generate').removeAttribute('disabled');
    //     document.getElementById('generate').innerText = '生成';
    // });
});