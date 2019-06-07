<template>
	<div class="header">
		<!-- 关于 网站信息-->
		<div class="info">
			<a href="/">
				<img :src="logoSrc" alt="网站logo">
			</a>
			<span @click='dialogVisible=true'>关于</span>
		</div>
		<el-dialog title="关于本项目" :visible.sync="dialogVisible" width="35%">
			<div class='inside-dialog'>
				<p>
					作者：<a href="https://github.com/pjx1211" target='_blank'>pjx1211</a>
				</p>
				<p>
					源码:
					<el-icon type='star' class='el-icon-star-off'></el-icon>
				</p>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			logoSrc: require('../assets/image/cnodejs.svg'),
			dialogVisible:false
		}
	},
	components: {}
}
</script>

<style scoped lang='scss'>
.header {
	width: 100%;
	height: 50px;
	background: #444;
	> div.info {
		width: 1200px;
		height: 100%;
		margin: auto;
		a {
			width: 120px;
			height: 50px;
			display: block;
			float: left;
			img {
				padding-top: 10px;
				display: block;
				float: left;
			}
		}
		span {
			float: right;
			height: 50px;
			line-height: 50px;
			color: #fff;
			cursor: pointer;
			font-size: 15px;
			font-weight: bold;
		}
	}
}
</style>
