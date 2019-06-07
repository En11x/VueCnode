<template>
  <div id="app">
    <Header />
    <!-- 页面主题部分 -->
    <div class='main-section'>
      <router-view />
    </div>
  </div>
</template>

<script>
//导入其他组件
import Header from "@/components/Header"
export default {
  name: "App",
  data() {
    return {
    };
  },

  // 注册引用进来的其他组件
  components:{
    Header
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
*{
  margin:0;
  padding:0;
}
</style>

<style scoped>
  .main-section{
    margin: auto;
    margin-top: 40px;
    width: 1200px;
  }
</style>
