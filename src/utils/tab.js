/**
 * 每条帖子都有tab字段,如  tab:'share’  表示分享，所以封装一个对象，挂在在VUE上，方便调用
 */

export default {
  good: {
    name: "精华", //表示帖子是精华
    type: "" //用elementUI tag标签的class
  },
  job: {
    name: "招聘",
    type: "info"
  },
  ask: {
    name: "问答",
    type: "success"
  },
  share: {
    name: "分享",
    type: "warning"
  }
};
