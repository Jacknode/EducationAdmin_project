/**
 * Created by leibo on 18/4/2.
 */
export default {
  initHotelImageType(state,data){
    state.hotelImageTypeList = data;
  },
  initUpdateHotelImageType(state,id){
    state.updateHotelImageTypeObj = state.hotelImageTypeList.filter(item=>{
      if(item.ht_it_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelRecommendType(state,data){
    state.hotelRecommendTypeList = data;
  },
  initHotelRecommendTypeAll(state,data){
    state.hotelRecommendTypeAllList = data;
  },
  initUpdateHotelRecommendType(state,id){
    state.updateHotelRecommendTypeObj = state.hotelRecommendTypeList.filter(item=>{
      if(item.ht_it_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelThemeCategory(state,data){
    state.hotelThemeCategoryList = data;
  },
  initUpdateHotelThemeCategory(state,id){
    state.updateHotelThemeCategoryObj = state.hotelThemeCategoryList.filter(item=>{
      if(item.ht_tt_ThemeID==id){
        item.ht_tt_IsHot = item.ht_tt_IsHot+'';
        return true;
      }
      return false;
    })[0]
  },
  initHotelFacilitiesType(state,data){
    state.hotelFacilitiesTypeList = data;
  },
  initUpdateHotelFacilitiesType(state,id){
    state.updateHotelFacilitiesTypeObj = state.hotelFacilitiesTypeList.filter(item=>{
      if(item.ht_ht_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelCityRecommendType(state,data){
    state.hotelCityRecommendTypeList = data;
  },
  initHotelProvinceData(state,data){
    state.hotelProvinceData = data;
  },
  initHotelCityData(state,data){
    state.hotelCityData = data;
  },
  initUpdateHotelCityRecommendType(state,id){
    state.updateHotelCityRecommendTypeObj = state.hotelCityRecommendTypeList.filter(item=>{
      if(item.ht_ai_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelFacilities(state,data){
    state.hotelFacilitiesList = data;
  },
  initHotelFacilitiesTypeAll(state,data){
    state.hotelFacilitiesTypeAllList = data;
  },
  initUpdateHotelFacilities(state,id){
    state.updateHotelFacilitiesObj = state.hotelFacilitiesList.filter(item=>{
      if(item.ht_hd_ID===id){
        item.ht_hd_IsHot = item.ht_hd_IsHot+'';
        return true;
      }
      return false;
    })[0]
  },
  initHotelRoomFacilitiesType(state,data){
    state.hotelRoomFacilitiesTypeList = data;
  },
  initUpdateHotelRoomFacilitiesType(state,id){
    state.updateHotelRoomFacilitiesTypeObj = state.hotelRoomFacilitiesTypeList.filter(item=>{
      if(item.ht_rht_ID===id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelIconGallery(state,data){
    state.hotelIconGalleryList = data;
  },
  initUpdateHotelIconGallery(state,id){
    state.updateHotelIconGalleryObj = state.hotelIconGalleryList.filter(item=>{
      if(item.ht_ie_ID===id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelRoomFacilities(state,data){
    state.hotelRoomFacilitiesList = data;
  },
  initHotelRoomFacilitiesTypeAll(state,data){
    state.hotelRoomFacilitiesTypeAllList = data;
  },
  initUpdateHotelRoomFacilities(state,id){
    state.updateHotelRoomFacilitiesObj = state.hotelRoomFacilitiesList.filter(item=>{
      if(item.ht_rh_ID==id){
        item.ht_rh_IsHot = item.ht_rh_IsHot+'';
        return true;
      }
      return false;
    })[0]
  }
}
