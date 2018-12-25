const Koa = require('koa');
const server = require('koa-static');

const app = new Koa();

app.use(server('./build', { index: 'index.html' }));

module.exports = app;