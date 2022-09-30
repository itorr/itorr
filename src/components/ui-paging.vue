<template>
	<div class="ui-paging-box">
		<!-- v-if="max > 1"-->
		<!-- <a :disabled="cur < 2" @click="toPage(cur-1)">上一页</a> -->
		<a v-if="(cur - Math.ceil(size/2))>0" @click="toPage(1)">1</a>
		<a v-if="(cur - Math.ceil(size/2)) === 2" @click="toPage(2)">2</a>
		<s v-else-if="(cur - Math.ceil(size/2) - 1)>0"></s>
		<template v-for="i in size">
			<b :key="i" v-if="diff(i) == cur">{{diff(i)}}</b>
			<a :key="i" v-else-if="0 < diff(i) && diff(i)<=max" @click="toPage(diff(i))">{{diff(i)}}</a>
		</template>
		<a v-if="(cur + Math.ceil(size/2))+1 === max" @click="toPage(max-1)">{{max-1}}</a>
		<s v-else-if="(cur + Math.ceil(size/2) + 1) < max"></s>
		<a v-if="(cur + Math.ceil(size/2))<=max" @click="toPage(max)">{{max}}</a>
		<!-- <a :disabled="cur >= max" @click="toPage(cur+1)">下一页</a> -->
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props: {
			size:{
				type:Number,
				default: 7
			},
			cur:{
				type    : Number,
				default : 1
			},
			max:{
				type    : Number,
				default : 1
			}
		},
		methods:{
			diff(page){
				return this.cur-Math.ceil(this.size/2)+page
			},
			toPage(page){
				// console.log(page);


				this.$emit('update:cur',page);
				this.$emit('change',page);
			}
		},
	}
</script>

<style lang="less">
	.ui-paging-box{
		line-height: 2.6em;
		padding:20px 0px;
		/*text-align: center;*/

		/*display: flex;*/
		/*justify-content:left;*/
		width:100%;
		a,b,s{
			display: inline-block;
			vertical-align: top;
			padding:0 .8em;
			min-width:1em;
			margin:2px;
			text-align: center;
			white-space:nowrap;
		}
		a{
			background:rgba(125,125,125,.1);
			/*border-radius:9em;*/
			// box-shadow:0 0 0 1px #EEE inset;
			cursor: pointer;
			&[disabled]{
				pointer-events: none;
				opacity: .5;
			}
		}
		b{

		}
		s{
			text-decoration:none;
			&:after{
				content: '…';
			}
		}
	}
</style>
