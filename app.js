const express = require('express');
const app = express();
//路由中间件
const path = require('path')
const indexRouter = require('./rout/indexRouter');
const userRouter = require('./rout/userRouter');
const bannerRouter = require('./rout/bannerRouter');
//静态资源托管;如不设置页面会乱码
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/banner', bannerRouter);
//ejs引擎 报错两次：原因view写成views;
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8080);
