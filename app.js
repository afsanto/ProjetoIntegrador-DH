var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD


var cadastroRouter = require('./routes/cadastro');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

=======
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var loginRouter = require('./routes/login');
var productRouter = require('./routes/produto');
var apiRouter = require('./routes/apiRoute');
var cadastroRouter = require('./routes/cadastro');
const usuarioRouter = require('./routes/usuario');
var descriptionRouter = require("./routes/descriptionRoute");
var checkoutRouter = require('./routes/checkout');

//var loggedUserDataMiddleware = require('./middlewares/loggedUserDataMiddleware');

=======
<<<<<<< HEAD
var checkoutRouter = require('./routes/checkout');
=======
>>>>>>> 139d6124c3422e4649c1fa627d49691c91bcc872
>>>>>>> master

var app = express();

app.use(session({
  secret:"stick to your guns",
  resave: true,
  saveUninitialized:true,
}));

//app.use(loggedUserDataMiddleware);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



>>>>>>> master
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use('/cadastro', cadastroRouter);


=======
app.use(express.static(path.join(__dirname, 'views')));



app.use('/', indexRouter);
<<<<<<< HEAD
//app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use("/description", descriptionRouter);
app.use('/', productRouter );
app.use('/api', apiRouter );
app.use('/logout', loginRouter);
app.use('/', cadastroRouter);
app.use('/users',usuarioRouter );
app.use('/', loginRouter);
/*app.use("/description", descriptionRouter);*/
app.use('/checkout', checkoutRouter);
=======
app.use('/users', usersRouter);
app.use('/', checkoutRouter);
>>>>>>> master

>>>>>>> master
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
<<<<<<< HEAD
=======
  
>>>>>>> master
});

module.exports = app;
