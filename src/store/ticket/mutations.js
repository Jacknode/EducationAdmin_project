/**
 * Created by leibo on 18/3/30.
 */
export default {
  initTicketTheme(state, data) {
    state.ticketThemeList = data;
  },
  initUpdateTicketTheme(state, id) {
    state.updateTicketThemeObj = state.ticketThemeList.filter(item => {
      if (item.tm_tt_ID == id) {
        return true
      }
      return false
    })[0]
  },
  initScenicSpot(state, data) {
    state.scenicSpotList = data;
  },
  showTop(state, data) {
    state.showTopList = data;
  },
  initTicketHomePageBigPicture(state, data) {
    state.ticketHomePageBigPictureList = data;
  },
  initTicketHomePageSmallPicture(state, data) {
    state.ticketHomePageSmallPictureList = data;
  }

}
