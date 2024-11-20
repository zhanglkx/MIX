import { defineConfig } from '@umijs/max';
import customRouter from './config/routes';

export default defineConfig({
  favicons: ['./src/favicon.jpg'],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx'],
  },
  cssLoader: {
    modules: {
      // 定义生成的类名格式
      localIdentName: '[name]__[local]__[hash:base64:7]',
    },
  },

  // 其他相关配置
  lessLoader: {
    // less 配置
    modifyVars: {
      // 定义 less 变量
      '@primary-color': '#1890ff',
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'About',
      path: '/about',
      component: './About',
    },
    {
      name: '编辑器',
      path: '/editor',
      component: './Editor',
      layout: false,
    },
    ...customRouter,
  ],

  npmClient: 'npm',
  tailwindcss: {},
});
