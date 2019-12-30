// components/bottomWrite/bottomWrite.js
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
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(){
      this.triggerEvent('eventClose', { isShowWrite: false });

    },
    inputContent(e){
      this.setData({
        content: e.detail.value
      })
    },
    addComment() {
      if(this.data.content.length == 0){
        wx.showToast({
          title: '评论不能为空',
          icon: 'none'
        })
        return
      }
      wx.showLoading({
        title: '加载中...',
      })
      wx.cloud.callFunction({
        name: 'music',
        data: {
          $url: 'addComment',
          content: this.data.content
        },
        success: res => {
          console.log(res)
        },
        complete: () => {
          this.close()
          wx.hideLoading()
        }
      })
    },
  }
})
