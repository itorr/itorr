<template>
	<div class="ui-text-banner-box">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "ui-text-banner-box"
};
</script>
<style lang="less">
.ui-text-banner-box {
	opacity: 0.5;
	font-size: 2em;
	text-align: center;
	padding: 10em 0;
}
</style>
