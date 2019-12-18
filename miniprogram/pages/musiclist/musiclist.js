// miniprogram/pages/musiclist/musiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclist: [],
    albumDetail: [],
    loadingState: 0
  },
  getAlbumDetail(id){
    wx.cloud.callFunction({
      name: 'music',
      data: {
        id: id,
        $url: 'albumDetail'
      },
      success: res=>{
        this.setData({
          albumDetail: res.result.data
        })
      },
      fail: err=>{
      },
      complete: () => {
        this.setData({
          loadingState: this.data.loadingState + 1
        })
      }
    })
  },
  PAGECOUNT: 10,
  getMusiclist(id) {
    console.log(id)
    wx.cloud.callFunction({
      name: 'music',
      data: {
        start: this.data.musiclist.length,
        count: this.PAGECOUNT,
        id: id,
        $url: 'musiclist'
      },
      success: res => {
        this.setData({
          musiclist: res.result.data
        })
      },
      fail: err => {
        console.log(err)
      },
      complete:()=>{
        this.setData({
          loadingState: this.data.loadingState + 1
        })
      }
    })
  },
  goMusic(e){
    wx.navigateTo({
      url: '/pages/playmusic/playmusic?id=' + e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    getApp().setWatcher(this.data, this.watch); 

    wx.showLoading({
      title: '加载中',
    })
    this.getAlbumDetail(options.id)
    this.getMusiclist(options.id)
    
  },

  watch: {
    loadingState:val => {
      if(val == 2){
        wx.hideLoading()
      }
    }
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