<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">教育视频审核</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>审核视频筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入内容"
              v-model="input"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
            <el-button type="primary" @click="Add" size="mini">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->

      <el-table
        :data="adminEducationAuditList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">

          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="视频编号:">
                <span>{{ props.row.ed_ve_Content.ed_vo_ID }}</span>
              </el-form-item>
              <el-form-item label="视频时长:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Time }}秒</span>
              </el-form-item>
              <el-form-item label="视频大小:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Size}}MB</span>
              </el-form-item>
              <el-form-item label="文件扩展名:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Extend}}</span>
              </el-form-item>
              <el-form-item label="文件地址:">
                <span>{{ props.row.ed_ve_Content.ed_vo_FileURL}}</span>
              </el-form-item>
              <el-form-item label="作者ID:">
                <span>{{ props.row.ed_ve_Content.ed_vo_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="视频标题:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Title}}</span>
              </el-form-item>
              <el-form-item label="视频图片:">
                <span>{{ props.row.ed_ve_Content.ed_vo_ImageURL}}</span>
              </el-form-item>
              <el-form-item label="首页大图:">
                <span>{{ props.row.ed_ve_Content.ed_vo_TomImageURL}}</span>
              </el-form-item>
              <el-form-item label="创建时间:">
                <span>{{ props.row.ed_ve_Content.ed_vo_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="视频简介:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Introduce}}</span>
              </el-form-item>
              <el-form-item label="视频详情:">
                <span>{{ props.row.ed_ve_Content.ed_vo_Remark}}</span>
              </el-form-item>
              <el-form-item label="视频作者:">
                <span>{{ props.row.ed_ve_Content.ed_vo_AuthorName}}</span>
              </el-form-item>

              <!--<el-form-item label="产品标题:">-->
                <!--<el-popover-->
                  <!--ref="popover1"-->
                  <!--placement="top-start"-->
                  <!--trigger="hover"-->
                  <!--:content="props.row.ta_tg_Title">-->
                <!--</el-popover>-->
                <!--<el-button v-popover:popover1 size="small">移入查看</el-button>-->
              <!--</el-form-item>-->


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
          label="审核创建时间"
          prop="ta_tg_CreateDateTime">
          <template slot-scope="props">
            <span>{{props.row.ta_tg_CreateDateTime | getUseTime}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="视频类型名称"
          prop="ed_ve_TypeName">
        </el-table-column>

        <el-table-column label="操作">
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
            <el-button
              size="mini"
              type="primary"
              v-show="scope.row.ts_tg_IsPass!=1"
              @click="approval(scope.row.ta_tg_ID)">审核
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加教育分类-->

      <el-dialog title="添加教育分类" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="视频类型:" :label-width="formLabelWidth">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in selectTypeInfo"
                  :key="item.ed_te_ID"
                  :label="item.ed_te_Name"
                  :value="item.ed_te_ID">
                </el-option>
              </el-select>
            </el-form-item>
           <el-form-item label="时长:" :label-width="formLabelWidth">
             <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Time" placeholder="时长" ></el-input>
           </el-form-item>
          <el-form-item label="大小:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Size" placeholder="大小" ></el-input>
          </el-form-item>
          <el-form-item label="文件扩展名:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Extend" placeholder="文件扩展名" ></el-input>
          </el-form-item>




          <el-form-item label="文件地址:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">文件地址
              <input type="file" name="" ref="upload" accept="image/*" multiple>
            </a>
             <img v-lazy="addOptions.data.ed_ve_Content.ed_vo_FileURL" v-show="addOptions.data.ed_ve_Content.ed_vo_FileURL" width="128" height="80">
          </el-form-item>






          <!--<el-form-item label="作者:" :label-width="formLabelWidth">-->
            <!--<el-input v-model="addOptions.data.ed_ve_Content.ed_vo_AuthorID" placeholder="作者" ></el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Title" placeholder="标题" ></el-input>
          </el-form-item>


          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">视频图片
              <input type="file" name="" ref="upload1" accept="image/*" multiple>
            </a>
            <img v-lazy="addOptions.data.ed_ve_Content.ed_vo_ImageURL" v-show="addOptions.data.ed_ve_Content.ed_vo_ImageURL" width="128" height="80">
          </el-form-item>

          <el-form-item label="首页大图:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">首页大图
              <input type="file" name="" ref="upload2" accept="image/*" multiple>
            </a>
            <img v-lazy="addOptions.data.ed_ve_Content.ed_vo_TomImageURL" v-show="addOptions.data.ed_ve_Content.ed_vo_TomImageURL" width="128" height="80">
          </el-form-item>


          <el-form-item label="视频简介:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Introduce" placeholder="视频简介" ></el-input>
          </el-form-item>
          <el-form-item label="视频详情:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Remark" placeholder="视频详情" ></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
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
    <!--<el-dialog title="审核状态" :visible.sync="approvalStatusDialog">-->
      <!--<el-form :model="approvalOptions">-->
        <!--<el-form-item label="审核状态:" :label-width="formLabelWidth">-->
          <!--<el-radio v-model="approvalOptions.IsPass" label="1">审核成功</el-radio>-->
          <!--<el-radio v-model="approvalOptions.IsPass" label="2">审核失败</el-radio>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="审核失败原因:" :label-width="formLabelWidth" v-show="approvalOptions.IsPass!=1">-->
          <!--<el-input-->
            <!--type="textarea"-->
            <!--:autosize="{ minRows: 2, maxRows: 6}"-->
            <!--placeholder="请输入内容"-->
            <!--v-model="approvalOptions.failReason">-->
          <!--</el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="approvalStatusDialog = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="approvalStatusSubmit">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->
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
        value: '',
        total:0,
        isLoading:'',
        addDialog:false,
        formLabelWidth:'120px',
        ImageURL:[],
        ImageURL1:[],
        ImageURL2:[],
        addOptions:{
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "data": {
            "ed_ve_Type": '1',//视频类型
            "ed_ve_Content": {  //审核表内容
              "ed_vo_ID": "",//视频编号（添加视频时传空，修改视频时传入视频编号）
              "ed_vo_Time": "",  //时长（秒）
              "ed_vo_Size": "",  //大小（MB）
              "ed_vo_Extend": "",  //文件扩展名
              "ed_vo_FileURL": "",  //文件地址
              "ed_vo_AuthorID": "",  //作者
              "ed_vo_Title": "",  //标题
              "ed_vo_ImageURL": "",  //视频图片
              "ed_vo_TomImageURL": "",  //首页大图
              "ed_vo_CreateTime": "",  //创建时间
              "ed_vo_Introduce": "",  //简介
              "ed_vo_Remark": "",  //详情
            }
          }
        },
      }
    },
    computed: mapGetters([
      'adminEducationAuditList',
      'selectTypeInfo'

    ]),
    created(){
      let admin = JSON.parse(sessionStorage.getItem('admin'));
      this.addOptions.data.ed_ve_Content.ed_vo_AuthorID = admin.sm_ui_ID;
      if(admin){
        this.admin = admin;
        this.initSelectTypeInfo().then(()=>{
          console.log(123)
          this.initData(this.input)
        })
      }else{
        this.$notify({
          message: '请先登录@！',
          type: "error"
        });
        this.$router.push({name:'Login'})
        return;
      }
    },
    methods: {
      uploadToOSS(file) {
        return new Promise((relove,reject)=>{
          var fd = new FormData();
          fd.append("fileToUpload", file);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", getNewStr+"/OSSFile/PostToOSS");
          xhr.send(fd);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              if (xhr.responseText) {
                var data = xhr.responseText
                relove(JSON.parse(data))
              }
            }else{
              console.log(xhr.responseText)
//               if (xhr.responseText) {
//                 var data = xhr.responseText;
//                 reject(JSON.parse(data).resultcontent)
//               }
            }
          }
        })
      },


      uploaNode() {
        console.log(12)
        this.addOptions.data.ed_ve_Content.ed_vo_FileURL= '';
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadToOSS(this.$refs.upload.files[i])
                  .then(data => {
                    if (data) {
                      this.addOptions.data.ed_ve_Content.ed_vo_FileURL = data.data;
                    } else {
                      this.$notify({
                        message: '图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })

              }
            })
          }


          if (this.$refs.upload1) {
            this.addOptions.data.ed_ve_Content.ed_vo_ImageURL= '';
            this.$refs.upload1.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                this.uploadToOSS(this.$refs.upload1.files[i])
                  .then(data => {
                    if (data) {
                      this.addOptions.data.ed_ve_Content.ed_vo_ImageURL = data.data;
                    } else {
                      this.$notify({
                        message: '视频图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })
              }
            })
          }
          if (this.$refs.upload2) {
            this.addOptions.data.ed_ve_Content.ed_vo_TomImageURL= '';
            this.$refs.upload2.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                // this.uploadImg(this.$refs.upload1.files[i]).then(data => {
                //   this.$store.dispatch('hotelUploadAdminImgs', {
                //     imageData: data
                //   })
                this.uploadToOSS(this.$refs.upload2.files[i])
                  .then(data => {
                    if (data) {
                      this.addOptions.data.ed_ve_Content.ed_vo_TomImageURL = data.data;
                    } else {
                      this.$notify({
                        message: '图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })

              }
            })
           }
        }, 30)
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
        this.initData(this.input,num)
      },
      //审核视频chushih
      initData(id,page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "ed_ve_ID": id,//审核表编号
          "ed_ve_Type": "",//视频类型
          "ed_vo_AuthorID": this.admin.sm_ui_ID,//作者ID
         "page":page?page: 1,//页码
          "rows": 5//条数
        };
        this.isLoading = true;
        this.$store.dispatch("initAdminEducationAuditVideo", options)
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
        this.initData(this.input)
      },
      //添加审核视频
      Add(){
        this.addDialog=true
        this.uploaNode()
      },
      // 添加提交
      addSubmit() {
        this.$store.dispatch('addAdminEducationAuditVideo', this.addOptions)
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
      },
    },
  }
</script>
<style scoped>

</style>
