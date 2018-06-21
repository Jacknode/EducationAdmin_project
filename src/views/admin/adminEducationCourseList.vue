<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">教育课程目录</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>课程目录筛选:</span>
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
        :data="adminEducationCourseList"
        style="width: 100%">
        <el-table-column
          label="系列编号"
          prop="ed_ss_ID">
        </el-table-column>
        <el-table-column
          label="系列名称"
          prop="ed_ss_Name">
        </el-table-column>
        <el-table-column
          label="连载状态"
          prop="ed_ss_WriteState">
        </el-table-column>
        <el-table-column
        label="系列图片"
        prop="ed_ss_SeriesImageURL">
      </el-table-column>
        <el-table-column
          label="作者"
          prop="ed_ss_AuthorID">
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
              @click="Delete(scope.row.ed_ss_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加课程目录-->

      <el-dialog title="添加课程目录" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="系列名称:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_Name"></el-input>
          </el-form-item>
          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.data.ed_ss_WriteState" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否收费:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.data.ed_ss_GetFee" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="系列图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">系列图片
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <img v-lazy="addOptions.data.ed_ss_SeriesImageURL" v-show="addOptions.data.ed_ss_SeriesImageURL" width="128" height="80">
          </el-form-item>
          <el-form-item label="系列描述:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_Describ"></el-input>
          </el-form-item>
          <el-form-item label="系列价格:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_Price"></el-input>
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
          <el-form-item label="系列名称:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.ed_ss_Name"></el-input>
          </el-form-item>
          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-select v-model="updateObj.ed_ss_WriteState" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否收费:" :label-width="formLabelWidth">
            <el-select v-model="updateObj.ed_ss_GetFee" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="系列图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">系列图片
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <img v-lazy="addOptions.data.ed_ss_SeriesImageURL" v-show="addOptions.data.ed_ss_SeriesImageURL" width="128" height="80">
          </el-form-item>
          <el-form-item label="系列描述:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.ed_ss_Describ"></el-input>
          </el-form-item>
          <el-form-item label="系列价格:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.ed_ss_Price"></el-input>
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
  import {getNewStr} from '@/assets/js/public'
  export default{
    name: '',
    data(){
      return {
        siteNum:'',
        total:0,
        value:'',
        value1:'',
        updateObj:{},
        updateDialog:false,
        isLoading: false,
        addDialog: false,
        formLabelWidth: '120px',
        options: [{
          value: '0',
          label: '连载中'
        }, {
          value: '1',
          label: '完结'
        }],
        options1:[{
          value1: '0',
          label: '不收费'
        }, {
          value1: '1',
          label: '要收费'
        }],
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_ss_Name": "",//系列名称
            "ed_ss_WriteState":'',//连载状态（0连载中1完结)
            "ed_ss_SeriesImageURL": "",//系列图片
            "ed_ss_Describ": "",//系列描述
            "ed_ss_AuthorID": '1',//作者
            "ed_ss_Price": "",//系列价格
            "ed_ss_GetFee": "",//是否收费（0不收费，1要收费）
          }
        },
      }
    },
    computed: mapGetters([
      'adminEducationCourseList'
    ]),
    created(){
      this.initData(this.siteNum)
    },
    methods: {
      uploadToOSS(file) {
        return new Promise((relove, reject) => {
          var fd = new FormData();
          fd.append("fileToUpload", file);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", getNewStr + "/OSSFile/PostToOSS");
          xhr.send(fd);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              if (xhr.responseText) {
                var data = xhr.responseText
                relove(JSON.parse(data))
              }
            } else {
            }
          }
        })
      },
      uploaNode() {
        this.addOptions.data.ed_ss_SeriesImageURL = '';
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadToOSS(this.$refs.upload.files[i])
                  .then(data => {
                    if (data) {
                      this.addOptions.data.ed_ss_SeriesImageURL = data.data;
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
          // if (this.$refs.upload1) {
          //
          //   this.$refs.upload1.addEventListener('change', data => {
          //
          //     for (var i = 0; i < this.$refs.upload.files.length; i++) {
          //       this.uploadToOSS(this.$refs.upload.files[i])
          //         .then(data => {
          //           if (data) {
          //               this.updateObj.ed_ss_SeriesImageURL = '';
          //               this.updateObj.ed_ss_SeriesImageURL = data.data;
          //           } else {
          //             this.$notify({
          //               message: '图片地址不存在!',
          //               type: 'error'
          //             });
          //           }
          //         })
          //     }
          //   })
          // }
        }, 30)
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
          "ed_ss_ID": id,//系列编号
          "ed_ss_Name": "",//系列名称
          "ed_ss_WriteState": "",//连载状态（0连载中1完结)
          "ed_ss_SeriesImageURL": "",//系列图片
          "ed_ss_AuthorID": "1",//作者
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.$store.dispatch('initEducationCourseList',options)
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
      //添加
      Add(){
        this.addDialog= true,
        this.uploaNode()


      },
      //添加提交
      addSubmit() {
        this.$store.dispatch('addEducationCourseList', this.addOptions)
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
        this.updateObj=obj,
        this.uploaNode()
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
        this.$store.dispatch('updateEducationCourseList', updateOption)
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
            "ed_ss_ID": id,//系列编号
          }
        };
        this.$store.dispatch('deleteEducationCourseList',deleteOptions)
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
