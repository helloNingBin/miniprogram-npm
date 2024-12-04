// pages/test/dialog/dialog.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  showToast(event) {
    wx.showToast({
      title: '消息提示框', // 提示的内容
      icon: 'success', // 提示图标
      duration: 6000, // 提示的延迟时间
      mask: true // 是否显示透明蒙层，防止触摸穿透
    })
  },
  showLoading() {
    wx.showLoading({
      title: 'title',
      mask: true,
      success: (res) => {
        //console.info('success:' + JSON.stringify(res))
        setTimeout(() => {
          this.closeLoading()
        }, 3000)
      },
      fail: (res) => {
        //console.info('fail:' + JSON.stringify(res))
      },
      complete: (res) => {
        //console.info('complete:' + JSON.stringify(res))
      }
    })
  },
  closeLoading() {
    this.showToast()
    // 关闭加载提示框
    wx.hideLoading()
  },
  showModal() {
    wx.showModal({
      title: '提示', // 提示的标题
      content: '您确定执行该操作吗？', // 提示的内容
      confirmColor: '#f3514f', // 确定按钮的样式
      // 接口调用结束的回调函数（调用成功、失败都会执行）
      complete({ confirm, cancel }) {
        if (confirm) {
          //console.log('用户点击了确定')
          return
        }

        if (cancel) {
          //console.log('用户点击了取消')
        }
      }
    })
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
