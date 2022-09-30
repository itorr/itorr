<template>
	<div class="ui-tabs-box" :data-checked="value">
		<div
			class="item"
			v-for="item in _options"
			:data-checked="item.value === value"
			:data-text="item.text"
			:key="item.value"
			@click.prevent="change(item.value)"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: [Boolean, Number, String]
		},
		options: {
			type: [Array, Object],
			default() {
				return [];
			}
		}
	},
	computed: {
		_options() {
			let options = this.options;

			if (options instanceof Array) {
				//默认情况不处理
			} else {
				let _options = [];
				for (let value in options) {
					_options.push({
						value,
						text: options[value]
					});
				}
				options = _options;
			}

			return options.map(option => {
				if (typeof option === "string") {
					return {
						value: option,
						text: option
					};
				} else {
					return option;
				}
			});
		}
	},
	methods: {
		change(_value) {
			this.$emit("input", _value);
		}
	}
};
</script>

<style lang="less">
.ui-tabs-box {
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	margin: 0.5em 0.2em;

	overflow: hidden;

	line-height: 1.8em;

	background: #fff;
	border-radius: 4px;

	box-shadow:
		0 0 0 1px rgba(0,0,0,.1),
		0 0 0 3px rgba(0,0,0,.02);

	& > .item {
		float: left;
		padding: 0 0.4em;

		transition: background 0.3s ease;
		box-shadow: 1px 0 0 rgba(0, 0, 0, 0.08);

		&:after {
			content: attr(data-text);
		}
		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
		&[data-checked] {
			background: currentColor;
			&:after {
				color: #fff;
			}
		}
	}
}
</style>
