var e=require("lodash");function n(e,n,t,o,r,s,d,i,a,l){"boolean"!=typeof d&&(a=i,i=d,d=!1);const c="function"==typeof t?t.options:t;let f;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),o&&(c._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=f):n&&(f=d?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,i(e))}),f)if(c.functional){const e=c.render;c.render=function(n,t){return f.call(t),e(n,t)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,f):[f]}return t}const t=n({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("span",[e._v(e._s(e.label)+"变更dddasdaddggg")]),e._v(" "),t("input",{attrs:{type:"text"}})])},staticRenderFns:[]},undefined,{name:"eInput",props:{label:{type:String,default:()=>"默认label"}},created(){console.log(e.map([1,2,3],(e=>2*e))),console.log("@@@")}},"data-v-372ff8d3",false,undefined,!1,void 0,void 0,void 0);t.install=function(e){e.component(t.name,t)};export default t;
