// pages/appointment/appointment.js
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
    zixishi:[]
  },
  goTozixishi:function(e){
    wx.navigateTo({
    
    url: '../zixishi/zixishi',  
    
    })
    },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
