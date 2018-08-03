/**
 * Created by LiuXiang on 18/04/09.
 */
export default  {
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },

  initAdminEducationVideo(state, data) {
    state.adminEducationAuditList = data;
  },
  initEducationHomePageAction(state, data) {
    state.educationHomePageList = data;
  },

  initSelectTypeInfo(state,data){
    state.selectTypeInfo = data;
  },
  initSelectVideoInfo(state,data){
    state.selectVideoInfo = data;
  },
  initEducationCourseAction(state,data){
    state.educationCourseList = data;
  },

  initEducationCourseList(state,data){
    state.adminEducationCourseList = data;
  },
  initAdminEducationCourse(state,data){
    state.adminEducationCourse = data;
  },
  initAdminEducationOrder(state,data){
    state.adminEducationOrder = data;
  },
  initAdminEducationRecommend(state,data){
    state.adminEducationRecommend = data;
  },
  adminEducationAuditRecommend(state,data){
    state.adminEducationAuditRecommend = data;
  },
  initEducationPersonalInfo(state,data){
    state.educationPersonalInfoList = data;
  }

}



