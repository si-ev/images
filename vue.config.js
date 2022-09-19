const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

require('dotenv').config();


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
            'process.env.ROOT_URL': JSON.stringify(process.env.ROOT_URL) 
        })
    ]
  }
})
