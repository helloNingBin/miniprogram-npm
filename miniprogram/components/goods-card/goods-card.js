// components/goods-card/index.js
const app = getApp()
//console.log(app.globalData.picPath);
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 每一项商品的数据
    goodItem: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    picPath: app.globalData.picPath + 'picture/'
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})
