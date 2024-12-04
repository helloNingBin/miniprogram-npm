// pages/test/component/componentMain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
       let animal = {
         height: 99
       }
       let user = {
         name: 'jakc',
         age: 8
       }
       user = {
         ...user,
         ...animal
       }
       //console.log('======>',user)
  },
  onInput(e) {
    // 获取输入框的值并更新 inputValue
    this.setData({
      inputValue: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})