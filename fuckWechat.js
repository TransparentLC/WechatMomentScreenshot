(function (document) {
    var div = document.createElement('div');
    div.setAttribute('id', 'fuckWechat');
    document.querySelector('.mdui-appbar').style.filter = 'blur(2px)';
    document.querySelector('.mdui-container').style.filter = 'blur(2px)';
    div.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;box-sizing:border-box;padding:18px;font-size:16px;line-height:1.5em;background-color:rgba(255,255,255,.9);z-index:2147483647;display:flex;justify-content:center;align-items:center'
    div.innerHTML = ''
      + '<div>'
      +     '<h1>(　^ω^)</h1>'
      +     '<p>为什么你还在使用这个<a href="https://www.zhihu.com/question/271184234" target="_blank" style="color:#175199">功能残缺</a>的辣鸡社交软件？</p>'
      +     '<p>一个必须使用手机扫🐴才能登录电脑版客户端的软件有什么使用的必要吗？</p>'
      +     '<p>隔壁的 QQ 不好用吗？</p>'
      +     '<p><button style="width:100%;background-color:#175199;color:#fff;border:none;border-radius:4px;height:2em" onclick="document.body.removeChild(document.getElementById(\'fuckWechat\'));document.querySelector(\'.mdui-appbar\').style.filter=\'\';document.querySelector(\'.mdui-container\').style.filter=\'\';">继续</button></p>'
      +     '<p style="text-align:center;color:#bbb;font-size:14px">你没看错，这个遮罩层就是来 yygq 的<br>在微信以外的环境打开此页面，不会出现此遮罩层</p>'
      + '</div>';

    document.body.append(div);
})(document)