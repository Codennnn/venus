(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72200efd"],{"2c57":function(e,t,r){e.exports=r.p+"img/weibo.6b9b3961.svg"},"367b":function(e,t,r){e.exports=r.p+"img/wechat.1bc14415.svg"},"917e":function(e,t,r){e.exports=r.p+"img/github.8d184f53.svg"},ac2a:function(e,t,r){"use strict";r.r(t);var a=r("1da1"),n=(r("96cf"),r("ac1f"),r("5319"),{name:"Login",data:function(){return{formItems:[{icon:"user",placeholder:"登录账号",decorator:["username",{rules:[{required:!0,message:"请输入账号"}]}]},{icon:"lock",placeholder:"登录密码",type:"password",decorator:["password",{rules:[{required:!0,message:"请输入密码"}]}]}],form:this.$form.createForm(this),loading:!1,showInputTooltip:!1}},mounted:function(){this.form.setFieldsValue({username:"admin@magic.com",password:"magic123456"})},methods:{onSwitchCapture:function(e,t){var r=(null==t?void 0:t.getModifierState("CapsLock"))||!1;this.showInputTooltip=1===e&&r},onLogin:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r,a){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=10;break}return t.loading=!0,e.prev=2,e.next=5,t.$store.dispatch("user/login",a);case 5:e.sent&&((n=t.$store.state.redirectPath)?t.$router.replace(n):t.$router.replace("/"));case 7:return e.prev=7,t.loading=!1,e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[2,,7,10]])})));return function(t,r){return e.apply(this,arguments)}}())}}}),o=(r("b21b"),r("2877")),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col items-center justify-center"},[a("a-form",{staticClass:"login-form",attrs:{form:e.form},on:{submit:e.onLogin}},[e._l(e.formItems,(function(t,r){var n=t.icon,o=t.decorator,i=t.size;void 0===i&&(i="large");var s=t.placeholder,c=t.type;return void 0===c&&(c="text"),a("a-form-item",{key:r},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:o,expression:"decorator"}],staticClass:"login-input",attrs:{size:i,type:c,placeholder:s},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"caps-lock",void 0,t.key,void 0)?null:e.onSwitchCapture(r,t)}]},scopedSlots:e._u([{key:"prefix",fn:function(){return[a("feather",{attrs:{stroke:"#aaa",size:"20",type:n}})]},proxy:!0}],null,!0)}),1===r&&e.showInputTooltip?a("p",{staticClass:"flex items-center justify-end text-gray-500 text-sm"},[a("feather",{staticClass:"mr-1",attrs:{stroke:"#fdac41",size:"18",type:"info"}}),e._v(" 键盘大写已锁定 ")],1):e._e()],1)})),a("a-form-item",{staticStyle:{margin:"-15px 0 5px 0"}},[a("div",{staticClass:"flex justify-between"},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}]},[e._v(" 保持登录状态 ")]),a("span",{staticClass:"transition hover:primary cursor-pointer"},[e._v("忘记密码？")])],1)]),a("a-form-item",[a("a-button",{staticClass:"w-full",attrs:{size:"large",type:"primary","html-type":"submit",loading:e.loading}},[e._v(" 立即登录 ")])],1),a("a-divider",{staticClass:"text-gray-500"},[e._v(" 或使用以下方式登录 ")]),a("div",{staticClass:"flex justify-center items-center"},e._l([{name:"微信",src:r("367b")},{name:"新浪微博",src:r("2c57")},{name:"GitHub",src:r("917e")}],(function(e){var t=e.src,r=e.name;return a("img",{key:r,staticClass:"app-icon",attrs:{src:t,alt:r,title:r}})})),0)],2)],1)}),[],!1,null,"12aa8b1c",null);t.default=i.exports},b21b:function(e,t,r){"use strict";r("dddf")},dddf:function(e,t,r){}}]);