const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api1':{
        target: 'http://10.34.57.251:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api1': ''
        },
      },
      '/api': {
        target: 'http://10.34.57.251:8080',
        changeOrigin: true,
       
      },
    }
  }
})
