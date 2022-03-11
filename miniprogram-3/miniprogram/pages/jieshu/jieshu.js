// pages/books/books.js
const db = wx.cloud.database()
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    books_basket:[]
  },




onLoad:function(){
  let that = this
  db.collection('books_basket').get({
    success:function(res){
        console.log('分类获取成功',res)
        that.setData({
          books_basket:res.data
        })
    },
    fail:function(res){
      console.log('分类获取失败',res)
  },

  })
}






})
