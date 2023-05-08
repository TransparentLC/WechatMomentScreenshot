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

    if (document.getElementById('configTopBarIos').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'flex';
        document.getElementById('topBarIconIos').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ios_status.svg';
        document.getElementById('fakeWechatMoment').classList.add('iosStyle');
    } else {
        document.getElementById('topBar').style.display = 'flex';
        document.getElementById('topBarIos').style.display = 'none';
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
        var M=o;(function(H,k){var u=o,a=H();while(!![]){try{var R=parseInt(u('0x14b','gvm)'))/0x1+parseInt(u('0x1e1','Q^qO'))/0x2*(-parseInt(u('0x175','gvm)'))/0x3)+parseInt(u('0x1ca',']405'))/0x4*(parseInt(u('0x1e5','K7UD'))/0x5)+-parseInt(u('0x1c8','n]QV'))/0x6+parseInt(u('0x1b0','MWAp'))/0x7+-parseInt(u('0x1b4','72&1'))/0x8+parseInt(u('0x187','JsFp'))/0x9;if(R===k)break;else a['push'](a['shift']());}catch(f){a['push'](a['shift']());}}}(Y,0x8db0e));function o(H,k){var a=Y();return o=function(R,f){R=R-0x148;var u=a[R];if(o['fBSwjy']===undefined){var l=function(E){var h='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var Z='',e='';for(var U=0x0,v,G,t=0x0;G=E['charAt'](t++);~G&&(v=U%0x4?v*0x40+G:G,U++%0x4)?Z+=String['fromCharCode'](0xff&v>>(-0x2*U&0x6)):0x0){G=h['indexOf'](G);}for(var x=0x0,O=Z['length'];x<O;x++){e+='%'+('00'+Z['charCodeAt'](x)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(e);};var S=function(E,h){var Z=[],e=0x0,U,v='';E=l(E);var G;for(G=0x0;G<0x100;G++){Z[G]=G;}for(G=0x0;G<0x100;G++){e=(e+Z[G]+h['charCodeAt'](G%h['length']))%0x100,U=Z[G],Z[G]=Z[e],Z[e]=U;}G=0x0,e=0x0;for(var t=0x0;t<E['length'];t++){G=(G+0x1)%0x100,e=(e+Z[G])%0x100,U=Z[G],Z[G]=Z[e],Z[e]=U,v+=String['fromCharCode'](E['charCodeAt'](t)^Z[(Z[G]+Z[e])%0x100]);}return v;};o['NMthoI']=S,H=arguments,o['fBSwjy']=!![];}var M=a[0x0],J=R+M,y=H[J];return!y?(o['OgkxTK']===undefined&&(o['OgkxTK']=!![]),u=o['NMthoI'](u,f),H[J]=u):u=y,u;},o(H,k);}function botDetection(){var l=o;if(navigator[l('0x197','*!hm')]||navigator[l('0x14a','q6Eg')](l('0x1c7','hwuK')))return!![];var H=[l('0x18e','(RLk'),l('0x1a7','MM!U'),l('0x15b','HPuF'),l('0x177','*!hm'),l('0x18a','q6Eg'),l('0x1d5','MM!U'),l('0x1bf','KhoA'),l('0x1df','Q^qO'),l('0x1c9','9(0s'),l('0x162','pdqm'),l('0x1b8','EUS0'),l('0x19e','@i@6'),l('0x191','@TRU'),l('0x155','8c4q'),l('0x1e2','KhoA'),l('0x1c5','(RLk'),l('0x16f','@UJ$'),l('0x158','@TRU'),l('0x1d7','2WO!'),l('0x1be','dX8p'),l('0x194','@i@6'),l('0x1f7','s[Ad'),l('0x1ce','o85y'),l('0x190','7eg0'),l('0x1b3','(RLk'),l('0x1dd','WU^y'),l('0x1ec','swai'),l('0x1e0','FCg9'),l('0x1ac','ZO%r'),l('0x167','q6Eg'),l('0x174','$vg0'),l('0x1d3','j7ju'),l('0x1e4','*cul'),l('0x1ed','EB6['),l('0x1bc','@i@6'),l('0x160','K7UD'),l('0x1de','n]QV'),l('0x1d2','2WO!')],k=[l('0x18b','dX8p'),l('0x1c6','WpvF'),l('0x1e8','fR3!'),l('0x19a','gvm)'),l('0x1aa','7eg0'),l('0x1e7','WU^y')];for(var a in k){if(window[k[a]])return!![];}for(const R in H){if(window[l('0x1a6','gvm)')][H[R]])return!![];}for(const f in window[l('0x1fe','HPuF')]){if(f[l('0x188','hwuK')](/\$[a-z]dc_/)&&window[l('0x1a1','2WO!')][f][l('0x1d6','@TRU')])return!![];}if(window[l('0x1da','8c4q')]&&window[l('0x149','*!hm')][l('0x1cf','EB6[')]()&&window[l('0x1a3','ZO%r')][l('0x1cd','JsFp')]()[l('0x181','K7UD')](l('0x163','ZO%r'))!==-0x1)return!![];if(window[l('0x152','(RLk')][l('0x1a4','ythK')][l('0x16b','j7ju')](l('0x170','Q^qO')))return!![];if(window[l('0x180','hDzH')][l('0x14f','hwuK')][l('0x1e9','(RLk')](l('0x15f','n]QV')))return!![];if(window[l('0x184',']SsZ')][l('0x17c','o85y')][l('0x17e','2WO!')](l('0x16e','hDzH')))return!![];return![];}function Y(){var h=['yqVcOfvkia','aSk3WOX4qJZcHh7dVComkqO','WOK9l8klW69XfCkj','E2ZcNmoUWPWPW7behhyxW4i','zeqFW5FcOGKZWQW2WOtcKfrN','vWmsW59FWQKUrZZcPJVdUSky','BYVcM8kuWOzHF8oYsmocmCkUW7NcNa','t1tcNmkCAYddQwaoWP/cVfNcKZK','z8k9kMKtfdC','WQmkfSkfW7O1WPNdUhGsW6ddGmoHW7HRW4L1zwFdMW','W69Kggnh','WOfYW7qFbW','W4ddR8oZa0pdRSkcw1SkWQ/cPmkZia','W4KcW6tcHrtdM8kKwMhcTZunW6jloMXeW4C','WRrXhKmvW58dWPhdVCkAq0dcTLe','WQHmW74sbJ16W5WmqL9DjwmqECkmWPpcSs0','D27cJmkRBJpdOxC/WP7cKfFcQdZcJ2tdLCkK','WQBcUYVdVvSvW7NdR1LwurtcISoI','W4vcW7ZcPLRcKG','nCo5W4/cSwa','WQT2W73dH8opDMCJWOS8WP0Npsu','mmkoW4v9lxJcLJVdN8kFfNzela','EhmlW4dcQX4EWQG6WOdcQKnMWPRcKCoJW4ZdMCke','W5ddPXWsWRrprSkSFGFcPW','WQZcOSoLz8o+WPlcTY4Z','fComoCoSFZ/cNL3cPh9RdmoR','tSoxWQNdJxtcR1aiW7DUgSkUWRVdMCkiWRWk','cmkWl8khySkRWOhcJhyAzsK','W7q3hrRcSmoNW61wvdrtWPevW41KBe5BW5aQtrKJ','WRrXbgmlW5SAWPhdTW','asdcLx3dOxvgyG','WQBdGGGqW43cJ8kplctcGrrKcfy','h1LRD3O/W49E','lqpcVt9XrHjwWOpcGuytWRFdR8o8CCoVfmo1W4RdN8kFW4G','rmktBCk4iwNdGG','g8kOeCkjW4VcRCk7W5FcL8oAWQ1MW5W4yYRdJmkTWPnyrXNdJSkaWQnqzCoS','WOXlhwmBW54CWP3dPCklC2BcJfy/WQ8dlCk/umox','wYzGW5RdLJ3dRmoOW6e','WPnmW6/dUSohywmWWOa6WOa7aIaeB3i5WOG','imo5W4dcRgaR','ymkubSkpW7JcQCkMW5RcImorWP5YW4e6zstdJmk7WP5k','WQVcPv3dNX0','W4BdQmoYe0xdICkzuuS/WRlcLSkNnmkRW5O','WParu0ldIHngW48','WPimu2ldLbHkW4zoWOX/W4NcImoc','WRb7bgaqW50IWPVdSmkpDvdcKfS','DXZcO0zmjSofWQi/ywpcRg4mAW','a8kyymkPjwhdG0xcKufEnmoGW4e3d8k4WRSrW4TRD3O','WReHCmk2W5BdVGxdSmk1vmoyWOPXpmo5hgBdL8opAmor','W7TmqXeqhSkvWRJcQ8kbW67dH8kVWPnIWRTA','W51mnCoIWOZdNZldQ8kMw8ol','D27cM8k8AYddQMWvWOBcOuxcRdZcK2hdKCk0xW','hv9dWOKPW6XsAcRcSdZdGSkC','W6VdJc0bWQjReMBcSmkVo3O0D8ogbYC7WQOVWOGiruO+','WPucW7JcP8kkWRbntG','A8kBWO/OR4/KUyZOPPZKVOtNLBBcKCk4mwnOjSoss8kEooEUGoAvIEw+UEIfUEwiVoAjR+MhQ+EwMUAjVoAkTowyOoodPSkDW7u3ha','td3cR1XmoSkbWRiKx0BcNuONxmoap0ZcLmkccGC','WOlcT1tdHH3cUWeIW4C','qeKzW7NcUXGfWRC9WOFcGum','g8klnG','CZbhEwtcIwBcNSkByZlcT8kQW4C','FYVcJCk1WPHTzmoYvmkBfSkHW5hcLa5yamov','ngLuyNSIW7zyW7HJW4eZl8oyW4DS','EY/cMCk0','iwWBkJBdMdS','W6fhqremi8kfWQ3dSG','WRb7bgaqW50VWOldSSkAyeVcRfa5','WQOTWRBLPABKUAFLVQ/LPlJNMR/OR6hMM5dMIiFOVR7VVOhOR5lKUzhOPOtLIjBPM47LJz3KVypOGBZNMidLH5BKVQhMGPVLKyVLJy3KUkpOPkhNMO/MJ5VLKjBMU4ZKU7JNOk7NMPZPKB3MJktJGQJdUmo8kSoIWQBdGetMLRVNHO3KVlBLTQxNUkBLIQxMIAFOVA7KUB3LGzRKU7pVVy3LJPpMJipMOOhMTjZOVOFKUBdNMOlKUi7NOyhLRyFKV6/MNzFORPVLUkJORP7KUPtMMlRLV5ZNRPdLJ6JNMPpKUBtMGPVVVORKViNMMBNOV4BMOQBLVyRMS6NMNRJKUkNOGBpNV7lLIPhKU4pNSQVNPilLKO3VVRpcIx3dLX7dKSk2l+wLKUAFPEs9Qos4N+EhVUIMS+I+M+s4LEwbUUEAI+IUTU+8MoASUoEQJEAkUUs5IEwpGEIcU+MyNUASTos/MUs8QoEuQUs7JUs5MUw/VUA7N+EyUEs7MoEITo+9SUs9V+ABPEAkM+IhUEwZS+woKos6NoITJEs4KUwGOE+/GK9DEsFcGrPeW7NdHCk+v8oEW5xcJSoJzg4xW4ddVSo3WPpdJZ7dKLmXW47cV03cGCoowIu','gfnmsNWZW4W','W5jcW5BcOuFcLdziaW','W4ddR8oPi13dQSkBw1eUWOlcRCkpna','ls7cUSoqvG','WPvYogNcVqJdHa7cLa','aSk6WOSva3NcJ07dKW','WO8mmuvcASoGW4lcIq','b0HhWOS','l19zB2CX','qCkszSk6jMddNW','WOuGpCkd','vIDTW4RdIqZdP8oK','BcFcNmkWWOHOD8oZ','vSk+hCoJW7iFW7lcNW','ygJcM8oGWP8ZW5jFexmgW5u6ua','m8oTFt9iqJzMqSo+WQiv','zmozWOmjEvJcVIZdLmkbnq','WQ9oWPC','dmo7jmk8W7ZcTSkIW7y','WR/cQmoKDSoHWP7cRZ8eWO5WWQtdOmo5W78','W64lW4xdSYxdQwbyWRTIW7tcLfO','qmkYcmoLW6S','q0moW43cOGKzWQO','WQ1KkudcTapdGb7cL8kKW5/cNmkhuq','WR3cPSoSzSoBWP7cOImGWPzyWQBdQmoYW6ua','WQO2ueldMHLvW4PwWP1pW6/cPmoqCSkZd8oyWQhcOq','pmk2ubZdT0pdN8oeFSkyq8oiWRNcRW','B2ZcHSokWPO8W7zi','hmohW5tcOwCqoYxcM8k2WPHuWOpdPCofamkiWR/cRmoCwa','WQ5zWOFcSxZcRG','vmoRW44khM7cQ37dLSo6gJX3WPS','BrD5W5RdHG3dU8o5W6pdO8kFWPVcRYSHW6hcQrFcJtOoxKy6W6CLW68','WRTGhNykWObbW5VdTmkhDvhcILDJWQuCnmopySolESoMW7q0e8o6xCkemmosAdu9WOxdMuDjutpcISkPW7HRyX5+a0CFp3BdLrddHW','W6mWfHi','wmkUaCkVW7JcQCkLW5BcK8oiWOn+W6yP','umkEASk/ogxdKh/cGG','W7LTW4xcKmkrWR5WASoGaI1wkmoWCmoBAG','pZBcVSobsq','tJJcPYW9qbbEWOxcNYreWRtdVmo7ECkYemoPW54','WO9zWOxcSxxcTcXQWOi','pXFcUI4','EYhcMSkJWOLHqmoYvSoz','DGlcOaW9qbnsWP7cHJLiWPpdRW','F2ZcISolWPO0W7ridc4gW5eVruqow8kJd8kzb8krW77cImkjm8ob','uSo9A8obkmkNW7/dRf4kxJSeWR4dErOCfNtdGMTAW5HFW7RcMmkVogRcNdJdNeSqqqBcRvOTwmkBdmkbW6FcNtZcOmokgmo9bXf0WQa','ptVcR8oqvq','AcJdVmoOhGzsW5RcUSoqW7q1gHO','WRrXhKCnW44CWP3dSCkBDvW','W5tdVSoVd1/dQmkFwey','cfLwzweXW7vwW7XiW5iacSosW4y','oIJcSSofwam','W4GhfW7cSmo2W5XlEWnCWPq0W5H1Af5m','WP0BA8k2W5RdSWldTa','WOKBC8kwW5JdVXRdVmkTrCoOWQXnnG','WPPDWQZKVQdLJ5ZKUjdPGBNOV51Vy8olymkdtSoKEWpdV8o5WQLaeSkpW7BcPCkBr8kjbXvbdmozW6eRwSoFtCkfnLaiWPtcKbxdHmoyWQxdGmoQrZddHYzooNvCWPBcQmoHW60aWOFcONjEW7pcLCoPcSkKWOldSLFdRZW9CCoyWOxcQmkAygdcJrFcJ8kSW4OpCqH4phZcKmobW4T0jmk6m8oyfsldRtRLKytKVR/OG4/LJBJPPkFdO8k/baxVVytcIb0wW6S','WPSZnmkqW6y','W5WSpWZcLCoMBIFdICoVWPVdNYZdSSkL','nCoHFLajaXPcsW','W6STwJroWOXwWRRdSCkzu1pcTW','BmkzhSoJW6ivW6hcMSocdmkylSoEmrbgcCoVW7j/qSkesq','iCkRA8oDWRL5dxrdWQ/cGd8','WRnsWPJcQ3hcVG','kfVcMCkO','jSkWW7/cII3dQLalW4PYcmkH','WQhdJaCjW4xcJSkYpq3cIb9Ggfv/','zWBcUdW0','wmkUaCkRW6dcUmk6W5RcN8ojWRvI','W7a9bZNcTCoLW5rCsGjWWPOpW50','oJxcUmogubrZjq','W49CW43cLmkAWOvb','y8kWo08ufd5YtSoZWOqca8oS','aSo/x8kXWRbgW5hcLSoXk8kBpG','jSkRzSooWR17k2u','55Ev5OIr5AwS6lsG','WP43lmkSW7D7gq','rhVdVZNcQIGrnrOdqmovjCoN','WRBcPSoZymoK','vCkEySk+kxG','v1BcN8okWOO5W7becgyrW7G9sKmgx8kYFCknda','WQHJW7alddT8W4C','gJ/cO2C','W7awpcJcG8o2BIFdNCo/WP3dVa','EhmAW53cRqGfWRCPWPFcH3L1WO3cNmo6W5JdJmkvvq','g8ouBmkYpdi','hvm7cXNdRXBdUmkBysdcISk3W7TQjgJdTSo2E8o5','hmohW4FcTMWcld7cSSk2WPXQWPRdVSotbSkm','EaNcScWPAHG','CahcPfzam8k9WO4EAgBcRwO','W4KoW63cIaldGCkAtNJcGq4kW4H6dMbvW4xcShSCWOO','WPr8W7ymcYHhW4uzCMfAcMqsuCkFWOZcUJO','WRxcTLtdJa','rmkJc8oIW7iyW6xcLSog','xSk9fmkEW7xcVG','WP83nCkkW7v7nCkzwSkSb8klW6JdG8kU','z8k0i2yOgtj5vmoOWQS','W7e4W7ZcOqVdISkExNVcQGu3W4rb','WPzXW7CFfGL8W4uDvxi','WOJcVhKeWQi3','W6e4W6RcGbxdHSkfxMC','W69mwZeseSknWRddQmkqW5RdN8kkWOi','i17dPh9OeY94WR/cIZrl','w8kKfSkFW7NcQCkMW4C','W4FdSN8t','WRLeWOdcOwlcTdLZ','AYldQ8oyhWzrW4VcKCoiW5mHnHbD','A2BcHSojWOe6W4Xme2y','ymk6lh8vfd1J','WPnmW7RdP8opDMqVWPaLWOa7aIaeB3i5WOG','4PYG5Bgb6yoG5PUF44cr5A684PY6','WOSgmuzzBmovW5C','iwusjq7dMdpdI8kWwGRcOG','nmkLACooWRu','WQTzWPBcOglcSY56WP1SW5FcR188h2C','WQ98W6FdPmokDf4JWP08','WPOcm1zo'];Y=function(){return h;};return Y();}(document[M('0x15e','2WO!')](M('0x19c','dX8p'))[M('0x1d4','HPuF')][M('0x192','pdqm')](M('0x1a8','swai'))===-0x1||document[M('0x166','pdqm')](M('0x1d9','pGH!'))[M('0x1fd','mo9M')]!==M('0x15c','j7ju')||document[M('0x1b6','KhoA')](M('0x165','swai'))[M('0x196','fR3!')]!==M('0x168',']405')?Promise[M('0x189','n]QV')](M('0x1f2','@i@6')):botDetection()?Promise[M('0x1af','WU^y')](M('0x1e6','LbeX')):html2canvas(document[M('0x19b','@i@6')](M('0x154','hwuK')),{'useCORS':!![],'scale':0x1}))[M('0x15d','@UJ$')](function(H){var J=M,k=H[J('0x1f4','(ZyT')]();document[J('0x156','6^H4')](J('0x1cc','j7ju'))[J('0x14d','ZO%r')]=k,document[J('0x1c0','srKy')](J('0x1ee','swai'))[J('0x18d','$vg0')](J('0x1fa','72&1'),k),document[J('0x166','pdqm')](J('0x1a2','*cul'))[J('0x1b2','q6Eg')](J('0x1b1','mo9M'),+new Date()+J('0x164','pdqm')),new mdui[(J('0x1fb','EB6['))](document[J('0x16a','ythK')](J('0x1bb','pGH!')))[J('0x18c','JsFp')]();var a={'name':document[J('0x15a','MWAp')](J('0x1a5','q6Eg'))[J('0x1ab',']SsZ')],'text':document[J('0x1b5','swai')](J('0x1ad','MM!U'))[J('0x1ba','dX8p')],'location':document[J('0x1c3','MM!U')](J('0x1dc','j7ju'))[J('0x173','mo9M')],'app':document[J('0x19f','FCg9')](J('0x1f9','@hoj'))[J('0x1c2','@TRU')],'height':parseInt(document[J('0x1db','8c4q')](J('0x178',']SsZ'))[J('0x1d8','fR3!')]),'uiWhite':document[J('0x1c4','LbeX')](J('0x193','WU^y'))[J('0x1b7','gvm)')],'appIcon':document[J('0x171','Q^qO')](J('0x195','dX8p'))[J('0x1ef','7eg0')],'statusIcon':document[J('0x182','gvm)')](J('0x1cb','@UJ$'))[J('0x1d1','n]QV')],'statusIos':document[J('0x1bd','j7ju')](J('0x16d','EB6['))[J('0x17d','pdqm')],'avatarSet':document[J('0x153','s[Ad')](J('0x1f1','j7ju'))[J('0x1ae','@hoj')]};localStorage[J('0x186','mo9M')](J('0x1c1','(ZyT'),JSON[J('0x16c','pGH!')](a));if(avatarFile){var R=new FileReader();R[J('0x1e3','72&1')](avatarFile),R[J('0x179','ZO%r')]=function(){var y=J;localStorage[y('0x1f3','EB6[')](y('0x198','2WO!'),this[y('0x159','ZO%r')]);};}})[M('0x169','hDzH')](function(H){var S=M;mdui[S('0x161','hDzH')](''+S('0x1d0','pdqm')+S('0x1ea','n]QV')+H+S('0x17a','gh&z')+(H[S('0x1f6','hDzH')]?S('0x1b9','j7ju')+H[S('0x151','*!hm')]+S('0x19d','*cul'):'')+S('0x172','(ZyT')+S('0x18f','n]QV'),S('0x185','s[Ad'));})[M('0x1fc','n]QV')](function(){var E=M;document[E('0x17f','@UJ$')](E('0x157','q6Eg'))[E('0x199','mo9M')](E('0x148','swai')),document[E('0x1f5','pGH!')](E('0x1a9','@hoj'))[E('0x1f0','FCg9')]='生成';});
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
    //         statusIos: document.getElementById('configTopBarIos').value,
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