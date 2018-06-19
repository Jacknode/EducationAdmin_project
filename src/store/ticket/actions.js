/**
 * Created by leibo on 18/3/30.
 */
//import axios from 'axios'
import {getNewStr} from '@/assets/js/public'


export default {
  //管理员上传图片
  uploadAdminImgs(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/PostImage/PostToService', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
        })
    })
  },
  //门票景点主题
  initTicketTheme({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TmThemeType/GetThemeTypeList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initTicketTheme', data.data.reverse())
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加门票景点主题
  AddTicketTheme(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TmThemeType/Insert', JSON.stringify(data), {
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
  //修改门票景点主题
  UpdateTicketTheme(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TmThemeType/Update', JSON.stringify(data), {
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
  //删除门票景点主题
  DeleteTicketTheme(store, data) {
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TmThemeType/Delete', JSON.stringify(data), {
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
  //查询景点信息
  initScenicSpot({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/GetTourSite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            for (let i = 0; i < data.data.length; i++) {
              data.data[i].tm_ts_ShowImage = data.data[i].tm_ts_ShowImage.split(',');
              if (data.data[i].tm_ts_IsHot == 0) {
                data.data[i].tm_ts_IsHot = '普通'
              }
              if (data.data[i].tm_ts_IsHot == 1) {
                data.data[i].tm_ts_IsHot = '热门'
              }
              if (data.data[i].tm_ts_IsOversea == 0) {
                data.data[i].tm_ts_IsOversea = '境内'
              }
              if (data.data[i].tm_ts_IsOversea == 1) {
                data.data[i].tm_ts_IsOversea = '境外'
              }
              if (data.data[i].tm_ts_IsSeasonChoice == 0) {
                data.data[i].tm_ts_IsSeasonChoice = '否'
              }
              if (data.data[i].tm_ts_IsSeasonChoice == 1) {
                data.data[i].tm_ts_IsSeasonChoice = '是'
              }
            }
            commit('initScenicSpot', data.data);
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //查询审核状态
  ticketLookToExamine({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/SelectIsPass', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.data);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //提交审核结果
  toExamineSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/Validate', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //提交审核景点展示首页
  toExamineShowHomePageSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/ValidateShowTopIsAgree', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })

  },
  //展示首页数据
  initShowTop({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/GetTourSite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            var showTop = data.data.filter(item => {
              if (item.tm_ts_ShowTop == 1) {
                return true;
              }
              return false;
            });
            //处理数据
            for (let i = 0; i < showTop.length; i++) {
              showTop[i].tm_ts_ShowImage = showTop[i].tm_ts_ShowImage.split(',');
              if (showTop[i].tm_ts_IsHot == 0) {
                showTop[i].tm_ts_IsHot = '普通'
              }
              if (showTop[i].tm_ts_IsHot == 1) {
                showTop[i].tm_ts_IsHot = '热门'
              }
              if (showTop[i].tm_ts_IsOversea == 0) {
                showTop[i].tm_ts_IsOversea = '境内'
              }
              if (showTop[i].tm_ts_IsOversea == 1) {
                showTop[i].tm_ts_IsOversea = '境外'
              }
              if (showTop[i].tm_ts_IsSeasonChoice == 0) {
                showTop[i].tm_ts_IsSeasonChoice = '否'
              }
              if (showTop[i].tm_ts_IsSeasonChoice == 1) {
                showTop[i].tm_ts_IsSeasonChoice = '是'
              }
              if (showTop[i].tm_ts_ShowTopIsAgree == 0) {
                showTop[i].showTopIsAgreeLabel = '审核中'
              }
              if (showTop[i].tm_ts_ShowTopIsAgree == 1) {
                showTop[i].showTopIsAgreeLabel = '已通过'
              }
              if (showTop[i].tm_ts_ShowTopIsAgree == 2) {
                showTop[i].showTopIsAgreeLabel = '未通过'
              }
            }

            commit('showTop', showTop)
            relove(Number(showTop.length));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //首页展示大图
  initTicketHomePageBigPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopBigImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initTicketHomePageBigPicture', data.data)
            relove()
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //景点列表
  initScenicSpotList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TourSite/GetTourSite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            data.data.unshift({
              tm_ts_Code: "",
              tm_ts_Name: "全部"
            })
            commit('showTop', data.data);
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加首页展示大图
  addTicketHomePageBigPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopBigImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改首页展示大图
  updateTicketHomePageBigPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopBigImage/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除首页展示大图
  deleteTicketHomePageBigPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopBigImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //首页展示小图
  initTicketHomePageSmallPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopSmallImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initTicketHomePageSmallPicture',data.data);
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加首页小图
  addTicketHomePageSmallPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopSmallImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改首页小图
  updateTicketHomePageSmallPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopSmallImage/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除首页展示小图
  deleteTicketHomePageSmallPicture({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TopSmallImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
}
