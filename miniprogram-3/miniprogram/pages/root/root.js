Page({
  data: {
   id: '',//修改用来保存_id
   iSshow: true,
   inpVal: '',
   inp2Val: '',
   inp3Val: '',
   inp4Val: '',
   list: []
  },
   
  onLoad: function () {
   var that = this
   that.getUserMsg()//读取信息
  },
  //获取文本框内容
  getName(e) {
   this.setData({
    inpVal: e.detail.value
   })
  },
   
  getfenlei(e) {
   this.setData({
    inp2Val: e.detail.value
   })
  },
  getwhere(e) {
   this.setData({
    inp3Val: e.detail.value
   })
  },
  getjianjie(e) {
    this.setData({
     inp4Val: e.detail.value
    })
   },
  //获取信息
  getUserMsg() {
   var that = this
   const db = wx.cloud.database()
   db.collection('books').get({
    success: function (res) {
     console.log(res)
     that.setData({
      list: res.data
     })
    }
   })
  },
  //添加信息
  setUserMsg() {
   var that = this
   const db = wx.cloud.database()
    db.collection('books').add({
     data: {
      bookname: that.data.inpVal,
      fenlei: that.data.inp2Val,
      weizhi: that.data.inp3Val,
      jianjie: that.data.inp4Val,
     },
     success: function (res) {
      console.log(res)
      that.setData({
       inpVal: "",
       inp2Val: "",
       inp3Val:"",
       inp4Val:"",
      })
      console.log(that.data.inpVal + '--' + that.data.inp2Val + '--' + that.data.inp3Val + '--' + that.data.inp4Val)
      that.getUserMsg()
     }
    })
  },
  //删除信息
  delUserMsg(e) {
   var that = this
   const db = wx.cloud.database()
   var id = e.currentTarget.dataset.id
   db.collection('books').doc(id).remove({
    success: function (res) {
     console.log(res)
     that.getUserMsg()
    }
   })
  },
  //修改回显
  changeMsg(e) {
   var that = this
   var id = e.currentTarget.dataset.id
   const db = wx.cloud.database()
   
   db.collection('books').doc(id).get({
    success: function (res) {
     that.setData({
      inpVal: res.data.bookname,
      inp2Val: res.data.fenlei,
      inp3Val:res.data.weizhi,
      inp4Val:res.data,jianjie,
      show: false,
      id: res.data._id
     })
    }
   })
   
  },
  //更新提交
  updetMsg(e) {
   var that = this
   var id = e.currentTarget.dataset.id
   const db = wx.cloud.database()
   db.collection('books').doc(id).update({
    data: {
     bookname:that.data.inpVal,
     fenlei:that.data.inp2Val,
     weizhi:that.data.inp3Val,
     jianjie:that.data.inp4Val
    },
    success: function (res) {
     that.getUserMsg()
     that.setData({
      inpVal: '',
      inp2Val: '',
      inp3Val:'',
      inp4Val:'',
      show: true
     })
    }
   })
  },
 })