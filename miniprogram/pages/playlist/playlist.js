Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    bannerlist: [],
    albumlist: [],
    
  },
  _getBanner(){
    wx.cloud.callFunction({
      name: 'bannerlist',
      success: res => {
        this.setData({
          bannerlist: res.result.data
        })
      },
      fail: err => {
        console.log(err)
      },
    })
  },
  PAGECOUNT: 9,
  _getAlbum() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'music',
      data:{
        start: this.data.albumlist.length,
        count: this.PAGECOUNT,
        $url: 'albumlist'
      },
      success: res => {
        this.setData({
          albumlist: [...this.data.albumlist,...res.result.data]
        })
      },
      fail: err => {
        console.log(33,err)
      },
      complete:()=>{
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
      
    })
  },
  onLoad(){
    this._getBanner();
    this._getAlbum();
  },
  onPullDownRefresh(){
    this.setData({
      albumlist: [],
    })
    this._getAlbum();
  },
  onReachBottom(){
    this._getAlbum();
  }
})