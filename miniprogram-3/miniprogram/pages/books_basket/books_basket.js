// pages/books_basket/books_basket.js
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books_basket:[],
    delet_id:[],
    books_id:[],
    books_now:[]
  },

  xuanze:function(e){
    let that = this
    console.log(e)
    that.setData({
      delet_id:that.data.delet_id.concat(e.detail.value[0])
    })
    if(e.detail.value.length !== 0){
      db.collection('books_basket').doc(e.target.dataset.id).update({
        data:{
          product_checked:"true"
        },success:function(res){
          db.collection('books_basket').get({
            success:function(res){
              console.log('获取书籍标记成功',res)
              that.setData({
                books_basket:res.data,
              })
            },fail:function(res){
              console.log('获取书籍标记失败',res)
            }
          })
        }
      })
    }else{
      db.collection('books_basket').doc(e.target.dataset.id).update({
        data:{
          product_checked:""
        },success:function(){
          that.onLoad()
        }
      })
    }
  },
  

  detele:function(){
    let that = this
    wx.cloud.callFunction({
      name:"product_delet",
      success:function(res){
        console.log('删除成功',res)
        db.collection('books_basket').get({
          success:function(res){
            console.log('获取成功',res)
            that.setData({
              books_basket:res.data,
            })
          },fail:function(res){
            console.log('获取失败',res)
          }
        })
      },fail:function(res){
        console.log('删除失败',res)
      }
    })
  },

  pay:function(){
    wx.showModal({
      title: "提示",
      content: "借书完成"
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    db.collection('books_basket').get({
      success:function(res){
        that.setData({
          books_basket:res.data
        })
      }
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
    let that = this
    db.collection('books_basket').get({
      success:function(res){
        that.setData({
          books_basket:res.data
        })
      }
    })
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