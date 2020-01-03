// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: [],
    content: ''
  },
  cancel() {
    wx.navigateBack()
  },
  inputContent(e) {
    this.setData({
      content: e.detail.value
    })
  },
  send() {
    if (this.data.content == '') {
      wx.showToast({
        title: '请填写内容',
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
        $url: 'addBlog',
        content: this.data.content,
        imagelist: this.data.imagelist
      },
      success:res=>{
        wx.showToast({
          title: '发布成功',
          icon: 'none'
        })
        wx.navigateBack()
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },
  del(e) {
    wx.showModal({
      content: '确定删除该图片吗？',
      success: res => {
        if (res.confirm) {
          var _temp = [];
          this.data.imagelist.forEach((item, index) => {
            if (index != e.target.dataset.idx) {
              _temp.push(item)
            }
          })
          this.setData({
            imagelist: _temp
          })
        }
      }
    })
  },
  uploadImage() {
    //最多6张
    wx.chooseImage({
      count: 6 - this.data.imagelist.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        this.setData({
          imagelist: [...this.data.imagelist, ...tempFilePaths]
        })
        console.log(tempFilePaths)
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', 
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success(res) {
        //     const data = res.data
        //     console.log(data)
        //   }
        // })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})