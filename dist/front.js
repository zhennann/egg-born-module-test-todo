window["test-todo"]=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("163b06d4",i,!0,{})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}n.r(e),n.d(e,"default",(function(){return v}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,u=function(){},f=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,o){c=n,f=o||{};var s=i(t,e);return p(s),function(e){for(var n=[],o=0;o<s.length;o++){var a=s[o];(l=r[a.id]).refs--,n.push(l)}e?p(s=i(t,e)):s=[];for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}}function p(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(b(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(b(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(c)return u;i.parentNode.removeChild(i)}if(d){var o=l++;i=a||(a=m()),e=g.bind(null,i,o,!1),n=g.bind(null,i,o,!0)}else i=m(),e=C.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var h,_=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function g(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function C(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){t.exports=window.Vue},function(t,e,n){"use strict";n.r(e);var i;n(6);e.default={install:function(t,e){return i?console.error("already installed."):(i=t,e({routes:n(8).default,store:n(13).default(i),config:n(14).default,locales:n(15).default,components:n(17).default}))}}},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("1785f2ff",i,!0,{})},function(t,e,n){(e=n(2)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"module.less"}]),t.exports=e},function(t,e,n){"use strict";function i(t){return n(9)("./".concat(t,".vue")).default}n.r(e),e.default=[{path:"testvue",component:i("testvue")},{path:"test",component:i("test")},{path:"test2",component:i("test2")},{path:"testa",component:i("testa")},{path:"testb",component:i("testb")},{path:"testc",component:i("testc")},{path:"testtreeview",component:i("testtreeview")}]},function(t,e,n){var i={"./test.vue":18,"./test2.vue":19,"./testa.vue":20,"./testb.vue":21,"./testc.vue":22,"./testtreeview.vue":23,"./testvue.vue":24};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id=9},function(t,e,n){"use strict";var i=n(1);n.n(i).a},function(t,e,n){(e=n(2)(!0)).push([t.i,"\n.test[data-v-684aebd6] {\n  color: red;\n}\n\n","",{version:3,sources:["test.vue?vue&type=style&index=0&id=684aebd6&scoped=true&lang=css&"],names:[],mappings:";AACA;EACE,UAAU;AACZ",file:"test.vue?vue&type=style&index=0&id=684aebd6&scoped=true&lang=css&",sourcesContent:["\n.test[data-v-684aebd6] {\n  color: red;\n}\n\n"]}]),t.exports=e},function(t,e,n){t.exports=n.p+"static/img/user.4819d46124c424b8e299f0f5ed68fb6d.png"},function(t,e,n){"use strict";n.r(e),e.default=function(t){return{state:{},getters:{},mutations:{},actions:{}}}},function(t,e,n){"use strict";n.r(e),e.default={}},function(t,e,n){"use strict";n.r(e),e.default={"zh-cn":n(16).default}},function(t,e,n){"use strict";n.r(e),e.default={"What to do":"要做什么",Completed:"已完成",Imcompleted:"未完成"}},function(t,e,n){"use strict";n.r(e),e.default={}},function(t,e,n){"use strict";n.r(e);var i={install:function(t){return{components:{},data:function(){return{message:"1",select1:null,options1:[{title:"男",value:"1"},{title:"女",value:"2"}],select2:null,options2:[{title:"水",value:"1"},{title:"火",value:"2"}]}},beforeCreate:function(){},beforeDestroy:function(){},methods:{onClick:function(){this.$f7.calendar.create({openIn:"auto",inputEl:"#downlogs"}).open()},onClickReload:function(){return this.$api.post("todo/reload")},onClickOpenViewIsolate:function(){this.$view.navigate("/test/todo/testa",{target:"_view"})},onClickOpenViewSame:function(){this.$view.navigate("/test/todo/testa")}}}}},o=(n(10),n(0)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test","eb-back-link":"Back"}}),t._v(" "),n("f7-block",{staticClass:"no-padding-horizontal",attrs:{strong:""}},[n("f7-treeview",[n("f7-treeview-item",{attrs:{label:"images","icon-f7":"folder_fill"}},[n("f7-treeview-item",{attrs:{label:"avatar.png","icon-f7":"images_fill"}}),t._v(" "),n("f7-treeview-item",{attrs:{label:"background.jpg","icon-f7":"images_fill"}})],1),t._v(" "),n("f7-treeview-item",{attrs:{label:"documents","icon-f7":"folder_fill"}},[n("f7-treeview-item",{attrs:{label:"cv.docx","icon-f7":"document_text_fill"}}),t._v(" "),n("f7-treeview-item",{attrs:{label:"info.docx","icon-f7":"document_text_fill"}})],1),t._v(" "),n("f7-treeview-item",{attrs:{label:".gitignore","icon-f7":"logo_github"}}),t._v(" "),n("f7-treeview-item",{attrs:{label:"index.html","icon-f7":"document_text_fill"}})],1)],1),t._v(" "),n("f7-block",[n("div",{staticClass:"test"},[t._v(t._s(t.message))]),t._v(" "),n("eb-button",{attrs:{id:"downlogs"},on:{click:t.onClick}},[t._v("click")]),t._v(" "),n("eb-button",{on:{click:t.onClickReload}},[t._v("reload")]),t._v(" "),n("eb-button",{on:{click:t.onClickOpenViewIsolate}},[t._v("Open View Isolate")]),t._v(" "),n("eb-button",{on:{click:t.onClickOpenViewSame}},[t._v("Open View Same")])],1),t._v(" "),n("eb-list",[n("eb-list-item",{attrs:{smartSelect:"",title:"select1",smartSelectParams:{openIn:"page",closeOnSelect:!0}}},[n("eb-select",{attrs:{name:"select1",options:t.options1},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1),t._v(" "),n("eb-list-item",{attrs:{smartSelect:"",title:"select2",smartSelectParams:{openIn:"page",closeOnSelect:!0}}},[n("eb-select",{attrs:{name:"select2",options:t.options2},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}})],1)],1)],1)}),[],!1,null,"684aebd6",null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i={},o=n(0),r=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("aaa")])}),[],!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i={},o=n(0),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("eb-page",[e("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test-a","eb-back-link":"Back"}}),this._v(" "),e("div",[this._v("a")]),this._v(" "),e("eb-link",{attrs:{"eb-href":"testb"}},[this._v("link b")])],1)}),[],!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i={},o=n(0),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("eb-page",[e("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test-b","eb-back-link":"Back"}}),this._v(" "),e("div",[this._v("b")]),this._v(" "),e("eb-link",{attrs:{"eb-href":"testc"}},[this._v("link c")])],1)}),[],!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i={methods:{onClickClose:function(){this.$view.close()}}},o=n(0),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("eb-page",[e("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test-c","eb-back-link":"Back"}}),this._v(" "),e("div",[this._v("c")]),this._v(" "),e("f7-link",{on:{click:this.onClickClose}},[this._v("Close")])],1)}),[],!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i={data:function(){return{root:{id:0,attrs:{selectable:!0,multiple:!0,checkbox:!0,checkOnLabel:!0}}}},methods:{onLoadChildren:function(t){var e=this,n=t.id;return this.$api.post("/a/baseadmin/role/children",{roleId:n,page:{size:0}}).then((function(t){return t.list.map((function(t){return{id:t.id,attrs:{label:t.roleName||"[New Role]",toggle:1===t.catalog,loadChildren:1===t.catalog},data:t}}))})).catch((function(t){throw e.$view.toast.show({text:t.message}),t}))},onNodeClick:function(t,e){console.log("node:click",e.id)},onNodePerform:function(t,e,n){console.log("node:perform",n.id)},onPerformRootChange:function(){this.root={id:1,attrs:{}}},onPerformRootSelect:function(){var t=this.$refs.tree.checked();console.log(t.map((function(t){return t.id})).join())}}},o=n(0),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test-treeview","eb-back-link":"Back"}},[n("f7-nav-right",[n("eb-link",{attrs:{onPerform:t.onPerformRootChange}},[t._v("change")]),t._v(" "),n("eb-link",{attrs:{onPerform:t.onPerformRootSelect}},[t._v("select")])],1)],1),t._v(" "),n("eb-treeview",{ref:"tree",attrs:{root:t.root,onLoadChildren:t.onLoadChildren,onNodePerform:t.onNodePerform},on:{"node:click":t.onNodeClick},scopedSlots:t._u([{key:"content",fn:function(e){var i=e.node;return n("div",{},[t._v(t._s("- "+i.id))])}}])})],1)}),[],!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var i=n(4),o={mixins:[n.n(i).a.prototype.$meta.module.get("a-components").options.components.ebPageContext],components:{},data:function(){return{atomId:null,atomIds:null}},beforeCreate:function(){},beforeDestroy:function(){},methods:{onClickTest:function(){var t=this;this.$api.post("todo/progress").then((function(e){var n=e.progressId;t.$view.dialog.progressbar({progressId:n,title:"This is a test"}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}))},onClickSelectSingleAtom:function(){var t=this;this.$view.navigate("/a/base/atom/select",{target:"_self",context:{params:{selectMode:"single",selectedAtomId:this.atomId,atomClass:{module:"a-cms",atomClassName:"article"},where:{"f.sticky":0}},callback:function(e,n){200===e&&(t.atomId=n&&n.atomId)}}})},onClickSelectAtoms:function(){var t=this;this.$view.navigate("/a/base/atom/select",{target:"_self",context:{params:{selectMode:"multiple",selectedAtomIds:this.atomIds,atomClass:null},callback:function(e,n){200===e&&(t.atomIds=n&&n.map((function(t){return t.atomId})))}}})}}},r=n(0),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("eb-page",[i("eb-navbar",{attrs:{large:"",largeTransparent:"",title:"test","eb-back-link":"Back"}}),t._v(" "),i("f7-block",[i("div",{staticClass:"test"},[t._v("test red")]),t._v(" "),i("f7-link",{on:{click:t.onClickTest}},[t._v("Test")]),t._v(" "),i("br"),t._v(" "),i("f7-link",{on:{click:t.onClickSelectSingleAtom}},[t._v("Select Single Atom")]),t._v(" "),i("div",[t._v(t._s(t.atomId))]),t._v(" "),i("br"),t._v(" "),i("f7-link",{on:{click:t.onClickSelectAtoms}},[t._v("Select Atoms")]),t._v(" "),i("div",[t._v(t._s(t.atomIds))]),t._v(" "),i("img",{attrs:{src:n(12)}})],1),t._v(" "),i("f7-list",[i("f7-list-group",[i("eb-list-item",{attrs:{"group-title":"",title:"A"}}),t._v(" "),i("eb-list-item",{attrs:{title:"A1"}},[i("f7-list-group",[i("eb-list-item",{attrs:{"group-title":"",title:"AA"}}),t._v(" "),i("eb-list-item",{attrs:{title:"AA1"}}),t._v(" "),i("eb-list-item",{attrs:{title:"AA2"}})],1)],1),t._v(" "),i("eb-list-item",{attrs:{title:"A2"}})],1),t._v(" "),i("f7-list-group",[i("eb-list-item",{attrs:{"group-title":"",title:"B"}}),t._v(" "),i("eb-list-item",{attrs:{title:"B1"}},[i("f7-list-group",[i("eb-list-item",{attrs:{"group-title":"",title:"BB"}}),t._v(" "),i("eb-list-item",{attrs:{title:"BB1"}}),t._v(" "),i("eb-list-item",{attrs:{title:"BB2"}})],1)],1),t._v(" "),i("eb-list-item",{attrs:{title:"B2"}})],1),t._v(" "),i("f7-list-group",[i("eb-list-item",{attrs:{"group-title":"",title:"C"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C1"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}}),t._v(" "),i("eb-list-item",{attrs:{title:"C2"}})],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}]);