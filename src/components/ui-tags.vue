<template>
	<div class="ui-tags-box" :data-lock="locked" ref="tag-box">
		<div class="tag-list" ref="tag-list">
			<span
				class="item"
				v-for="(tag, index) in tags"
				:key="index"
				@click="remove(index)"
				>{{ tag }}</span
			>
		</div>
		<input
			type="text"
			v-model="text"
			ref="input"
			@blur="blur()"
			@keydown.enter="submit()"
			:disabled="locked"
			:style="{
				paddingLeft: paddingLeft + 'px',
				paddingTop: paddingTop + 'px'
			}"
			:placeholder="locked ? '已到达标签最大限制数' : placeholder"
		/>
	</div>
</template>
<script>
export default {
	name: "ui-tags",
	data() {
		return {
			paddingLeft: 0,
			paddingTop: 0,
			text: ""
		};
	},
	props: {
		value: {
			type: Array,
			default: _ => []
		},
		max: {
			type: Number,
			default: 10
		},
		placeholder: {
			type: String,
			default: "输入文字回车添加标签"
		}
	},
	computed: {
		tags: {
			get() {
				return this.value || [];
			},
			set(tags) {
				console.log(tags);
				this.$emit("value", tags);
				this.$emit("change", tags);
			}
		},
		locked() {
			return this.max && this.max <= this.tags.length;
		}
	},
	methods: {
		add(tag) {
			tag = tag.trim();

			let max = this.max;
			let tags = this.tags;

			let index = tags.indexOf(tag);

			if (max) {
				if (max <= tags.length) {
					return this.ui.toast("当前已经到达了 tag 最大数量");
				}
			}

			if (tag === "") {
				//
			} else if (index === -1) {
				tags.push(tag);
				this.text = "";

				this.tags = tags;

				this.calc();
				this.focus();
			} else {
				this.ui.toast("当前 tag 已存在");
			}
		},
		focus() {
			let inputEl = this.$refs["input"];
			inputEl.focus();
		},
		blur() {
			this.add(this.text);
		},
		submit() {
			this.add(this.text);
		},
		calc() {
			if (!this.tags) return;

			this.$nextTick(_ => {
				let inputMinWidth = 150;
				let tagLineHeight = 26;
				let inputPadding = 4;

				let tagBoxEl = this.$refs["tag-box"];
				let tagListEl = this.$refs["tag-list"];

				let tagsWidth;
				// this.searchTagsWidth=searchTags.offsetWidth;
				if (tagListEl.children.length) {
					let last =
						tagListEl.children[tagListEl.children.length - 1];
					tagsWidth = last.offsetLeft + last.offsetWidth;
				} else {
					tagsWidth = tagListEl.offsetWidth;
				}

				let tagHeight = tagListEl.offsetHeight;

				if (tagsWidth + inputMinWidth > tagBoxEl.offsetWidth) {
					//如果最后一行编辑范围不够用
					tagHeight += tagLineHeight;
					tagsWidth = 0;
				}

				this.paddingLeft = tagsWidth + inputPadding + 2;
				this.paddingTop = Math.max(tagHeight - tagLineHeight, 4) + 2;
			});
		},
		remove(index) {
			let tags = this.tags;

			tags.splice(index, 1);

			this.tags = tags;

			this.calc();
			this.focus();
		}
	},
	watch: {
		tags: "calc"
	},
	mounted() {
		this.calc();
	}
};
</script>
<style lang="less">
.ui-tags-box {
	display: block;
	position: relative;
	z-index: 0;
	/*margin:10px 0;*/

	font-size: 14px;

	/*box-shadow:0 0 0 1px rgba(0,0,0,.3);*/
	border-radius: 4px;
	background: rgba(40, 40, 40, 0.05);
	pointer-events: auto;

	/*margin: 0.5em 0.2em;*/

	.tag-list {
		position: absolute;
		z-index: 1;
		padding: 4px 0 0 4px;
		pointer-events: none;
		/*&>div{*/
		overflow: hidden;
		& > .item {
			float: left;
			line-height: 22px;
			padding: 0 6px;
			border-radius: 2px;
			background: #fff;
			margin: 0 4px 4px 0;
			cursor: pointer;
			pointer-events: auto;
		}
		/*}*/
	}
	input {
		box-sizing: border-box;
		background: none;

		font: inherit;
		outline: none;
		border: 0;
		line-height: 18px;
		padding: 6px;
		margin: 0;
		width: 100%;
		border-radius: 1px;
		&::placeholder {
			color: #bbb;
		}
		&:focus {
			/*box-shadow:0 0 0 1px currentColor;*/
		}

		&[disabled] {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}

	&[data-lock="true"] {
		background: #f8f8f8;
		.tag-list {
			/*position: relative;*/
		}
		input {
			/*display: none;*/
		}
	}
}
</style>
