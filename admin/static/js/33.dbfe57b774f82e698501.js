webpackJsonp([33],{"9mtg":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"G+Ys":function(n,t,e){var a=e("9mtg");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("b497fb5a",a,!0)},fug9:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("//Fk"),s=e.n(a),o=e("NYxO"),r={name:"",data:function(){return{formLabelWidth:"120px",approvalOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",goodID:"",IsPass:"1",failReason:""},total:0,userName:"",restaurants:[],timeout:null,isLoading:!1,sm_ai_ID:"",approvalStatusDialog:!1,ID:""}},computed:Object(o.b)(["adminProductAuditList"]),created:function(){this.initData("",1)},methods:{handleCurrentChange:function(n){this.initData(this.ID,n)},handleSelect:function(n){this.userName=n.value,this.ID=n.id},loadAll:function(n,t){var e=this;return new s.a(function(a,s){var o={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",sm_ai_Name:t||"",sm_ai_ID:"",page:n||1,rows:20};e.$store.dispatch("initAdminSupplier",o).then(function(n){a(n)},function(n){e.$notify({message:n,type:"error"})})})},querySearchAsync:function(n,t){var e=this;this.loadAll(1,n).then(function(n){n=(n=n.data).map(function(n){return{id:n.agentInfo.sm_ai_AgentID,value:n.agentInfo.sm_ai_Name}}),e.restaurants=n,clearTimeout(e.timeout),e.timeout=setTimeout(function(){t(e.restaurants)},10)})},initData:function(n,t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",tradeID:n||"",pcName:"",ID:"",isDelete:0,page:t||1,rows:10};this.isLoading=!0,this.$store.dispatch("initAdminProductAudit",a).then(function(n){e.total=Number(n.totalrows),e.isLoading=!1},function(n){e.$notify({message:n,type:"error"})})},search:function(){this.initData(this.ID,1)},approval:function(n){this.$store.commit("setTranstionFalse"),this.approvalStatusDialog=!0,this.sm_ai_ID=n},approvalStatusSubmit:function(){var n=this;this.approvalOptions.goodID=this.sm_ai_ID,this.$store.dispatch("getProductAuditStatus",this.approvalOptions).then(function(t){n.$notify({message:t,type:"success"}),n.initData(n.ID,1)},function(t){n.$notify({message:t,type:"error"})}),this.approvalStatusDialog=!1}}},i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{attrs:{id:"wrap"}},[e("h1",{staticClass:"userClass"},[n._v("供应商产品审核")]),n._v(" "),e("el-col",{staticClass:"formSearch",attrs:{span:24}},[e("el-form",{attrs:{inline:!0}},[e("el-form-item",[e("span",[n._v("产品审核筛选:")])]),n._v(" "),e("el-form-item",[e("el-autocomplete",{staticStyle:{width:"150px"},attrs:{size:"small","fetch-suggestions":n.querySearchAsync,placeholder:"请选择供应商"},on:{select:n.handleSelect},model:{value:n.userName,callback:function(t){n.userName=t},expression:"userName"}})],1),n._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:n.search}},[n._v("查询")])],1)],1)],1),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:n.adminProductAuditList,"highlight-current-row":""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"供应商商户号:"}},[e("span",[n._v(n._s(t.row.ta_tg_TradeID))])]),n._v(" "),e("el-form-item",{attrs:{label:"产品标题:"}},[e("el-popover",{ref:"popover1",attrs:{placement:"top-start",trigger:"hover",content:t.row.ta_tg_Title}}),n._v(" "),e("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{size:"small"}},[n._v("移入查看")])],1),n._v(" "),e("el-form-item",{attrs:{label:"所属国家:"}},[e("span",[n._v(n._s(t.row.ts_tg_Country))])]),n._v(" "),e("el-form-item",{attrs:{label:"所属省市:"}},[e("span",[n._v(n._s(t.row.ts_tg_Provice+t.row.ts_tg_City))])]),n._v(" "),e("el-form-item",{attrs:{label:"产品描述:"}},[e("el-popover",{ref:"popover1",attrs:{placement:"top-start",trigger:"hover",content:t.row.ta_tg_Describe}}),n._v(" "),e("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{size:"small"}},[n._v("移入查看")])],1),n._v(" "),e("el-form-item",{attrs:{label:"成团地点:"}},[e("span",[n._v(n._s(t.row.ts_tg_GroupSite))])]),n._v(" "),e("el-form-item",{attrs:{label:"展示图片地址:"}},n._l(t.row.ta_tg_ShowImages,function(n){return e("img",{staticStyle:{width:"100px",height:"100px","margin-right":"10px"},attrs:{src:n,alt:""}})})),n._v(" "),e("el-form-item",{attrs:{label:"产品创建时间:"}},[e("span",[n._v(n._s(n._f("getUseTime")(t.row.ta_tg_CreateDateTime)))])]),n._v(" "),e("el-form-item",{attrs:{label:"备注:"}},[e("el-popover",{ref:"popover1",attrs:{placement:"top-start",trigger:"hover",content:t.row.ta_tg_Remark}}),n._v(" "),e("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{size:"small"}},[n._v("移入查看")])],1),n._v(" "),e("el-form-item",{attrs:{label:"是否精选:"}},[e("span",[n._v(n._s(0==t.row.ts_tg_Special?"非精选":"精选"))])]),n._v(" "),e("el-form-item",{attrs:{label:"境外线路:"}},[e("span",[n._v(n._s(n._f("getLongOut")(t.row.ts_tg_LongOut)))])])],1)]}}])}),n._v(" "),e("el-table-column",{attrs:{label:"供应商商户号",prop:"ta_tg_TradeID"}}),n._v(" "),e("el-table-column",{attrs:{label:"产品编码",prop:"ta_tg_ID"}}),n._v(" "),e("el-table-column",{attrs:{label:"产品标题",prop:"ta_tg_Title"}}),n._v(" "),e("el-table-column",{attrs:{label:"创建时间",prop:"ta_tg_CreateDateTime"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",[n._v(n._s(n._f("getUseTime")(t.row.ta_tg_CreateDateTime)))])]}}])}),n._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.row.ts_tg_IsPass,expression:"scope.row.ts_tg_IsPass!=1"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){n.approval(t.row.ta_tg_ID)}}},[n._v("审核\n          ")])]}}])})],1),n._v(" "),e("div",{staticClass:"block",staticStyle:{float:"right"}},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:n.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:n.total},on:{"current-change":n.handleCurrentChange}})],1)],1),n._v(" "),e("el-dialog",{attrs:{title:"审核状态",visible:n.approvalStatusDialog},on:{"update:visible":function(t){n.approvalStatusDialog=t}}},[e("el-form",{attrs:{model:n.approvalOptions}},[e("el-form-item",{attrs:{label:"审核状态:","label-width":n.formLabelWidth}},[e("el-radio",{attrs:{label:"1"},model:{value:n.approvalOptions.IsPass,callback:function(t){n.$set(n.approvalOptions,"IsPass",t)},expression:"approvalOptions.IsPass"}},[n._v("审核成功")]),n._v(" "),e("el-radio",{attrs:{label:"2"},model:{value:n.approvalOptions.IsPass,callback:function(t){n.$set(n.approvalOptions,"IsPass",t)},expression:"approvalOptions.IsPass"}},[n._v("审核失败")])],1),n._v(" "),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1!=n.approvalOptions.IsPass,expression:"approvalOptions.IsPass!=1"}],attrs:{label:"审核失败原因:","label-width":n.formLabelWidth}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"请输入内容"},model:{value:n.approvalOptions.failReason,callback:function(t){n.$set(n.approvalOptions,"failReason",t)},expression:"approvalOptions.failReason"}})],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.approvalStatusDialog=!1}}},[n._v("取 消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:n.approvalStatusSubmit}},[n._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(r,i,!1,function(n){e("G+Ys")},"data-v-215300e4",null);t.default=l.exports}});