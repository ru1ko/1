// pages/product/product.js
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
    books_src:[],
    books_name:[],
    books_weizhi:[],
    books_jianjie:[],
    books_num:[],
    id:[]
  },
  into_books_basket:function(){
    let that = this
    db.collection('books_basket').where({
      books_id:that.data.id
    }).get({
      success:function(res){
        console.log(res)
        if(res.data == ""){
          db.collection('books_basket').add({
            data:{
              books_name:that.data.books_name,
              books_src:that.data.books_src,
              books_id:that.data.id,
              books_weizhi:that.data.books_weizhi,
              product_checked:that.data.product_checked
            },success:function(res){
              console.log('加入借书篮成功',res)
              wx.showToast({
                title: '加入成功',
              })
            },fail:function(res){
              console.log('加入借书篮失败',res)
            }
    })
  }else{
    wx.showToast({
      title: '已有这本书',
      icon:'none'
    })
  }
},fail:function(res){
  console.log(res)
}
})
  },


  buy:function(){
    let that = this
    db.collection('books_basket').where({
      books_id:that.data.id
    }).get({
      success:function(res){
        console.log(res)
        if(res.data == ""){
          db.collection('books_basket').add({
            data:{
              books_name:that.data.books_name,
              books_src:that.data.books_src,
              books_id:that.data.id,
              books_weizhi:that.data.books_weizhi,
              product_checked:that.data.product_checked
            },success:function(res){
              console.log('加入借书篮成功',res)
              wx.navigateTo({
                url: '../books_basket/books_basket',
              })
            },fail:function(res){
              console.log('加入借书篮失败',res)
            }
    })
  }else{
    wx.navigateTo({
      url: '../books_basket/books_basket',
    })
  }
},fail:function(res){
  console.log(res)
}
})
  },





  onLoad:function(options) {
    let that = this
    console.log('产品的id已经获取到了',options.id)
    db.collection('books').doc(options.id).get({
      success:function(res){
        console.log('商品详细信息获取成功',res)
        that.setData({
          books_src:res.data.src,
          books_name:res.data.bookname,
          books_weizhi:res.data.weizhi,
          books_jianjie:res.data.jianjie,
          books_num:res.data.num,
          id:res.data._id
        })
      },fail:function(res){
        console.log('获取失败',res)
      }
    })

  },






  /**
   * 组件的方法列表
   */
  methods: {

  }
})
