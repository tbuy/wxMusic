// components/commentItem/commentItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
      wx.navigateTo({
        url: '/pages/commentlist/commentlist',
      })
    },
    goComment() {
      this.triggerEvent('eventComment', { isShowWrite: true});
    },
    share(){
      console.log(2)
      wx.shareAppMessage()
    }
  }
})
