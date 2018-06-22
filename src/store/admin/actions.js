/**
 * Created by LiuXiang on 18/04/09.
 */
// import axios from "axios";
import {getNewStr} from '@/assets/js/public'

export default {
  /**
   * 教育分类初始化
   */
  initAdminEducationClassify({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EducationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalRows));
            commit('initAdminEducationClassify', data.data.reverse())
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 添加教育
   */

  addAdminEducationClassify(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EducationType/Insert', JSON.stringify(data), {
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
   * 修改分类
   */
  updateAdminEducationClassify(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EducationType/Update', JSON.stringify(data), {
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
   * 删除分类
   */

  DeleteAdminEducationClassify(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EducationType/Delete', JSON.stringify(data), {
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
   * 审核视频初始化
   */
  initAdminEducationAuditVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdValidate/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalRows));
            commit('initAdminEducationAuditVideo', data.data.reverse())
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
      axios.post(getNewStr + '/EducationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log('00',data)
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
      axios.post(getNewStr + '/EdFilmSeries/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log()
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
          if (Number(data.resultcode) == 200) {
            commit('initAdminEducationOrder',data.data.reverse());
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  /**
   * 删除订单
   */

  deleteAdminEducationOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr + '/EdOrderInfo/Delete',JSON.stringify(data),{
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

}
