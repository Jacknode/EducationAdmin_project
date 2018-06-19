/**
 * Created by leibo on 18/5/3.
 */
export default {
  initCarRent(state,data){
    state.carRentList = data;
  },
  initCarBrands(state,data){
    state.carBrandsList = data;
  },
  initCarBodyStructure(state,data){
    state.carBodyStructureList = data;
  },
  initCarProperties(state,data){
    state.carPropertiesList = data;
  },
  initCarPropertiesAll(state,data){
    state.carPropertiesAllList = data;
  },
  initCarCityLandmarksBasisType(state,data){
    state.carCityLandmarksBasisTypeList = data;
  },
  initCarCityLandmarks(state,data){
    state.carCityLandmarksList = data;
  },
  initCarProvinceData(state,data){
    state.carProvinceDataList = data;
  },
  initCarCityData(state,data){
    state.carCityDataList = data;
  },
  initCarModelGroup(state,data){
    state.carModelGroupList = data;
  }
}
