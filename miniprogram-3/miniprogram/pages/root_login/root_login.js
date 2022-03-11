Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */



  onLogin: function(e) {
   const db = wx.cloud.database(); 
   const users = db.collection("root_login")
   var username = e.detail.value.username;
   var password = e.detail.value.password;

   users.where({
     username: username,
     password: password
   }).get().then(res => {

    if (res.data.length){
      wx.setStorageSync('root_login', true)
      wx.navigateTo({
        url: '../root/root',
      })
    }else{
      wx.showModal({
        title: "提示",
        content: "用户名不存在或密码错误"
      })
    }
   })
  },



  gotoroot:function(e){
    wx.navigateTo({
      url: '../login/login',
    })
  },






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