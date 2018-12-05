import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import router from './routes';

const FileStore = sessionFileStore(session);

const app = express();

// 设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'erp-base',      // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    resave: true,            // 是否自动保存未初始化的会话
    saveUninitialized: true, // 设置为true时，用户无论是否登陆网站，只要访问网站都会生成一个session，只不过这个session是一个空的session。
    cookie: {
        maxAge: 22000,       // 有效期，单位是毫秒
    },
}));

router(app);

module.exports = app;
