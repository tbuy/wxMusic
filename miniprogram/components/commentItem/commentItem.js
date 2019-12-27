// components/commentItem/commentItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否开启点击跳转
    isClick:{
      type: Boolean,
      value: true
    },
    blog: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goCommentlist() {
      if (this.data.isClick){
        wx.navigateTo({
          url: '/pages/commentlist/commentlist?id=' + this.data.blog._id ,
        })
      }
    },
    goComment() {
      this.triggerEvent('eventComment', { isShowWrite: true});
    },
    goShare(){}
  }
})
