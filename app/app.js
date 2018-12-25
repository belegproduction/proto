const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve('./build', { index: 'index.html' }));

module.exports = app;