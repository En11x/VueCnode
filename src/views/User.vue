/**
    用户个人中心页
 */
<template>
	<div class="user">
		<ProfilePanel :loginname="loginname"/>
		<RecentTopic :simple="false"/>
		<RecentReply :simple="false"/>
	</div>
</template>

<script>
//引入组件
import ProfilePanel from '@/components/ProfilePanel'
import RecentTopic from '@/components/RecentTopic'
import RecentReply from '@/components/RecentReply'

export default {
	name: 'User',
	data() {
		return {
			loginname: ''
		}
	},
	created() {
		//获取路由参数
		this.loginname = this.$route.params.id
	},
	components: {
		ProfilePanel,
		RecentTopic,
		RecentReply
	}
}
</script>

<style scoped>
.user {
	width: 75%;
	margin: auto;
}
</style>
