<template>
    <div class="profile-view">
        <img class="avatar" src="https://tvax4.sinaimg.cn/crop.0.0.896.896.560/4764ae2aly8g4skaomyl8j20ow0owgon.jpg">
        <h1>卜卜口</h1>
        <p>
            你好，我是卜卜口~
        </p>
        <p>
            <span class="nowarp">喜欢做有趣的项目、</span>
            <span class="nowarp">喜欢人像拍摄、</span>
            <span class="nowarp">喜欢圣地巡礼、</span>
            <br>
            <span class="nowarp">喜欢玩反恐精英、</span>
            <span class="nowarp">喜欢自己捏粘土人头发。</span>
        </p>
        <p>
            社交媒体主要用
            <a href="https://weibo.com/reiove" target="_blank">微博</a>
        </p>
        <p>
            喜欢<b>「福音战士」</b>
            <span class="br"></span>
            头像是自己模仿贞本义行原画拍的
            <a href="https://weibo.com/1197780522/HnmkwpIPC" target="_blank">照片</a>
        </p>
        <p>
            喜欢巡礼<b>「吹响吧！上低音号」</b>
            <span class="br"></span>
            <a href="https://www.bilibili.com/read/cv4791285" target="_blank">巡礼文章</a>
            被推荐过哔哩哔哩首页最大的轮播位四天<br>
            凑齐九张图会发一条
            <a href="https://weibo.com/1197780522/Ipgkka7S3" target="_blank">微博</a>
        </p>
        <p>
            喜欢做 <b>有趣的项目</b>
            <span class="br"></span>
            比如 
            <br>
            <a href="https://lab.magiconch.com/nbnhhsh/" target="_blank">能不能好好说话</a>、
            <a href="https://magiconch.com/patina/" target="_blank">电子包浆</a>、
            <a href="https://magiconch.com/vaporwave/" target="_blank">蒸 気 機</a>、
            <!-- <br>
            <a href="https://lab.magiconch.com/homo/" target="_blank">恶臭数字论证器</a>、
            <a href="https://lab.magiconch.com/sakana/" target="_blank">石蒜模拟器</a>、 -->
            <br>
            <a href="https://lab.magiconch.com/one-last-image/" target="_blank">One Last Image</a>、
            <a href="https://lab.magiconch.com/eva-title/" target="_blank">福音战士标题生成器</a>
            <!-- <br>
            <a href="https://v.magiconch.com/mine-sweeper" target="_blank">EVA 扫雷</a>、
            <a href="https://lab.magiconch.com/magi/" target="_blank">MAGI System</a>、
            <a href="https://lab.magiconch.com/captcha/rei" target="_blank">选择所有包含绫波丽的图片</a>、
            <br>
            <a href="https://x.magiconch.com" target="_blank">梗图生成器</a>、
            <a href="https://magiconch.com/fontfont/" target="_blank">字符字生成器</a>、
            <a href="https://magiconch.com/nendoroids/" target="_blank">粘土人列表</a>、 -->
            <!-- <br> -->
            <!-- <a href="https://v.magiconch.com/drawhat" target="_blank">你画我猜</a> -->
            <!-- <br> -->
            <!-- <a href="https://buhuibaidu.me/" target="_blank">不会百度么？</a> -->
            <br>
            等等…
            <span class="br"></span>
            二零年之后的项目 会整理到
            <router-link to="/project">神奇海螺试验场</router-link>
            <br>
            部分会开源在 
            <a href="https://github.com/itorr" target="_blank">GitHub</a>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="less">
html[data-route-view="profile"]{
	// background: hsl(220, 95%, 95%);
	.app-nav{
		a.router-link-exact-active{
            color:#0036cb;
			// background: hsl(220, 95%, 95%);
		}
	}
}
.profile-view{
    padding:2em 1em;
    background: hsl(220, 95%, 95%);
    h1{
        font-size: 3em;
        line-height: 2;
    }
    .avatar{
        display: block;
        font-size:9em;
        width: 1em;
        height: 1em;
        border-radius: 50%;
    }
    p{
        line-height: 1.6;
        padding: 1em 0;
        .br{
            display: block;
            padding:.25em;
        }
        a{
            white-space: nowrap;
        }
    }
}
</style>