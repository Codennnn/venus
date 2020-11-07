import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import Ecommerce from '@/views/dashboard/Ecommerce.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/ecommerce',
  },

  // 登录注册
  {
    path: '/user',
    redirect: '/user/login',
    component: UserLayout,
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'Login',
        components: {
          login: () => import('@/views/user/Login.vue'),
        },
        meta: { title: '登录' },
      },
      {
        path: 'register',
        name: 'Register',
        components: {
          register: () => import('@/views/user/Register.vue'),
        },
        meta: { title: '注册' },
      },
    ],
  },

  // 测试页面
  {
    path: '',
    hidden: true,
    component: MainLayout,
    children: [
      {
        path: '/test',
        name: 'Test',
        component: () => import(/* webpackChunkName: 'Test' */ '@/views/Test.vue'),
        meta: { title: '测试' },
      },
    ],
  },

  // 404 路由缺失页面
  {
    path: '/not-found',
    component: () => import('@/views/pages/NotFound.vue'),
    meta: { title: '404 NotFound' },
  },
]

export const asyncRoutes = [
  // 仪表盘
  {
    path: '',
    meta: { title: '仪表盘', icon: 'monitor', openKey: 'dashboard' },
    component: MainLayout,
    children: [
      {
        path: 'ecommerce',
        name: 'Ecommerce',
        component: Ecommerce,
        meta: { title: '统计面板', openKey: 'dashboard' },
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/views/dashboard/Analytics.vue'),
        meta: { title: '数据分析', openKey: 'dashboard' },
      },
    ],
  },

  // 地图应用
  {
    path: '',
    meta: { title: '地图应用', icon: 'map', openKey: 'mapApp' },
    component: MainLayout,
    children: [
      {
        path: '/amap',
        name: 'Amap',
        component: () => import('@/views/map/Amap.vue'),
        meta: { title: '高德地图', openKey: 'mapApp' },
      },
      {
        path: '/amap-sample',
        name: 'AmapSample',
        component: () => import('@/views/map/AmapSample.vue'),
        meta: { title: '更多示例', openKey: 'mapApp' },
      },
    ],
  },

  // 主题颜色
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/colors',
        name: 'Colors',
        component: () => import('@/views/colors/Colors.vue'),
        meta: { title: '主题颜色', icon: 'coffee' },
      },
    ],
  },

  // 看板
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/kanban',
        name: 'Kanban',
        component: () => import('@/views/kanban/Kanban.vue'),
        meta: { title: '看板', icon: 'server' },
      },
    ],
  },

  // 富文本编辑器
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/quill',
        name: 'Quill',
        component: () => import('@/views/editor/Quill.vue'),
        meta: { title: '富文本编辑器', icon: 'credit-card' },
      },
    ],
  },

  // 图标库
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/icon-lib',
        name: 'IconLib',
        component: () => import('@/views/icon-lib/IconLib.vue'),
        meta: { title: '图标库', icon: 'heart' },
      },
    ],
  },

  // 文件上传
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/file-upload',
        name: 'FileUpload',
        component: () => import('@/views/file-upload/FileUpload.vue'),
        meta: { title: '文件上传', icon: 'upload-cloud' },
      },
    ],
  },

  // 表单
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/views/form/Form.vue'),
        meta: { title: '表单', icon: 'list' },
      },
    ],
  },

  // 更多页面
  {
    path: '',
    component: MainLayout,
    meta: { title: '更多页面', icon: 'grid', openKey: 'morePage' },
    children: [
      {
        path: '/skeleton',
        name: 'Skeleton',
        component: () => import('@/views/pages/Skeleton.vue'),
        meta: { title: '骨架屏', openKey: 'morePage' },
      },
      {
        path: '/not-found',
        name: 'NotFound',
        component: () => import('@/views/pages/NotFound.vue'),
        meta: { title: '404 页面', openKey: 'morePage' },
      },
      {
        path: '/server-error',
        name: 'ServerError',
        component: () => import('@/views/pages/ServerError.vue'),
        meta: { title: '500 页面', openKey: 'morePage' },
      },
    ],
  },

  // 任务列表
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('@/views/todo/Todo.vue'),
        meta: { title: '任务列表', icon: 'check-circle' },
      },
    ],
  },

  // 外链
  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: process.env.VUE_APP_PROJECT_URL,
        meta: { title: '前往 Github', icon: 'github' },
      },
    ],
  },

  {
    path: '',
    component: MainLayout,
    single: true,
    children: [
      {
        path: '/disabled',
        name: 'Disabled',
        disabled: true,
        meta: { title: '被禁用的菜单', icon: 'zap-off' },
      },
    ],
  },

  // 个人中心
  {
    path: '',
    hidden: true,
    component: MainLayout,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        redirect: '/profile/account',
        component: () => import('@/layouts/ProfileLayout.vue'),
        children: [
          {
            path: 'account',
            name: 'Account',
            component: () => import('@/views/profile/Account.vue'),
            meta: { title: '账号设置', breadcrumb: ['个人中心', '账号设置'] },
          },
          {
            path: 'information',
            name: 'Information',
            component: () => import('@/views/profile/Information.vue'),
            meta: { title: '个人信息', breadcrumb: ['个人中心', '个人信息'] },
          },
          {
            path: 'security',
            name: 'Security',
            component: () => import('@/views/profile/Security.vue'),
            meta: { title: '安全设置', breadcrumb: ['个人中心', '安全设置'] },
          },
        ],
      },
    ],
  },

  { path: '*', redirect: '/not-found', hidden: true },
]

const createRouter = () => new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE || 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router
