// 禁止使用微信内置浏览器打开网页
// 小透明・宸 2019.1.15

if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    var div = document.createElement('div');
    div.setAttribute('id', 'fuckWechat');

    var style = document.createAttribute("style");
    div.setAttributeNode(style);
    div.style.position = 'fixed';
    div.style.left = '0';
    div.style.top = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.textAlign = 'center';
    div.style.backgroundColor = '#f2f2f2';
    div.style.zIndex = '2147483647';

    var divContent = [
        '<div style="height: 36px;"></div>',
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 990 990" xml:space="preserve" style="width: 92px; height: 92px;">',
        '    <style type="text/css">',
        '        .st0 {',
        '            fill: #F66160;',
        '        }',
        '    </style>',
        '    <path class="st0" d="M501,0L501,0c88,0,170,22.7,246,68l0,0c74,44,132.7,103.7,176,179l0,0c44.7,78,67,162.7,67,254l0,0',
        '    c0,87.3-22.3,169.3-67,246l0,0c-44,73.3-102.7,132-176,176l0,0c-76.7,44.7-158.7,67-246,67l0,0c-91.3,0-176-22.3-254-67l0,0',
        '    c-75.3-43.3-135-102-179-176l0,0C22.7,671,0,589,0,501l0,0c0-91.3,22.7-176,68-254l0,0c44-75.3,103.7-135,179-179l0,0',
        '    C325,22.7,409.7,0,501,0z M522,266L522,266h-54c-2.7,0-5,1-7,3s-3,4.7-3,8l0,0l12,320c0,1.3,0.5,2.5,1.5,3.5s2.2,1.5,3.5,1.5l0,0h39',
        '    c2,0,3.5-0.5,4.5-1.5s1.5-2.2,1.5-3.5l0,0l12-320c0-3.3-1-6-3-8S524.7,266,522,266z M495,724L495,724c10,0,18.7-3.7,26-11',
        '    s11-16.2,11-26.5s-3.7-19.2-11-26.5s-16-11-26-11s-18.7,3.7-26,11s-11,16.2-11,26.5s3.7,19.2,11,26.5S485,724,495,724z" />',
        '</svg>',
        '<div style="height: 30px;"></div>',
        '<div style="padding-left: 20px; padding-right: 20px;">',
        '    <span style="margin-bottom: 5px; font-weight: 400; font-size: 20px;">已停止访问该网页</span>',
        '    <div style="height: 21px;"></div>',
        '    <span style="font-size: 14px; color: #999; line-height: 1.6;">你正在使用微信打开该网页。微信对部分网页恶意屏蔽，为维护自由上网环境，本页面禁止使用微信打开。</span>',
        '</div>',
        '<div style="height: 25px;"></div>',
        '<div id="fakeWechatStyleButton" style="display: inline-block; border: none; border-radius: 5px; background-color: #1aad19; color: #ffffff; border: 1px solid rgba(0, 0, 0, 0.1); width: calc(100% - 30px); height: 46px; line-height: 46px; font-size: 18px; user-select: none;" onclick="javascript: alert(\'恢复是不可能恢复的，请点击右上角，选择“在浏览器打开”。\\n\\n你仍然可以将此网页发送给微信好友/分享到朋友圈，对方使用浏览器打开即可正常访问。\');">',
        '    申请恢复访问',
        '</div>',
        '<div style="display: flex; position: absolute; left: 0; right: 0; bottom: 0; justify-content: center; line-height: 1; margin-bottom: 15px; font-size: 14px; color: #999;">',
        '    <a href="https://www.zhihu.com/question/32012886/answer/246667830" style="text-decoration: none; color: #586c94;">"Don\'t be evil."</a>',
        '</div>'
    ].join('\n');
    div.innerHTML = divContent;

    document.getElementsByTagName("body").item(0).appendChild(div);

    document.getElementById('fakeWechatStyleButton').addEventListener('touchstart', function () {
        fakeWechatStyleButton.style.backgroundColor = '#179b16';
        fakeWechatStyleButton.style.color = 'rgba(255, 255, 255, 0.6)';
    });
    document.addEventListener('touchend', function () {
        fakeWechatStyleButton.style.backgroundColor = '#1aad19';
        fakeWechatStyleButton.style.color = '#ffffff';
    });
}