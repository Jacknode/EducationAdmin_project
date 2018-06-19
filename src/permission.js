// import router from './router'
import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // 验权
//
// const whiteList = ['/login'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   // if (getToken()) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     } else {
//       next()
//       // if (store.getters.roles.length === 0) {
//       //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
//       //     next()
//       //   }).catch((err) => {
//       //     store.dispatch('FedLogOut').then(() => {
//       //       Message.error(err || 'Verification failed, please login again')
//       //       next({ path: '/' })
//       //     })
//       //   })
//       // } else {
//       //   next()
//       // }
//     }
//   // } else {
//   //   if (whiteList.indexOf(to.path) !== -1) {
//   //     next()
//   //   } else {
//   //     next('/login')
//   //     NProgress.done()
//   //   }
//   // }
// })
//
// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })
import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    next((response)=>{
      NProgress.done();
    }); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  }else{
    let admin = JSON.parse(sessionStorage.getItem('admin'))
    if(!admin){
      next({ path: '/login' })
      NProgress.done()
      return
    }else{
    //  console.log(to)
    //   store.commit('GenerateRoutes',admin.sm_ui_PartnerType)
      // let roles = ['admin','editor','develop']
      // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
      //   // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
      //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      // })
    }
    next((response)=>{
      NProgress.done();
    });
   // console.log(to)
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
