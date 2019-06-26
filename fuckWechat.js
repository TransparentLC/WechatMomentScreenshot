// 禁止使用微信内置浏览器打开网页
// 小透明・宸 2019.1.15

if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    var div = document.createElement('div');
    div.setAttribute('id', 'fuckWechat');

    div.style.position = 'fixed';
    div.style.left = '0';
    div.style.top = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.boxSizing = 'border-box';
    div.style.padding = '18px';
    div.style.fontSize = '18px';
    div.style.lineHeight = '1.5em';
    div.style.backgroundColor = '#fff';
    div.style.zIndex = '2147483647';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    var divContent = [
        '<div>',
        '<h1>(　^ω^)</h1>',
        '<p>我们刚刚做了一个非常艰难的决定，在张小龙先生<a href="https://www.zhihu.com/question/271184234" style="color: #175199;">真正学会怎么做产品</a>之前，这个网页不允许使用微信内置浏览器打开。</p>',
        '<p>请点击右上角，选择“在浏览器打开”。</p>',
        '<p>你为什么还要坚持使用这个<strong>功能残缺，体验极差</strong>的社交软件？</p>',
        '</div>'
    ].join('\n');
    div.innerHTML = divContent;

    document.body.innerHTML = '';
    document.body.append(div);
}