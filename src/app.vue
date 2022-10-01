<template>
	<div class="app">
		<nav class="app-nav">
			<router-link to="/">卜卜口</router-link>
			<router-link to="/project">神奇海螺</router-link>
			<router-link to="/anitabi">动画巡礼</router-link>
			<router-link to="/syasinn">写真摄影</router-link>
			<!-- <router-link to="/cosplay">COSPLAY</router-link> -->
			<router-link to="/links">链接</router-link>
		</nav>
		<router-view class="app-view" />
		<footer class="app-cp">
			<!-- <a href="https://weibo.com/reiove" target="_blank">@卜卜口</a>
			<hr> -->
			<p>日常…巴拉巴拉，后面忘了。</p>
			<a href="https://beian.miit.gov.cn" target="_blank" class="beian-link">辽ICP备2022004311号-1</a>
		</footer>
	</div>
</template>

<style lang="less">
.app-nav{
	display: flex;
	font-size: 1.2em;
	line-height: 3;
	overflow: auto;
	white-space: nowrap;
	padding: 0 2em 0 .5em;
	a{
		display: inline-block;
		vertical-align: top;
		padding: 0 .8em;
		color: #222;
		&.router-link-exact-active{
			// font-weight: bold;
			font-family: JiaLiDaYuanJF-split,'Tensentype-JiaLiDaYuanJ';
		}
		&.router-link-active{

		}
	}
}
.app-view{
    padding: 1em;
	min-height: calc( 100vh - 8em );
}
.app-cp{
	padding:1em;
	// margin: 1em;
	// background:rgba(255,255,255,.8);
	// border-radius: .6em;
	overflow: hidden;
	line-height: 1;
	*{
		float: left;
	}
	hr{
		display: inline-block;
		vertical-align: middle;
		height:1em;
		width: 1px;
		border:0;
		background:#000;
		opacity: 0.1;
		margin:0 1em;
	}
	a{
		color: #666;
	}
	.beian-link{
		float: right;
		// font-size:12px;
		opacity: 0.4;
	}
}
@media (max-width:1000px) {
	.beian-link{
		display: none;
	}
}
</style>