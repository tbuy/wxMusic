// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var db = cloud.database();
const TcbRouter = require('tcb-router');

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({ event });
  //专辑列表
  app.router('albumlist', async (ctx, next) => {
    ctx.body = await db.collection('albumlist').skip(event.start).limit(event.count).get().then(res => {
      return res
    })
  });
  //专辑详情
  app.router('albumDetail', async (ctx, next) => {
    ctx.body = await db.collection('albumlist').where({ _id: event.id.toString() }).get().then(res => {
      return res
    })
  });
  //音乐列表
  app.router('musiclist', async (ctx, next) => {
    ctx.body = await db.collection('musiclist').where({ albumId: 3 }).skip(event.start).limit(event.count).get().then(res => {
      return res
    })
  });
  //音乐详情
  app.router('musicDetail', async (ctx, next) => {
    ctx.body = await db.collection('musiclist').where({ _id: event.id.toString() }).get().then(res => {
      return res
    })
  });
  return app.serve()

}