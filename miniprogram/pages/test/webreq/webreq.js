import instance from '../../../utils/request'

Page({
  /**
   * 页面的初始数据
   */
  data: {},
  req() {
    wx.request({
      url: 'http://139.159.196.163:8990/user',
      success: (res) => {
        //console.log('成功', res)
      },
      fail: (err) => {
        //console.log('失败', err)
      },
      complete: () => {
        //console.log('请求完成')
      }
    })
    this.reqPromise({ url: 'http://139.159.196.163:8990/user' })
      .then((res) => {
        //console.log('成功', res)
      })
      .catch((err) => {
        //console.log('失败', err)
      })
  },
  reqPromise(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      })
    })
  },
  async requestHandler() {
    //通过 then 和 catch 接收返回的值
    instance
      .request({
        url: 'http://139.159.196.163:8990/user',
        method: 'GET'
      })
      .then((res) => {
        //console.log(res)
      })
      .catch((err) => {
        //console.log(err)
      })
  },
  async requestHandler2() {
    // 第二种调用方式：通过 await 和 async 接收返回的值
    const res = await instance.request({
      url: '/user',
      method: 'GET'
    })

    //console.log(res)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})
