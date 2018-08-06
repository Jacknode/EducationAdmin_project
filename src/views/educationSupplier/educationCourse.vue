<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">教育课程管理</h1>
      <!--数据搜索-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">

          <el-form-item>
            <span>课程筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入内容"
              v-model="input"
            >
            </el-input>
          </el-form-item>

          <el-form-item>
            <span>首页大图筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="homePageBigImage" placeholder="请选择首页大图推荐课程名称">
              <el-option
                v-for="item in statesList"
                :key="item.stateId"
                :label="item.stateName"
                :value="item.stateId">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="search" size="mini">查询</el-button>
            <el-button type="primary" @click="Add" size="mini">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->
      <el-table
        :data="educationCourseList"
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
                <span>{{ props.row.ed_ss_Name }}秒</span>
              </el-form-item>
              <el-form-item label="连载状态:">
                <span>{{ props.row.ed_ss_WriteState}}KB</span>
              </el-form-item>
              <el-form-item label="课程首页大图:">
                <span>{{ props.row.ed_ss_SeriesImageURL}}</span>
              </el-form-item>
              <el-form-item label="作者编码:">
                <span>{{ props.row.ed_ss_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="课程价格:">
                <span>{{ props.row.ed_ss_Price}}</span>
              </el-form-item>
              <el-form-item label="是否收费:">
                <span>{{ props.row.ed_ss_GetFee }}</span>
              </el-form-item>
              <el-form-item label="创建时间:">
                <span>{{ props.row.ed_ss_CreateTime }}</span>
              </el-form-item>
              <el-form-item label="完载时间:">
                <span>{{ props.row.ed_ss_OverTime }}</span>
              </el-form-item>
              <el-form-item label="更新时间:">
                <span>{{ props.row.ed_ss_UpdateTime }}</span>
              </el-form-item>
              <el-form-item label="分类编码:">
                <span>{{ props.row.ed_SS_Type }}</span>
              </el-form-item>
              <el-form-item label="作者名称:">
                <span>{{ props.row.ed_vo_AuthorName }}</span>
              </el-form-item>
              <el-form-item label="推荐首页大图:">
                <span>{{ props.row.ed_ss_Recommend }}</span>
              </el-form-item>




            </el-form>
          </template>
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
          align="center"
          label="课程价格"
          prop="ed_ss_Price">
        </el-table-column>

        <el-table-column label="操作"   align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="apply(scope.row)">申请为首页大图
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="Update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_vo_ID)">删除
            </el-button>

          </template>
        </el-table-column>
      </el-table>

      <!--添加-->
      <el-dialog title="添加课程" :visible.sync="addDialog">
        <el-form :model="addOptions">
           <el-form-item label="课程名称:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_Name" placeholder="请输入课程名称" ></el-input>
          </el-form-item>
          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_WriteState" placeholder="请输入连载状态" ></el-input>
          </el-form-item>
          <el-form-item label="课程图片:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_SeriesImageURL" placeholder="请输入课程图片" ></el-input>
          </el-form-item>
          <el-form-item label="作者编码:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_AuthorID" placeholder="请输入作者编码" ></el-input>
          </el-form-item>
          <el-form-item label="课程价格:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ss_Price" placeholder="请输入课程价格" ></el-input>
          </el-form-item>
          <el-form-item label="是否收费:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ed_ss_GetFee" placeholder="请输入是否收费" ></el-input>
        </el-form-item>
          <el-form-item label="课程分类编号:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_SS_Type" placeholder="请输入课程分类编号" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改-->
      <el-dialog title="修改课程" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="课程编号:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_ID" placeholder="请输入课程编号"></el-input>
          </el-form-item>
          <el-form-item label="课程名称:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_Name" placeholder="请输入课程名称"></el-input>
          </el-form-item>
          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_WriteState" placeholder="请输入连载状态"></el-input>
          </el-form-item>
          <el-form-item label="课程图片:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_SeriesImageURL" placeholder="请输入课程图片"></el-input>
          </el-form-item>
          <el-form-item label="作者编码:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_AuthorID" placeholder="请输入作者编码"></el-input>
          </el-form-item>
          <el-form-item label="课程价格:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_Price" placeholder="请输入作者编码"></el-input>
          </el-form-item>
          <el-form-item label="是否收费:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_GetFee" placeholder="请输入是否收费"></el-input>
          </el-form-item>
          <el-form-item label="课程分类编号:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_SS_Type" placeholder="请输入课程分类编号"></el-input>
          </el-form-item>
<!--          <el-form-item label="设施类型选择:" :label-width="formLabelWidth">
            <el-select v-model="updateHotelFacilitiesObj.ht_hd_HardTypeID" placeholder="请选择" size="small">
              <el-option
                v-for="item in hotelFacilitiesTypeAllList"
                :key="item.ht_ht_ID"
                :label="item.ht_ht_Name"
                :value="item.ht_ht_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设施名称:" :label-width="formLabelWidth">
            <el-input v-model="updateHotelFacilitiesObj.ht_hd_Name" placeholder="请输入设施名称"></el-input>
          </el-form-item>
          <el-form-item label="是否热门:" :label-width="formLabelWidth">
            <el-switch
              v-model="updateHotelFacilitiesObj.ht_hd_IsHot"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="1"
              inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="updateHotelFacilitiesObj.ht_hd_Remark" placeholder="请输入备注"></el-input>
          </el-form-item>-->
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
        homePageBigImage:'',//首页大图
        value: '',
        total:0,
        isLoading:'',
        updateDialog:false,
        selectedOptions:[],
        updateVideo:'',//修改视频播放
        updateFilm: '',
        addDialog:false,
        statesList:[
          {
            stateId:0,
            stateName:"未推荐",
          },
          {
            stateId:1,
            stateName:"申请推荐中",
          },
          {
            stateId:2,
            stateName:"已推荐",
          },
        ],
        updateObj:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "data": {
            "ed_ss_ID": "27",//课程编号
            "ed_ss_Name": "环宇大信息，C#",//课程名称
            "ed_ss_WriteState": "0",//连载状态（0连载中1完结)
            "ed_ss_SeriesImageURL": "http://pic1.win4000.com/wallpaper/d/591972f25e781.jpg",//课程图片
            "ed_ss_AuthorID": "22",//作者编码
            "ed_ss_Price": "9527",//课程价格
            "ed_ss_GetFee": "1",//是否收费（0不收费，1要收费）
            "ed_SS_Type": "32",//课程分类编号
          }

        },
        addVideoSrc:'',
        formLabelWidth:'120px',
        ImageURL:[],
        ImageURL1:[],
        ImageURL2:[],
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "data": {
            "ed_ss_Name": "环宇大信息，C#",//课程名称
            "ed_ss_WriteState": "0",//连载状态（0连载中1完结)
            "ed_ss_SeriesImageURL": "http://pic1.win4000.com/wallpaper/d/591972f25e781.jpg",//课程图片
            "ed_ss_AuthorID": "22",//作者编码
            "ed_ss_Price": "8848",//课程价格
            "ed_ss_GetFee": "1",//是否收费（0不收费，1要收费）
            "ed_SS_Type": "32",//课程分类编号
          }

        },
      }
    },
    computed: mapGetters([
      'adminEducationAuditList',
      'selectTypeInfo',
      'educationCourseList',
    ]),
    created(){
      this.initSelectTypeInfo()
      let admin = JSON.parse(sessionStorage.getItem('admin'));
      console.log(admin)

      if(admin){
        this.admin = admin;
        this.initData(this.input)
      }else{
        this.$notify({
          message: '请先登录@！',
          type: "error"
        });
        this.$router.push({name:'Login'});
        return;
      }
    },
    methods: {
      apply(){
        alert("good");
      },
      initSelectTypeInfo(){
        let options1 = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vt_ID":0
          , //视频类型
        };
        return this.$store.dispatch('initSelectTypeInfo',options1)
        this.initData(this. siteNum)
      },
      handleChange1(value){
        this.selectedOptions =value;
        this.addOptions.data.ed_ve_Type =this.selectedOptions[value.length-1]
      },
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
            }
          }
        })
      },
      //图片上传
      uploaNode() {
        this.addOptions.data.ed_ve_Content.ed_vo_FileURL= '';
        setTimeout(() => {
          //添加图片
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
          //添加图片
          if (this.$refs.upload2) {
            this.addOptions.data.ed_ve_Content.ed_vo_TomImageURL= '';
            this.$refs.upload2.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
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
      //添加上传视频
      uploadFile() {
        this.addVideoSrc='';
        var fd = new FormData();
        if(this.$refs.upload.files[0]){
          //获取文件
          var file =this.$refs.upload.files[0];
          //获取文件大小
          var fileSize = this.$refs.upload.files[0].size;
          fileSize=parseInt(fileSize/1024*100/100); //单位为KB
          this.addOptions.data.ed_ve_Content.ed_vo_Size=fileSize;
          var str =this.$refs.upload.files[0].name;
          //获取文件名
          this.addOptions.data.ed_ve_Content.ed_vo_Extend=str.split(".")[1];
          fd.append("fileToUpload",this.$refs.upload.files[0]);
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4 && xhr.status == 200)
            //给视频赋值
              if(xhr.responseText){
                this.addVideoSrc=JSON.parse(xhr.responseText).data;
                this.addOptions.data.ed_ve_Content.ed_vo_FileURL=this.addVideoSrc;
              };
            //获取时长
            var e =document.getElementById("addVideo");
            setTimeout(()=>{
              if(isNaN(e.duration)){
                this.addOptions.data.ed_ve_Content.ed_vo_Time = '';
              }else{
                this.addOptions.data.ed_ve_Content.ed_vo_Time=parseInt(e.duration).toString();
              }
            },1000);
          };
          xhr.open("POST", getNewStr+"/OSSFile/PostToOSS",true);
          xhr.send(fd);
        }else {
          alert("请选择上传视频")
        };
      },
      //分页
      handleCurrentChange(num) {
        this.initData(this.input,num)
      },
      //初始化课程
      initData(id,page) {
        let authorId = JSON.parse(sessionStorage.getItem("admin")).sm_ui_ID;
        console.log(authorId)
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "page": "1",
          "rows": "10",
          "ed_ss_ID": "",//课程编号
          "ed_ss_Name": "",//课程名称
          "ed_ss_WriteState": "",//连载状态（0连载中1完结)
          "ed_ss_AuthorID": authorId?authorId:"",//作者
          // "ed_ss_Price": "1",//课程价格
          "ed_ss_GetFee": "",//是否收费（0不收费，1要收费）
          "ed_SS_Type": "",//分类编号
          "es_ss_Recommend":-1,  //推荐首页大图（0未推荐，1申请推荐中，2以通过推荐申请）
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
        this.initData(this.input)
      },
      //添加审核视频
      Add(){
        this.addDialog=true;
        this.$store.commit("setTranstionFalse");

//          this.uploaNode();
        // this.intTypeData();
      },
      // 添加提交
      addSubmit() {
        console.log(this.addOptions)
        this.$store.dispatch('addEducationCourseAction', this.addOptions)
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
      //修改
      Update(obj){
        console.log(obj);
        this.updateDialog=true;
        this.$store.commit("setTranstionFalse");
      },
      //修改提交
      updateSubmit(){
        console.log(this.updateObj);
        this.$store.dispatch('updateEducationCouseAction',this.updateObj)
          .then((suc)=>{
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.facilitiesName,1)
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.updateDialog=false;

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
            "ed_vo_ID": id,//审核表编号
          }
        }
/*        this.$store.dispatch('DeleteAdminEducationAuditVideo',deleteOptions)
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
          });*/
      },
    },
  }
</script>
<style scoped>
</style>
