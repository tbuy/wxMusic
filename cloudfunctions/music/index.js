// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var db = cloud.database();
const TcbRouter = require('tcb-router');

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({ event });

  app.router('albumlist',async (ctx, next) => {
    ctx.body = await db.collection('albumlist').skip(event.start).limit(event.count).get().then(res => {
      return res
    })
  });

  app.router('musiclist', async (ctx, next) => {
    ctx.body = await db.collection('albumlist').where({_id:3}).get().then(res => {
      return res
    })
  });
  
  return app.serve()

}