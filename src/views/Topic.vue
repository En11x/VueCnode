/**
    话题详情页
 */
 <template>
	<div class="topic">
		<!-- 左边部分 -->
		<div class="left">
			<div class="title">{{topic.title}}</div>
			<div class="info">
				<span>
					发布于&nbsp;
					{{$moment(topic.create_at).format('YYYY-MM-DD')}}
					•&nbsp;
				</span>
				作者：
				<router-link :to="'/user/'+topic.loginname">{{ topic.loginname }}</router-link>•&nbsp;
				<span>{{ topic.visit_count }}次浏览•&nbsp;</span>
				<span>来自：{{$tab[topic.tab]&&$tab[topic.tab].name}}</span>
			</div>
			<!-- 分割线 -->
			<Divider/>
			<!-- 文章主体 数据是html格式的 用v-html-->
			<div class="content" v-html="topic.content"></div>
			<!-- 评论部分 -->
			<Reply :replies="topic.replies"/>
		</div>

		<!-- 右边部分 -->
		<div class="right">
			<ProfilePanel v-if="topic.loginname" :loginname="topic.loginname"/>
			<RecentTopic/>
			<RecentReply/>
		</div>
	</div>
</template>
 
 <script>
//引入组建
import ProfilePanel from '@/components/ProfilePanel'
import RecentTopic from '@/components/RecentTopic'
import RecentReply from '@/components/RecentReply'
import Divider from '@/components/Divider'
import Reply from '@/components/Reply'
import { getTopicById } from '@/utils/api'
import { log } from 'util'
export default {
	name: 'Topic',
	data() {
		return {
			topic: {}
		}
	},
	methods: {
		//封装获取topic请求方法
		getTopic(id) {
			getTopicById(id).then(res => {
				//这个地方出了一点小问题，给子组件绑定 :loginname='topic.author.loginname' 会报错,但子组件会拿到值
				// :loginname='topic.loginname' 这样绑定，不报错，但子组件拿到的是undefined
				// 在给子组件绑定的时候,v-if 判断一下
				this.topic = {
					...res.data.data,
					...res.data.data.author
				}
			})
		}
	},
	created() {
		//获取路由参数
		let id = this.$route.params.id
		this.getTopic(id)
	},
	//在created里获取数据有一个问题，就是当前页面路由参数动态改变时created不会再再调用。当前组件的数据也就没有改变
	//所以用一个路由拦截器监听动态路由参数变化
	beforeRouteUpdate(to, from, next) {
		let id = to.params.id
		this.getTopic(id)
		next()
	},
	components: {
		ProfilePanel,
		RecentTopic,
		RecentReply,
		Divider,
		Reply
	}
}
</script>
 
 <style lang='scss' scoped>
// 定义shadow
$grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
.topic {
	display: flex;
	margin-bottom: 100px;
	.title {
		color: black;
		font-weight: bold;
		font-size: 25px;
		margin-bottom: 8px;
	}
	.content {
		color: #333;
		line-height: 1.6;
		margin-bottom: 50px;
		/deep/ img {
			width: 100%;
		}
	}
	.left {
		width: 72%;
		padding: 20px;
		box-shadow: $grey-shadow;
		.info {
			display: flex;
			align-items: center;
			font-size: 12px;
			color: #838383;
		}
	}
	.right {
		width: 25%;
		height: 100%;
		margin-left: 2%;
	}
}
</style>
 