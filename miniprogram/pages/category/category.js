import { getBigCateList, getSmallCateList } from '../../api/category'
const app = getApp()
Page({
  data: {
    bigCateList: [],
    smallCateList: [],
    selected: 0,
    picPath: app.globalData.picPath + 'picture/'
  },
  onLoad(options) {
    wx.toast()
    getBigCateList().then((res) => {
      console.log('bigCateList', res.data)
      this.setData({
        bigCateList: res.data,
        selected: res.data[0].id
      })
      this.showSmallCate(res.data[0].id)
    })
  },
  clickBigCate(event) {
    var id = event.currentTarget.dataset.id
    this.setData({
      selected: id
    })
    this.showSmallCate(id)
  },
  showSmallCate(id) {
    getSmallCateList(id).then((res) => {
      this.setData({
        smallCateList: res.data
      })
    })
  }
})
