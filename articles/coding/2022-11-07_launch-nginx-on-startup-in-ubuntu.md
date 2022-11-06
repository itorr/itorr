# 设置在 Ubuntu 启动时自动运行 nginx 

之前用 Centos 时 只需要 在 rc.local 里添加命令即可，到了 ubuntu 管理起来好像非常麻烦。
然而 nginx 用了这么多年非常可靠，仅靠 nginx 自己的守卫就足够可靠运行了。
所以我需要的真就是简单 nginx 一下而已。

换了半天关键词搜索到了方法，记录一下

To start nginx on boot: `sudo systemctl enable nginx` (doesn't start it immediately)

To start nginx: `sudo systemctl start nginx`

https://serverfault.com/questions/69350/launch-nginx-on-startup
