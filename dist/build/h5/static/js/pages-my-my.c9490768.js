(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"00aa":function(e,t,i){"use strict";var a=i("c4bd"),n=i.n(a);n.a},"0ca9":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(i("cae8"));var n=a(i("ee84")),o=a(i("c8a9")),r={i18n:{messages:{"en-US":n.default,"zh-CN":o.default}},data:function(){return{graceFullLoading:!0,isH5Plus:!1}},computed:{userInfo:function(){return this.$store.state.userInfo},severList:function(){return[[{name:this.$t("My_collection"),icon:"point.png",aliasPath:"/my/favor"},{name:this.$t("Shipping_address"),icon:"addr.png",path:"/pages/my/address/address",aliasPath:"/my/address"},{name:this.$t("Security_center"),icon:"security.png"}]]},orderTypeList:function(){return[{name:this.$t("PENDING"),icon:"l5.png",badge:0},{name:this.$t("QUOTED"),icon:"l1.png",badge:0},{name:this.$t("PAID"),icon:"l2.png",badge:0},{name:this.$t("SHIPPED"),icon:"l3.png",badge:0},{name:this.$t("RECEIVED"),icon:"l4.png",badge:0}]}},onShow:function(){uni.showTabBar();for(var e=0;e<4;e++)uni.setTabBarItem({index:e,text:this.$t("Bar")[e]})},watch:{userInfo:{handler:function(e){e.nickname&&(this.graceFullLoading=!1),e.none&&(this.graceFullLoading=!1)},deep:!0,immediate:!0}},methods:{toOrderType:function(e){this.$Router.push({path:"/my/order"})},toPage:function(e,t){this.$Router.push({path:this.severList[e][t].aliasPath})},navigateLogin:function(){this.$Router.push({path:"/login"})}}};t.default=r},"0cf2":function(e,t,i){var a=i("d753");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("5f1c768a",a,!0,{sourceMap:!1,shadowMode:!1})},"16c1":function(e,t,i){"use strict";i.r(t);var a=i("db07"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"3ac7":function(e,t,i){"use strict";var a=i("0cf2"),n=i.n(a);n.a},5415:function(e,t,i){"use strict";i.r(t);var a=i("f6f8"),n=i("b8ab");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("00aa");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7f751d42",null,!1,a["a"],r);t["default"]=d.exports},7619:function(e,t,i){var a=i("9b8a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4b7bc5bc",a,!0,{sourceMap:!1,shadowMode:!1})},"7e03":function(e,t,i){"use strict";i.r(t);var a=i("0ca9"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},8976:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"grace-full-loading",style:{background:e.background,height:e.graceFullLoading?"100%":"0px",opacity:e.graceFullLoading?1:0},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.stopFun.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.stopFun.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{style:{width:e.size,height:e.size},attrs:{src:e.logoUrl,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"text",style:{fontSize:e.fontSize,color:e.textColor}},[e._v(e._s(e.text))])],1)],1)},o=[]},"9b8a":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"@-webkit-keyframes grace-fade-data-v-ff42bfaa{0%{opacity:.6}25%{opacity:1}50%{opacity:.6}75%{opacity:1}100%{opacity:.6}}@keyframes grace-fade-data-v-ff42bfaa{0%{opacity:.6}25%{opacity:1}50%{opacity:.6}75%{opacity:1}100%{opacity:.6}}.grace-full-loading[data-v-ff42bfaa]{width:100%;background:#fff;position:fixed;z-index:9999;top:0;left:0;bottom:0;overflow:hidden}.grace-full-loading .content[data-v-ff42bfaa]{width:%?300?%;height:auto;position:absolute;z-index:100;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:grace-fade-data-v-ff42bfaa 3.5s infinite linear;animation:grace-fade-data-v-ff42bfaa 3.5s infinite linear;opacity:.6;padding:%?10?%}.grace-full-loading .image[data-v-ff42bfaa]{text-align:center;font-size:0}.grace-full-loading .image uni-image[data-v-ff42bfaa]{width:%?138?%;height:%?138?%;border-radius:%?138?%}.grace-full-loading .text[data-v-ff42bfaa]{line-height:1.5em;font-size:%?22?%;margin-top:6px;text-align:center}",""]),e.exports=t},"9efc":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"\nuni-page-body[data-v-7f751d42]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.grace-sbody[data-v-7f751d42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;min-height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.grace-page-header[data-v-7f751d42]{width:100%;position:fixed;left:0;top:0;z-index:99;border-bottom:0 solid #fff}.grace-page-status-bar[data-v-7f751d42]{width:100%;height:0}.grace-page-header-nav[data-v-7f751d42]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grace-header-main[data-v-7f751d42]{width:%?300?%;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;overflow:hidden;min-height:44px}.grace-page-body[data-v-7f751d42]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.grace-page-footer[data-v-7f751d42]{width:100%;position:fixed;left:0;bottom:var(--window-bottom);z-index:99}.gui-page-rb-area[data-v-7f751d42]{width:%?100?%;position:fixed;right:%?20?%;bottom:%?100?%;z-index:1}.grace-page-loading[data-v-7f751d42]{width:100%;height:100%;background:hsla(0,0%,100%,.1);position:fixed;z-index:9999;left:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grace-page-loading-point[data-v-7f751d42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-page-loading-points[data-v-7f751d42]{width:%?20?%;height:%?20?%;background-color:#3688ff;border-radius:%?50?%;margin:%?10?%;opacity:.5}@-webkit-keyframes pageLoading1-data-v-7f751d42{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading1-data-v-7f751d42{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading2-data-v-7f751d42{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading2-data-v-7f751d42{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading3-data-v-7f751d42{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading3-data-v-7f751d42{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}.animate1[data-v-7f751d42]{-webkit-animation:pageLoading1-data-v-7f751d42 1.2s infinite linear;animation:pageLoading1-data-v-7f751d42 1.2s infinite linear}.animate2[data-v-7f751d42]{-webkit-animation:pageLoading2-data-v-7f751d42 1.2s infinite linear;animation:pageLoading2-data-v-7f751d42 1.2s infinite linear}.animate3[data-v-7f751d42]{-webkit-animation:pageLoading3-data-v-7f751d42 1.2s infinite linear;animation:pageLoading3-data-v-7f751d42 1.2s infinite linear}.grace-page-fixed-top[data-v-7f751d42]{position:fixed;top:44px;left:0;width:%?750?%;z-index:99998}",""]),e.exports=t},aa04:function(e,t){e.exports="data:image/png;base64,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"},b821:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={gracePage:i("5415").default,graceFullLoading:i("cae8").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("gracePage",{attrs:{customHeader:!1}},[a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("graceFullLoading",{attrs:{graceFullLoading:e.graceFullLoading,logoUrl:""}}),a("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus}},[e.userInfo.name?a("v-uni-view",{staticClass:"userinfo"},[a("v-uni-view",{staticClass:"face"},[a("v-uni-image",{attrs:{src:e.userInfo.avatar}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"username"},[e._v(e._s(e.userInfo.nickname))]),a("v-uni-view",{staticClass:"integral"},[e._v(e._s(e.$t("Credit"))+":"+e._s(e.userInfo.credit))])],1)],1):a("v-uni-view",{staticStyle:{width:"100%"}},[a("v-uni-view",{staticClass:"grace-h3 grace-white",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateLogin.apply(void 0,arguments)}}},[e._v(e._s(e.$t("Login")))])],1),a("myLink",{staticClass:"setting",attrs:{to:"/settings"}},[a("v-uni-image",{attrs:{src:i("cc03")}})],1)],1),a("v-uni-view",{staticClass:"list ",staticStyle:{"border-radius":"24rpx"}},[a("v-uni-view",{staticClass:"li",staticStyle:{height:"80rpx"}},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.$t("My_order")))]),a("v-uni-view",{staticClass:"grace-gray",staticStyle:{width:"200rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrderType()}}},[e._v(e._s(e.$t("All_orders")))]),a("v-uni-image",{staticClass:"to",attrs:{src:i("aa04")}})],1),a("v-uni-view",{staticClass:"grace-flex",staticStyle:{padding:"15rpx","border-radius":"0 0 20rpx 20rpx"}},e._l(e.orderTypeList,(function(t,i){return a("v-uni-view",{key:t.name,staticClass:"label",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrderType(i)}}},[a("v-uni-view",{staticClass:"icon"},[t.badge>0?a("v-uni-view",{staticClass:"badge"},[e._v(e._s(t.badge))]):e._e(),a("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/"+t.icon}})],1),a("v-uni-view",{staticClass:"grace-text-center",staticStyle:{width:"100%"}},[e._v(e._s(t.name))])],1)})),1)],1),e._l(e.severList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"list"},e._l(t,(function(o,r){return a("v-uni-view",{key:o.name,staticClass:"li",class:{noborder:r==t.length-1},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(n,r)}}},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/sever/"+o.icon}})],1),a("v-uni-view",{staticClass:"text"},[e._v(e._s(o.name))]),a("v-uni-image",{staticClass:"to",attrs:{src:i("aa04")}})],1)})),1)}))],2)],1)},o=[]},b8ab:function(e,t,i){"use strict";i.r(t);var a=i("e0e8"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},c4bd:function(e,t,i){var a=i("9efc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("615b1da0",a,!0,{sourceMap:!1,shadowMode:!1})},c8a9:function(e){e.exports=JSON.parse('{"My_order":"我的订单","Credit":"积分","All_orders":"全部订单","Shipping_address":"收货地址","My_collection":"我的收藏","Security_center":"安全中心"}')},cae8:function(e,t,i){"use strict";i.r(t);var a=i("8976"),n=i("16c1");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("d257");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ff42bfaa",null,!1,a["a"],r);t["default"]=d.exports},cc03:function(e,t,i){e.exports=i.p+"static/img/setting.13f3e40b.png"},d257:function(e,t,i){"use strict";var a=i("7619"),n=i.n(a);n.a},d753:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"[data-v-8d081e56] .grace-page-body{background-color:#f4f4f4}.header[data-v-8d081e56]{background-color:#ff7500;width:92%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-8d081e56]{padding-top:0}.header .userinfo[data-v-8d081e56]{width:90%;display:-webkit-box;display:-webkit-flex;display:flex}.header .userinfo .face[data-v-8d081e56]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw}.header .userinfo .face uni-image[data-v-8d081e56]{width:100%;height:100%;border-radius:100%}.header .userinfo .info[data-v-8d081e56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:wrap;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-8d081e56]{width:100%;color:#fff;font-size:%?40?%}.header .userinfo .info .integral[data-v-8d081e56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?20?%;height:%?40?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%}.header .setting[data-v-8d081e56]{-webkit-flex-shrink:0;flex-shrink:0;width:6vw;height:6vw}.header .setting uni-image[data-v-8d081e56]{width:100%;height:100%}.hover[data-v-8d081e56]{background-color:#eee}.orders[data-v-8d081e56]{background-color:#ff7500;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-8d081e56]{height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-8d081e56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-8d081e56]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-8d081e56]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-8d081e56]{width:7vw;height:7vw;z-index:9}.label[data-v-8d081e56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.label .icon[data-v-8d081e56]{position:relative;width:7vw;height:7vw;margin:0 1vw}.label .icon .badge[data-v-8d081e56]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.label .icon uni-image[data-v-8d081e56]{width:7vw;height:7vw;z-index:9}.list[data-v-8d081e56]{background:#fff}.list + .list[data-v-8d081e56]{margin-top:%?30?%}.list .li[data-v-8d081e56]{width:92%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .li.noborder[data-v-8d081e56]{border-bottom:0}.list .li .icon[data-v-8d081e56]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-8d081e56]{width:%?50?%;height:%?50?%}.list .li .text[data-v-8d081e56]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-8d081e56]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}",""]),e.exports=t},db07:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"graceFullLoading",props:{graceFullLoading:{type:Boolean,default:!1},logoUrl:{type:String,default:""},text:{type:String,default:"Loading ..."},size:{type:String,default:"138rpx"},fontSize:{type:String,default:"22rpx"},textColor:{type:String,default:"#999999"},background:{type:String,default:"rgba(255,255,255,1)"}},methods:{stopFun:function(){return!1}}};t.default=a},db72:function(e,t,i){"use strict";i.r(t);var a=i("b821"),n=i("7e03");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("3ac7");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"8d081e56",null,!1,a["a"],r);t["default"]=d.exports},e0e8:function(e,t,i){"use strict";i("c975"),i("a9e3"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{customHeader:{type:Boolean,default:!0},headerHeight:{type:Number,default:44},headerIndex:{type:Number,default:98},headerBG:{type:String,default:"none"},statusBarBG:{type:String,default:"none"},footerIndex:{type:Number,default:98},footerBg:{type:String,default:""},isSwitchPage:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20},rbIndex:{type:Number,default:1},borderWidth:{type:String,default:"0"},borderColor:{type:String,default:"#D1D1D1"},loadingBG:{type:String,default:"rgba(255,255,255, 0.1)"},isLoading:{type:Boolean,default:!1},loadingPointBg:{type:String,default:"#3688FF"},bounding:{type:Boolean,default:!0}},data:function(){return{statusBarHeight:44,iphoneXButtomHeight:0,BoundingWidth:"0px",fixedTop:0}},created:function(){this.customHeader?this.fixedTop=this.headerHeight:this.fixedTop=44;try{var e=uni.getSystemInfoSync();if(e.model=e.model.replace(" ",""),e.model=e.model.toLowerCase(),-1==e.model.indexOf("iphonex")&&-1==e.model.indexOf("iphone11")||(this.iphoneXButtomHeight=uni.upx2px(50)),!this.customHeader)return;this.statusBarHeight=e.statusBarHeight}catch(t){return null}},methods:{getHeaderHeight:function(){return this.headerHeight+this.statusBarHeight},stopfun:function(){}}};t.default=a},ee84:function(e){e.exports=JSON.parse('{"My_order":"My order","Credit":"Credit","All_orders":"All orders","Shipping_address":"Shipping address","My_collection":"My collection","Security_center":"Security Center"}')},f6f8:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"grace-sbody"},[e.customHeader?i("v-uni-view",[i("v-uni-view",{staticClass:"grace-page-header",style:{"z-index":e.headerIndex,background:e.headerBG,borderBottomWidth:e.borderWidth,borderBottomColor:e.borderColor}},[i("v-uni-view",{staticClass:"grace-page-status-bar",style:{height:e.statusBarHeight+"px",background:e.statusBarBG}}),i("v-uni-view",{staticClass:"grace-page-header-nav",style:{minHeight:e.headerHeight+"px",height:e.headerHeight+"px",overflow:"hidden"},attrs:{id:"gracePageHeader"}},[i("v-uni-view",{staticClass:"grace-header-main"},[e._t("gHeader")],2),e.bounding?i("v-uni-view",{style:{width:e.BoundingWidth,flexShrink:"0"}}):e._e()],1)],1),i("v-uni-view",{style:{width:"100%",height:e.headerHeight+e.statusBarHeight+"px"}})],1):e._e(),i("v-uni-view",{staticClass:"grace-page-body"},[e._t("gBody")],2),e.isSwitchPage?e._e():i("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}}),i("v-uni-view",{staticClass:"grace-page-footer",style:{"z-index":e.footerIndex,background:e.footerBg}},[e._t("gFooter"),e.isSwitchPage?e._e():i("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}})],2),i("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:e.rbRight+"rpx",bottom:e.rbBottom+"rpx",width:e.rbWidth+"rpx",zIndex:e.rbIndex}},[e._t("gRTArea")],2),i("v-uni-view",{staticClass:"grace-page-fixed-top",style:{top:e.fixedTop+"px"}},[e._t("gFixedTop")],2),e.isLoading?i("v-uni-view",{staticClass:"grace-page-loading",style:{background:e.loadingBG},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.stopfun.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.stopfun.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"grace-page-loading-point"},[i("v-uni-view",{staticClass:"grace-page-loading-points animate1",style:{background:e.loadingPointBg}}),i("v-uni-view",{staticClass:"grace-page-loading-points animate2",style:{background:e.loadingPointBg}}),i("v-uni-view",{staticClass:"grace-page-loading-points animate3",style:{background:e.loadingPointBg}})],1)],1):e._e()],1)},o=[]}}]);