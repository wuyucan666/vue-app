
<template>
	<div class="home">
		<h1>{{ msg }}</h1>
		<mt-button type="danger">测试ui框架及样式</mt-button>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
				msg: '足球现场'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
	.home{
		h1{
			color:#f00;
			font-size: 0.375rem;
		}
		button{
			width: 1.83rem;
			height: 1.213rem;
		}
	}
</style>
