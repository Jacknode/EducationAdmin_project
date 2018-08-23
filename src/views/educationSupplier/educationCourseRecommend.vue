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
                <span>{{ props.row.ed_ss_IDName }}</span>
              </el-form-item>
              <el-form-item label="连载状态:">
                <span>{{ props.row.ed_ss_WriteState | getEducationCourseWriteState}}</span>
              </el-form-item>
              <el-form-item label="课程首页大图:">
                <img :src="props.row.ed_ss_SeriesImageURL" alt="" style="height: 50px;width: 100px">
              </el-form-item>
              <el-form-item label="课程价格:">
                <span>{{ props.row.ed_ss_Price}}</span>
              </el-form-item>
<!--              <el-form-item label="是否收费:">
                <span>{{ props.row.ed_ss_GetFee | getEducationCourseCharge}}</span>
              </el-form-item>-->
              <el-form-item label="创建时间:">
                <span>{{ props.row.ed_ss_CreateTime }}</span>
              </el-form-item>
              <el-form-item label="完载时间:">
                <span>{{ props.row.ed_ss_OverTime }}</span>
              </el-form-item>
              <el-form-item label="更新时间:">
                <span>{{ props.row.ed_ss_UpdateTime }}</span>
              </el-form-item>
              <el-form-item label="课程分类名称:">
                <span>{{ props.row.ed_ss_Typename }}</span>
              </el-form-item>
              <el-form-item label="作者名称:">
                <span>{{ props.row.ed_vo_AuthorName }}</span>
              </el-form-item>
              <el-form-item label="推荐首页大图:">
                <span>{{ props.row.es_ss_Recommend | getEducationCourseHomepageBigImageRecomentStates}}</span>
              </el-form-item>
              <el-form-item label="课程推荐状态:">
                <span>{{ props.row.ed_ss_Course | getEducationCourseRecomentStates}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          label="课程名称"
          align="center"
          prop="ed_ss_IDName">
        </el-table-column>
        <el-table-column
          align="center"
          label="课程推荐审核状态"
          prop="ed_ss_Course">
          <template slot-scope="scope">
            {{scope.row.ed_ss_Course | getEducationCourseRecomentStates}}
          </template>
        </el-table-column>

        <el-table-column label="操作"   align="center">
          <template slot-scope="scope">
            <el-button
              v-show="scope.row.ed_ss_Course==3"
              size="mini"
              type="primary"
              @click="apply(scope.row)">课程推荐申请
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="Update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.ed_ss_ID)">删除
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
<!--          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-switch
              v-model="writeState"
              active-text="连载中"
              inactive-text="完结"
              active-value="0"
              inactive-value="1">
            </el-switch>
          </el-form-item>-->
          <el-form-item label="课程图片:" :label-width="formLabelWidth">
            <span>图片不超过600KB,且只上传一张图片</span>
            <Upload @getData="getData" :attrs="imageObj"></Upload>
            <div class="imgWap">
              <p v-for="item,index in ImageURL"
                 style="display: inline-block;position: relative;margin-right: 70px">
                <span style="color: #f60" @click="deleteImageURLOne(item)">X</span>
                <em>
                  <el-radio v-model="radioIndex" :label="index+1">替换</el-radio>
                </em>
                <img
                  :src="item"
                  width="280"
                  height="125"
                  v-show="ImageURL.length">
              </p>
            </div>
          </el-form-item>
          <el-form-item label="课程价格:" :label-width="formLabelWidth">
            <el-input  type="number" v-model="addOptions.data.ed_ss_Price" placeholder="请输入课程价格" ></el-input>
          </el-form-item>
<!--          <el-form-item label="是否收费:" :label-width="formLabelWidth">
            <el-switch
              v-model="isCharge"
              active-text="收费"
              inactive-text="免费"
              active-value="0"
              inactive-value="1">
            </el-switch>
          </el-form-item>-->
          <el-form-item label="课程分类名称: " :label-width="formLabelWidth">
            <el-cascader
              :options="selectTypeInfo"
              v-model="selectedOptions"
              :show-all-levels="false"
              @change="handleChange1"
            >
            </el-cascader>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--申请首页大图-->
<!--      <el-dialog title="申请" :visible.sync="applyDialog">
        &lt;!&ndash;        <el-form :model="approvalObj">
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
                </el-form>&ndash;&gt;
        <div slot="footer" class="dialog-footer">
          <el-button @click="applyDialog = false">取 消</el-button>
          <el-button type="primary" @click="applySubmit">确 定</el-button>
        </div>
      </el-dialog>-->

      <!--修改-->
      <el-dialog title="修改课程" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="课程编号:" :label-width="formLabelWidth" >
            <el-input v-model="updateObj.data.ed_ss_ID" :disabled='isDisabled' placeholder="请输入课程编号"></el-input>
          </el-form-item>
          <el-form-item label="课程名称:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_Name" placeholder="请输入课程名称"></el-input>
          </el-form-item>
<!--          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_WriteState" placeholder="请输入连载状态"></el-input>
          </el-form-item>-->
          <el-form-item label="连载状态:" :label-width="formLabelWidth">
            <el-switch
              v-model="writeState"
              active-text="连载中"
              inactive-text="完结"
              active-value="0"
              inactive-value="1">
            </el-switch>
          </el-form-item>
          <el-form-item label="课程图片:" :label-width="formLabelWidth">
            <span>图片不超过600KB,且只上传一张图片</span>
            <Upload @getData="updateGetData" :attrs="imageObj"></Upload>
            <div class="imgWap">
              <p v-for="item,index in updateImageURL"
                 style="display: inline-block;position: relative;margin-right: 70px">
                <span style="color: #f60" @click="updateDeleteImageURLOne(item)">X</span>
                <em>
                  <el-radio v-model="updateRadioIndex" :label="index+1">替换</el-radio>
                </em>
                <img
                  :src="item"
                  width="280"
                  height="125"
                  v-show="updateImageURL.length">
              </p>
            </div>
          </el-form-item>
<!--          <el-form-item label="作者编码:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_AuthorID" placeholder="请输入作者编码"></el-input>
          </el-form-item>-->
          <el-form-item label="课程价格:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_Price" placeholder="请输入作者编码"></el-input>
          </el-form-item>
<!--          <el-form-item label="是否收费:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.data.ed_ss_GetFee" placeholder="请输入是否收费"></el-input>
          </el-form-item>-->
          <el-form-item label="课程分类名称: " :label-width="formLabelWidth">
            <el-cascader
              :options="selectTypeInfo"
              v-model="updateSelectedOptions"
              :show-all-levels="false"
              @change="updateHandleChange1"
            >
            </el-cascader>
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
  import Upload from '@/components/Upload'
  export default{
    name: '',
    components: {
      Upload
    },
    data(){
      return {
        num:'1',//当前页
        //作者
        author:'',
        //图片格式
        imageObj: {
          accept: 'image/*'
        },
        applyDialog:false,//申请首页大图
        radioIndex:'',
        updateRadioIndex:'',
        //是否禁用
        isDisabled: true,
        isCharge:'',//是否收费
        input:'',
        arr1:[],
        vShow0:'3',
        vShow: false,
        homePageBigImage:'',//首页大图
        value: '',
        total:0,
        isLoading:'',
        updateDialog:false,
        selectedOptions:[],
        updateSelectedOptions:[],
        updateVideo:'',//修改视频播放
        updateFilm: '',
        addDialog:false,
        writeState:'',
        updateImageURL:[],//修改图片地址
        applyOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "ed_ss_ID": "",                                 //申请推荐的课程编码
          "ed_ss_Course": "1",                          //是否推荐(3未推荐，1申请推荐，2通过推荐)
        },//申请提交对象
        statesList:[
          {
            stateId:3,
            stateName:"未推荐的首页大图",
          },
          {
            stateId:1,
            stateName:"申请推荐中的首页大图",
          },
          {
            stateId:2,
            stateName:"已推荐的首页大图",
          },
        ],
        isNewUploaNodeOne: true,
        updateIsNewUploaNodeOne: true,
        updateObj:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "data": {
            "ed_ss_ID": "",//课程编号
            "ed_ss_Name": "",//课程名称
            "ed_ss_WriteState": "",//连载状态（0连载中1完结)
            "ed_ss_SeriesImageURL": "",//课程图片
            "ed_ss_AuthorID": "",//作者编码
            "ed_ss_Price": "",//课程价格
            "ed_SS_Type": "",//课程分类编号
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
            "ed_ss_Name": "",//课程名称
//            "ed_ss_WriteState": "",//连载状态（0连载中1完结)
            "ed_ss_SeriesImageURL": "",//课程图片
            "ed_ss_AuthorID": "",//作者编码
            "ed_ss_Price": "",//课程价格
            "ed_SS_Type": "",//课程分类编号
          }

        },
      }
    },
    computed: mapGetters([
      'adminEducationAuditList',
      'selectTypeInfo',//查询所有课程类型
      'educationCourseList',
      'educationTypeManagement',//教育课程类型
      'selectTypeAllInfo',//教育所有课程类型
    ]),
    created(){
      this.initSelectTypeInfo()
      let admin = JSON.parse(sessionStorage.getItem('admin'));
      this.author=admin.sm_ui_ID;
      if(admin){
        this.admin = admin;
        this.initData(this.input,this.homePageBigImage,this.num)
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
      //查询课程分类
      searchCourseType(){
        let options1 = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "token":"",
        };
        return this.$store.dispatch('initSelectTypeAllInfo', options1)
      },
      //图片上传
      getData(data) {
        if (!this.radioIndex) {
          this.ImageURL.push(data.data);
        } else {
          this.ImageURL.splice(this.radioIndex - 1, 1, data.data);
          this.radioIndex = '';
        }
      },
      //修改图片上传
      updateGetData(data) {
        if (!this.updateRadioIndex) {
          this.updateImageURL.push(data.data);
        } else {
          this.updateImageURL.splice(this.updateRadioIndex - 1, 1, data.data);
          this.updateRadioIndex = '';
        }
      },
      //删除视频图片
      deleteImageURLOne(val){
        this.isNewUploaNodeOne = false;
        this.ImageURL1 = this.ImageURL1.filter(v => {
          if (v == val) {
            return false
          }
          return true
        })
      },
      //修改删除视频图片
      updateDeleteImageURLOne(val){
        this.isNewUploaNodeOne = false;
        this.updateImageURL = this.updateImageURL.filter(v => {
          if (v == val) {
            return false
          }
          return true
        })
      },
      //申请成为首页大图
      apply(obj){
        this.applyOptions.ed_ss_ID=obj.ed_ss_ID;
        this.$store.dispatch("applyEducationHomePageBigImage", this.applyOptions)
          .then((suc) => {
            this.$notify({
              message: suc,
              type: "success"
            });
            this.initData(this.input,this.homePageBigImage,this.num)
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      //初始化课程所有类型信息
      initSelectTypeInfo(){
        let options1 = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",//机器码
          "ed_vt_ID":0
          , //视频类型
        };
        return this.$store.dispatch('initSelectTypeInfo',options1);
        this.initData(this.input,this.homePageBigImage,this.num)
      },
      handleChange1(value){
        this.selectedOptions =value;
        this.addOptions.data.ed_SS_Type =this.selectedOptions[value.length-1];
      },
      updateHandleChange1(value){
        console.log('value:',value);
        this.updateSelectedOptions=[];
        this.updateSelectedOptions =value;
        this.updateObj.data.ed_SS_Type =this.updateSelectedOptions[value.length-1];
      },
      //分页
      handleCurrentChange(num) {
        this.num=num;
        this.initData(this.input,this.homePageBigImage,num)
      },
      //初始化课程
      initData(course,bigImage,page) {
        let authorId = JSON.parse(sessionStorage.getItem("admin")).sm_ui_ID;
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "page": page?page:"1",
          "rows": "5",
          "ed_ss_ID": "",//课程编号
          "ed_ss_Name": course?course:"",//课程名称
          "ed_ss_WriteState": "",//连载状态（0连载中1完结)
          "ed_ss_AuthorID": authorId?authorId:"",//作者
          // "ed_ss_Price": "1",//课程价格
//          "ed_ss_GetFee": "",//是否收费（0不收费，1要收费）
          "ed_SS_Type": "",//分类编号
          "es_ss_Recommend":bigImage?bigImage:"",  //推荐首页大图（0未推荐，1申请推荐中，2以通过推荐申请）
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
        this.initData(this.input,this.homePageBigImage,this.num)
      },
      //添加审核视频
      Add(){
        let uploader = document.querySelector('.uploader-list')
        if (uploader) {
          uploader.querySelector('ul').innerHTML = ''
        }
        this.selectedOptions=[];
        this.ImageURL=[];
        this.radioIndex='';
        for(let attr in this.addOptions.data){
          this.addOptions.data[attr]='';
        };
        console.log('addAddOptions:',this.addOptions)
        this.searchCourseType();
        this.addDialog=true;
        this.$store.commit("setTranstionFalse");

      },
      // 添加提交
      addSubmit() {
        let admin = JSON.parse(sessionStorage.getItem('admin'));
        this.addOptions.data.ed_ss_AuthorID = admin.sm_ui_ID;
        this.addOptions.data.ed_ss_SeriesImageURL=this.ImageURL.join(',');
        this.addOptions.data.ed_ss_WriteState=this.writeState;
        console.log('addSubmitAddOptions:',this.addOptions);
        this.$store.dispatch('addEducationCourseAction', this.addOptions)
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
          });
        this.addDialog = false;
      },
      //修改
      Update(obj){
//        selectTypeInfo,updateSelectedOptions
        console.log('obj:',obj);
        /**
         * 用户修改
         * */
        this.updateObj.data.ed_ss_ID=obj.ed_ss_ID;//课程编码
        this.updateObj.data.ed_ss_Name=obj.ed_ss_IDName;//课程名称
        this.updateImageURL=[];
        this.updateObj.data.ed_ss_SeriesImageURL=obj.ed_ss_SeriesImageURL;//课程图片
        this.updateImageURL.push(obj.ed_ss_SeriesImageURL);//课程图片
        this.updateObj.data.ed_ss_WriteState=obj.ed_ss_WriteState;//连载状态
        this.updateObj.data.ed_ss_Price=obj.ed_ss_Price;//课程价格
        this.updateObj.data.ed_SS_Type=obj.ed_ss_Type;//课程类型
        this.updateSelectedOptions.push(obj.ed_SS_Type);
        /**
         * 默认上传信息
         * */
        this.updateObj.data.ed_ss_AuthorID=obj.ed_ss_AuthorID; //作者编码
        this.updateDialog=true;
        this.$store.commit("setTranstionFalse");
      },
      //修改提交
      updateSubmit(){
        this.updateObj.data.ed_ss_WriteState=this.writeState;//连载状态
        /**
         * 课程图片更新后
         * */
        this.updateObj.data.ed_ss_SeriesImageURL=this.updateImageURL.join(',');//更新过后的课程图片
        console.log('updateObj:',this.updateObj);
        this.$store.dispatch('updateEducationCouseAction',this.updateObj)
          .then((suc)=>{
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.input,this.homePageBigImage,this.num)
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
            "ed_ss_ID": id,//审核表编号
          }
        }
        this.$store.dispatch('DeleteAdminEducationAuditVideo',deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.input,this.homePageBigImage,this.num)
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
