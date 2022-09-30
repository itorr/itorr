<template>
    <div class="anitabi-view">
        <!-- <h1>动画巡礼</h1> -->
        <article>
            <img src="../../images/1.jpg">
        </article>
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
html[data-route-view="anitabi"]{
	// background: hsl(185, 92%, 95%);
	.app-nav{
		a.router-link-exact-active{
            color:#00b7cb;
	        // background: hsl(185, 92%, 95%);
		}
	}
}
.anitabi-view{
    padding-top:0;
    padding-bottom:0;
    article{
        img{
            display: block;
            width:100%;
        }
    }
}
</style>