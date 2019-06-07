/*
    用户个人信息组件
 */

<template>
	<div class="panel">
		<router-link :to="'/user/'+user.loginname" class="user">
			<img :src="user.avatar_url" alt="用户头像">
			<span>{{ user.loginname }}</span>
		</router-link>
		<div>积分：{{ user.score }}</div>
		<div>
			Github:
			<a :href="'https://github.com/'+user.githubUsername" target="_blank">{{ user.githubUsername }}</a>
		</div>
		<div>注册时间：{{$moment(user.create_at).format('YYYY年 MM-DD')}}</div>
	</div>
</template>

<script>
//引入请求函数
import { getUserByName } from '@/utils/api'
import eventProxy from '@/utils/eventProxy'
export default {
	name: 'ProfilePanel',
	//获取父组件传递来的loginname
	props: ['loginname'],
	data() {
		return {
			user: {}
		}
	},
	methods: {
		//封装好获取用户信息的函数
		//参数是用户登录用户名
		getUsers(loginname) {
			getUserByName(loginname).then(res => {
				this.user = res.data.data
				eventProxy.trigger('user', res.data.data)
			})
		}
	},
	created() {
		if (!this.loginname) {
			return
		}
		this.getUsers(this.loginname)
	},
	components: {}
}
</script>

<style lang='scss' scoped>
.panel {
	display: flex;
	flex-direction: column;
	color: black;
	padding: 20px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	> a {
		display: flex;
		align-items: center;
		img {
			width: 48px;
			height: 48px;
			border-radius: 5px;
			margin-right: 20px;
		}
	}
	.user {
		margin-bottom: 10px;
	}
}
</style>
