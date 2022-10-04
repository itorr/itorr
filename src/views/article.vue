<template>
    <div class="article-view" v-if="article">
        <div class="images-box">
            <div class="image-item" v-for="image in article.images" :key="image.src">
                <img :src="imageFormat(image.src)">
            </div>
        </div>
        <h1>{{article.title}}</h1>
        <div class="content-box" v-html="contentFormat(article.text)"></div>
        <!-- <pre>{{article}}</pre> -->
    </div>
</template>

<script>

import { getArticleByURL } from '@/functions/api'
import { imageFormat,contentFormat } from '@/functions/formats'
export default {
    data(){
        return {
            article: null
        }
    },
    methods:{
        imageFormat,
        contentFormat,
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        const { url } = to.params;
        const article = getArticleByURL(url);

        if(!article) return next('/not-found');

        next(vm => {
            document.documentElement.setAttribute('data-article-type',article.type);
            vm.article = article;
        });
    },
    beforeRouteUpdate(to, from, next){

        const { url } = to.params;
        const article = getArticleByURL(url);

        if(!article) return next('/not-found');

        this.article = article;
    },
    beforeRouteLeave(to,from,next){
        document.documentElement.removeAttribute('data-article-type');
        next();
    }
}
</script>

<style lang="less">
.article-view{
    font-family: BlinkMacSystemFont,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",sans-serif;
    h1,h2,h3,h4,
    b{
        font-weight: bold;
        font-family: BlinkMacSystemFont,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",sans-serif;
    }
    line-height: 2;
    h1{
        line-height: 1.2;
        padding:1em 0 .4em;
        
    }
    padding-top:0;
    padding-bottom:0;
}



.content-box{
    // padding:1em 0 2em;
    img{
        display: block;
        max-width: 100%;
        max-height:100vh;
        margin:1em auto;
    }
}
.image-item{

}

.images-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: -.5em 0;
    .image-item{
        padding:.5em 0;
        img{
            display: block;
            max-width: 100%;
            max-height:100vh;
        }
    }
}
</style>