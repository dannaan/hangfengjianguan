webpackJsonp([1],{IkmA:function(t,e){},Q03I:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Au9i"),a={data:function(){return{punish:""}},created:function(){var t=this,e=localStorage.getItem("userId");this.$http.get("/org/user/self/get?id="+e).then(function(e){t.punish=e.punish})},components:{contentedit:n("lHs2").a},methods:{submitBtn:function(){var t=localStorage.getItem("userId"),e=new FormData;e.append("userId",t),e.append("punish",this.punish);var n=this;this.$http({method:"post",url:"/org/user/self/app/update/resume",data:e}).then(function(t){Object(s.Toast)("保存成功"),n.$router.push("/accounts/index")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ptheader",{staticClass:"rpublicity_header"},[t._v("历年受惩情况")]),t._v(" "),n("contentedit",{staticClass:"areaDiv",model:{value:t.punish,callback:function(e){t.punish=e},expression:"punish"}}),t._v(" "),n("footer",{on:{click:t.submitBtn}},[t._v("\n      提交\n    ")])],1)},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(t){n("IkmA")},"data-v-7a2d38d9",null);e.default=u.exports}});
//# sourceMappingURL=1.dc33cec32e6e70e8d74a.js.map