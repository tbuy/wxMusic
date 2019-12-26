// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[],
    content:''
  },
  cancel(){
    wx.navigateBack()
  },
  send(){

  },
  del(e){
    wx.showModal({
      content: '确定删除该图片吗？',
      success: res=>{
        if(res.confirm){
          var _temp = [];
          this.data.imageList.forEach((item,index)=>{
            if (index != e.target.dataset.idx){
              _temp.push(item)
            }
          })
          this.setData({
            imageList: _temp
          })
        }
      }
    })
  },
  uploadImage(){
    //最多6张
    wx.chooseImage({
      count: 6 - this.data.imageList.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=> {
        const tempFilePaths = res.tempFilePaths
        this.setData({
          imageList: [...this.data.imageList , ...tempFilePaths]
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
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})