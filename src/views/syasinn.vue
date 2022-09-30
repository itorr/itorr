<template>
    <div class="syasinn-view">
        <!-- <h1>动画巡礼</h1> -->
        <article>
            <img src="../../images/4.jpg">
            <img src="../../images/4.jpg" style="transform: rotateY(180deg);">
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
html[data-route-view="syasinn"]{
	// background: hsl(287, 92%, 95%);
	.app-nav{
		a.router-link-exact-active{
            color:#b200bb;
	        // background: hsl(287, 92%, 95%);
		}
	}
}
.syasinn-view{
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