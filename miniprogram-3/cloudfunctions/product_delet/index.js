// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:'ru1ko-1ggnbvi79fc6362c',
})

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
 try{
    return await db.collection('books_basket').where({
      product_checked: "true"
    }).remove()
 } catch(e){
   console.error(e)
 }
}