// 禁止使用微信内置浏览器打开网页
// 小透明・宸 2019.1.15

if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    var div = document.createElement('div');
    div.setAttribute('id', 'fuckWechat');
    div.style.cssText = 'position: fixed; left: 0; top: 0; width: 100%; height: 100%; box-sizing: border-box; padding: 18px; font-size: 18px; line-height: 1.5em; background-color: #fff; z-index: 2147483647; display: flex; justify-content: center; align-items: center;'
    div.innerHTML = ''
      + '<div>'
      +     '<h1>(　^ω^)</h1>'
      +     '<p>我们刚刚做了一个非常艰难的决定，这个网页不允许使用微信内置浏览器打开。<a href="javascript:;" style="color: #175199;" onclick="alert(\'因为微信要维护它所谓的“绿色上网环境”啊 :)\')">为什么这样做？</a></p>'
      +     '<p>请点击右上角，选择“在浏览器打开”。</p>'
      + '</div>';

    document.body.innerHTML = '';
    document.body.append(div);
}