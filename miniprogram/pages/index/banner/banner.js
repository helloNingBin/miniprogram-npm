// pages/index/banner/banner.js
let app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 轮播图数据
    bannerList: {
      type: Array,
      value: [
        '../../../assets/banner/banner-1.jpg',
        '../../../assets/banner/banner-2.jpg',
        '../../../assets/banner/banner-3.jpg'
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    picPath: app.globalData.picPath,
    activeIndex: 0 // 被激活的轮播图索引，默认是 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSwiperIndex(e) {
      this.setData({
        activeIndex: e.detail.current // 被激活的轮播图索引，默认是 0
      })
    }
  }
})
