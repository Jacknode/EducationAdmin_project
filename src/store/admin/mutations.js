/**
 * Created by LiuXiang on 18/04/09.
 */
export default  {

  initAdminEducationAuditVideo(state, data) {
    state.adminEducationAuditList = data;
  },
  initSelectTypeInfo(state,data){
    state.selectTypeInfo = data;
  },
  initSelectVideoInfo(state,data){
    state.selectVideoInfo = data;
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
  }


}



