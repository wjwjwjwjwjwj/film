const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = '电影首页';
});

app.listen(3000, () => {
    console.log('服务启动成功')
});