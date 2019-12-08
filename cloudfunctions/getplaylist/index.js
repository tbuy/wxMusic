// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var db = cloud.database();
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
await rp('url').then(res=>{
  return JSON.parse(res)
})
await db.collection('shujuku').add().then(res=>{}).catch(err=>{})
await playlistCollection.get()
db.serverDate()
}