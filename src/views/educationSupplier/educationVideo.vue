<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">教育视频</h1>

      <!--数据搜索-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>视频筛选:</span>
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
            <el-button type="primary" @click="Add" size="mini">新增审核视频</el-button>
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
                <span>{{ props.row.ed_vo_ID }}</span>
              </el-form-item>
              <el-form-item label="视频时长:">
                <span>{{ props.row.ed_vo_Time }}秒</span>
              </el-form-item>
              <el-form-item label="视频大小:">
                <span>{{ props.row.ed_vo_Size}}MB</span>
              </el-form-item>
              <el-form-item label="文件扩展名:">
                <span>{{ props.row.ed_vo_Extend}}</span>
              </el-form-item>
              <el-form-item label="视频文件地址:">
                <video :src="props.row.ed_vo_FileURL" width="320" height="240" controls="controls"></video>
              </el-form-item>
              <el-form-item label="作者ID:">
                <span>{{ props.row.ed_vo_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="视频标题:">
                <span>{{ props.row.ed_vo_Title}}</span>
              </el-form-item>
              <el-form-item label="视频图片:">
                <img v-lazy="props.row.ed_vo_ImageURL" width="120" height="80" >
                <!--<span>{{ props.row.ed_ve_Content.ed_vo_ImageURL}}</span>-->
              </el-form-item>
              <el-form-item label="首页大图:">
                <img v-lazy="props.row.ed_vo_ImageURL" width="120" height="80" >
                <!--<span>{{ props.row.ed_ve_Content.ed_vo_TomImageURL}}</span>-->
              </el-form-item>
              <el-form-item label="创建时间:">
                <span>{{ props.row.ed_vo_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="适合人群:">
                <span>{{ props.row.ed_vo_Crowd}}</span>
              </el-form-item>
              <el-form-item label="学习目标:">
                <span>{{ props.row.ed_vo_Target}}</span>
              </el-form-item>
              <el-form-item label="视频简介:">
                <span>{{ props.row.ed_vo_Introduce}}</span>
              </el-form-item>
              <el-form-item label="视频详情:">
                <span>{{ props.row.ed_vo_Remark}}</span>
              </el-form-item>
              <el-form-item label="视频作者:">
                <span>{{ props.row.ed_vo_AuthorName}}</span>
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
          label="视频编码"
          align="center"
          prop="ed_vo_ID">
        </el-table-column>
        <el-table-column
          align="center"
          label="视频名称"
          prop="ed_vo_Title">
        </el-table-column>
        <el-table-column
          label="审核创建时间"
          align="center"
          prop="ed_vo_CreateTime">
          <template slot-scope="props">
            <span>{{props.row.ta_tg_CreateDateTime | getUseTime}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作"   align="center">
          <template slot-scope="scope">
<!--            <el-button
              size="mini"
              type="primary"
              v-show="scope.row.ed_vo_Recommend==3"
              @click="Check(scope.row.ed_vo_ID)">申请推荐
            </el-button>-->
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

      <!--添加-->
      <el-dialog title="添加审核视频" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="选择所属课程:" :label-width="formLabelWidth">
            <el-select v-model="addCourse" placeholder="选择所属课程">
              <el-option
                v-for="item,index in educationCourseList"
                :key="item.ed_ss_ID"
                :label="item.ed_ss_IDName"
                :value="item.ed_ss_ID"
              ></el-option>
            </el-select>
          </el-form-item>
<!--          <el-form-item label="视频类型: " :label-width="formLabelWidth">
            <el-cascader
              :options="selectTypeInfo"
              v-model="selectedOptions"
              :show-all-levels="false"
              @change="handleChange1"
            >
            </el-cascader>
          </el-form-item>-->
          <el-form-item label="请选择视频:" :label-width="formLabelWidth">
            <span>视频不超过600M</span>
            <Upload @getData="passVideo" :attrs="videoObj" @getFile="getFile"></Upload>
          </el-form-item>
          <el-form-item  :label-width="formLabelWidth">
            <video :src="addOptions.data.ed_ve_Content.ed_vo_FileURL" controls="controls" width="200px" height="100px"></video>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Title" placeholder="请输入标题" ></el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <Upload @getData="getDataImgOne" :attrs="imageOne"></Upload>
            <div class="imgWap">
              <p v-for="item,index in ImageURL1"
                 style="display: inline-block;position: relative;margin-right: 70px">
                <span style="color: #f60" @click="deleteImageURLOne(item)">X</span>
                <em>
                  <el-radio v-model="radioIndexOne" :label="index+1">替换</el-radio>
                </em>
                <img
                  :src="item"
                  width="280"
                  height="125"
                  v-show="ImageURL1.length"
                >
              </p>
            </div>
<!--            <a href="javascript:;" class="file">视频图片
              <input type="file" name="" ref="upload1" accept="image/*" multiple>
            </a>
            <img v-lazy="addOptions.data.ed_ve_Content.ed_vo_ImageURL" v-show="addOptions.data.ed_ve_Content.ed_vo_ImageURL" width="128" height="80">
          -->
          </el-form-item>
          <el-form-item label="适合人群:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Crowd" placeholder="请输入适合人群" ></el-input>
          </el-form-item>
          <el-form-item label="学习目标:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Target" placeholder="请输入学习目标" ></el-input>
          </el-form-item>
          <el-form-item label="视频简介:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Introduce" placeholder="请输入视频简介" ></el-input>
          </el-form-item>
          <el-form-item label="视频详情:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_Remark" placeholder="请输入视频详情" ></el-input>
          </el-form-item>

          <el-form-item label="所在系列的第几集（整数）:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ed_ve_Content.ed_vo_collection" placeholder="请输入所在系列的第几集（整数）" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getNewStr} from '@/assets/js/public'
  import Upload from '@/components/Upload'
  export default{
    name: '',
    components: {
      Upload
    },
    data(){
      return {
        input:'',
        isShow:false,
        addCourse:'',//所属课程
        value: '',
        total:0,
        isLoading:'',
        updateDialog:false,
        selectedOptions:[],
        updateVideo:'',//修改视频播放
        updateFilm: '',

        addDialog:false,
        updateObj:{
          "ed_vo_ID":'',
          "ed_vo_Time": '',
          "ed_vo_Size": '',
          "ed_vo_Extend": "",
          "ed_vo_FileURL": "",
          "ed_vo_AuthorID": '',
          "ed_te_Type": '',
          "ed_vo_Title": "",
          "ed_vo_ImageURL": "",
          "ed_vo_TomImageURL": "",
          "ed_vo_CreateTime": "",
          "ed_vo_PasserID": '',
          "ed_vo_ValidateTime": "",
          "ed_vo_Introduce": "",
          "ed_vo_Remark": "",
          "ed_vo_Crowd": "",
          "ed_vo_Target": "",
          "ed_vo_Recommend": ''

        },
        addVideoSrc:'',
        formLabelWidth:'120px',
        ImageURL1:[],
        ImageURL2:[],
        isNewUploaNodeOne: true,
        isNewUploaNodeTwo: true,
        radioIndexOne:'0',
        radioIndexTwo:'0',
        videoObj: {
          accept: 'video/*'
        },
        imageOne: {accept: 'image/*'},
        imageTwo: {accept: 'image/*'},

        addOptions:{
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "token":"",
          "data": {
            "ed_vo_AuthorID": "",  //作者
            "ed_ve_Content": {  //审核表内容
              // "ed_vo_ID": "",//视频编号（添加视频时传空，修改视频时传入视频编号）
              "ed_vo_Time": "",  //时长（秒）
              "ed_vo_Size": "",  //大小（MB）
              "ed_vo_Extend": "",  //文件扩展名
              "ed_vo_FileURL": "",  //文件地址
              "ed_vo_Title": "",  //标题
              "ed_vo_ImageURL": "",  //视频图片
              "ed_vo_Introduce": "",                           //简介
              "ed_vo_Remark": "",                        //详情
              "ed_vo_Crowd": "",                 //适合人群
              "ed_vo_Target": "",                      //学习目标
              "ed_vo_SeriesID": "",                                              //所属课程编码
              "ed_vo_collection": "",                                            //所在系列的第几集（整数）
            }
          }

        },
      }
    },
    computed: mapGetters([
      'adminEducationAuditList',
      'selectTypeInfo',
      'educationCourseList',//课程
    ]),
    created(){

      this.initSelectTypeInfo()
      let admin = JSON.parse(sessionStorage.getItem('admin'));
      this.addOptions.data.ed_vo_AuthorID = admin.sm_ui_ID;
      if(admin){
        this.admin = admin;
        this.initData(this.input)
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
      //视频推荐申请
      Check(id){
        let option = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "ed_vo_ID": id,                                 //申请推荐的视频编码
          "ed_vo_Recommend": "1",                      //是否推荐(0未推荐，1申请推荐，2通过推荐)
        };
        this.$store.dispatch("vedioRecomentApply",option)
          .then(
            (suc)=>{
              this.$notify({
                type:suc,
                message:'推荐申请成功'
              });
              this.initData();
            },
            (err)=>{
              this.$notify({
                type:err,
                message:"error"
              });
            }
          );

      },
      //查询课程
      searchCourse(){
        let authorId = JSON.parse(sessionStorage.getItem("admin")).sm_ui_ID;
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
          "es_ss_Recommend":"",  //推荐首页大图（3未推荐，1申请推荐中，2以通过推荐申请）
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
      //获取添加视频文件
      getFile(file){
        console.log(111,file)
        //获取文件扩展名称
        this.addOptions.data.ed_ve_Content.ed_vo_Extend=file.fileType.split("/")[1];
        //获取文件大小
        console.log(222,(file.size/1024/1024).toFixed(2))
        this.addOptions.data.ed_ve_Content.ed_vo_Size=(file.size/1024/1024).toFixed(0);
      },
      //初始化视频数据
      initData(page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "ed_vo_ID":'',//视频编号
          "ed_vo_AuthorID":this.admin.sm_ui_ID,//作者ID
          "ed_vo_Type": "",//视频类型
          "ed_vo_PasserID": "",//审核人编码
          "page":page?page: 1,//页码
          "rows": 5//条数
        };
        this.isLoading = true;
        this.$store.dispatch("initAdminEducationVideo", options)
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
      //添加视频图片
      getDataImgOne(data) {
        if (!this.radioIndexOne) {
          this.ImageURL1.push(data.data);
        } else {
          this.ImageURL1.splice(this.radioIndexOne - 1, 1, data.data);
          this.radioIndexOne = '';
        }
        this.addOptions.data.ed_ve_Content.ed_vo_ImageURL = this.ImageURL1[0];
      },
      //删除视频图片
      deleteImageURLOne(val){
        this.isNewUploaNodeOne = false
        this.ImageURL1 = this.ImageURL1.filter(v => {
          if (v == val) {
            return false
          }
          return true
        })
      },
      //添加首页图片
      getDataImgTwo(data) {
        if (!this.radioIndexTwo) {
          this.ImageURL2.push(data.data);
        } else {
          this.ImageURL2.splice(this.radioIndexTwo - 1, 1, data.data);
          this.radioIndexTwo = '';
        }
      },
      //删除首页图片
      deleteImageURLTwo(val){
        this.isNewUploaNodeTwo= false
        this.ImageURL2 = this.ImageURL2.filter(v => {
          if (v == val) {
            return false
          }
          return true
        })
      },
      //视频上传
      passVideo(data) {
        //上传成功后获取视频地址
        this.addOptions.data.ed_ve_Content.ed_vo_FileURL = data.data;
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
        this.initData();
      },
      handleChange1(value){
        this.selectedOptions =value;
        this.addOptions.data.ed_ve_Type =this.selectedOptions[value.length-1]
      },
      //分页
      handleCurrentChange(num) {
        this.initData(num)
      },
      //教育视频审核查询
      search(){
        this.initData()
      },
      //添加审核视频
      Add(){
        this.searchCourse()
        this.addDialog=true;
        this.$store.commit("setTranstionFalse");
      },
      // 添加提交
      addSubmit() {
        this.addOptions.data.ed_ve_Content.ed_vo_SeriesID = this.addCourse;
        console.log( this.addOptions);
        this.$store.dispatch('addAdminEducationAuditVideo', this.addOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.addDialog = false;
      },
      //删除
      Delete(id){
        console.log('id:',id);
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "data": {
            "ed_vo_ID": id,//视频编号
          }
        };
        console.log('deleteOptions:',deleteOptions);
        this.$store.dispatch('DeleteAdminEducationAuditVideo',deleteOptions)
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
  .imgWap span {
    position: absolute;
    right: -15px;
    top: -6px;
  }
  .imgWap em {
    position: absolute;
    right: -55px;
    top: 30px;
    font-style: normal;
    color: #42b983;
  }
</style>
