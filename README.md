# WechatMomentScreenshot

[![HitCount](http://hits.dwyl.io/TransparentLC/WechatMomentScreenshot.svg)](http://hits.dwyl.io/TransparentLC/WechatMomentScreenshot)

朋友圈转发截图生成工具

[去这里使用](https://transparentlc.github.io/WechatMomentScreenshot)

---

### 更新记录

#### 2019.12.5

~~解决了一些已知问题。~~

支持选择生成 7.0 以上版本白色界面的截图。

#### 2019.6.8

还是根据 [Issue #4](https://github.com/TransparentLC/WechatMomentScreenshot/issues/4)，增加了在生成的截图中设定评论的功能～ฅ•̀∀•́ฅ

#### 2019.6.6

根据 [Issue #4](https://github.com/TransparentLC/WechatMomentScreenshot/issues/4) 修正了时间显示的问题。

* 截图日期和发表日期在同一天，时间显示为`**:**`。
* 截图日期在发表日期前一天，时间显示为`昨天 **:**`。
* 其他情况，时间显示为`****年**月**日 **:**`。

现在可以用短链接 [https://git.io/WMS](https://git.io/WMS) 打开本工具了～欢迎分享给有需要的人(`ヮ´ )

~~也欢迎请小透明喝肥宅快乐水(\*´∀`)~~

#### 2019.5.14

新功能：输入微信公众号文章链接，自动获取文章标题和封面。

* 相关后端代码参见文件 `get_article_info.php`。

#### 2019.3.1

新功能：生成发表纯文字或图片的截图。

---

### 这个小工具是什么？

一个因为不喜欢也不想往朋友圈发某些不得不发的废文而做出来的摸鱼产物。

### 为什么生成的截图和我在手机上截的不一样？能不能做出 iOS 的样式？

不同手机的界面总是有那么一点区别的，要和真正的截图完全一样……我也很难办啊！（摊手）

### 生成的截图中，文字部分能否出现表情符号？

微信中除 Emoji 之外的其它表情符号实际上是特定的文本，复制后粘贴到别处时就可以看到，在微信中则显示为表情符号。

比如<img src="https://ae01.alicdn.com/kf/HTB1kEKaXe3tHKVjSZSg7604QFXas.png" style="width: 1em;" />这个表情，从简体中文版微信中发送的实际上是`[再见]`，繁体中文是`[再見]`，英文是`[Bye]`。即使不选择表情符号而是手动输入`[再见]`、`[再見]`或`[Bye]`（任选一个输入即可，和微信的语言设置无关），发送后它们都会显示为<img src="https://ae01.alicdn.com/kf/HTB1kEKaXe3tHKVjSZSg7604QFXas.png" style="width: 1em;" />。

在这个小工具的“正文”处输入表情符号对应的文本，生成截图时也会被替换成对应的表情符号～

目前仅支持简体中文、繁体中文、英文版微信的表情文本。从使用其他语言的微信发送一条带有表情的消息然后复制到这里，生成的截图中不一定会出现对应的表情符号。