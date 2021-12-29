(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ba60aaa8"],{"494a":function(t,e,a){"use strict";a.r(e);a("a434"),a("99af");var i=a("b76a"),s=a.n(i),r=(a("b0c0"),a("cd3f")),n=a.n(r),l={name:"KanbanDrawer",props:{visible:{type:Boolean,required:!0},dataSource:{type:Object,required:!0}},data:function(){return{editData:{}}},watch:{dataSource:{handler:function(t){this.editData=n()(t)},immediate:!0}},methods:{uploadAttachment:function(){var t=document.getElementById("attachment"),e=this;t.onchange=function(){var t,a=((null===(t=this.files)||void 0===t?void 0:t[0])||{}).name;e.editData.fileName=a},t.click()},deleteBoard:function(){this.onCloseDrawer()},onCloseDrawer:function(){this.$emit("close")}}},c=a("2877"),o=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{width:"400",closable:!1,mask:!1,visible:t.visible},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"flex items-center"},[a("h3",[t._v(t._s(t.editData.title))]),a("feather",{staticClass:"ml-auto cursor-pointer",attrs:{size:"21",type:"x"},on:{click:t.onCloseDrawer}})],1)]},proxy:!0}])},[a("div",[a("h4",{staticClass:"mb-2 text-gray-500"},[t._v("卡片标题")]),a("a-input",{attrs:{size:"large",placeholder:"请输入标题信息"},model:{value:t.editData.title,callback:function(e){t.$set(t.editData,"title",e)},expression:"editData.title"}})],1),a("div",[a("h4",{staticClass:"mt-6 mb-2 text-gray-500"},[t._v("完成时间")]),a("a-date-picker",{staticClass:"w-full",attrs:{size:"large"},model:{value:t.editData.time,callback:function(e){t.$set(t.editData,"time",e)},expression:"editData.time"}})],1),a("div",{staticClass:"flex justify-between items-start"},[a("div",{staticClass:"w-1/2"},[a("h4",{staticClass:"mt-6 mb-2 text-gray-500"},[t._v("颜色标签")]),a("a-dropdown",{attrs:{trigger:["click"]},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("a-menu",t._l(["primary","success","warning","danger","info","secondary"],(function(e,i){return a("a-menu-item",{key:i,staticClass:"flex items-center",on:{click:function(a){t.editData.label=e}}},[a("div",{staticClass:"w-5 h-5 mr-2 rounded-full",class:"bg-"+e}),t._v(" "+t._s(e.toUpperCase())+" ")])})),1)]},proxy:!0}])},[a("div",{staticClass:"w-10 h-10 mr-2 rounded-full cursor-pointer shadow-md",class:"bg-"+t.editData.label})])],1),a("div",{staticClass:"w-1/2"},[a("h4",{staticClass:"mt-6 mb-2 text-gray-500"},[t._v("成员")]),a("div",{staticClass:"flex items-center"},[a("a-avatar",{staticClass:"mr-3 bg-secondary-light cursor-pointer",attrs:{size:"large",src:t.$store.state.user.info.avatar}}),a("a-avatar",{staticClass:"bg-secondary-light cursor-pointer",attrs:{size:"large"}},[a("feather",{staticClass:"secondary",staticStyle:{"margin-top":"7px"},attrs:{type:"plus"}})],1)],1)])]),a("div",[a("h4",{staticClass:"mt-6 mb-2 text-gray-500"},[t._v("添加附件")]),a("a-input",{attrs:{size:"large",placeholder:"请输入附件链接"},scopedSlots:t._u([{key:"addonAfter",fn:function(){return[a("div",{staticClass:"cursor-pointer",on:{click:t.uploadAttachment}},[t._v("或点击上传附件")])]},proxy:!0}]),model:{value:t.editData.fileName,callback:function(e){t.$set(t.editData,"fileName",e)},expression:"editData.fileName"}}),a("input",{attrs:{id:"attachment",type:"file",hidden:""}})],1),a("div",{staticClass:"relative"},[a("h4",{staticClass:"mt-6 mb-2 text-gray-500"},[t._v("编辑内容")]),a("a-textarea",{attrs:{placeholder:"在这里编辑任务内容","auto-size":{minRows:6,maxRows:10}},model:{value:t.editData.content,callback:function(e){t.$set(t.editData,"content",e)},expression:"editData.content"}}),a("div",{staticClass:"absolute bottom-0 right-0 m-2 flex items-center"},t._l(["bold","italic","link","youtube","image"],(function(t){return a("feather",{key:t,staticClass:"mr-3 cursor-pointer",attrs:{size:"18",type:t}})})),1)],1),a("div",{staticClass:"absolute right-0 bottom-0 mr-3 mb-3 flex items-center"},[a("a-popconfirm",{attrs:{title:"此操作将删除该看板，是否继续？","ok-text":"删除","cancel-text":"点错了"},on:{confirm:t.deleteBoard}},[a("a-button",{staticClass:"mr-5 flex items-center",attrs:{size:"large",type:"danger"}},[a("feather",{staticClass:"mr-2",attrs:{size:"20",type:"trash"}}),t._v(" 删 除 ")],1)],1),a("a-button",{staticClass:"flex items-center",attrs:{size:"large",type:"primary"},on:{click:t.onCloseDrawer}},[a("feather",{staticClass:"mr-2",attrs:{size:"20",type:"save"}}),t._v(" 保 存 ")],1)],1)])}),[],!1,null,null,null).exports,d={name:"Kanban",components:{draggable:s.a,KanbanDrawer:o},data:function(){return{kbList:[{id:"board1",title:"定制主题",dataList:[{id:"1",label:"primary",content:"君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？🌺",items:[{item:"time",value:"1-6"},{item:"msg",value:14}],members:[{id:"1",avatar:"头"},{id:"2",avatar:"像"}]},{id:"2",label:"warning",content:"昨夜裙带解，今朝蟢子飞。",items:[{item:"time",value:"2-4"},{item:"msg",value:19}],members:[{id:"1",avatar:"B"},{id:"2",avatar:"V"}]},{id:"3",label:"danger",content:"铅华不可弃，莫是藁砧归。",items:[{item:"time",value:"1-9"}]},{id:"4",label:"success",content:"闺中少妇不知愁，春日凝妆上翠楼。",items:[{item:"time",value:"6-6"},{item:"msg",value:1}]},{id:"5",label:"info",content:"忽见陌头杨柳色，悔教夫婿觅封侯。",items:[{item:"time",value:"4-1"},{item:"msg",value:45}],members:[{id:"1",avatar:"A"},{id:"2",avatar:"V"}]}]},{id:"board2",title:"常见问题",dataList:[{id:"6",label:"secondary",content:"九月九日忆山东兄弟",items:[{item:"time",value:"6-9"},{item:"msg",value:19}]},{id:"7",label:"secondary",content:"独在异乡为异客，每逢佳节倍思亲。",items:[{item:"time",value:"7-1"},{item:"msg",value:11}]},{id:"8",content:"遥知兄弟登高处，遍插茱萸少一人。🐸"},{id:"9",content:'<img width=100% src="https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200"><p>点击编辑看板卡片 👀</p>'}]},{id:"board3",title:"支持我们",dataList:[{id:"10",label:"success",content:"千山鸟飞绝，万径人踪灭。",items:[{item:"time",value:"6-9"},{item:"msg",value:19}],members:[{id:"1",avatar:"我"},{id:"2",avatar:"是"},{id:"3",avatar:"头"},{id:"4",avatar:"像"}]},{id:"11",label:"primary",content:"孤舟蓑笠翁",items:[{item:"time",value:"7-16"},{item:"msg",value:11}],members:[{id:"1",avatar:"头"},{id:"2",avatar:"像"}]},{id:"12",label:"warning",content:"独钓寒江雪🐣",items:[{item:"time",value:"4-9"},{item:"msg",value:19}]},{id:"13",label:"danger",content:"独在异乡为异客，每逢佳节倍思亲。",items:[{item:"time",value:"7-1"},{item:"msg",value:11}],members:[{id:"1",avatar:"头"},{id:"2",avatar:"像"}]}]}],itemIcon:{time:"clock",msg:"message-square"},dragOptions:{animation:200,group:"description",disabled:!1,ghostClass:"ghost"},currAdd:{id:"",title:"",content:""},currEdit:{title:"这是一个看板标题",time:null,label:"primary",content:"",fileName:""},showDrawer:!1}},methods:{addNewBoard:function(){this.kbList.push({title:"默认标题",dataList:[]})},addNewItem:function(){var t=this;this.currAdd.content.length>0&&this.kbList.some((function(e){return e.title===t.currAdd.title&&(e.dataList.push({id:"10086",content:t.currAdd.content}),t.reset(),!0)}))},deleteBoard:function(t){var e=this,a=this.$createElement;this.$confirm({title:a("p",["此操作将删除",a("span",{class:"warning"},["「",t,"」"]),"看板"]),content:"请点击确定按钮以删除",onOk:function(){e.kbList.some((function(e,a,i){return e.title===t&&(i.splice(a,1),!0)}))}})},onTitleEdited:function(t,e){var a=this,i=t.target.value;this.$message.loading("正在更改看板标题..",1.5).then((function(){a.$message.success("看板标题已修改为：".concat(i,"-").concat(e),2.5)}))},reset:function(){this.currAdd={title:"",content:"",fileName:""}}}},m=(a("e20e"),Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{staticClass:"mb-4",attrs:{size:"large",type:"primary"},on:{click:t.addNewBoard}},[t._v(" 添加一个看板 ")]),a("div",{staticClass:"kb"},t._l(t.kbList,(function(e,i){return a("div",{key:i,staticClass:"kb-col"},[a("div",{staticClass:"mb-4 flex items-center"},[a("a-input",{staticClass:"kb-col__input",on:{blur:function(a){return t.onTitleEdited(a,e.id)}},model:{value:e.title,callback:function(a){t.$set(e,"title",a)},expression:"it.title"}}),a("a-dropdown",{attrs:{trigger:["click"]},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("a-menu",[a("a-menu-item",{on:{click:function(e){return t.$message.success("已复制看板链接")}}},[t._v(" 复制看板链接 ")]),a("a-menu-item",{on:{click:function(a){return t.deleteBoard(e.title)}}},[t._v(" 删除此看板 ")])],1)]},proxy:!0}],null,!0)},[a("feather",{staticClass:"cursor-pointer",attrs:{size:"20",type:"more-vertical"}})],1)],1),a("draggable",t._b({model:{value:e.dataList,callback:function(a){t.$set(e,"dataList",a)},expression:"it.dataList"}},"draggable",t.dragOptions,!1),[a("transition-group",{attrs:{tag:"ul"}},t._l(e.dataList,(function(e){var i=e.id,s=e.label,r=e.content,n=e.items,l=e.members;return a("li",{key:i,staticClass:"kb-col__item",attrs:{"data-border":s},on:{click:function(e){t.showDrawer=!0}}},[a("div",{domProps:{innerHTML:t._s(r)}}),n?a("div",{staticClass:"mt-4 flex items-center text-xs"},[t._l(n,(function(e){var i=e.item,s=e.value;return a("div",{key:i,staticClass:"mr-2 flex items-center"},[a("feather",{staticClass:"mr-1",attrs:{size:"12",type:t.itemIcon[i]}}),t._v(" "+t._s(s)+" ")],1)})),a("div",{staticClass:"ml-auto flex-1 flex flex-wrap justify-end"},t._l(l,(function(e){var i=e.id,s=e.avatar;return a("a-avatar",{key:i,staticClass:"kb-col__avatar text-xs primary bg-primary-light",attrs:{size:22}},[t._v(" "+t._s(s)+" ")])})),1)],2):t._e()])})),0)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.currAdd.title===e.title,expression:"currAdd.title === it.title"}],staticClass:"mb-2"},[a("a-textarea",{staticClass:"mb-1",attrs:{"auto-size":{minRows:3,maxRows:5}},model:{value:t.currAdd.content,callback:function(e){t.$set(t.currAdd,"content","string"==typeof e?e.trim():e)},expression:"currAdd.content"}}),a("a-button",{staticClass:"mr-2",attrs:{size:"small",type:"primary"},on:{click:t.addNewItem}},[t._v(" 提交 ")]),a("a-button",{attrs:{size:"small",type:"danger"},on:{click:t.reset}},[t._v(" 取消 ")])],1),a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(a){t.currAdd.title=e.title}}},[a("feather",{attrs:{size:"15",type:"plus"}}),t._v(" 创建新项 ")],1)])],1)})),0),a("kanban-drawer",{attrs:{visible:t.showDrawer,"data-source":t.currEdit},on:{close:function(e){t.showDrawer=!1}}})],1)}),[],!1,null,"7bb570bb",null));e.default=m.exports},ceb7:function(t,e,a){},e20e:function(t,e,a){"use strict";a("ceb7")}}]);