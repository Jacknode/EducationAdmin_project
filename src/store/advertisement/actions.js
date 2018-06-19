/**
 * Created by LiuXiang on 18/04/09.
 */
//import axios from "axios/index";
import {getNewStr} from '@/assets/js/public'

export default {
  /********************************************广告类型*********************************************************/
  //广告类型数据
  initAdTypeList({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdviertiseType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            commit('initAdTypeList',data.data)
            relove(Number(data.totalrows))
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加广告类型
  AddAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdviertiseType/Insert',JSON.stringify(data),{
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
  //修改广告类型
  UpdateAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdviertiseType/Update',JSON.stringify(data),{
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
  //删除广告类型
  deleteAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdviertiseType/Delete',JSON.stringify(data),{
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
  /********************************************广告收费方式*********************************************************/
  //查询广告收费方式
  initAdChargeWayList({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/InComeWay/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdChargeWayList',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加广告收费方式
  addAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/InComeWay/Insert',JSON.stringify(data),{
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
  //修改收费方式
  UpdateAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/InComeWay/Update',JSON.stringify(data),{
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
  //删除广告收费方式
  deleteAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/InComeWay/Delete',JSON.stringify(data),{
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
  /********************************************广告位置*********************************************************/
  //查询广告位置
  initAdPosition({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/PositionInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdPosition',data.data.reverse())
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加广告位置
  AddAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/PositionInfo/Insert',JSON.stringify(data),{
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
  //修改广告类型收费方式
  UpdateAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/PositionInfo/Update',JSON.stringify(data),{
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
  //删除广告类型收费方式
  DeleteAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/PositionInfo/Delete',JSON.stringify(data),{
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
  /********************************************广告申请*********************************************************/
  //查询广告申请
  initAdApply({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ApplayAdv/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            var resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              resulte[i].sm_aa_Images = resulte[i].sm_aa_Image.split(',')
            }
            commit('initAdApply',resulte)
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //广告申请上传图片
  adApplyUploadAdminImgs(store,data){
    //图片上传
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
  //添加广告申请
  AddAdApply(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ApplayAdv/Insert',JSON.stringify(data),{
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
  //修改广告申请
  UpdateAdApplyObj(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ApplayAdv/Update',JSON.stringify(data),{
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
  //删除广告申请
  DeleteAdApply(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ApplayAdv/Delete',JSON.stringify(data),{
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
  /********************************************广告类型收费方式*********************************************************/
  //广告类型收费方式
  initAdTypeChargeMode({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdTypeInComeWay/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdTypeChargeMode',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //增加广告类型收费方式
  AddAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdTypeInComeWay/Insert',JSON.stringify(data),{
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
  //修改广告类型收费方式
  UpdateAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdTypeInComeWay/Update',JSON.stringify(data),{
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
  //删除广告类型收费方式
  DeleteAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AdTypeInComeWay/Delete',JSON.stringify(data),{
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
  }
}

