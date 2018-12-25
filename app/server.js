const app = require('./app');
const PORT = 4000;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
});

module.exports = server;