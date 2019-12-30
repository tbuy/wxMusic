// pages/commentlist/commentlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogDetail:{},
    commentlist:[],
    id: 0,
    loadingState: 0,
    isShowWrite: false,

  },
  comment(e) {
    this.setData({
      isShowWrite: e.detail.isShowWrite
    })
  },
  close(e) {
    this.setData({
      isShowWrite: e.detail.isShowWrite
    })
  },
  _getBlogDetail(){
    wx.cloud.callFunction({
      name: 'music',
      data:{
        $url:'blogDetail',
        id: this.data.id
      },
      success:res=>{
        this.setData({
          blogDetail: res.result.data[0],
        })
      },
      fail:()=>{},
      complete:()=>{
        this.setData({
          loadingState: this.data.loadingState + 1
        })
      }
    })
  },
  _getCommentlist(){
    wx.cloud.callFunction({
      name: 'music',
      data: {
        $url: 'commentlist',
        id: this.data.id
      },
      success: res => {
        this.setData({
          commentlist: [...this.data.commentlist,...res.result.data]
        })
      },
      fail: () => { },
      complete: () => {
        this.setData({
          loadingState: this.data.loadingState + 1
        })
       }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().setWatcher(this.data, this.watch); 
    this.setData({
      id: options.id
    })
    wx.showLoading({
      title: '加载中...',
    })
    this._getBlogDetail();
    this._getCommentlist();
  },
  watch: {
    loadingState: val => {
      if (val == 2) {
        wx.hideLoading()
      }
    }
  },
  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },
})