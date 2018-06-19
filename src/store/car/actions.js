/**
 * Created by leibo on 18/5/3.
 */
//import axios from 'axios'
import {getNewStr} from '@/assets/js/public'


export default {
  //汽车
  initCarRent({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRCar/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarRent',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  carUploadAdminImgs(store,data){
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
  //品牌
  initCarBrands({commit},obj){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Select',JSON.stringify(obj),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          switch (Number(obj.cr_car_PId)){
            //品牌
            case 1:
              commit('initCarBrands',data.data)
              break;
            case 4:
              //车身结构
              commit('initCarBodyStructure',data.data)
              break;
            case 2:
              //车型组
              commit('initCarModelGroup',data.data)
              break;
          }
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加汽车
  AddCarRent(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRCar/Insert',JSON.stringify(data),{
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
  //修改汽车
  UpdateCarRent(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRCar/Update',JSON.stringify(data),{
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
  //删除汽车
  DeleteCarRent(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRCar/Delete',JSON.stringify(data),{
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
  //初始化汽车属性
  initCarProperties({commit},obj){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Select',JSON.stringify(obj),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){

         if(obj.page){
           commit('initCarProperties',data.data)
         }else{
           commit('initCarPropertiesAll',data.data)
         }
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加汽车属性
  AddCarProperties(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Insert',JSON.stringify(data),{
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
  //修改汽车属性
  UpdateCarProperties(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Update',JSON.stringify(data),{
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
  //删除汽车属性
  DeleteCarProperties(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Delete',JSON.stringify(data),{
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
  //城市地标地标类型
  initCarCityLandmarksBasisType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CRAttribute/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarCityLandmarksBasisType',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化城市地标
  initCarCityLandmarks({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CityLandmark/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarCityLandmarks',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化租车省
  initCarProvinceData({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initCarProvinceData', data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //选中省获取城市
  initCarCityData({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initCarCityData', data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加城市地标
  AddCarCityLandmarks(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/CityLandmark/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改城市地标
  UpdateCarCityLandmarks(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/CityLandmark/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除城市地标
  DeleteCarCityLandmarks(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/CityLandmark/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
}
