# WechatMomentScreenshot

[![HitCount](http://hits.dwyl.io/TransparentLC/WechatMomentScreenshot.svg)](http://hits.dwyl.io/TransparentLC/WechatMomentScreenshot)

朋友圈转发截图生成工具

[去这里使用](https://transparentlc.github.io/WechatMomentScreenshot)

### 这个小工具是什么？

一个因为不喜欢也不想往朋友圈发某些不得不发的废文而做出来的摸鱼产物。

### 为什么生成的截图不是iOS版/7.x版微信的界面样式？

因为手上只有猴机，以及并不想用7.x版的微信。

### 能不能生成纯文字/转发图片的截图？

~~咕了~~

2019.3.1 已加入～( ´∀`)

### 生成的截图中，文字部分能否出现表情符号？

微信中除Emoji之外的其它表情符号实际上是特定的文本，复制后粘贴到别处时就可以看到，在微信中则显示为表情符号。

比如<img src="https://ae01.alicdn.com/kf/HTB1kEKaXe3tHKVjSZSg7604QFXas.png" style="width: 1em;" />这个表情，从简体中文版微信中发送的实际上是`[再见]`，繁体中文是`[再見]`，英文是`[Bye]`。即使不选择表情符号而是手动输入`[再见]`、`[再見]`或`[Bye]`（任选一个输入即可，和微信的语言设置无关），发送后它们都会显示为<img src="https://ae01.alicdn.com/kf/HTB1kEKaXe3tHKVjSZSg7604QFXas.png" style="width: 1em;" />。

在这个小工具的“正文”处输入表情符号对应的文本，生成截图时也会被替换成对应的表情符号～

目前仅支持简体中文、繁体中文、英文版微信的表情文本。从使用其他语言的微信发送一条带有表情的消息然后复制到这里，生成的截图中不一定会出现对应的表情符号。