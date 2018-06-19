/**
 * Created by leibo on 18/4/2.
 */
//import axios from 'axios'
import {getNewStr} from '@/assets/js/public'


export default {
  //酒店图片类型
  initHotelImageType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ImageType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelImageType',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店图片类型
  AddHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ImageType/Insert',JSON.stringify(data),{
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
  //修改酒店图片类型
  UpdateHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ImageType/Update',JSON.stringify(data),{
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
  //删除酒店图片类型
  DeleteHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ImageType/Delete',JSON.stringify(data),{
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
  //酒店推荐类型
  initHotelRecommendType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRecommendType',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店推荐类型所有
  initHotelRecommendTypeAll({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRecommendTypeAll',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //上传图片
  hotelUploadAdminImgs(store,data){
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
  //添加酒店推荐类型
  AddHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Insert',JSON.stringify(data),{
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
  //修改酒店推荐类型
  UpdateHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Update',JSON.stringify(data),{
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
  //删除酒店推荐类型
  DeleteHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Delete',JSON.stringify(data),{
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
  //初始化酒店主题类别
  initHotelThemeCategory({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelThemeType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelThemeCategory',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店主题类别
  AddHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelThemeType/Insert',JSON.stringify(data),{
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
  //修改酒店主题类别
  UpdateHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelThemeType/Update',JSON.stringify(data),{
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
  //删除酒店主题类别
  DeleteHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelThemeType/Delete',JSON.stringify(data),{
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
  //初始化酒店城市推荐类型
  initHotelCityRecommendType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AreaIntroduce/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelCityRecommendType',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店设施类型
  initHotelFacilitiesType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelFacilitiesType',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店设施类型
  AddHotelFacilitiesType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardType/Insert',JSON.stringify(data),{
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
  //修改酒店设施类型
  UpdateHotelFacilitiesTypee(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardType/Update',JSON.stringify(data),{
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
  //删除酒店设施类型
  DeleteHotelFacilitiesType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardType/Delete',JSON.stringify(data),{
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
  //初始化省
  initHotelProvinceData({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelProvinceData', data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //获取市
  initHotelCityData({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelCityData', data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加城市推荐类型
  AddHotelCityRecommendType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaIntroduce/Insert', JSON.stringify(data), {
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
  //修改城市推荐类型
  UpdateHotelCityRecommendType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaIntroduce/Update', JSON.stringify(data), {
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
  //删除城市推荐类型
  DeleteHotelCityRecommendType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaIntroduce/Delete', JSON.stringify(data), {
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
  //初始化酒店设施
  initHotelFacilities({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hard/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelFacilities',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //设施类型所有
  initHotelFacilitiesTypeAll({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HardType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelFacilitiesTypeAll',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店设施
  AddHotelFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hard/Insert', JSON.stringify(data), {
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
  //修改酒店设施
  UpdateHotelFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hard/Update', JSON.stringify(data), {
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
  //删除酒店设施
  DeleteHotelFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hard/Delete', JSON.stringify(data), {
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
  //初始化酒店房间设施类型
  initHotelRoomFacilitiesType({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHardType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelRoomFacilitiesType',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店房间设施类型
  AddHotelRoomFacilitiesType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHardType/Insert', JSON.stringify(data), {
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
  //修改酒店房间设施类型
  UpdateHotelRoomFacilitiesType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHardType/Update', JSON.stringify(data), {
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
  //删除酒店房间设施类型
  DeleteHotelRoomFacilitiesType(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHardType/Delete', JSON.stringify(data), {
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
  //初始化酒店图标库
  initHotelIconGallery({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Image/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelIconGallery',data.data.reverse());
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加图标库
  AddHotelIconGallery(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Image/Insert', JSON.stringify(data), {
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
  //修改图标库
  UpdateHotelIconGallery(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Image/Update', JSON.stringify(data), {
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
  //删除图标库
  DeleteHotelIconGallery(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Image/Delete', JSON.stringify(data), {
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
  //初始化酒店房间设施
  initHotelRoomFacilities({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHard/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelRoomFacilities',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店房间设施类型所有
  initHotelRoomFacilitiesTypeAll({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHardType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelRoomFacilitiesTypeAll',data.data);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店房间 设施
  AddHotelRoomFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHard/Insert', JSON.stringify(data), {
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
  //修改酒店房间设施
  UpdateHotelRoomFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHard/Update', JSON.stringify(data), {
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
  //删除酒店房间设施
  DeleteHotelRoomFacilities(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/RoomHard/Delete', JSON.stringify(data), {
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
  }
}
