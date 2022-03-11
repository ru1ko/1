// pages/home/home.js
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
    postbox:[],
    gonggao:[]
  },
  
    onLoad:function(){
      let that = this
      db.collection('swiper').get({
        success:function(res){
            console.log('成功',res)
            that.setData({
              postbox:res.data
            })
        },
        fail:function(res){
          console.log('失败',res)
      },

      })
      db.collection('gonggao').get({
        success:function(res){
            console.log('成功',res)
            that.setData({
              gonggao:res.data
            })
        },
        fail:function(res){
          console.log('失败',res)
      },

      })
    },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
