const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@containers': path.resolve(__dirname, '../src/containers/'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@services': path.resolve(__dirname, '../src/services/'),
      '@core': path.resolve(__dirname, '../src/core/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@blocks': path.resolve(__dirname, '../src/blocks'),
    },
  },
};
