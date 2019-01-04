let configStore;

if(process.env.NODE_ENV === "development") {
  configStore = require('./configureStoreDev').default;
} else {
  configStore = require('./configureStoreProd').default;
}

export default configStore;

