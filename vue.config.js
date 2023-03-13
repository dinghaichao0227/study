const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  // parallel: false

  // 跨越问题
  devServer: {
    proxy: {
      '/': {
        target: 'https://run.mocky.io/',
        ws: false,
        // changeOrigin: true,
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    },
  },
});
