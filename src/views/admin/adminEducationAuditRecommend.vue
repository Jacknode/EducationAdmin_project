<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育审核视频推荐</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>审核视频推荐:</span>
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
        :data="adminEducationAuditRecommend"
        style="width: 100%">

        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">

              <el-form-item label="教育推荐审核ID:">
                <span>{{ props.row.ed_ve_Content.ed_re_ID}}</span>
              </el-form-item>
              <el-form-item label="被推荐者编码:">
                <span>{{ props.row.ed_ve_Content.ed_re_PropertiesID}}</span>
              </el-form-item>
              <el-form-item label="推荐名称:">
                <span>{{ props.row.ed_ve_Content.ed_re_Name}}</span>
              </el-form-item>

              <!--<el-form-item label="图片地址:">-->
                <!--<el-table-column-->
                  <!--align="center"-->
                  <!--label="推荐图片地址图片"-->
                <!--&gt;-->
                  <!--<template slot-scope="scope">-->
                    <!--<img v-lazy="props.row.ed_re_SeriesImageURL" alt="" style="width: 100px;height: 100px;">-->
                  <!--</template>-->
                <!--</el-table-column>-->
              <!--</el-form-item>-->
              <el-form-item label="推荐图片:">
                <template slot-scope="scope">
                <img v-lazy="props.row.ed_ve_Content.ed_re_SeriesImageURL" alt="" style="width: 100px;height: 100px;">
                </template>
                <span>{{ props.row.ed_ve_Content.ed_re_SeriesImageURL}}</span>
              </el-form-item>

              <el-form-item label="教育推荐类型:">
                <span>{{ props.row.ed_ve_Content.ed_re_Difference}}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          label="审核表编号"
          prop="ed_ve_ID">
        </el-table-column>
        <el-table-column
          label="视频类型"
          prop="ed_ve_Type">
        </el-table-column>
        <el-table-column
          label="创建时间"
          prop="ed_ve_CreateTime">
        </el-table-column>
        <el-table-column
          label="类型名称"
          prop="ed_ve_TypeName">
        </el-table-column>
        <!--<el-table-column label="操作">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button-->
              <!--size="mini"-->
              <!--type="primary"-->
              <!--@click="Add">添加-->
            <!--</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>

      <!--添加教育分类-->

      <!--<el-dialog title="添加教育分类" :visible.sync="addDialog">-->
        <!--<el-form :model="addOptions">-->
          <!--<el-form-item label="视频类型:" :label-width="formLabelWidth">-->
            <!--<el-select v-model="value" placeholder="请选择">-->

              <!--<el-option-->
                <!--v-for="item in selectTypeInfo"-->
                <!--:key="item.ed_te_ID"-->
                <!--:label="item.ed_te_Name"-->
                <!--:value="item.ed_te_ID">-->
              <!--</el-option>-->
            <!--</el-select>-->
          <!--</el-form-item>-->

          <!--<el-form-item label="推荐图片:" :label-width="formLabelWidth">-->
            <!--<a href="javascript:;" class="file">推荐图片-->
              <!--<input type="file" name="" ref="upload" accept="image/*" multiple>-->
            <!--</a>-->
            <!--<img v-lazy="addOptions.data.ed_ve_Content.ed_re_SeriesImageURL" v-show="addOptions.data.ed_ve_Content.ed_re_SeriesImageURL" width="128" height="80">-->
          <!--</el-form-item>-->

          <!--<el-form-item label="被推荐者编码:" :label-width="formLabelWidth">-->
            <!--<el-input v-model='addOptions.data.ed_re_PropertiesID' placeholder="请输入内容" style="width:800px" ></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="教育分类: " :label-width="formLabelWidth">-->
            <!--<el-input v-model='addOptions.data.ed_te_Name' placeholder="请输入内容" style="width:800px" ></el-input>-->
          <!--</el-form-item>-->

          <!--<el-form-item label="推荐名称: " :label-width="formLabelWidth">-->
            <!--<el-input v-model='addOptions.data.ed_re_Name' placeholder="请输入内容" style="width:800px" ></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="推荐类型: " :label-width="formLabelWidth">-->
          <!--<el-select v-model="value1" placeholder="推荐类型">-->
            <!--<el-option-->
              <!--v-for="item in options"-->
              <!--:key="item.value1"-->
              <!--:label="item.label"-->
              <!--:value="item.value1">-->
            <!--</el-option>-->
          <!--</el-select>-->
          <!--</el-form-item>-->

          <!--&lt;!&ndash;<el-form-item label="推荐类型: " :label-width="formLabelWidth">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-input v-model='addOptions.data.ed_re_Difference' placeholder="请输入内容" style="width:800px" ></el-input>&ndash;&gt;-->
          <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->

        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click="addDialog = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="addSubmit">确 定</el-button>-->
        <!--</div>-->

      <!--</el-dialog>-->

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
  import {getNewStr} from '@/assets/js/public'
  export default{
    name: '',
    data(){
      return {
        siteNum:'',
        value: '',
        value1: '',
        total:0,
        addDialog:false,
        formLabelWidth:'120px',
        options:[{
          value1: '0',
          label: '视频'
        }, {
          value1: '1',
          label: '系列'
        },],
        addOptions:{
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "data": {
            "ed_ve_Type": "",//视频类型
            "ed_ve_Content": {  //审核表内容
              "ed_re_PropertiesID": "",//被推荐者编码
              "ed_re_SeriesImageURL": "",  //推荐图片
              "ed_re_Name": "",  //推荐名称
              "ed_re_Difference":'',    //添加推荐的是视频还是系列（0视频，1系列）
            }
          }
        }

      }
    },
    computed: mapGetters([
      'adminEducationAuditRecommend',
      'selectTypeInfo'
    ]),
    created(){

      this.initSelectTypeInfo().then(()=>{
      this.initData(this.input)
    })

    },
    methods: {

//       uploadToOSS(file) {
//         return new Promise((relove,reject)=>{
//           var fd = new FormData();
//           fd.append("fileToUpload", file);
//           var xhr = new XMLHttpRequest();
//           xhr.open("POST", getNewStr+"/OSSFile/PostToOSS");
//           xhr.send(fd);
//           xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4 && xhr.status == 200) {
//               if (xhr.responseText) {
//                 var data = xhr.responseText
//                 relove(JSON.parse(data))
//               }
//             }else{
//               console.log(xhr.responseText)
// //               if (xhr.responseText) {
// //                 var data = xhr.responseText;
// //                 reject(JSON.parse(data).resultcontent)
// //               }
//             }
//           }
//         })
//       },
//       uploaNode() {
//         this.addOptions.data.ed_ve_Content.ed_re_SeriesImageURL= '';
//         setTimeout(() => {
//           if (this.$refs.upload) {
//             this.$refs.upload.addEventListener('change', data => {
//               for (var i = 0; i < this.$refs.upload.files.length; i++) {
//                 this.uploadToOSS(this.$refs.upload.files[i])
//                   .then(data => {
//                     if (data) {
//                       this.addOptions.data.ed_ve_Content.ed_re_SeriesImageURL = data.data;
//                     } else {
//                       this.$notify({
//                         message: '图片地址不存在!',
//                         type: 'error'
//                       });
//                     }
//                   })
//
//               }
//             })
//           }
//         }, 30)
//       },
      //分页
      // handleCurrentChange(num){
      //   this.initData(this.siteNum,num)
      // },

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


      //初始化
      initData(id,page){
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "ed_ve_ID": id,//审核表编号
          "ed_ve_Type": "",//视频类型
          "ed_vo_AuthorID": "",//作者ID
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.$store.dispatch('adminEducationAuditRecommend',options)
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
      //新增
      Add(){
        this.addDialog=true
        this.uploaNode()
      },
      //添加提交
      addSubmit(){
        this.$store.dispatch('addEducationAuditRecommend', this.addOptions)
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
          })
        this.addDialog = false;
      }
    },
  }
</script>
<style scoped>
</style>
