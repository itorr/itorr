<template>
	<div class="ui-switch-box" @click.prevent="change" :data-checked="value">
		<div class="switch">
			<div class="slider"></div>
		</div>
		<span class="text"><slot></slot></span>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		change() {
			this.$emit("input", !this.value);
		}
	}
};
</script>

<style lang="less">
.ui-switch-box {
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	margin: 0 0.5em;
	&.xmin {
		font-size: .8em;
	}
	.switch {
		display: inline-block;
		vertical-align: middle;
		margin-top: -0.3em;
		width: 2.4em;
		height: 1.4em;

		border-radius: 9em;
		background: rgba(0, 0, 0, 0.1);

		transition: background 0.3s ease;

		.slider {
			width: 1em;
			height: 1em;
			border-radius: 9em;
			background: #fff;
			margin: 0.2em;
			position: relative;

			transition: transform 0.3s ease;
		}
	}
	.text{
		margin-left: .3em;
		&:empty{
			display: none;
		}
	}
	&[data-checked] {
		.switch {
			background: currentColor;
			.slider {
				/*left:1em;*/
				transform: translateX(1em);
			}
		}
	}
}
</style>
