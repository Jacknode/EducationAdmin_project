/**
 * Created by LiuXiang on 18/04/09.
 */
// import axios from "axios";
import {getNewStr} from '@/assets/js/public'

export default {
  /**
   * 修改教育课程
   */
  updateEducationCouseAction(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdSeries/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 添加教育课程
   */
  addEducationCourseAction(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdSeries/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {

        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 初始化教育课程信息
   */
  initEducationCourseAction({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdSeries/SelectApplyPC', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)

          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalrows));
            commit('initEducationCourseAction', data.data.reverse())
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 视频初始化
   */
  initAdminEducationVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdVedio/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)

          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalrows));
            commit('initAdminEducationVideo', data.data.reverse())
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   *
   * 获取用户初始数据
   */
  initSelectTypeInfo({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EducationType/IndexClassification', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;

          if (Number(data.resultcode) == 200) {
            commit('initSelectTypeInfo', data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   *初始化教育视频信息
   */
  initSelectVideoInfo({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdVedio/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initSelectVideoInfo', data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },

  /**
   * 添加视频审核
   */
  addAdminEducationAuditVideo(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdValidate/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {

        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 教育课程目录初始化
   */

  initEducationCourseList({commit}, data) {
  return new Promise(function (relove, reject) {
    axios.post(getNewStr + '/EdSeries/Select', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(data => {
        var data = data.data;

        if (Number(data.resultcode) == 200) {
          commit('initEducationCourseList',data.data.reverse());
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent)
        }
      })
  })
},

  /**
   * 添加课程目录
   */
  addEducationCourseList(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdSeries/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 修改课程目录
   */

  updateEducationCourseList(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdSeries/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },

  /**
   * 删除课程目录
   */
  deleteEducationCourseList(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdSeries/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },


  /**
   * 教育课程初始化
   */

  initAdminEducationCourse({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdFilmSeries/GetSelect', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            commit('initAdminEducationCourse',data.data.reverse());
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },

  /**
   * 添加教育课程
   */
  addAdminEducationCourse(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdFilmSeries/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 修改教育课程
   */

  updateEducationCourse(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdFilmSeries/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 删除教育课程
   */
  deleteAdminEducationCourse(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdFilmSeries/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 教育订单初始化
   */
  initAdminEducationOrder({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdOrderInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            for (let i = 0; i < data.data.length; i++) {
              if (data.data[i].ed_oi_PayState == 0) {
                data.data[i].ed_oi_PayState = '未支付'
              }
              if (data.data[i].ed_oi_PayState == 1) {
                data.data[i].ed_oi_PayState = '已支付'
              }
            };
            commit('initAdminEducationOrder',data.data.reverse());

            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 确认订单
   */
  adminEducationConfirmOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdOrderInfo/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },

  /**
   * 删除订单
   */

  // deleteAdminEducationOrder(store,data){
  //   return new Promise((relove, reject) => {
  //     axios.post(getNewStr + '/EdOrderInfo/Delete',JSON.stringify(data),{
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     }).then(data=>{
  //       var data = data.data;
  //       if(Number(data.resultcode)==200){
  //         relove(data.resultcontent)
  //       }else{
  //         reject(data.resultcontent)
  //       }
  //     })
  //   })
  // },
  /**
   * 教育推荐初始化
   */
  initAdminEducationRecommend({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Recommend/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminEducationRecommend',data.data.reverse());
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 删除推荐
   */
  deleteAdminEducationRecommend(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/Recommend/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 教育审核推荐初始化
   */

  adminEducationAuditRecommend({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdValidate/SelectTJ', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('adminEducationAuditRecommend',data.data.reverse());
            relove(Number(data.totalRows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 添加教育审核推荐
   */
  addEducationAuditRecommend(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdValidate/InsertTJ', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {

        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  /**
   * 修改审核视频
   */
  updateAdminEducationAuditVideo(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdValidate/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },

  /**
   * 删除视频
   */
  DeleteAdminEducationAuditVideo(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdVedio/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },

  /**
   * 教育个人信息收益查询
   */
  initEducationPersonalInfo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdOrderInfo/SelectIncome', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            commit('initEducationPersonalInfo',data.data.reverse());
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },


}
