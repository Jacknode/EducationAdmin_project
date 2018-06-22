<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育订单</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>订单筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="siteNum" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="mini">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->

      <el-table
        :data="adminEducationOrder"
        style="width: 100%">
        <el-table-column
          label="系列编号"
          prop="ed_ss_ID">
        </el-table-column>
        <el-table-column
          label="用户编码"
          prop="ed_oi_UserIF">
        </el-table-column>
        <el-table-column
          label="支付状态"
          prop="ed_oi_PayState">
        </el-table-column>
        <el-table-column
          label="视频和系列的区分"
          prop="ed_oi_Difference">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">

            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_oi_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>




      <!--分页-->
      <div class="block" style="float: right;">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="total"
          v-show="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        total:0,
        siteNum:'',



      }
    },
    computed: mapGetters([
      'adminEducationOrder'


    ]),
    created(){
      this.initData(this.siteNum)
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(this.siteNum,num)
      },
      //初始化
      initData(id,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ed_ss_ID": id,//系列编号
          "ed_oi_UserIF": "",//用户编码
          "ed_oi_PayState": "",//支付状态（1未支付，2已支付)
          "ed_oi_Difference": "",//视频和系列的区分（1视频，2系列）
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.$store.dispatch('initAdminEducationOrder',options)
          .then((total) => {
            this.total = total
            this.isLoading  = false
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //查询
      search(){
        this.initData(this.siteNum)
      },


      //删除
      Delete(id){
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_oi_ID": id,//标识
          }

        };
        this.$store.dispatch('deleteAdminEducationOrder',deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.siteNum)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
      },
    },
  }
</script>
<style scoped>

</style>
