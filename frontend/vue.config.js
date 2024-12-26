const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.33.78.111:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
})
