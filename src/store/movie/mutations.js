/**
 * Created by leibo on 18/5/2.
 */
export default {
  /********************************************微电影类型*********************************************************/
  initMovieTypeList(state,data){
    state.movieTypeList = data;

  },
  initUpdateMovieTypeObj(state,id){
    state.updateMovieTypeObj = state.movieTypeList.filter(item=>{
      if(item.vf_te_ID==id){
        return true
      }
      return false
    })[0]
  },

  /********************************************微电影审核*******************************************************/
  initMovieAudit(state,data){
    state.movieAudit = data;

  },

  initUpdateMovieReviewObj(state,id){
    state.updateMovieReviewObj = state.movieAudit.filter(item=>{
      if(item.vf_ve_ID==id){
        return true
      }
      return false
    })[0]
  },


}
