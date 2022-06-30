const swaggerAutogen = require('swagger-autogen')();
const swaggerUI = require('swagger-ui-express');
const swaggerFile = '../swagger.json'; // 輸出的文件名稱
const endpointsFiles = ['./app.js']; // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以
swaggerAutogen(swaggerFile, endpointsFiles); // swaggerAutogen 的方法

const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const app = express();

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;