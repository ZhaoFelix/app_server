webpackJsonp([1],{"5cN0":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=(n("tvR6"),n("pw1w"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{id:"app","data-title":"管理"}},[n("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-openeds":["1"]}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v("导航目录")]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){t.To("lists")}}},[n("i",{staticClass:"el-icon-document"}),t._v("博客列表")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){t.To("add")}}},[n("i",{staticClass:"el-icon-edit"}),t._v("添加博客")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){t.To("recommand")}}},[n("i",{staticClass:"el-icon-message"}),t._v("首页推荐")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-5"},on:{click:function(e){t.To("tag")}}},[n("i",{staticClass:"el-icon-mobile-phone"}),t._v("博客标签")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-4"},on:{click:function(e){t.To("comment")}}},[n("i",{staticClass:"el-icon-news"}),t._v("评论反馈")])],1)],2)],1)],1),t._v(" "),t.isRouterAlive?n("router-view"):t._e()],1)],1)},staticRenderFns:[]});var o=n("VU/8")({name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{To:function(t){"add"==t||"preview"==t?this.$router.push({path:"/"+t+"/0"}):this.$router.push({path:"/"+t})},reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},i,!1,function(t){n("ulTN")},null,null).exports,l=n("/ocq"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var r=n("VU/8")({},s,!1,function(t){n("dHgY")},null,null).exports,c=n("BO1k"),u=n.n(c),d=n("mw3O"),p=n.n(d),h={data:function(){return{tableData3:[],totalPage:10}},methods:{handleClick:function(t){var e=t._id;this.$router.push({path:"/preview/"+e})},editArticle:function(t){var e=t._id;this.$router.push({path:"/add/"+e})},deleteArticle:function(t){var e=this,n=t._id,a=this;this.$confirm("确认要删除这篇文章吗","删除",{confirmButtonText:"确定",cancleButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("http://www.bedeveloper.cn:3000/list/delete",p.a.stringify({id:n})).then(function(t){if(0==t.data.code){var e=!0,i=!1,o=void 0;try{for(var l,s=u()(a.tableData3);!(e=(l=s.next()).done);e=!0){var r=l.value;console.log(r),r._id==n&&a.tableData3.splice(a.tableData3.indexOf(r),1)}}catch(t){i=!0,o=t}finally{try{!e&&s.return&&s.return()}finally{if(i)throw o}}a.$message({message:"删除成功",type:"success"})}}).catch(function(t){})})},publishArticle:function(t){var e=this,n=t._id,a=this;1!=t.isDeleted?1!=t.isPublished?this.$confirm("发布前请先进行预览","发布",{confirmButtonText:"确定",cancleButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("http://www.bedeveloper.cn:3000/list/publish",p.a.stringify({id:n})).then(function(t){0==t.data.code?a.$message({message:"发布成功",type:"success"}):a.$message({message:"发布失败",type:"error"})})}):this.$message({message:"请不要重复发布！",type:"error"}):this.$message({message:"删除的文章无法被发布！",type:"error"})},handleCurrentChange:function(t){var e=this;this.$axios.post("http://www.bedeveloper.cn:3000/list/queryAll",p.a.stringify({page:t-1})).then(function(t){var n=t.data;if(0==n.code)for(var a in e.tableData3=[],n.result){var i=n.result[a];e.tableData3.push(i)}}).catch(function(t){})}},created:function(){var t=this;this.$axios.post("http://www.bedeveloper.cn:3000/list/queryAll",p.a.stringify({page:0})).then(function(e){var n=e.data;if(0==n.code)for(var a in t.tableData3=[],n.result){var i=n.result[a];t.tableData3.push(i)}}).catch(function(t){}),this.$axios.get("http://sbs.bedeveloper.cn:3000/list/queryCount").then(function(e){var n=e.data;0==n.code&&(t.totalPage=n.count)}).catch(function(t){})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData3,height:"900",border:""}},[n("el-table-column",{attrs:{prop:"createTime",label:"添加日期",width:"180",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"文章标题",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"preview",label:"文章简介",width:"680"}}),t._v(" "),n("el-table-column",{attrs:{prop:"isDeleted",label:"删除",width:"40"}}),t._v(" "),n("el-table-column",{attrs:{prop:"isPublished",width:"40",label:"发布"}}),t._v(" "),n("el-table-column",{attrs:{prop:"imageUrl",width:"200",label:"图片"}}),t._v(" "),n("el-table-column",{attrs:{prop:"tags",label:"标签",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cellType",label:"cell类型",width:"40"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.handleClick(e.row)}}},[t._v("预览")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.editArticle(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.publishArticle(e.row)}}},[t._v("发布")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.deleteArticle(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-pagination",{staticClass:"my-pagination",attrs:{background:"",layout:"prev, pager, next",total:t.totalPage,"page-size":8},on:{"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var m=n("VU/8")(h,f,!1,function(t){n("zniw")},null,null).exports,v={data:function(){return{toolbars:{bold:!0,italic:!0,header:!0,underline:!0,mark:!0,superscript:!0,quote:!0,ol:!0,link:!0,imagelink:!0,help:!0,code:!0,subfield:!0,fullscreen:!0,readmodel:!0,undo:!0,trash:!0,save:!0,navigation:!0},blogTitle:"",blogImageUrl:"",content:"",tagArr:[],inx:-1,tags:[],selectedTags:[],radio:"0",preview:""}},methods:{submit:function(){var t=this.$route.params.id,e=this;if(console.log(this.radio),this.blogTitle&&this.blogImageUrl&&this.content&&this.radio&&this.preview){for(var n="",a=0;a<this.selectedTags.length;a++)n+=this.selectedTags[a]+" ";if(0!=t)return console.log(t),void this.$axios.post("http://www.bedeveloper.cn:3000/list/update",p.a.stringify({_id:t,title:this.blogTitle,content:this.content,imageUrl:this.blogImageUrl,tag:n,preview:this.preview,cellType:this.radio})).then(function(n){var a=n.data;console.log(a.code),0==a.code&&(e.$message({message:"更新成功",type:"success"}),e.$router.push({path:"/preview/"+t}))}).catch(function(t){console.log(t)});this.$axios.post("http://www.bedeveloper.cn:3000/list/add",p.a.stringify({title:this.blogTitle,content:this.content,imageUrl:this.blogImageUrl,tag:n,preview:this.preview,cellType:this.radio})).then(function(t){0==t.data.code&&e.$message({message:"添加成功",type:"success"})}).catch(function(t){console.log(t)})}else this.$alert("信息不能为空","错误",{confirmButtonText:"确定",callback:function(t){console.log("回调函数")}})},clickSelected:function(t,e){this.inx=t,this.tagArr.length>=1?this.$alert("最多只能选择一个标签","提示",{confirmButtonText:"确定",callback:function(t){}}):-1==this.tagArr.indexOf(t)&&(this.tagArr.push(t),this.selectedTags.push(e.name))}},computed:{},created:function(){var t=this,e=this.$route.params.id;0==e||this.$axios.post("http://www.bedeveloper.cn:3000/list/querySingle",p.a.stringify({id:e})).then(function(e){var n=e.data;if(0==n.code){var a=n.result[0];t.blogTitle=a.title,t.blogImageUrl=a.imageUrl,t.content=a.content,t.preview=a.preview}}).catch(function(t){console.log(t)}),this.$axios.get("http://www.bedeveloper.cn:3000/other/tag/query").then(function(e){var n=e.data;if(0==n.code)for(var a in n.result){var i=n.result[a];t.tags.push({name:i.name,type:"",id:i._id})}else t.$message({message:"查询信息失败",type:"error"})}).catch(function(t){})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-input",{attrs:{placeholder:"请输入文章的标题",clearable:""},model:{value:t.blogTitle,callback:function(e){t.blogTitle=e},expression:"blogTitle"}}),t._v(" "),n("el-input",{staticClass:"image-input",attrs:{placeholder:"请输入封面图片链接",clearable:""},model:{value:t.blogImageUrl,callback:function(e){t.blogImageUrl=e},expression:"blogImageUrl"}}),t._v(" "),n("el-input",{staticStyle:{"margin-top":"10px"},attrs:{type:"textarea",rows:2,placeholder:"请输入文章简介"},model:{value:t.preview,callback:function(e){t.preview=e},expression:"preview"}}),t._v(" "),n("el-row",{staticClass:"my-row"},[n("el-col",{attrs:{span:4}},[t._v("请选择前端cell的类型：")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("大图")]),t._v(" "),n("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("小图")]),t._v(" "),n("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("无图")])],1),t._v(" "),n("el-col",{attrs:{span:15}})],1),t._v(" "),n("mavon-editor",{staticClass:"my-editor",staticStyle:{"max-height":"700px"},attrs:{toolbars:t.toolbars},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("div",{staticClass:"tags"},t._l(t.tags,function(e,a){return n("el-tag",{key:a,staticClass:"my-tag",class:{active:-1!==t.tagArr.indexOf(a)},attrs:{id:"tag"+a},nativeOn:{click:function(n){t.clickSelected(a,e)}}},[t._v(t._s(e.name))])}),1),t._v(" "),n("div",{staticClass:"bottom"},[n("el-button",{staticClass:"my-btn",attrs:{type:"primary"},nativeOn:{click:function(e){t.submit()}}},[t._v("提 交")])],1)],1)},staticRenderFns:[]};var b=n("VU/8")(v,g,!1,function(t){n("5cN0")},"data-v-1de82d57",null).exports,w=n("EFqf"),y=n.n(w),_=new y.a.Renderer;y.a.setOptions({renderer:_,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var x={data:function(){return{toolbars:{},content:""}},computed:{compiledMarkdown:function(){return y()(this.content,{sanitize:!0})}},created:function(){var t=this,e=this.$route.params.id;0==e||this.$axios.post("http://www.bedeveloper.cn:3000/list/querySingle",p.a.stringify({id:e})).then(function(e){var n=e.data;0==n.code&&(t.content=n.result[0].content)}).catch(function(t){})}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-container"},[n("el-row",{staticClass:"main"},[n("mavon-editor",{staticClass:"my-editor",staticStyle:{height:"812px"},attrs:{defaultOpen:"preview",ishljs:!0,scrollStyle:!1,subfield:!1,codeStyle:"dark",toolbarsFlag:!1},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},staticRenderFns:[]};var k=n("VU/8")(x,$,!1,function(t){n("rMLW")},null,null).exports,T={data:function(){return{tags:[],inputValue:"",inputVisible:!1}},methods:{handleClose:function(t){var e=this,n=this;this.$confirm("确定要删除该标签吗？","温馨提示",{confirmButtonText:"确定",cancleButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("http://www.bedeveloper.cn:3000/other/tag/delete",p.a.stringify({id:t.id})).then(function(e){var a=e.data;0==a.code?n.tags.splice(n.tags.indexOf(t),1):console.log(a.error)}).catch(function(t){console.log(t)})}).catch(function(){})},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue,e=this;t&&this.$axios.post("http://www.bedeveloper.cn:3000/other/tag/insert",p.a.stringify({name:t})).then(function(n){var a=n.data;0==a.code?e.tags.push({name:t,type:"info"}):console.log(a.err)}).catch(function(t){console.log(t)}),this.inputVisible=!1,this.inputValue=""}},created:function(){var t=this;this.$axios.get("http://www.bedeveloper.cn:3000/other/tag/query").then(function(e){var n=e.data;if(0==n.code)for(var a in n.result){var i=n.result[a];t.tags.push({name:i.name,type:"",id:i._id})}})}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._l(t.tags,function(e){return n("el-tag",{key:e.name,staticClass:"my-tag",attrs:{closable:"",type:e.type},on:{close:function(n){t.handleClose(e)}}},[t._v("\n"+t._s(e.name)+"\n")])}),t._v(" "),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputConfirm(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"samll"},on:{click:t.showInput}},[n("i",{staticClass:"el-icon-plus"})])],2)},staticRenderFns:[]};var A=n("VU/8")(T,C,!1,function(t){n("t2ae")},"data-v-0a8fd78f",null).exports,S={inject:["reload"],data:function(){return{imageArr:[]}},methods:{submit:function(){var t=this,e=this;this.$prompt("请输入图片链接","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(n){var a=n.value;null!=a?t.$axios.post("http://www.bedeveloper.cn:3000/recommand/add",p.a.stringify({url:a})).then(function(t){0==t.data.code&&e.$message({message:"图片链接是: "+a,type:"success"})}).catch(function(t){console.log(t)}):t.$message.error("添加失败！！！")}).catch(function(){t.$message({type:"info",message:"取消输入"})})},updateState:function(t,e){var n=this;0==t?this.$confirm("确定要取消推荐吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.updateDB(t,e)}).catch(function(){}):1==t?this.$confirm("确定推荐吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.updateDB(t,e)}).catch(function(){}):2==t&&this.$confirm("确定要删除这个推荐吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.updateDB(t,e)}).catch(function(){})},updateDB:function(t,e){var n=this;this.$axios.post("http://www.bedeveloper.cn:3000/recommand/update",p.a.stringify({tag:t,id:e})).then(function(t){0==t.data.code&&(n.$message({message:"更新成功",type:"success"}),n.reload())}).catch(function(t){console.log(t)})}},created:function(){var t=this;this.$axios.get("http://www.bedeveloper.cn:3000/recommand/query/pc").then(function(e){var n=e.data;if(0==n.code)for(var a in n.result){var i=n.result[a];t.imageArr.push(i)}}).catch(function(t){})}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{"margin-left":"200px"}},[n("el-header",[n("el-row",{staticStyle:{"margin-top":"10px"}},[n("el-col",{attrs:{span:23.5}}),t._v(" "),n("el-col",{attrs:{span:.5}},[n("el-button",{attrs:{icon:"el-icon-plus",circle:""},nativeOn:{click:function(e){t.submit()}}})],1)],1)],1),t._v(" "),n("el-main",[n("el-row",t._l(t.imageArr,function(e,a){return n("el-col",{key:a,staticStyle:{"margin-top":"20px"},attrs:{span:8,offset:0}},[n("el-card",{staticStyle:{"background-coloe":"gray"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("img",{attrs:{src:e.url,alt:"",width:"100%"}})])],1),t._v(" "),n("el-row",[n("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:8}},[n("span",{staticStyle:{color:"gray"}},[t._v("添加时间"+t._s(e.createTime))])]),t._v(" "),n("el-col",{attrs:{span:8}},[1===e.isRecommand?n("el-button",{attrs:{type:"warning",icon:"el-icon-star-on",circle:""},nativeOn:{click:function(n){t.updateState(0,e._id)}}}):n("el-button",{attrs:{type:"warning",icon:"el-icon-star-off",circle:""},nativeOn:{click:function(n){t.updateState(1,e._id)}}})],1),t._v(" "),n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},nativeOn:{click:function(n){t.updateState(2,e._id)}}})],1)],1)],1)],1)}),1)],1)],1)},staticRenderFns:[]};var D=n("VU/8")(S,B,!1,function(t){n("eRRd")},null,null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-table",{staticClass:"main",attrs:{data:this.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"createTime",label:"日期",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"device_id",label:"设备ID",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"comment",label:"评论"}})],1)},staticRenderFns:[]};var U=n("VU/8")({name:"comment",data:function(){return{tableData:[]}},created:function(){var t=this;this.$axios.get("http://www.bedeveloper.cn:3000/comment/queryAll").then(function(e){var n=e.data;if(0==n.code)for(var a in t.tableData=[],n.result){var i=n.result[a];t.tableData.push(i)}}).catch(function(t){})}},R,!1,function(t){n("xpML")},null,null).exports;a.default.use(l.a);var V=new l.a({routes:[{path:"/",name:"index",component:r,meta:{title:"管理"}},{path:"/lists",name:"lists",component:m},{path:"/add/:id",name:"add",component:b},{path:"/preview/:id",name:"preview",component:k},{path:"/tag",name:"tag",component:A},{path:"/recommand",name:"recommand",component:D},{path:"/comment",name:"comment",component:U}]});V.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()});var O=V,I=n("zL8q"),q=n.n(I),z=n("OS1Z"),E=n.n(z),F=n("mtWM"),M=n.n(F);a.default.prototype.$axios=M.a,a.default.config.productionTip=!1,a.default.use(q.a),a.default.use(E.a),new a.default({el:"#app",router:O,components:{App:o},template:"<App/>"}),a.default.directive("title",{inserted:function(t,e){document.title=t.dataset.title}})},dHgY:function(t,e){},eRRd:function(t,e){},pw1w:function(t,e){},rMLW:function(t,e){},t2ae:function(t,e){},tvR6:function(t,e){},ulTN:function(t,e){},xpML:function(t,e){},zniw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb64bee03bb0e0551378.js.map