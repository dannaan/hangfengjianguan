webpackJsonp([0],{JsP6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Au9i"),r={data:function(){return{resume:""}},components:{contentedit:n("lHs2").a},methods:{submitBtn:function(){var e=localStorage.getItem("userId"),t=new FormData;t.append("userId",e),t.append("resume",this.resume);var n=this;this.$http({method:"post",url:"/org/user/self/app/update/resume",data:t}).then(function(e){Object(s.Toast)("保存成功"),n.$router.push("/accounts/index")})}},created:function(){var e=this,t=localStorage.getItem("userId");this.$http.get("/org/user/self/get?id="+t).then(function(t){e.resume=t.resume})}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ptheader",{staticClass:"rpublicity_header"},[e._v("个人简历")]),e._v(" "),n("contentedit",{staticClass:"areaDiv",model:{value:e.resume,callback:function(t){e.resume=t},expression:"resume"}}),e._v(" "),n("footer",{on:{click:function(t){e.submitBtn()}}},[e._v("\n    提交\n  ")])],1)},staticRenderFns:[]};var u=n("VU/8")(r,a,!1,function(e){n("m+Zb")},"data-v-c0e61420",null);t.default=u.exports},"m+Zb":function(e,t){}});
//# sourceMappingURL=0.da11f1889f99bbced588.js.map