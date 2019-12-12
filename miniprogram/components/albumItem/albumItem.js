// components/albumItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    album: {
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
    goAlbum(e) {
      wx.navigateTo({
        url: '/pages/musiclist/musiclist?id=' + e.currentTarget.dataset.id,
      })
    },
  },
  lifetimes: {
    ready(){
      
    }
  }
})
