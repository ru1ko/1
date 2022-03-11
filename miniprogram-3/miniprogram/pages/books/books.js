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
    search:[],
    fenlei:[],
    books:[],
    fenlei_now:""
  },

search:function(e){
  let that = this
  console.log(e)
  db.collection('books').where({
    bookname:e.detail.value
  }).get({
    success:function(res){
      that.setData({
        search:res.data
      })
      console.log('搜索成功成功',that.data.search)
      if(that.data.search == ""){
        wx.showToast({
          title: '未找到商品',
          icon:"none"
        })
      }
    },
    fail:function(res){
      console.log('搜索失败',res)
    },
  })
},

get_fenlei:function(e){
  let that = this
  that.setData({
    fenlei_now:e.currentTarget.dataset.name
  })
  that.get_books()
},

get_books:function(){
  let that = this
  db.collection('books').where({
    fenlei:that.data.fenlei_now
  }).get({
    success:function(res){
      that.setData({
        books:res.data
      })
    }
  })
},



onLoad:function(){
  let that = this
  db.collection('fenlei').get({
    success:function(res){
        console.log('分类获取成功',res)
        that.setData({
          fenlei:res.data
        })
    },
    fail:function(res){
      console.log('分类获取失败',res)
  },

  })
}






})
