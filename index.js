if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/weapp-mock.js')
} else {
  module.exports = require('./dist/weapp-mock.common.js')
}
