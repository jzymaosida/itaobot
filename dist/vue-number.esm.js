var e={name:"Number",props:{quantity:{type:String,required:!0}},data:()=>({num:"1"}),created(){this.num=this.quantity},watch:{num(){this.num>999&&(this.num="999",this.$emit("update:quantity","999")),this.num<1&&(this.num="1",this.$emit("update:quantity","1"))}},methods:{quantityChange(e){let t=e.target.value;t=t.replace(/[^\d]/g,""),this.num=t,this.$emit("update:quantity",t),this.$emit("qc")},quantityBlur(){this.num=Number(this.num).toString(),this.$emit("update:quantity",this.num)},action(e){e?(this.num=(Number(this.num)+1).toString(),this.$emit("update:quantity",this.num)):(this.num=(this.num-1).toString(),this.$emit("update:quantity",this.num)),this.$emit("qc")}}};function t(e,t,n,i,s,a,o,r,u,d){"boolean"!=typeof o&&(u=r,r=o,o=!1);const c="function"==typeof n?n.options:n;let m;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),a?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=m):t&&(m=o?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),m)if(c.functional){const e=c.render;c.render=function(t,n){return m.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,m):[m]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(e){return(e,t)=>function(e,t){const i=n?t.media||"default":e,o=a[i]||(a[i]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(n),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{const e=o.ids.size-1,t=document.createTextNode(n),i=o.element.childNodes;i[e]&&o.element.removeChild(i[e]),i.length?o.element.insertBefore(t,i[e]):o.element.appendChild(t)}}}(e,t)}let s;const a={};const o=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"act",on:{click:function(t){return e.action(!1)}}},[e._v("-")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],attrs:{type:"text"},domProps:{value:e.num},on:{blur:e.quantityBlur,input:[function(t){t.target.composing||(e.num=t.target.value)},e.quantityChange]}}),e._v(" "),n("span",{staticClass:"act",on:{click:function(t){return e.action(!0)}}},[e._v("+")])])},staticRenderFns:[]},(function(e){e&&e("data-v-db5d4464_0",{source:"input[data-v-db5d4464]{border:0;outline:0;width:30px;text-align:center}.act[data-v-db5d4464]{cursor:pointer;display:inline-block;text-align:center;border-radius:50%!important;border:none;background:#f2f2f2;width:24px;height:24px;user-select:none;line-height:normal}",map:void 0,media:void 0})}),e,"data-v-db5d4464",false,undefined,!1,i,void 0,void 0);const r={install:function(e){e.component(o.name,o)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r);export default r;
