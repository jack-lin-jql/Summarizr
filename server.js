const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const port = process.env.PORT || 5000;

app.use('/', indexRouter);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
