/**
 * Created by liuxiang on 18/3/30.
 */
export default {
  /********************************************广告类型*********************************************************/
  adTypeList: state => state.adTypeList,
  updateAdTypeObj: state => state.updateAdTypeObj,
  adTypeListList: state => state.adTypeListList,
  /********************************************广告收费方式*********************************************************/
  adChargeWayList: state => state.adChargeWayList,
  updateAdChargeWayObj: state => state.updateAdChargeWayObj,
  /********************************************广告位置*********************************************************/
  adPositionList: state => state.adPositionList,
  updateAdPositionObj: state => state.updateAdPositionObj,
  /********************************************广告申请*********************************************************/
  adApplyList: state => state.adApplyList,
  updateAdApplyObj: state => state.updateAdApplyObj,
  /********************************************广告类型收费方式*********************************************************/
  adTypeChargeModeList: state => state.adTypeChargeModeList,
  updateAdTypeChargeModeObj: state => state.updateAdTypeChargeModeObj,
}
