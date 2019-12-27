Page({
  PAGECOUNT: 10,
  data: {
    isShowWrite: false,
    bloglist: []
  },
  comment(e){
    this.setData({
      isShowWrite: e.detail.isShowWrite
    })
  },
  close(e){
    this.setData({
      isShowWrite: e.detail.isShowWrite
    })
  },
  _getBlogList(){
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name: 'music',
      data:{
        $url: 'bloglist',
        start: this.data.bloglist.length,
        count: this.PAGECOUNT,
      },
      success:res=>{
        this.setData({
          bloglist: [...this.data.bloglist,...res.result.data]
        })
      },
      fail:()=>{},
      complete:()=>{
        wx.hideLoading()
        wx.stopPullDownRefresh();

      }
    })
  },
  onLoad: function (options) {
    this._getBlogList()
  },
  onPullDownRefresh: function () {
    this.setData({
      bloglist:[]
    })
    this._getBlogList()
  },
  onReachBottom: function () {
    this._getBlogList()
  },

})