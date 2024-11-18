import { defineConfig } from 'umi';

export default defineConfig({
  // 其他配置...

  // 开启快速刷新
  fastRefresh: true,

  // webpack 配置
  webpack5: {
    // 启用热更新
    lazyCompilation: true,
  },

  // dev server 配置
  devServer: {
    // 不因为错误中断开发服务器
    hot: true,
    client: {
      // 出错时覆盖浏览器页面
      overlay: {
        errors: true,
        warnings: false,
      },
      // 启用进度条
      progress: true,
    },
  },

  // 开发时忽略一些错误
  ignoreMomentLocale: true,

  // 构建时的错误处理
  targets: {
    ie: 11,
  },

  // 添加错误处理插件
  chainWebpack: function (config) {
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
      },
    });
  },
});
