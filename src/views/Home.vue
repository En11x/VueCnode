/**
	首页面
 */
<template>
	<div class="home">
		<el-tabs v-model="tab" @tab-click="tabChange">
			<el-tab-pane label="全部" name="all">
				<Content :list="list"/>
			</el-tab-pane>
			<el-tab-pane label="精华" name="good">
				<Content :list="list"/>
			</el-tab-pane>
			<el-tab-pane label="分享" name="share">
				<Content :list="list"/>
			</el-tab-pane>
			<el-tab-pane label="问答" name="ask">
				<Content :list="list"/>
			</el-tab-pane>
			<el-tab-pane label="招聘" name="job">
				<Content :list="list"/>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
//引入Content组件
import Content from '@/components/Content'
//引入获取topics请求函数
import { getTopics } from '@/utils/api'
import { constants } from 'fs'

export default {
	name: 'Home',
	data() {
		return {
			page: 1,
			limit: 20,
			tab: 'all',
			list: [],
			store: {} //存储所有Tab对应的数据，因为切换tab后，没必要再发请求获取数据
		}
	},
	methods: {
		//封装getTopics方法
		getTopics() {
			//获取topics请求方法
			getTopics({
				page: this.page,
				limit: this.limit,
				tab: this.tab //获取topics的类别，请全别还是精华
			}).then(res => {
				this.list = res.data.data
				//下次请求时，多请求10条数据
				this.limit = this.limit + 10

				const store = this.store
				//将数据存到对应的key下
				store[this.tab] = {
					limit: this.limit,
					data: res.data
				}
			})
		},

		//滚动函数，监听当前滚动条是否滚动了底部，重新加载出数据
		scrollMethod() {
			//页面内容可是区域 + 溢出(滚动)的距离
			const sumH =
				document.body.scrollHeight ||
				document.documentElement.scrollHeight
			//滚动条在y轴上的滚动距离
			const scrollH =
				document.body.scrollTop || document.documentElement.scrollTop
			//页面可视区的高度
			const viewH =
				document.body.clientHeight ||
				document.documentElement.clientHeight
			if (scrollH + viewH >= sumH - 1) {
				//滚动条已经到底部
				//发送请求
				this.getTopics()
			}
		},

		//导航栏切换
		tabChange() {
			const store = this.store
			//store里没有对应的数据，就重新获取
			if (!store[this.store]) {
				this.limit = 20
				this.list = []
				this.getTopics()
				return
			}
			//store里有对应的数据直接从store里取
			this.list = store[this.tab].data
			this.limit = store[this.tab].limit
		}
	},
	created() {
		//发送球球获取数据
		this.getTopics()

		//监听页面滚动事件
		window.addEventListener('scroll', this.scrollMethod)
	},
	destroyed() {
		//组件销毁时，移除绑定的滚动事件
		window.removeEventListener('scroll', this.scrollMethod)
	},
	components: {
		Content
	}
}
</script>

<style scoped>
.home {
	margin: auto;
	width: 75%;
	padding: 20px 30px;
	box-sizing: border-box;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
