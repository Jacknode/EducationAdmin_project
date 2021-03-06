import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout';

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login',name:'Login', component: _import('login/index'), hidden: true },
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  { path: '/', component: _import('login/index'), hidden: true },
  /**
   *  首页
   **/
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component:  () => import('@/views/dashboard'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  /**
   * 教育管理
   */
  {
    path: '/educationSupplier',
    component: Layout,
    name: 'EducationSupplier',
    //hidden:true,
    alwaysShow: true,
    meta: {title: 'educationSupplier', icon: 'profit'},
    children: [
      {
        path: 'educationCourse',
        name: 'EducationCourse',
        component: () => import('@/views/educationSupplier/educationCourse'),
        meta: {title: 'educationCourse'}
      },
      {
        path: 'educationHomePageBigImage',
        name: 'EducationHomePageBigImage',
        component: () => import('@/views/educationSupplier/educationHomePageBigImage'),
        meta: {title: 'educationHomePageBigImage'}
      },
      {
        path: 'educationCourseRecommend',
        name: 'EducationCourseRecommend',
        component: () => import('@/views/educationSupplier/educationCourseRecommend'),
        meta: {title: 'educationCourseRecommend'}
      },
      {
        path: 'educationVideo',
        name: 'EducationVideo',
        component: () => import('@/views/educationSupplier/educationVideo'),
        meta: {title: 'educationVideo'}
      },
      {
        path: 'educationPersonalInfo',
        name: 'EducationPersonalInfo',
        component: () => import('@/views/educationSupplier/educationPersonalInfo'),
        meta: {title: 'educationPersonalInfo'}
      },


    ]
  },
  {path: '*', redirect: '/404', hidden: true}
];
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
export const asyncRouterMap =[

]

