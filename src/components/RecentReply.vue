/**
    最近回复的话题 组件
 */
 <template>
	<div class="panel">
		<header>最近参与的话题</header>
		<Divider/>
		<template v-for="item in user.recent_replies">
			<div :key="item.id">
				<router-link v-if="simple" :to="'/topic/'+item.id">{{item.title}}</router-link>
				<div v-else>
					<div class="main">
						<div>
							<router-link :to="'/user/'+item.author.loginname" class="avatar">
								<img :src="item.author.avatar_url" alt="用户头像">
							</router-link>
							<router-link :to="'/topic/'+item.id" class='title'>{{item.title}}</router-link>
						</div>
						<span class="time">{{$moment(item.last_reply_at).startOf('day').fromNow()}}</span>
					</div>
					<Divider class="inside-divider"/>
				</div>
			</div>
		</template>
	</div>
</template>
 
 <script>
//引入组件
import Divider from '@/components/Divider'
import eventProxy from '@/utils/eventProxy'
export default {
	name: 'RecentReply',
	props: {
		simple: {
			default: true,
			type: Boolean
		}
	},
	data() {
		return {
			user: {}
		}
	},
	created() {
		//增加属性，如果组件卸载了就不需要更新，否则会造成内存泄露
		this.isMounted = false
		if (!this.isMounted) {
			eventProxy.on('user', res => {
				this.user = res
			})
		}
	},
	destroyed() {
		this.isMounted = true
	},
	components: {
		Divider
	}
}
</script>
 
 <style lang='scss' scoped>
.panel {
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-shadow: 0px 2px 12px 0 rgba(0, 0, 0, 0.1);
	margin: 20px 0;
	header {
		color: #000;
		font-weight: bold;
	}
	.divider {
		margin: 12px 0;
	}
	.main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		> div {
			display: flex;
			align-items: center;
			overflow: hidden;
			.title{
				width:100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
			.avatar {
				margin-left: 10px;
			}
		}
		.time{
			color:#777;
			font-size:12px;
			white-space: nowrap;
		}
	}
	img {
		width: 30px;
		height: 30px;
		border-radius: 3px;
		margin-right: 5px;
	}
}
</style>
 