<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育分类</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>教育分类查询:</span>
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
        :data="adminEducationClassify"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          label="分类编号"
          align="center"
          prop="ed_te_ID">
        </el-table-column>
        <el-table-column
          label="分类名称"
          align="center"
          prop="ed_te_Name">
        </el-table-column>
        <el-table-column
          label="分类父编码名称"
          align="center"
          prop="ed_te_ParentName">
        </el-table-column>
        <!--<el-table-column-->
          <!--label="分类图片"-->
          <!--prop="ed_te_TypeImage">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--label="分类编号父编号"-->
          <!--prop="ed_te_ParentID">-->
        <!--</el-table-column>-->

        <el-table-column label="操作" align="center" style="width: 1000px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_te_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加教育分类-->

      <el-dialog title="添加教育分类" :visible.sync="addDialog">
        <el-form :model="addOptions" >
          <el-form-item label="教育父编码: " :label-width="formLabelWidth">
          <el-cascader
            :options="selectTypeInfo"
            v-model="selectedOptions"
            :show-all-levels="false"
            @change="handleChange1"
          >
          </el-cascader>
          </el-form-item>

         <!--<el-form-item label="教育父编码:" :label-width="formLabelWidth">-->
           <!--<el-select v-model="addOptions.data.ed_te_ParentName" placeholder="请选择" @change="changeType">-->
             <!--<el-option-->
               <!--v-for="item in selectTypeInfo"-->
               <!--:key="item.ed_te_ID"-->
               <!--:label="item.ed_te_Name"-->
               <!--:value="item.ed_te_Name">-->
             <!--</el-option>-->
           <!--</el-select>-->
         <!--</el-form-item>-->

          <el-form-item label="教育分类: " :label-width="formLabelWidth">
           <el-input v-model='addOptions.data.ed_te_Name' placeholder="请输入内容" style="width:800px" ></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>

      </el-dialog>
      <!--修改教育分类-->
      <el-dialog title="修改教育分类" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="教育父编码:" :label-width="formLabelWidth">
            <el-input v-model='updateObj.ed_te_ParentID' placeholder="请输入内容" style="width:800px" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="教育分类: " :label-width="formLabelWidth">
            <el-input v-model='updateObj.ed_te_Name' placeholder="请输入内容" style="width:800px" ></el-input>
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
        isLoading: false,
        addDialog:false,
        updateDialog:false,
        selectedOptions:[],
        updateObj:{},
        formLabelWidth:'120px',
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_te_Name": "",//分类名称
            "ed_te_ParentID": 0,//分类编号父编号
            'ed_te_ParentName':''
          }

        },
     }
    },
    computed: mapGetters([
      'adminEducationClassify',
      'adminEducationClassifyList',
      'selectTypeInfo'

    ]),
    created(){
      this.initSelectTypeInfo().then(()=>{
        this.initData(this.input)
      })
    },
    methods: {
      handleChange1(value){
        this.selectedOptions =value;
        console.log(this.selectedOptions[value.length-1])

      },
      initSelectTypeInfo(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": "1",
          "rows": "10",
          "ed_te_ID": "",//分类编号
          "ed_te_Name": "",//分类名称
          "ed_te_TypeImage": "",//分类图片
          "ed_te_ParentID": "0",//分类编号父编号
        };
        return this.$store.dispatch('initSelectTypeInfo',options)
      },

      //分页
      handleCurrentChange(num) {
        this.initData(this. siteNum,num)
      },
      //初始化数据
      initData(id,page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ed_te_ID":id,//分类编号
          "ed_te_Name": "",//分类名称
          "ed_te_TypeImage": "",//分类图片
          "ed_te_ParentID": "0",//分类编号父编号
          "page":page?page: 1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initAdminEducationClassify", options)
          .then((total) => {
            this.total = total;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },

      //教育分类查询
      search(){
        this.initData( this. siteNum)
      },
      //添加
      Add(){
        this.addDialog=true

      },

      //添加提交
      addSubmit() {
        this.$store.dispatch('addAdminEducationClassify', this.addOptions)
          .then((suc) => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this. siteNum)//调用初始化
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.addDialog = false;
      },

      //修改
      update(obj){
      this.updateObj=obj
        this.updateDialog=true
      //  this.$store.commit('setTranstionFalse');
      },
      //修改提交
      updateSubmit() {
        let updateOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.updateObj,
        };
        this.$store.dispatch('updateAdminEducationClassify',updateOptions )
          .then((suc) => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData( this. siteNum)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
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
            "ed_te_ID":id,//分类编号
          }
        }
        this.$store.dispatch('DeleteAdminEducationClassify',deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData( this. siteNum)
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
