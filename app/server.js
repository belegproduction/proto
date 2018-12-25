const app = require('./app');
const PORT = process.env.PORT || 42831;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
});

module.exports = server;