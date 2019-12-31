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
  //获取发现列表
  app.router('bloglist',async(ctx,next) => {
    ctx.body = await db.collection('bloglist').skip(event.start).limit(event.count).get().then(res=>{
      return res
    })
  })
  //获取发现详情
   app.router('blogDetail',async(ctx,next)=>{
     ctx.body = await db.collection('bloglist').where({_id: event.id }).get().then(res => {
       return res
     })
   })
   //插入发现
   app.router('addBlog', async(ctx,next) => {
     ctx.body = await db.collection('bloglist').add({
       data:{
         avatar: '',
         commentlist: [],
         content: event.content,
         createTime: (new Date()).getTime(),
         name: '樱木花道',
         imagelist: []
       }
     }).then(res =>{
       return res
     })
   })
   //获取评论列表
    app.router('commentlist', async (ctx, next) => {
      ctx.body = await db.collection('commentlist').where({blogId: event.id }).get().then(res => {
        return res
      })
    })
    //插入评论
    app.router('addComment', async (ctx, next) => {
      ctx.body = await db.collection('commentlist').add({
        data:{
          avatar:'',
          blogId:'ddf81c77-1731-41e4-84d1-3b41569c55f6',
          content: event.content,
          createTime: (new Date()).getTime(),
          name: '樱木花道'
        }
      }).then(res => {
        return res
      })
    })
  return app.serve()

}