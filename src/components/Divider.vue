/**
    分割线组件，没有任何逻辑
 */
 <template>
  <div class='divider'>
 
  </div>
 </template>
 
 <script>
  export default {
      name:'Divider',
    data () {
      return {
 
      }
    },
    components: {
 
    }
  }
 </script>
 
 <style lang='scss' scoped>
    .divider{
        display: block;
        height: 1px;
        width: 100%;
        font-size: 14px;
        font-variant: tabular-nums; //改变字体
        line-height: 1.5;
        color: rgba(0,0,0,0.65);
        box-sizing: border-box;
        list-style: none;
        background: #e8e8e8;
    }
 </style>
 