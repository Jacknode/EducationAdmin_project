/**
 * Created by leibo on 18/2/6.
 */



const mutations = {
//初始化动画
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  oPTranstionFalse(state) {
    state.transtionActive = {
      isActive: !state.transtionActive.isActive,
      isRotateInDownRight: !state.transtionActive.isRotateInDownRight
    }
  },
  initAdminTradeGoodList(state, data) {
    state.adminTradeGoodList = data;
  },
  initAdminBusinessInformation(state, data) {
    state.adminBusinessInformationList = data;
  },
  initUpdateAdminBusinessInformationObj(state, id) {
    state.updateAdminBusinessInformationObj = state.adminBusinessInformationList.filter(item => {
      if (item.ts_tb_UserID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initAdminSupplier(state,data){
    state.adminSupplierList = data;
  },
  initAdminProductAudit(state,data){
    state.adminProductAuditList = data;
  },
  initAdminAgents(state,data){
    state.adminAgentsList = data
  },
  initAdminVendorProfit(state,data){
    state.adminVendorProfitList = data;
  },
  initPartnershipType(state,data){
    state.partnershipTypeList = data;
  },
  initProviceList(state,data){
    state.proviceList = data;
  },
  initCityList(state,data){
    state.cityList = data;
  },
  initUpdateAdminVendorProfitObj(state,id){
    state.updateAdminVendorProfitObj = state.adminVendorProfitList.filter(item=>{
      if(item.sm_apf_ID == id){
        return true
      }
      return false;
    })[0]
  },
  initAdminAgentsProfit(state,data){
    state.adminAgentsProfitList = data;
  },
  initUpdateAdminAgentsProfitObj(state,id){
    state.updateAdminAgentsProfitObj = state.adminAgentsProfitList.filter(item=>{
      if(item.sm_al_ID ==id){
        return true;
      }
      return false
    })[0]
  },
  initAdminHuileyouReturn(state,data){
    state.adminHuileyouReturnList = data;
  },
  initAdminIntegralWeight(state,data){
    state.adminIntegralWeightList = data;
  },
  initUpdateAdminIntegralWeightObj(state,id){
    state.updateAdminIntegralWeightObj = state.adminIntegralWeightList.filter(item=>{
      if(item.sm_hm_ID == id){
        return true;
      }
      return false
    })[0]
  },
  initAdminIntegralType(state,data){
    state.adminIntegralTypeList = data;
  },
  initUpdateAdminIntegralTypeObj(state,id){
    state.updateAdminIntegralTypeObj = state.adminIntegralTypeList.filter(item=>{
      if(item.sm_ust_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initUploadApp(state,data){
    state.uploadAppList = data;
  }
};
export default mutations
