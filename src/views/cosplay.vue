<template>
    <div class="cosplay-view">
        <!-- <img class="image-4" src="../../images/4.jpg"> -->
        <div class="article-list">
            <article class="article-item" 
                v-for="article in articles" :key="article.url" 
                :style="{'background-color':`#${article.color}`}">
                <router-link :to="article.url">
                    <img class="cover" :src="imageFormat(article.cover)">
                </router-link>
            </article>
        </div>
        <!-- <article> -->
            <!-- <img src="../../images/4.jpg">
            <img src="../../images/4.jpg" style="transform: rotateY(180deg);"> -->
        <!-- </article> -->
    </div>
</template>

<script>
import { getArticles } from "@/functions/api";

import { imageFormat } from "@/functions/formats";
export default {
    data(){
        return {
            articles:[]
        }
    },
    methods:{
        imageFormat
    },
    created(){
        this.articles = getArticles({
            types:[
                'cosplay',
            ]
        }).filter(a=>a.cover)//.filter(a=>a.star)
    }
}
</script>

<style lang="less">
html[data-route-view="cosplay"]{
	// background: hsl(287, 92%, 95%);
	.app-nav{
		a.router-link-exact-active{
            color:#4500bb;
	        // background: hsl(287, 92%, 95%);
		}
	}
}
html[data-article-type="cosplay"]{
    .app-nav{
        a[href="/cosplay"]{
            color:#4500bb;
			font-family: JiaLiDaYuanJF-split,'Tensentype-JiaLiDaYuanJ';
        }
    }
}
.cosplay-view{
    padding-top:0;
    padding-bottom:0;
    .image-4{
        display: block;
        width:100%;
    }
    .article-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;
        .article-item{
            background: #333;
            width:25%;
            aspect-ratio: 2 / 3;
            overflow: hidden;
            .cover{
                display: block;
                width: 100%;
                aspect-ratio: 2 / 3;
                object-fit: cover;
                transition: transform 3s ease;
            }
            &:hover{
                .cover{
                    transform: scale(1.02);
                }
            }
        }
    }
}
@media (max-width:800px) {
    .cosplay-view{
        padding:0;
    }
}
</style>