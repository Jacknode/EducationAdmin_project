webpackJsonp([28],{FSj0:function(n,t,e){var a=e("aFrC");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("3d1eed2a",a,!0)},PqiO:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("NYxO"),i={name:"",data:function(){return{userName:"",total:0,isLoading:!1,addDialog:!1,updateDialog:!1,formLabelWidth:"120px",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{sm_cp_ID:"",sm_al_ProxyLevel:"",sm_al_Percent:""}}}},computed:Object(a.b)(["partnershipTypeList","adminAgentsProfitList","updateAdminAgentsProfitObj"]),created:function(){var n=this;this.initData(1);this.$store.dispatch("initPartnershipType",{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",sm_cp_ID:"",sm_cp_Name:"",sm_cp_IsDelete:0}).then(function(){},function(t){n.$notify({message:t,type:"error"})})},methods:{handleCurrentChange:function(n){this.initData(n)},initData:function(n){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",sm_al_ID:"",sm_cp_ID:"",sm_al_ProxyLevel:"",page:n||1,rows:5};this.isLoading=!0,this.$store.dispatch("initAdminAgentsProfit",e).then(function(n){t.total=n,t.isLoading=!1},function(n){t.$notify({message:n,type:"error"})})},search:function(){this.initData(1)},addAdminAgentsProfit:function(){this.addDialog=!0,this.$store.commit("setTranstionFalse")},addAdminVendorProfitSubmit:function(){var n=this;Number(this.addOptions.data.sm_al_Percent)>=1||Number(this.addOptions.data.sm_al_Percent)<0||isNaN(this.addOptions.data.sm_al_Percent)?this.$notify({message:"提成比例请输入0~1的小数",type:"error"}):(this.$store.dispatch("AddAdminVendorProfit",this.addOptions).then(function(t){n.$notify({message:t,type:"success"}),n.initData(1)},function(t){n.$notify({message:t,type:"error"})}),this.addDialog=!1)},Update:function(n){this.updateDialog=!0,this.$store.commit("setTranstionFalse"),this.$store.commit("initUpdateAdminAgentsProfitObj",n)},updateAdminVendorProfitSubmit:function(){var n=this;if(Number(this.updateAdminAgentsProfitObj.sm_al_Percent)>=1||Number(this.updateAdminAgentsProfitObj.sm_al_Percent)<0||isNaN(this.updateAdminAgentsProfitObj.sm_al_Percent))this.$notify({message:"提成比例请输入0~1的小数",type:"error"});else{delete this.updateAdminAgentsProfitObj.sm_cp_Name;var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:this.updateAdminAgentsProfitObj};this.$store.dispatch("UpdateAdminVendorProfit",t).then(function(t){n.$notify({message:t,type:"success"}),n.initData(1)},function(t){n.$notify({message:t,type:"error"})}),this.updateDialog=!1}},Delete:function(n){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",ID:n};this.$store.dispatch("DeleteAdminVendorProfit",e).then(function(n){t.$notify({message:n,type:"success"}),t.initData(1)},function(n){t.$notify({message:n,type:"error"})})}}},s={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{attrs:{id:"wrap"}},[e("h1",{staticClass:"userClass"},[n._v("代理商利润管理")]),n._v(" "),e("el-col",{staticClass:"formSearch",attrs:{span:24}},[e("el-form",{attrs:{inline:!0}},[e("el-form-item",[e("span",[n._v("代理商利润筛选:")])]),n._v(" "),e("el-form-item",[e("el-input",{attrs:{type:"text","auto-complete":"off",size:"small"},model:{value:n.userName,callback:function(t){n.userName=t},expression:"userName"}})],1),n._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:n.search}},[n._v("查询")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:n.addAdminAgentsProfit}},[n._v("新增")])],1)],1)],1),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:n.adminAgentsProfitList,"highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",label:"利润编号",sortable:"",prop:"sm_al_ID"}}),n._v(" "),e("el-table-column",{attrs:{align:"center",label:"合作类型",prop:"sm_cp_Name"}}),n._v(" "),e("el-table-column",{attrs:{align:"center",label:"代理级别",prop:"sm_al_ProxyLevel"}}),n._v(" "),e("el-table-column",{attrs:{align:"center",label:"利润比例"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",[n._v(n._s(parseInt(100*t.row.sm_al_Percent))+"%")])]}}])}),n._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){n.Update(t.row.sm_al_ID)}}},[n._v("修改\n          ")]),n._v(" "),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){n.Delete(t.row.sm_al_ID)}}},[n._v("删除\n          ")])]}}])})],1),n._v(" "),e("div",{staticClass:"block",staticStyle:{float:"right",padding:"10px 0"}},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:n.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:n.total},on:{"current-change":n.handleCurrentChange}})],1),n._v(" "),e("el-dialog",{attrs:{title:"添加代理商利润",visible:n.addDialog},on:{"update:visible":function(t){n.addDialog=t}}},[e("el-form",{attrs:{model:n.addOptions}},[e("el-form-item",{attrs:{label:"合作类型:","label-width":n.formLabelWidth}},[e("el-select",{attrs:{placeholder:"请选择合作类型"},model:{value:n.addOptions.data.sm_cp_ID,callback:function(t){n.$set(n.addOptions.data,"sm_cp_ID",t)},expression:"addOptions.data.sm_cp_ID"}},n._l(n.partnershipTypeList,function(n){return e("el-option",{key:n.sm_cp_ID,attrs:{label:n.sm_cp_Name,value:n.sm_cp_ID}})}))],1),n._v(" "),e("el-form-item",{attrs:{label:"代理级别:","label-width":n.formLabelWidth}},[e("el-radio-group",{model:{value:n.addOptions.data.sm_al_ProxyLevel,callback:function(t){n.$set(n.addOptions.data,"sm_al_ProxyLevel",t)},expression:"addOptions.data.sm_al_ProxyLevel"}},[e("el-radio",{attrs:{label:1}},[n._v("一级代理")]),n._v(" "),e("el-radio",{attrs:{label:2}},[n._v("二级代理")]),n._v(" "),e("el-radio",{attrs:{label:3}},[n._v("三级代理")])],1)],1),n._v(" "),e("el-form-item",{attrs:{label:"提成利润:","label-width":n.formLabelWidth}},[e("el-input",{attrs:{placeholder:"请输入数字"},model:{value:n.addOptions.data.sm_al_Percent,callback:function(t){n.$set(n.addOptions.data,"sm_al_Percent",t)},expression:"addOptions.data.sm_al_Percent"}})],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.addDialog=!1}}},[n._v("取 消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:n.addAdminVendorProfitSubmit}},[n._v("确 定")])],1)],1),n._v(" "),e("el-dialog",{attrs:{title:"修改代理商利润",visible:n.updateDialog},on:{"update:visible":function(t){n.updateDialog=t}}},[e("el-form",{attrs:{model:n.updateAdminAgentsProfitObj}},[e("el-form-item",{attrs:{label:"合作类型:","label-width":n.formLabelWidth}},[e("el-select",{attrs:{placeholder:"请选择合作类型"},model:{value:n.updateAdminAgentsProfitObj.sm_cp_ID,callback:function(t){n.$set(n.updateAdminAgentsProfitObj,"sm_cp_ID",t)},expression:"updateAdminAgentsProfitObj.sm_cp_ID"}},n._l(n.partnershipTypeList,function(n){return e("el-option",{key:n.sm_cp_ID,attrs:{label:n.sm_cp_Name,value:n.sm_cp_ID}})}))],1),n._v(" "),e("el-form-item",{attrs:{label:"代理级别:","label-width":n.formLabelWidth}},[e("el-radio-group",{model:{value:n.updateAdminAgentsProfitObj.sm_al_ProxyLevel,callback:function(t){n.$set(n.updateAdminAgentsProfitObj,"sm_al_ProxyLevel",t)},expression:"updateAdminAgentsProfitObj.sm_al_ProxyLevel"}},[e("el-radio",{attrs:{label:1}},[n._v("一级代理")]),n._v(" "),e("el-radio",{attrs:{label:2}},[n._v("二级代理")]),n._v(" "),e("el-radio",{attrs:{label:3}},[n._v("三级代理")])],1)],1),n._v(" "),e("el-form-item",{attrs:{label:"提成利润:","label-width":n.formLabelWidth}},[e("el-input",{attrs:{placeholder:"请输入数字"},model:{value:n.updateAdminAgentsProfitObj.sm_al_Percent,callback:function(t){n.$set(n.updateAdminAgentsProfitObj,"sm_al_Percent",t)},expression:"updateAdminAgentsProfitObj.sm_al_Percent"}})],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.updateDialog=!1}}},[n._v("取 消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:n.updateAdminVendorProfitSubmit}},[n._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var o=e("VU/8")(i,s,!1,function(n){e("FSj0")},"data-v-2bce070f",null);t.default=o.exports},aFrC:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});