// pages/commentlist/commentlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogDetail:{},
    commentlist:[],
    id: 0
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
          blogDetail: res.result.data[0]
        })
      },
      fail:()=>{},
      complete:()=>{}
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
      complete: () => { }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this._getBlogDetail();
    this._getCommentlist();
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },
})