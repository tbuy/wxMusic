const backgroundAudioManager = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    music: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    musicTime:{
      startTime:'0:00',
      endTime:'0:00'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initMusic(){
      backgroundAudioManager.title = '此时此刻'
      backgroundAudioManager.epname = '此时此刻'
      backgroundAudioManager.singer = '许巍'
      backgroundAudioManager.dataUrl = 'cloud://free1.6672-free1-1300046898/music/music1.mp3'
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    },
    playMusic(){
      backgroundAudioManager.play()
    },
    pauseMusic() {
      backgroundAudioManager.pause()
    },
    stopMusic() {
      backgroundAudioManager.stop()
    },
  },
  lifetimes: {
    ready() {
      backgroundAudioManager.title = '此时此刻'
      backgroundAudioManager.epname = '此时此刻'
      backgroundAudioManager.singer = '许巍'
    }
  }
})
