const app = require('./app');
const PORT = 8080;


const server = app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
});

module.exports = server;