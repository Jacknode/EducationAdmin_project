<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">个人收益</h1>
      <!--数据搜索-->
<!--      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>个人收益筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入内容"
              v-model="input"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="mini">查询</el-button>

          </el-form-item>
        </el-form>
      </el-col>-->

      <!--数据展示-->
      <el-table
        :data="educationPersonalInfoList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="账单编码:">
                <span>{{ props.row.ed_eb_ID }}</span>
              </el-form-item>
              <el-form-item label="产品名称:">
                <span>{{ props.row.ed_ss_IDName }}</span>
              </el-form-item>
              <el-form-item label="产品供应商编码:">
                <span>{{ props.row.ed_oi_AgentID }}</span>
              </el-form-item>
              <el-form-item label="购买人编码:">
                <span>{{ props.row.ed_oi_UserIF }}</span>
              </el-form-item>
              <el-form-item label="产品价格:">
                <span>{{ props.row.ed_oi_Price }}</span>
              </el-form-item>
              <el-form-item label="平台提成:">
                <span>{{ props.row.ed_eb_Platform }}</span>
              </el-form-item>
              <el-form-item label="供应商获得:">
                <span>{{ props.row.ed_eb_Supply }}</span>
              </el-form-item>
              <el-form-item label="分销分成:">
                <span>{{ props.row.ed_eb_Distribution }}</span>
              </el-form-item>
              <el-form-item label="支付时间:">
                <span>{{ props.row.ed_oi_PayTime }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="产品名称"
          align="center"
          prop="ed_ss_IDName">
        </el-table-column>
        <el-table-column
          label="产品价格"
          align="center"
          prop="ed_oi_Price">
        </el-table-column>
        <el-table-column
          label="平台提成"
          align="center"
          prop="ed_eb_Platform">
        </el-table-column>
        <el-table-column label="操作"   align="center">
            <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_vo_ID)">删除
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
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getNewStr} from '@/assets/js/public'
  export default{
    name: '',
    data(){
      return {
        input:'',
        total:0,
        isLoading:false,
      }
    },
    computed: mapGetters([
      'educationPersonalInfoList',
    ]),
    created(){
      this.initData(this.input)
    },
    methods: {
      //分页
      handleCurrentChange(num) {
        this.initData(this.input,num)
      },

      //教育视频审核查询
      search(){

      },
      initData(id,page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "token":"",
          "ed_oi_AgentID": "1",//用户编码
          "page":page?page: 1,//页码
          "rows": 5//条数
        };
        this.isLoading = true;
        this.$store.dispatch("initEducationPersonalInfo", options)
          .then((total) => {
            this.total = total;
            this.isLoading = false;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      //添加审核视频
      Add(){

      },
      // 添加提交
      addSubmit() {

      },
      //删除
      Delete(id){

      },
    },
  }
</script>
<style scoped>
</style>
