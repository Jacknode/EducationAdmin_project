<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育课程</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>课程筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="siteNum" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="mini">查询</el-button>
            <el-button type="primary" @click="Add" size="mini">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->

      <el-table
        :data="adminEducationCourse"
        style="width: 100%">
        <el-table-column
          label="视频系列编号"
          align="center"
          prop="ed_fs_ID">
        </el-table-column>
        <el-table-column
          label="系列编号"
          align="center"
          prop="ed_fs_SeriesID">
        </el-table-column>
        <el-table-column
          label="视频编号"
          align="center"
          prop="ed_fs_VedioID">
        </el-table-column>
        <el-table-column
          label="第几集"
          align="center"
          prop="ed_fs_Level">
        </el-table-column>
        <el-table-column label="操作"    align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_fs_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加课程目录-->

      <el-dialog title="添加课程目录" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <!--<el-form-item label="系列编号:" :label-width="formLabelWidth">-->

          <!--</el-form-item>-->
          <el-form-item label="系列编号:" :label-width="formLabelWidth">
            <!--<el-input v-model="addOptions.data.ed_fs_SeriesID"></el-input>-->
            <el-select v-model="addOptions.data.ed_fs_SeriesID" placeholder="系列编号" @change="changeType">
              <el-option
                v-for="item in adminEducationCourseList"
                :key="item.ed_ss_ID"
                :label="item.ed_ss_Name"
                :value="item.ed_ss_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="视频编号:" :label-width="formLabelWidth">
            <!--<el-input v-model="addOptions.data.ed_fs_VedioID"></el-input>-->
            <el-select v-model="addOptions.data.ed_fs_VedioID" placeholder="视频编号" @change="changeType">
              <el-option
                v-for="item in selectVideoInfo"
                :key="item.ed_vo_ID"
                :label="item.ed_vo_Title"
                :value="item.ed_vo_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="第几集:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_fs_Level"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改课程目录-->

      <el-dialog title="修改票种信息" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="系列编号:" :label-width="formLabelWidth">
            <!--<el-input v-model="updateObj.ed_fs_SeriesID"></el-input>-->
            <el-select v-model="addOptions.data.ed_fs_SeriesID" placeholder="系列编号" @change="changeType">
            <el-option
              v-for="item in adminEducationCourseList"
              :key="item.ed_ss_ID"
              :label="item.ed_ss_Name"
              :value="item.ed_ss_ID">
            </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="视频编号:" :label-width="formLabelWidth">
            <!--<el-input v-model="updateObj.ed_fs_VedioID"></el-input>-->
            <el-select v-model="addOptions.data.ed_fs_VedioID" placeholder="视频编号" @change="changeType">
              <el-option
                v-for="item in selectVideoInfo"
                :key="item.ed_vo_ID"
                :label="item.ed_vo_Title"
                :value="item.ed_vo_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="第几集:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.ed_fs_Level"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit">确 定</el-button>
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
        addDialog: false,
        updateDialog:false,
        formLabelWidth: '120px',
        updateObj:{},
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_fs_SeriesID": "",//系列编号
            "ed_fs_VedioID": "",//视频编号
            "ed_fs_Level": "",//第几集（整数）
          }
        }
      }
    },
    computed: mapGetters([
      'adminEducationCourse',
      'adminEducationCourseList',
       'selectVideoInfo'
    ]),
    created(){
      this.initData(this.siteNum);
      this.selectEducationCourseListNum();
      let admin = JSON.parse(sessionStorage.getItem('admin'));
      this.addOptions.data.ed_vo_AuthorID =admin.sm_ui_ID;
      this.initSelectVideoInfo(admin.sm_ui_ID)
    },
    methods: {
      changeType(){

      },
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
          "ed_fs_ID": id,//视频系列编号
          "ed_fs_SeriesID": "",//系列编号
          "ed_fs_VedioID": "",//视频编号
          "ed_fs_Level": "",//第几集（整数）
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.$store.dispatch('initAdminEducationCourse',options)
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
      //查询系列编号
      selectEducationCourseListNum(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ed_ss_ID": '',//系列编号
          "ed_ss_Name": "",//系列名称
          "ed_ss_WriteState": "",//连载状态（0连载中1完结)
          "ed_ss_SeriesImageURL": "",//系列图片
          "ed_ss_AuthorID": "1",//作者

        }
        this.isLoading = true;
        this.$store.dispatch('initEducationCourseList',options)

      },
      //查询视频
      initSelectVideoInfo(id){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ed_vo_ID":'',//视频编号
          "ed_vo_AuthorID":id,//作者ID
          "ed_vo_Type": "",//视频类型(1广告 2微电影 3教育)
          "ed_vo_PasserID": "",//审核人编码
        };
        return this.$store.dispatch('initSelectVideoInfo',options)
      },
      //添加
      Add(){

        this.addDialog= true
      },
      //添加提交
      addSubmit(){
        this.$store.dispatch('addAdminEducationCourse', this.addOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.siteNum)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.addDialog = false;
      },
      //修改
      update(obj){
        this.updateDialog= true,
        this.updateObj=obj
      },
      //修改提交
      updateSubmit(){
        let updateOption = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.updateObj
        };
        this.$store.dispatch('updateEducationCourse', updateOption)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.siteNum)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.updateDialog = false;

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
            "ed_fs_ID":id,//视频系列编号
          }
        };
        this.$store.dispatch('deleteAdminEducationCourse',deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
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
