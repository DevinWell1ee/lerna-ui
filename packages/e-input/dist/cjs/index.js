"use strict";var e=require("lodash");function t(e,t,n,o,r,s,i,d,a,c){"boolean"!=typeof i&&(a=d,d=i,i=!1);const l="function"==typeof n?n.options:n;let f;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):t&&(f=i?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(l.functional){const e=l.render;l.render=function(t,n){return f.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,f):[f]}return n}const n=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v(e._s(e.label))]),e._v(" "),n("input",{attrs:{type:"text"}})])},staticRenderFns:[]},undefined,{name:"eInput",props:{label:{type:String,default:()=>"默认label"}},created(){console.log(e.map([1,2,3],(e=>2*e)))}},"data-v-6701d63d",false,undefined,!1,void 0,void 0,void 0);n.install=function(e){e.component(n.name,n)},module.exports=n;
