<template>
    <div class="project-view">
        <header>
            <h1>神奇海螺试验场</h1>
            <p>贰零二零年的个人新企划列表</p>
            <a href="https://lab.magiconch.com/" target="_blank">https://lab.magiconch.com/</a>
        </header>
        <div class="projects-box">
            <article class="project-item" v-for="project in projects" :key="project.link">
                <a :href="project.link" target="_blank">
                    <h2>{{project.title}}</h2>
                    <p>{{project.description}}</p>
                </a>
            </article>
        </div>
        <!-- <div class="projects-icon-box">
            <article class="project-item" v-for="project in projects" :key="project.link">
                <a :href="project.link" target="_blank">
                    <img :src="project.icon">
                    <h2>{{project.title}}</h2>
                    <p>{{project.description}}</p>
                </a>
            </article>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            projects:[
                {
                    title: '能不能好好说话？',
                    description: '拼音首字母缩写释义工具',
                    link: 'https://lab.magiconch.com/nbnhhsh/',
                    icon: './images/projects/nbnhhsh.svg',
                },
                {
                    title: '电子包浆',
                    description: '图片绿化工具箱',
                    link: 'https://magiconch.com/patina/',
                    icon: './images/projects/patina.jpg',
                },
                {
                    // title: '蒸 気 機',
                    title: '蒸 汽 机',
                    description: '虚拟信号蒸汽波风格化影像后期工具',
                    link: 'https://magiconch.com/vaporwave/',
                    icon: './images/projects/vaporwave.jpg',
                },
                {
                    title: 'One Last Image',
                    description: 'One Last Kiss 卢浮宫生成器',
                    link: 'https://lab.magiconch.com/one-last-image/',
                    icon: './images/projects/one-last-image.jpg',
                },
                {
                    title: '福音战士标题生成器',
                    description: 'Evangelion Title Card Generator',
                    link: 'https://lab.magiconch.com/eva-title/',
                    icon: './images/projects/eva-title.jpg',
                },
                {
                    title: '画的啥呀',
                    description: '动画主题为主的网页你画我猜',
                    link: 'https://draw.magiconch.com/',
                    icon: './images/projects/nbnhhsh.svg',
                },
                // {
                //     title: '更多',
                //     description: '神奇海螺试验场',
                //     link: 'https://lab.magiconch.com/'
                // }
            ]
        }
    }
}
</script>

<style lang="less">
html[data-route-view="project"]{
	.app-nav{
		a.router-link-exact-active{
            color:#b30000;
            // background: hsl(0, 92%, 95%);
		}
	}
}
.project-view{
	background: hsl(0, 92%, 95%);
    a{
        color:#8b0000;
    }
    header{
        padding: 1em 0;
        h1{
            font-size: 2em;
            line-height: 1.4;
        }
        p{
            padding:.1em 0;
            letter-spacing: .08em;
            opacity: 0.4;
        }
    }
}
.projects-box{
    padding:1em 0;
    article{
        a{
            display: block;
            padding:1em 0;
        }
        h2{
            line-height: 1.4;
        }
        p{
            padding:.1em 0;
            opacity: 0.4;
        }
    }
}
.projects-icon-box{
    padding:1em 0 1em 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    article{
        a{
            display: block;
            padding:1em;
            width: 16em;
        }
        img{
            width: 12em;
            height: 12em;
            border-radius: 1em;
            box-shadow: 0 1.1em 1.5em -.5em rgba(111, 3, 3, 0.2);
            // background:#8b0000;
        }
        h2{
            line-height: 1.4;
            padding: .4em 0 .2em;
        }
        p{
            padding:.1em 0;
            opacity: 0.4;
        }
    }
}
</style>