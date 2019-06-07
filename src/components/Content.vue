/**
    content组件 包裹topics
 */
<template>
	<div>
		<div class="topic" v-for="item in list" :key="item.id">
			<!-- 用户头像 -->
			<router-link :to="{path:'/user/'+item.author.loginname}">
				<img :src="item.author.avatar_url" alt="用户头像">
			</router-link>
			<!-- 回复量和访问量 -->
			<span class="count">
				<em>{{item.reply_count}}</em>/
				<em>{{item.visit_count}}</em>
			</span>
			<!-- 分享标签 -->
			<el-tag :type="$tab[item.tab]&&$tab[item.tab].type">{{$tab[item.tab]&&$tab[item.tab].name}}</el-tag>
			<!-- 文章标题 -->
			<router-link :to="{path:'/topic/'+item.id}" class="title">{{item.title}}</router-link>
			<!-- 最近回复时间 -->
			<span class="time">
				{{
				$moment(item.last_reply_at,"YYYY-MM-DD").startOf('day').fromNow()
				}}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Content',
	//获取父组件Home传递过来的值
	props: ['list'],
	data() {
		return {}
	},

	components: {}
}
</script>

<style lang='scss' scoped>
.topic {
	margin: 15px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 50px;
		border-radius: 50%;
		height: 50px;
	}
	span.count {
		width: 50px;
		text-align: center;
		em:first-child {
			font-size: 1.2em;
			color: purple;
		}
		em:last-child {
			color: grey;
		}
	}
	.title {
		width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}
	span.time {
		width: 70px;
		text-align: right;
	}
}
</style>
