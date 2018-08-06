<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">教育首页大图管理</h1>
      <!--数据搜索-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>首页大图筛选:</span>
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
            <el-button type="primary" @click="Add" size="mini">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->
      <el-table
        :data="educationHomePageList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="课程编码:">
                <span>{{ props.row.ed_ss_ID }}</span>
              </el-form-item>
              <el-form-item label="课程名称:">
                <span>{{ props.row.ed_ss_Name }}</span>
              </el-form-item>
              <el-form-item label="连载状态:">
                <span>{{ props.row.ed_ss_WriteState}}</span>
              </el-form-item>
              <el-form-item label="系列图片:">
                <span>{{ props.row.ed_ss_SeriesImageURL}}</span>
              </el-form-item>
              <el-form-item label="作者:">
                <span>{{ props.row.ed_ss_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="课程价格:">
                <span>{{ props.row.ed_ss_Price}}</span>
              </el-form-item>
              <el-form-item label="是否收费:">
                <span>{{ props.row.ed_ss_GetFee}}</span>
              </el-form-item>
              <el-form-item label="创建时间:">
                <span>{{ props.row.ed_ss_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="完载时间:">
                <span>{{ props.row.ed_ss_OverTime}}</span>
              </el-form-item>
              <el-form-item label="更新时间:">
                <span>{{ props.row.ed_ss_UpdateTime}}</span>
              </el-form-item>
              <el-form-item label="分类编号:">
                <span>{{ props.row.ed_ss_Type}}</span>
              </el-form-item>
              <el-form-item label="推荐首页大图:">
                <span>{{ props.row.es_ss_Recommend}}</span>
              </el-form-item>




            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="课程编码"
          align="center"
          prop="ed_ss_ID">
        </el-table-column>
        <el-table-column
          label="课程名称"
          align="center"
          prop="ed_ss_Name">
        </el-table-column>
        <el-table-column
          label="连载状态"
          align="center"
          prop="ed_ss_WriteState">
        </el-table-column>
        <el-table-column
          label="系列图片"
          align="center"
          prop="ed_ss_SeriesImageURL">
        </el-table-column>

<!--        <el-table-column label="操作"   align="center">
            <template slot-scope="scope">
&lt;!&ndash;            <el-button
              size="mini"
              type="primary"
              @click="Apply(scope.row)">申请
            </el-button>&ndash;&gt;
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>-->
      </el-table>

      <!--添加-->
      <el-dialog title="添加首页大图" :visible.sync="addDialog">
        <el-form :model="addOptions">
            <el-form-item label="课程名称:" :label-width="formLabelWidth">
              <el-select v-model="courseName" placeholder="请选择首页大图推荐课程名称">
                <el-option
                  v-for="item in educationCourseList"
                  :key="item.ed_ss_ID"
                  :label="item.ed_ss_Name"
                  :value="item.ed_ss_ID">
                </el-option>
              </el-select>
            </el-form-item>
<!--            <el-form-item label="审核状态:" :label-width="formLabelWidth">
              <el-select v-model="approvalStatu" placeholder="请选择">
                <el-option
                  v-for="item in approvalStatusList"
                  :key="item.approvalStatuId"
                  :label="item.approvalStatuName"
                  :value="item.approvalStatuId">
                </el-option>
              </el-select>
            </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="AddCommit">确定推荐</el-button>
        </div>
      </el-dialog>

      <!--申请-->
      <el-dialog title="申请" :visible.sync="applyDialog">
<!--        <el-form :model="approvalObj">
          <el-form-item label="选择课程名称:" :label-width="formLabelWidth">
            <el-select v-model="courseName" placeholder="请选择">
              <el-option
                v-for="item in educationcourseList"
                :key="item.ed_ss_ID"
                :label="item.ed_ss_IDName"
                :value="item.ed_ss_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态:" :label-width="formLabelWidth">
            <el-select v-model="approvalStatu" placeholder="请选择">
              <el-option
                v-for="item in approvalStatusList"
                :key="item.approvalStatuId"
                :label="item.approvalStatuName"
                :value="item.approvalStatuId">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>-->
        <div slot="footer" class="dialog-footer">
          <el-button @click="applyDialog = false">取 消</el-button>
          <el-button type="primary" @click="applySubmit">确 定</el-button>
        </div>
      </el-dialog>

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
        courseName:'',//课程名称
        formLabelWidth:'250px',
        total:0,
        isLoading:false,
        applyDialog:false,
        addDialog:false,
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "ed_ss_ID": "",//课程编号
        },
        applyOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "ed_ss_ID": "33",//课程编号
        },


      }
    },
    computed: mapGetters([

      'educationPersonalInfoList',
      'educationHomePageList',//教育首页大图
      'educationCourseList',//教育课程


    ]),
    created(){
      this.initData(this.input)
    },
    methods: {
      //分页
      handleCurrentChange(num) {
        this.initData(this.input,num)
      },
      //课程查询
      searchCourse(){
        console.log(JSON.parse(sessionStorage.getItem("admin")).sm_ui_ID)
        let authorID = JSON.parse(sessionStorage.getItem("admin")).sm_ui_ID;
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "page": "1",
          "rows": "10",
          "ed_ss_ID": "32",//课程编号
          "ed_ss_Name": "",//课程名称
          "ed_ss_WriteState": "0",//连载状态（0连载中1完结)
          "ed_ss_AuthorID": authorID?authorID:"",//作者
          // "ed_ss_Price": "1",//课程价格
          "ed_ss_GetFee": "",//是否收费（0不收费，1要收费）
          "ed_SS_Type": "",//分类编号
        };
        this.isLoading = true;
        this.$store.dispatch("initEducationCourseAction", options)
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
      //教育视频审核查询
      search(){

      },
      //供应商首页大图推荐申请初始化
      initData(id,page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "page": "1",          //页码
          "rows": "1",         //展示行数
          "ed_ss_AuthorID": "4",            //作者编码
          "es_ss_Recommend": "1",   //推荐首页大图（0未推荐，1申请推荐中，2以通过推荐申请）
        };
        this.isLoading = true;
        this.$store.dispatch("initEducationHomePageAction", options)
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
      //添加
      Add(){
        this.searchCourse();
        this.addDialog=true;
        this.$store.commit("setTranstionFalse");
      },
      //添加提交
      AddCommit(){
        this.addOptions.ed_ss_ID=this.courseName;
        console.log(this.addOptions)
        this.addDialog=false;
        this.$store.dispatch('addEducationHomePageBigImage', this.addOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.input)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          });
      },
      //申请
      Apply(obj){
        console.log(obj);
        this.applyDialog=true;
      },
      //申请提交
      applySubmit(){
        console.log(this.applyOptions);
        this.applyDialog=false;
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
