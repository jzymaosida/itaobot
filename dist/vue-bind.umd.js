!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self)["v-bind"]=t()}(this,(function(){"use strict";var e={name:"Bind",props:{warnText:{type:String,default:"Please bind your email!"},cancelText:{type:String,default:"Cancel"},submitText:{type:String,default:"Submit"},emailPlaceHolder:{type:String,default:"Email"},passwordPlaceHolder:{type:String,default:"Password"},stop:{props:Boolean,default:!1}},data:()=>({email:"",password:""}),methods:{handleSubmit(){this.$emit("bind",{email:this.email,password:this.password})}}};function t(e,t,n,s,a,i,o,d,r,l){"boolean"!=typeof o&&(r=d,d=o,o=!1);const u="function"==typeof n?n.options:n;let c;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,a&&(u.functional=!0)),s&&(u._scopeId=s),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):t&&(c=o?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),c)if(u.functional){const e=u.render;u.render=function(t,n){return c.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,c):[c]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,t)=>function(e,t){const s=n?t.media||"default":e,o=i[s]||(i[s]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===a&&(a=document.head||document.getElementsByTagName("head")[0]),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(n),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{const e=o.ids.size-1,t=document.createTextNode(n),s=o.element.childNodes;s[e]&&o.element.removeChild(s[e]),s.length?o.element.insertBefore(t,s[e]):o.element.appendChild(t)}}}(e,t)}let a;const i={};const o=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-position-center",staticStyle:{top:"30%"}},[n("div",{staticClass:"uk-padding uk-card uk-card-default",staticStyle:{width:"450px"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"uk-alert-warning uk-margin",attrs:{"uk-alert":""}},[n("a",{staticClass:"uk-alert-close",attrs:{"uk-close":""}}),e._v(" "),n("p",[e._v(e._s(e.warnText))])]),e._v(" "),n("div",{staticClass:"uk-margin"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"uk-input",attrs:{placeholder:e.emailPlaceHolder,required:"",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"uk-margin"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"uk-input",attrs:{placeholder:e.passwordPlaceHolder,required:"",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"uk-margin uk-text-center"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit",disabled:!e.stop}},[e._v(e._s(e.submitText))]),e._v(" "),n("button",{staticClass:"uk-button uk-button-default uk-margin-left",attrs:{type:"reset"},on:{click:function(t){return e.$emit("avoid")}}},[e._v(e._s(e.cancelText)+"\n                ")])])])])])},staticRenderFns:[]},(function(e){e&&e("data-v-2b528bb6_0",{source:"body{background-color:#faebd7;height:100vh}",map:void 0,media:void 0})}),e,undefined,false,undefined,!1,s,void 0,void 0);const d={install:function(e){e.component(o.name,o)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(d),d}));
