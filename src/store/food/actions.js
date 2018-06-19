/**
 * Created by leibo on 18/4/4.
 */
//import axios from 'axios'
import {getNewStr} from '@/assets/js/public'


export default {
  /*****************************************美食推荐店铺**********************************************/
  //查询美食推荐店铺
  initIntroduceShopInfo({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/IntroduceShop/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          commit('initIntroduceShopInfo',data.data);
          relove(Number(data.totalrows));
        }else{

          reject(data.resultcontent)
        }
      })
    })
  },
  //添加推荐店铺
  addFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/IntroduceShop/Insert',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          console.log(data)
          if(Number(data.resultcode)==200){
            relove(Number(data.resultcontent));
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改推荐店铺
  UpdateFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/IntroduceShop/Update',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          console.log(data)
          if(Number(data.resultcode)==200){
            relove(Number(data.resultcontent));
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除推荐店铺
  DeleteFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/IntroduceShop/Delete',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          if(Number(data.resultcode)==200){
            relove(data.resultcontnet)
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },


  /*****************************************美食属性**********************************************/
  // 新增属性表
  AddFoodAttributeListType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/Property/Insert',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
//删除美食属性
  deleteFoodAttributeType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/Property/Delete',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //查询美食属性
  initFoodAttributeListType({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/Property/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;

        if(Number(data.resultcode==200)){
          commit('initFoodAttributeListType',data.data);
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改美食属性
  initUpdateFoodAttributeType(store,data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/Property/Update',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          if(Number(data.resultcode)==200){
            relove(data.resultcontent);
          }
          else{
            reject(data.resultcontent)
          }
        })
    })
  },
  /*****************************************美食店面**********************************************/
  //查询店面信息
  initFoodReviewStoreInformation({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/StoreFront/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;

        if(Number(data.resultcode==200)){
          commit('initFoodReviewStoreInformation',data.data);
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //审核推荐店面
  applyStoreSubmit({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/IntroduceShop/PassIntroShop',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //首页展示图片
  initFoodHomePagePicture({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/ShowTop/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          commit('initFoodHomePagePicture',data.data);
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //店面产品
  initStoreProductData({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/StoreFrontProduct/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          commit('initStoreProductData',data.data);
          relove();
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加首页展示图片
  addFoodHomePagePicture({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/ShowTop/Insert',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改首页展示图片
  updateFoodHomePagePicture({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/ShowTop/Update',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除首页展示图片
  deleteFoodHomePagePicture({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/ShowTop/Delete',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //审核店面
  applyFoodReviewStoreInformation({commit},data){
    return new Promise((relove,reject)=>{
      axios.post(getNewStr+'/StoreFront/Validate',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
}
