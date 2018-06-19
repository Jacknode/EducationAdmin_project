/**
 * Created by leibo on 18/4/4.
 */
export default {
  //美食推荐店铺
  foodRecommendStoreTypeList: state => state.foodRecommendStoreTypeList,   //推荐店铺

  //美食属性
  foodAttributeTypeList: state => state.foodAttributeTypeList,   //属性查询
  updateFoodAttributeTypeObj: state => state.updateFoodAttributeTypeObj,   //修改美食属性

  /*****************************************美食店面**********************************************/
  //查询美食店面
  initFoodReviewStoreInformationList: state => state.initFoodReviewStoreInformationList,   //修改美食店面
  foodHomePagePictureList: state => state.foodHomePagePictureList,
  storeProductDataList: state => state.storeProductDataList,

}
