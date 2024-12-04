import request from '../../utils/request'
import { indexData } from '../../api/index'
const app = getApp()
//console.log(app.globalData.picPath);
//console.log(app.globalData);
Page({
  data: {
    bannerList: [],
    entranceList: [],
    productList1: [],
    productList2: [],
    picPath: app.globalData.picPath,
    loading: true
  },
  onLoad() {
    this.getIndexData()
  },
  async getIndexData() {
    const res = await indexData()
    console.log('indexData', res)
    this.setData({
      bannerList: res[0].data,
      entranceList: res[1].data,
      productList1: res[2].data,
      productList2: res[3].data,
      loading: false
    })
  }
})
