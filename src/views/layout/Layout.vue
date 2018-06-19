<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain ,TagsView} from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  created(){
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    if(!admin){
      this.$router.push({ name:'Login' });
      return
    }
    this.initData()
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    async initData(){
      //推荐类型所有
      let options = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "操作员编码",
        "operateUserName": "操作员名称",
        "pcName": "",
        "ht_it_ID": "",//推荐类型ID
        "ht_it_Name": "",//推荐类型名称
        "ht_it_ParentID": "",//推荐类型父ID
      };
      await this.$store.dispatch('initHotelRecommendTypeAll',options)

      //设施类型
      let optionsType = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        "ht_ht_ID": "",//设施类型Id
        "ht_ht_Name":'',//设施类型名称
        page:1,
        rows:50
      };
      await this.$store.dispatch('initHotelFacilitiesTypeAll',optionsType)

      //房间设施类型所有
      let roomOptionsType = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "操作员编码",
        "operateUserName": "操作员名称",
        "pcName": "",
        "ht_rht_ID": "",//房间设施类型ID
        "ht_rht_Name": "",//类型名称
      }
      await this.$store.dispatch('initHotelRoomFacilitiesTypeAll',roomOptionsType)

//        let newOptions = {
//          "loginUserID": "huileyou",
//          "loginUserPass": "123",
//          "operateUserID": "",
//          "operateUserName": "",
//          "pcName": "",
//          //"sm_hm_ID": 1,
//          //"sm_hm_HeightName": "",
//          "sm_hm_IsDelete": 0
//        }
//        await this.$store.dispatch('initAdminIntegralWeight',newOptions)

    },
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
