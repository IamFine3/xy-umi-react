import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    // dark: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'xy-umi-react',
    navTheme: 'dark',
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
    },{
      name: "账户列表",
      path: '/account',
      component: './Account',
    }
  ],
  npmClient: 'npm',
});

