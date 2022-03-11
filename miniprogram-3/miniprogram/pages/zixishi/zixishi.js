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
    zuowei:[],
    zuowei_1:[]
  },

  onLoad:function(){
    let that = this
    db.collection('zixishi').get({
      success:function(res){
        that.setData({
          zuowei:res.data
        })
      }
    })
  },

  yuding:function(options){
    db.collection('zixishi').doc('b00064a760a02b8417bdd4a2199bfb10').update({
      data:{
        zuowei_1:'无位',
      },
      success(res){
        // 修改成功的回调函数
      },
      fail(res){
        // 修改失败的回调函数
      }
    })
  },



  /**
   * 组件的方法列表
   */
  methods: {

  }
})
