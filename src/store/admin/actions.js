/**
 * Created by LiuXiang on 18/04/09.
 */
// import axios from "axios";
import {getNewStr} from '@/assets/js/public'

export default {
  /**
   * 教育分类
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
            commit('initAdminEducationClassify', data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },





}
