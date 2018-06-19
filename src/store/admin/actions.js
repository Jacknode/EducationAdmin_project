/**
 * Created by leibo on 18/2/6.
 */
//import axios from 'axios';
import {getNewStr} from '@/assets/js/public'

export default {
  //Home初始化跟团游栏目
  initHomeAdminGroupTour({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/GroupItemInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHomeAdminGroupTour', data.data);
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //管理员查商户信息
  initAdminTradeGoodList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TradeGood/GetTradeGoodInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          var resulte = data.data;
          for (var i = 0; i < resulte.length; i++) {
            resulte[i].ta_tg_ShowImages = resulte[i].ta_tg_ShowImage.split(',')
          }
          commit('initAdminTradeGoodList', resulte);
          relove(data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //管理员商户信息
  initAdminBusinessInformation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TradeInfo/GetTradeInfoList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].ts_tb_ShowImage) {
              data.data[i].ts_tb_ShowImage = data.data[i].ts_tb_ShowImage.split(',')
            } else {
              data.data[i].ts_tb_ShowImage = []
            }
            if (data.data[i].ts_tb_StoreImageURL) {
              data.data[i].ts_tb_StoreImageURL = data.data[i].ts_tb_StoreImageURL.split(',')
            } else {
              data.data[i].ts_tb_StoreImageURL = []
            }
          }
          commit('initAdminBusinessInformation', data.data);
          relove(Number(data.totalrows));
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //修改商户
  UpdateAdminBusinessInformation(store, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TradeInfo/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //删除商户
  DeleteAdminBusinessInformation(store, id) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/TradeInfo/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //商户上传图片
  uploadImgs(store, data) {
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
  //初始化供应商信息
  initAdminSupplier({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AgentInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          let resulte = data.data
          for (var i = 0; i < resulte.length; i++) {
            if (resulte[i].sm_ai_CertImage) {
              resulte[i].sm_ai_CertImage = resulte[i].sm_ai_CertImage.split(',')
            } else {
              resulte[i].sm_ai_CertImage = []
            }
            if (data.data[i].sm_ai_OtherImage) {
              resulte[i].sm_ai_OtherImage = resulte[i].sm_ai_OtherImage.split(',')
            } else {
              resulte[i].sm_ai_OtherImage = []
            }
            if (data.data[i].sm_ai_FeeImage) {
              resulte[i].sm_ai_FeeImage = resulte[i].sm_ai_FeeImage.split(',')
            } else {
              resulte[i].sm_ai_FeeImage = []
            }
          }
          commit('initAdminSupplier',data.data.reverse())
          relove(data)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //审核供应商
  GetApproval(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AgentInfo/Validate', JSON.stringify(data), {
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
  //初始化产品审核
  initAdminProductAudit({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TradeGood/GetTradeGoodInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initAdminProductAudit',data.data.data)
          relove(data.data);
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //审核产品
  getProductAuditStatus(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/TradeGood/ValiateTradeGood', JSON.stringify(data), {
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
  //代理商
  initAdminAgents({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ProxyInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          let resulte = data.data
          for (var i = 0; i < resulte.length; i++) {
            if(resulte[i].sm_pi_CertImage){
              resulte[i].sm_pi_CertImage = resulte[i].sm_pi_CertImage.split(',')
            }else{
              resulte[i].sm_pi_CertImage = []
            }
            if(resulte[i].sm_pi_FeeImage){
              resulte[i].sm_pi_FeeImage = resulte[i].sm_pi_FeeImage.split(',')
            }else{
              resulte[i].sm_pi_FeeImage = []
            }
          }
          commit('initAdminAgents',resulte)
          relove(data);
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //审核代理商
  checkProxyInfo(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ProxyInfo/Validate', JSON.stringify(data), {
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
  //供应商利润管理
  initAdminVendorProfit({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentPayFee/SelectMX', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initAdminVendorProfit',data.data)
          relove(Number(data.totalrows));
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //查询合作类型
  initPartnershipType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/CooperationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initPartnershipType',data.data)
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //查询省
  initProviceList({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initProviceList',data.data)
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //查询市
  initCityList({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initCityList',data.data)
          relove();
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //添加供应商利润
  AddAdminVendorProfitFee(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentPayFee/Insert', JSON.stringify(data), {
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
  //修改供应商利润
  UpdateAdminVendorProfit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentPayFee/Update', JSON.stringify(data), {
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
  //删除供应商利润
  DeleteAdminVendorProfit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentPayFee/Delete', JSON.stringify(data), {
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
  //代理商利润
  initAdminAgentsProfit({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentLevel/SelectMX', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initAdminAgentsProfit',data.data)
          relove(Number(data.totalrows));
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //添加代理商利润
  AddAdminVendorProfit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentLevel/Insert', JSON.stringify(data), {
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
  //修改代理商利润
  UpdateAdminVendorProfit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentLevel/Update', JSON.stringify(data), {
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
  //删除代理商利润
  DeleteAdminVendorProfit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentLevel/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            relove(data.resultcontent)
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //惠乐游收益
  initAdminHuileyouReturn({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AgentInfo/HuileyouIncome',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdminHuileyouReturn',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //积分权重
  initAdminIntegralWeight({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Height/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdminIntegralWeight',data.data.reverse())
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加积分权重
  AddAdminIntegralWeightSubmit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Height/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改积分权重
  UpdateAdminIntegralWeightSubmit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Height/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除积分权重
  DeleteAdminIntegralWeight(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Height/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //积分类型
  initAdminIntegralType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/UserScoreType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdminIntegralType',data.data);
         // relove(Number(data.data.length))
           relove(data.data.length)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加积分类型
  AddAdminIntegralTypeSubmit(store,data){
    return new Promise((relove,reject) => {
      axios.post(getNewStr+'/UserScoreType/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改积分类型
  UpdateAdminIntegralTypeSubmit(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/UserScoreType/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除积分类型
  DeleteAdminIntegralType(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/UserScoreType/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化上传App
  initUploadApp({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AppStore/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initUploadApp',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //上传App
  AddUploadApp(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/AppStore/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
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
