// pages/studytask/c_show_video/show_video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sty:0,
  score: '#fff5df',
    activeColor: "rgba(80, 80, 80, 1)",
    activeBgColor: "rgba(255, 255, 255, 1)",
    src_video: [
      { "src_video": "http://114.55.238.17:81/LabSafe/video/master_switch/master_switch.mp4" },
      { "src_video": "http://114.55.238.17:81/LabSafe/video/master_switch/master_switch.mp4" },
      { "src_video": "http://114.55.238.17:81/LabSafe/video/master_switch/master_switch.mp4" },
      { "src_video": "http://114.55.238.17:81/LabSafe/video/master_switch/master_switch.mp4" },
      { "src_video": "http://114.55.238.17:81/LabSafe/video/master_switch/master_switch.mp4" }
    ],
    use: [{
      "use_name": "提"
    },
    {
      "use_name": "晃"
    },
    {
      "use_name": "拔"
    },
    {
      "use_name": "晃"
    },
    {
      "use_name": "拔"
    }
    ],
    state: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  select_use: function (e) {
    this.setData({
      state: e.currentTarget.dataset.key,
      // 点击不同按钮改变样式已完成，点击按钮播放不同路径视频未调试不知道行不行
      src_video: e.currentTarget.dataset.key
    });
  },
  // bingHuang() {
  //   this.setData({
  //     src_video: "../../../video/master_switch/master_switch.mp4"
  //   });
  // },
  // bingBa() {
  //   this.setData({
  //     src_video: "../../../video/master_switch/master_switch.mp4"
  //   });
  // },
  // bingDui() {
  //   this.setData({
  //     src_video: "../../../video/master_switch/master_switch.mp4"
  //   });
  // },
  // bingPen() {
  //   this.setData({
  //     src_video: "../../../video/master_switch/master_switch.mp4"
  //   });
  // },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})