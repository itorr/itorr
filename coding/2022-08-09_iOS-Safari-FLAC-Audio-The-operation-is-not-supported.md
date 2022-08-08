用了很久的网页播放器前段时间重配了环境，装了新版本的 Nginx，conf 是重头配的。
昨晚在用 iOS Safari 播放 FLAC 文件时报错
```
The operation is not supported.
```
是个老问题， iOS Safari 对于音频文件没做自动根据文件头判断文件类型，所以遇到没有正确设置 `content-type` 返回头的情况会报错。

在 Nginx 的 mime.types 文件中，添加 FLAC 格式的 mime type

```
audio/flac    flac;
```

然后 `nginx -s reload` 重启 Nginx 应用配置，再尝试在 iOS 播放 FLAC 就和其他音频格式一样啦w
