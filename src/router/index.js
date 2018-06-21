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
    path: '/admin',
    component: Layout,
    name: 'Admin',
    //hidden:true,
    alwaysShow: true,
    meta: {title: 'admin', icon: 'profit'},
    children: [
      {
        path: 'adminEducationClassify',
        name: 'AdminEducationClassify',
        component: () => import('@/views/admin/adminEducationClassify'),
        meta: {title: 'adminEducationClassify'}
      },{
        path: 'adminEducationAuditVideo',
        name: 'AdminEducationAuditVideo',
        component: () => import('@/views/admin/adminEducationAuditVideo'),
        meta: {title: 'adminEducationAuditVideo'}
      },{
        path: 'adminEducationAuditRecommend',
        name: 'AdminEducationAuditRecommend',
        component: () => import('@/views/admin/adminEducationAuditRecommend'),
        meta: {title: 'adminEducationAuditRecommend'}
      },{
        path: 'adminEducationCourseList',
        name: 'AdminEducationCourseList',
        component: () => import('@/views/admin/adminEducationCourseList'),
        meta: {title: 'adminEducationCourseList'}
      },
      {
        path: 'adminEducationCourse',
        name: 'AdminEducationCourse',
        component: () => import('@/views/admin/adminEducationCourse'),
        meta: {title: 'adminEducationCourse'}
      }, {
        path: 'adminEducationRecommend',
        name: 'AdminEducationRecommend',
        component: () => import('@/views/admin/adminEducationRecommend'),
        meta: {title: 'adminEducationRecommend'}
      },{
        path: 'adminEducationSeries',
        name: 'AdminEducationSeries',
        component: () => import('@/views/admin/adminEducationSeries'),
        meta: {title: 'adminEducationSeries'}
      },{
        path: 'adminEducationVideoSeries',
        name: 'AdminEducationVideoSeries',
        component: () => import('@/views/admin/adminEducationVideoSeries'),
        meta: {title: 'adminEducationVideoSeries'}
      },{
        path: 'adminEducationComment',
        name: 'AdminEducationComment',
        component: () => import('@/views/admin/adminEducationComment'),
        meta: {title: 'adminEducationComment'}
      },{
        path: 'adminEducationVideoScore',
        name: 'AdminEducationVideoScore',
        component: () => import('@/views/admin/adminEducationVideoScore'),
        meta: {title: 'adminEducationVideoScore'}
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
