<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育推荐</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>教育推荐筛选:</span>
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
        :data="adminEducationRecommend"
        style="width: 100%">
        <el-table-column
          label="推荐表编码"
          align="center"
          prop="ed_re_ID">
        </el-table-column>
        <el-table-column
          label="被推荐的编码"
          align="center"
          prop="ed_re_PropertiesID">
        </el-table-column>
        <el-table-column
          align="center"
          label="推荐图片"
        >
          <template slot-scope="scope">
            <img v-lazy="scope.row.ed_re_SeriesImageURL" alt="" style="width: 100px;height: 100px;">
          </template>
        </el-table-column>


        <el-table-column
          label="推荐名称"
          align="center"
          prop="ed_re_Name">
        </el-table-column>
        <el-table-column
          label="推荐类别(0视频，1系列)"
          align="center"
          prop="ed_re_Name">
        </el-table-column>
        <el-table-column label="操作"    align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_re_ID)">删除
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
      'adminEducationRecommend'


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
          "ed_re_ID":id,//推荐编码
          "ed_re_PropertiesID": "",//推荐的编码
          "ed_re_SeriesImageURL": "",//推荐图片
          "ed_re_Name": "",//推荐名称
          "ed_re_Difference": "",//推荐的是视频还是系列（0视频，1系列）
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.$store.dispatch('initAdminEducationRecommend',options)
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
        console.log(id)
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_re_ID":id,//推荐编码
          }
        };
        this.$store.dispatch('deleteAdminEducationRecommend',deleteOptions)
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
