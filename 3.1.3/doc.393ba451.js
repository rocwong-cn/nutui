var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&r(e,s,t[s]);return e},i=(e,a)=>t(e,s(a)),d=(e,t,s)=>(r(e,"symbol"!=typeof t?t+"":t,s),s);import("data:text/javascript;base64,Cg==");import{n as l,h as m,v as u,d as _,_ as p,i as h}from"./index.20f35658.js";import{d as g,r as v,c as f,o as E,u as k,a as A,b,w as I,e as V,f as w,v as j,g as D,h as L,F as U,i as O,n as P,j as y,k as T,l as R,t as C,m as x,p as S,q as N,T as B,s as H,x as F,y as Y,z as W,A as X,B as G,C as K,D as J,S as M,E as z,G as Q,H as q,I as Z,J as $,K as ee}from"./vendor.f7062dc0.js";var te=g({name:"app"});te.render=function(e,t,s,a,c,o){const r=v("router-view");return E(),f(r)};const se=g({name:"search",setup(){const e=k(),t=A({nav:l,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});b((()=>{l.forEach((e=>{e.packages.forEach((e=>{t.navList.push(e)}))}))})),I((()=>t.searchVal),(e=>{e?t.searchList=t.navList.filter((t=>{if(!1===t.show)return!1;return new RegExp(e,"gi").test(t.name+" "+t.cName+t.desc)})):(t.searchCName="",t.searchIndex=0,t.searchList=[])}));return{data:t,onfocus:e=>{},choseList:s=>{let a=t.searchIndex;40==s.keyCode&&a++,38==s.keyCode&&a--,a<0&&(a=0);const c=t.searchList;if(c.length>0){const o=c[a]&&c[a].name;o&&(t.searchCurName=o,t.searchIndex=a,13==s.keyCode&&(e.push({path:"/"+c[a].name}),t.searchCurName="",t.searchIndex=0,t.searchVal=""))}},onblur:e=>{setTimeout((()=>{t.searchList=[],t.searchVal=""}),200)},checklist:()=>{t.searchVal="",t.searchCurName="",t.searchIndex=0}}}}),ae={class:"search-box"},ce={class:"search-list"},oe=["onClick"];se.render=function(e,t,s,a,c,o){const r=v("router-link");return E(),V("div",ae,[w(D("input",{type:"text",class:"search-input",placeholder:"在 NutUI 中搜索","onUpdate:modelValue":t[0]||(t[0]=t=>e.data.searchVal=t),onFocus:t[1]||(t[1]=(...t)=>e.onfocus&&e.onfocus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.onblur&&e.onblur(...t)),onKeyup:t[3]||(t[3]=(...t)=>e.choseList&&e.choseList(...t))},null,544),[[j,e.data.searchVal]]),w(D("ul",ce,[(E(!0),V(U,null,O(e.data.searchList,((t,s)=>(E(),V("li",{class:P(e.data.searchCurName==t.name?"cur":""),onClick:s=>e.checklist(t),key:s},[y(r,{to:t.name.toLowerCase()},{default:T((()=>[R(C(t.name)+" ",1),D("span",null,C(t.cName),1)])),_:2},1032,["to"])],10,oe)))),128))],512),[[L,e.data.searchList.length>0]])])};const re=class{constructor(){d(this,"currentRoute",x("/")),d(this,"_themeColor",x("black"))}static getInstance(){if(null==this.instance){this.instance=new re;let e=localStorage.getItem("nutui-theme-color");e&&(this.instance.themeColor.value=e)}return this.instance}get themeColor(){return this._themeColor}set themeColor(e){this._themeColor=e}};let ne=re;d(ne,"instance");var ie=g({name:"doc-header",components:{Search:se},setup(){let e=[];l.forEach((t=>{e.push(...t.packages)}));const t=A({theme:"black",verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),s=S((()=>{let t=ne.getInstance().currentRoute.value;return function(s){const a=s.toLowerCase();return"component"===a?(t.indexOf("-taro")>-1&&(t=t.split("-taro")[0]),e.findIndex((e=>e.name.toLowerCase()===t))>-1):t===a||a.includes(t)}})),a=S((()=>function(){return`doc-header-${ne.getInstance().themeColor.value}`}));return{header:m,versions:u,version:"3.1.3",data:t,toHome:()=>{ne.getInstance().currentRoute.value="/"},isActive:s,checkTheme:(e,s)=>{t.isShowSelect=!1,t.activeIndex=s,t.verson=e.name,window.location.href=e.link},themeName:a,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{t.isShowSelect=!1}}}});const de={class:"header-logo"},le=D("span",{class:"logo-border"},null,-1),me={class:"version"},ue={class:"header-nav"},_e={class:"nav-box"},pe={class:"nav-list"},he=["href"],ge={class:"nav-item"},ve={class:"header-select-hd"},fe=D("i",{class:""},null,-1),Ee={class:"header-select-bd"},ke=["onClick"],Ae=D("li",{class:"nav-item"},[D("a",{class:"user-link",target:"_blank",href:"https://github.com/jdf2e/nutui"}),D("a",{class:"user-link gitee",target:"_blank",href:"https://gitee.com/jd-platform-opensource/nutui"})],-1);ie.render=function(e,t,s,a,c,o){const r=v("Search");return E(),V("div",{class:P(["doc-header",e.themeName()])},[D("div",de,[D("a",{class:"logo-link",href:"#",onClick:t[0]||(t[0]=(...t)=>e.toHome&&e.toHome(...t))}),le,D("span",me,"v"+C(e.version),1)]),D("div",ue,[y(r),D("div",_e,[D("ul",pe,[(E(!0),V(U,null,O(e.header,(t=>(E(),V("li",{class:P(["nav-item",{active:e.isActive(t.name)}]),key:t.name},[D("a",{href:t.path},C(t.cName),9,he)],2)))),128)),D("li",ge,[D("div",{onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onFocusout:t[2]||(t[2]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),tabindex:"0",class:P(["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]]),onClick:t[3]||(t[3]=N((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[D("div",ve,[R(C(e.data.verson),1),fe]),y(B,{name:"fade"},{default:T((()=>[w(D("div",Ee,[(E(!0),V(U,null,O(e.versions,((t,s)=>(E(),V("div",{class:P(["header-select-item",{active:e.data.activeIndex===s}]),key:s,onClick:N((s=>e.checkTheme(t)),["stop"])},C(t.name),11,ke)))),128))],512),[[L,e.data.isShowSelect]])])),_:1})],34)]),Ae])])])],2)};var be=g({name:"doc-nav",setup:()=>({isActive:S((()=>function(e){const t=ne.getInstance().currentRoute.value;return(t.indexOf("-taro")>-1?t.split("-taro")[0]:t)==e.toLowerCase()})),nav:A(l),docs:A(_),currentRoute:ne.getInstance().currentRoute})});const Ie={class:"doc-nav"},Ve=["href"],we={key:0};be.render=function(e,t,s,a,c,o){const r=v("router-link");return E(),V("div",Ie,[D("ol",null,[D("li",null,C(e.docs.name),1),D("ul",null,[(E(!0),V(U,null,O(e.docs.packages,(t=>w((E(),V("li",{class:P({active:e.isActive(t.name)}),key:t},[t.isLink?(E(),V("a",{key:1,href:t.name,target:"_blank"},C(t.cName),9,Ve)):(E(),f(r,{key:0,to:t.name.toLowerCase()},{default:T((()=>[R(C(t.cName),1)])),_:2},1032,["to"]))],2)),[[L,t.show]]))),128))])]),(E(!0),V(U,null,O(e.nav,(t=>(E(),V("ol",{key:t},[D("li",null,C(t.name),1),D("ul",null,[(E(!0),V(U,null,O(t.packages,(t=>(E(),V(U,{key:t},[t.show?(E(),V("li",we,[y(r,{to:t.name.toLowerCase(),class:P({active:e.isActive(t.name)})},{default:T((()=>[R(C(t.name)+"  ",1),D("b",null,C(t.cName),1)])),_:2},1032,["to","class"])])):H("",!0)],64)))),128))])])))),128))])};var je=g({name:"doc-footer",setup(){const e=A({themeList:[{name:"热情红",color:"red"},{name:"暗黑风",color:"black"},{name:"纯净白",color:"white"}],activeIndex:0,isShowSelect:!1});e.activeIndex=e.themeList.findIndex((e=>e.color==ne.getInstance().themeColor.value));return{themeColor:ne.getInstance().themeColor,data:e,clickOut:()=>{document.addEventListener("click",(e=>{console.log("e.target",e.target)}),!1)},checkTheme:(t,s)=>{e.isShowSelect=!1,e.activeIndex=s,ne.getInstance().themeColor.value=t,localStorage.setItem("nutui-theme-color",t)}}}});const De={class:"doc-footer-content"},Le=D("div",{class:"doc-footer-list"},[D("img",{class:"doc-footer-logo",src:"data:image/png;base64,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"})],-1),Ue={class:"doc-footer-list"},Oe=D("h4",{class:"doc-footer-title"},"相关资源",-1),Pe={class:"doc-footer-item"},ye={class:"sub-link",target:"_blank",href:"https://vuejs.org"},Te=[R("Vue")],Re={class:"doc-footer-item"},Ce={class:"sub-link",target:"_blank",href:"https://vitejs.dev"},xe=[R("Vite")],Se={class:"doc-footer-item"},Ne={class:"sub-link",target:"_blank",href:"https://relay.jd.com"},Be=[R("Relay")],He={class:"doc-footer-item"},Fe={class:"sub-link",target:"_blank",href:"https://taro.jd.com"},Ye=[R("Taro")],We={class:"doc-footer-item"},Xe={class:"sub-link",target:"_blank",href:"https://ling.jd.com/jdw"},Ge=[R("羚珑")],Ke={class:"doc-footer-list"},Je=D("h4",{class:"doc-footer-title"},"社区",-1),Me={class:"doc-footer-item"},ze={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui"},Qe=[R("GitHub")],qe={class:"doc-footer-item"},Ze={class:"sub-link",target:"_blank",href:"https://www.zhihu.com/column/c_1263837684834889728"},$e=[R("知乎专栏")],et={class:"doc-footer-item vx-item"},tt=[R("微信")],st=D("i",{class:"icon-vx"},null,-1),at=D("div",{class:"vx-box"},[D("p",{class:"vx-desc"},"微信交流群"),D("p",{class:"vx-desc"},"扫码添加好友"),D("img",{class:"img-code",src:"/nutui/3.1.3/vx-code1.89d526cc.png"}),D("p",{class:"vx-desc"},[R("回复"),D("span",{class:"vx-red"},"NutUI"),R("即刻进群")])],-1),ct={class:"doc-footer-list"},ot=D("h4",{class:"doc-footer-title"},"关于我们",-1),rt={class:"doc-footer-item"},nt={class:"sub-link",href:"#/joinus"},it=[R("加入我们")],dt={class:"doc-footer-item"},lt={class:"sub-link",href:"mailto:nutui@jd.com"},mt=[R("联系我们")],ut={class:"doc-footer-item"},_t={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui/issues"},pt=[R("意见反馈")],ht={class:"doc-footer-item"},gt={class:"sub-link",target:"_blank",href:"https://fe.jd.com"},vt=[R("京东前端")],ft=D("div",{class:"doc-footer-select-hd"},[D("i",{class:"icon-color"}),R("主题换肤")],-1),Et={class:"doc-footer-select-bd"},kt=["onClick"],At=D("p",{class:"doc-footer-desc"},"2021 京东零售 - 基础业务体验部. All Rights Reserved.",-1);je.render=function(e,t,s,a,c,o){const r=F("hover");return E(),V("div",{class:P(["doc-footer",`doc-footer-${e.themeColor}`])},[D("div",De,[Le,D("div",Ue,[Oe,D("div",Pe,[w(D("a",ye,Te,512),[[r]])]),D("div",Re,[w(D("a",Ce,xe,512),[[r]])]),D("div",Se,[w(D("a",Ne,Be,512),[[r]])]),D("div",He,[w(D("a",Fe,Ye,512),[[r]])]),D("div",We,[w(D("a",Xe,Ge,512),[[r]])])]),D("div",Ke,[Je,D("div",Me,[w(D("a",ze,Qe,512),[[r]])]),D("div",qe,[w(D("a",Ze,$e,512),[[r]])]),D("div",et,[w(D("span",null,tt,512),[[r]]),st,at])]),D("div",ct,[ot,D("div",rt,[w(D("a",nt,it,512),[[r]])]),D("div",dt,[w(D("a",lt,mt,512),[[r]])]),D("div",ut,[w(D("a",_t,pt,512),[[r]])]),D("div",ht,[w(D("a",gt,vt,512),[[r]])])]),D("div",{class:"doc-footer-list",onClick:t[0]||(t[0]=N((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[ft,w(D("div",Et,[(E(!0),V(U,null,O(e.data.themeList,((t,s)=>(E(),V("div",{class:P(["doc-footer-select-item",{active:e.data.activeIndex===s}]),key:s,onClick:N((a=>e.checkTheme(t.color,s)),["stop"])},[D("i",{class:P(`circle-${t.color}`)},null,2),R(C(t.name),1)],10,kt)))),128))],512),[[L,e.data.isShowSelect]])])]),At],2)};var bt=g({name:"doc-demo-preview",props:{url:String}});const It={class:"doc-demo-preview"},Vt=["src"];bt.render=function(e,t,s,a,c,o){return E(),V("div",It,[D("iframe",{src:e.url,frameborder:"0"},null,8,Vt)])};var wt=g({name:"doc",components:{[ie.name]:ie,[be.name]:be,[je.name]:je,[bt.name]:bt},setup(){const e=Y(),t=k(),s=["/intro","/start","/theme","/joinus","/starttaro"],a=A({demoUrl:"demo.html",curKey:"vue",tabs:[{key:"vue",text:"vue"},{key:"taro",text:"taro"}]}),c=S((()=>{let e=[];return l.map((t=>{t.packages.forEach((t=>{let{tarodoc:s,name:a}=t;s&&(e.push(a.toLowerCase()),e.push(`${a.toLowerCase()}-taro`))}))})),e})),o=e=>e.path.indexOf("taro")>-1,r=S((()=>c.value.findIndex((t=>t===e.path.substr(1)))>-1)),d=e=>{const{origin:t,pathname:s}=window.location;ne.getInstance().currentRoute.value=e.name,a.demoUrl=`${t}${s.replace("index.html","")}demo.html#${e.path}`};return b((()=>{d(e),a.curKey=o(e)?"taro":"vue"})),W((e=>{d(e),a.curKey=o(e)?"taro":"vue"})),i(n({},X(a)),{handleTabs:s=>{a.curKey=s,(()=>{const s=e.path;t.replace(o(e)?s.substr(0,s.length-5):`${s}-taro`)})()},isShow:()=>!s.includes(e.path),isShowTaroDoc:r})}});G("data-v-d4289dc6");const jt={class:"doc-content"},Dt={class:"doc-content-document"},Lt={key:0,class:"doc-content-tabs"},Ut=["onClick"],Ot={key:1,class:"doc-content-tabs"},Pt=[D("div",{class:"tab-item cur"},"vue/taro",-1)];K(),wt.render=function(e,t,s,a,c,o){const r=v("doc-header"),n=v("doc-nav"),i=v("router-view"),d=v("doc-demo-preview");return E(),V("div",null,[y(r),y(n),D("div",jt,[D("div",Dt,[e.isShow()&&e.isShowTaroDoc?(E(),V("div",Lt,[(E(!0),V(U,null,O(e.tabs,(t=>(E(),V("div",{class:P(["tab-item",{cur:e.curKey===t.key}]),key:t.key,onClick:s=>e.handleTabs(t.key)},C(t.text),11,Ut)))),128))])):H("",!0),e.isShow()&&!e.isShowTaroDoc?(E(),V("div",Ot,Pt)):H("",!0),y(i)]),y(d,{url:e.demoUrl},null,8,["url"])])])},wt.__scopeId="data-v-d4289dc6";const yt={baseUrl:"",isPrd:!0};yt.isPrd=!0,yt.baseUrl="https://nutui.jd.com";class Tt{checkStatus(e){const t={state:0,value:{},message:""};return!e||200!==e.status&&304!==e.status&&400!==e.status||(t.value=e.data),t}request(e,t,s){return a=this,c=null,o=function*(){const a=Object.assign({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},s.header);try{const c={method:t,url:yt.baseUrl+e,data:s,params:s,timeout:3e4,crossDomain:!0,headers:a},o=yield J(c);return this.checkStatus(o)}catch(c){return console.error(c),null}},new Promise(((e,t)=>{var s=e=>{try{n(o.next(e))}catch(s){t(s)}},r=e=>{try{n(o.throw(e))}catch(s){t(s)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);n((o=o.apply(a,c)).next())}));var a,c,o}}class Rt{constructor(){d(this,"httpClient"),this.httpClient=new Tt}getArticle(){return this.httpClient.request("/openapi/article?pageIndex=1&pageSize=100","get",{})}getCases(){return this.httpClient.request("/openapi/cases?pageIndex=1&pageSize=100","get",{})}}var Ct=g({name:"doc",components:{[ie.name]:ie,[je.name]:je},setup(){const e=A({articleList:[],communityArticleList:[],tabData:[{title:"全部文章"}],activeIndex:0,showNutuiCat:!1}),t=e=>{ne.getInstance().currentRoute.value=e.name};b((()=>{const s=Y();t(s);const a=new Rt;J("https://relayapi.jd.com/").then((t=>{t&&(e.showNutuiCat=!0)})),a.getArticle().then((t=>{0==(null==t?void 0:t.state)&&t.value.data.arrays.forEach((t=>{1==t.type?e.articleList.push(t):e.communityArticleList.push(t)}))}))})),W((e=>{t(e)}));return i(n({},X(e)),{clickTab:t=>{e.activeIndex=t},toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}});G("data-v-0623f22a");const xt=D("div",{class:"resource-main"},[D("div",{class:"resource-main-content"},[D("h3",{class:"sub-title"},"资源"),D("p",{class:"sub-desc"},"这里汇总了 NutUI 相关的所有的资源")])],-1),St={class:"resource-content"},Nt={key:0,class:"resource-block"},Bt=[D("h4",{class:"sub-title"},"模板资源",-1),D("p",{class:"sub-desc"},[R(" 目前已提供京东大促模板工程 "),D("a",{target:"_blank",href:"https://coding.jd.com/jdc-activity/Nutui-Cat"},"NutUI-Cat"),R("，含有开发京东大促项目过程中使用到的通用模块、组件、模板，可以在未来的大促项目中复用，达到提效降本的效果。 ")],-1)],Ht={key:1,class:"resource-block"},Ft=[D("h4",{class:"sub-title"},"设计资源",-1),D("p",{class:"sub-desc"},[R("这里提供 NUTUI 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。你可以在这个"),D("span",{class:"sub-red"},"地址"),R("中反馈对新版本 Sketch Symbols 组件的意见。")],-1),D("div",{class:"no-data"},[D("img",{class:"nodata-img-joy",src:"/nutui/3.1.3/img-joy.6d8227fe.png"}),D("p",{class:"nodata-desc"},"敬请期待")],-1)],Yt={key:2,class:"resource-block"},Wt=D("h4",{class:"sub-title"},"设计资源",-1),Xt=D("p",{class:"sub-desc"},"想要了解 NutUI 设计体系背后的故事？如何才能更好的应用？你可以查阅下述我们为你精挑细选的文章。也欢迎关注 NutUI 官方专栏，这里常有关于 NutUI 设计体系下相关话题内容的最新分享和讨论。",-1),Gt={class:"tab-box"},Kt={class:"tab-hd"},Jt=["onClick"],Mt={class:"tab-bd"},zt=["onClick"],Qt=["src"],qt={class:"design-title"},Zt={class:"resource-block"},$t=D("h4",{class:"sub-title"},"社区文章",-1),es=D("p",{class:"sub-desc"},null,-1),ts={class:"article-box"},ss=["href"];K(),Ct.render=function(e,t,s,a,c,o){const r=v("doc-header"),n=v("doc-footer"),i=F("hover");return E(),V(U,null,[y(r),xt,D("div",St,[e.showNutuiCat?(E(),V("div",Nt,Bt)):H("",!0),0===e.articleList.length?(E(),V("div",Ht,Ft)):(E(),V("div",Yt,[Wt,Xt,D("div",Gt,[D("div",Kt,[(E(!0),V(U,null,O(e.tabData,((t,s)=>(E(),V("div",{class:P(["tab-hd-item",{active:e.activeIndex===s}]),key:s,onClick:t=>e.clickTab(s)},C(t.title),11,Jt)))),128))]),w(D("div",Mt,[(E(!0),V(U,null,O(e.articleList,(t=>(E(),V("div",{class:"design-item",key:t.id,onClick:s=>e.toLink(t.id)},[D("img",{class:"img-design",src:t.cover_image},null,8,Qt),w(D("p",qt,[R(C(t.title),1)],512),[[i]])],8,zt)))),128))],512),[[L,0===e.activeIndex]])])])),D("div",Zt,[$t,es,D("ul",ts,[(E(!0),V(U,null,O(e.communityArticleList,(e=>(E(),V("li",{class:"article-item",key:e.id},[D("a",{class:"article-link",target:"_blank",href:e.link},C(e.title)+" - "+C(e.user_name),9,ss)])))),128))])])]),y(n)],64)},Ct.__scopeId="data-v-0623f22a";var as=g({name:"main",components:{[ie.name]:ie,[je.name]:je},setup(){const e=A({articleList:new Array,casesImages:new Array,currentCaseItem:{},currentCaseIndex:0,localTheme:localStorage.getItem("nutui-theme-color"),showAwait:!1});let t=null;b((()=>{const s=new Rt;s.getArticle().then((t=>{0==(null==t?void 0:t.state)&&(e.articleList=t.value.data.arrays.map((e=>{if(1==e.type)return e})).filter((e=>e)))})),s.getCases().then((s=>{var a;0==(null==s?void 0:s.state)&&(e.casesImages=s.value.data.arrays.map((e=>{var t;return(null==(t=e.cover_image)?void 0:t.length)&&(e.cover_image=e.cover_image.split(",")[0]),e})),(null==(a=e.casesImages)?void 0:a.length)&&(e.currentCaseItem=e.casesImages[e.currentCaseIndex]),setTimeout((()=>{t=new M(".doc-content-cases-content__list",{direction:"horizontal",slidesPerView:"auto",initialSlide:1,loop:!0,on:{slideChange:function(){let t=this.realIndex;e.currentCaseIndex=0===t?e.casesImages.length-1:t-1,setTimeout((()=>{e.currentCaseItem=e.casesImages[e.currentCaseIndex]}),230)}}})}),500))}))}));const s=S((()=>function(){return`doc-content-${ne.getInstance().themeColor.value}`})),a=S((()=>function(){return ne.getInstance().themeColor.value}));return i(n({toIntro:function(){Ks.push({path:"/intro"})}},X(e)),{themeName:s,themeNameValue:a,toLink:e=>{window.open("//jelly.jd.com/article/"+e)},onLeft:()=>{t.slidePrev()},onRight:()=>{t.slideNext()},toDetail:()=>{window.open("/cat")},goAwait:()=>{e.showAwait=!0},hideAwait:()=>{e.showAwait=!1}})}});G("data-v-8f48d100");const cs={class:"doc-content-index"},os={class:"content-left"},rs=D("div",{class:"content-title"}," NutUI ",-1),ns=D("div",{class:"content-smile"},null,-1),is=D("div",{class:"content-subTitle"},"京东风格的轻量级移动端 Vue 组件库",-1),ds={class:"content-button"},ls=[D("div",{class:"leftButtonText"},"开始使用",-1)],ms=Q('<div class="rightButton" data-v-8f48d100><div class="rightButtonText" data-v-8f48d100>扫码体验</div><div class="qrcodepart" data-v-8f48d100><div class="qrcode-text" data-v-8f48d100> 请使用手机扫码体验 </div><div class="qrcode" data-v-8f48d100></div></div></div>',1),us=D("iframe",{style:{"margin-left":"20px"},src:"https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"},null,-1),_s=D("div",{class:"doc-content-features"},[D("div",{class:"doc-content-hd"},[D("h4",{class:"doc-content-title"},"平台特色")]),D("ul",{class:"features-list"},[D("li",{class:"features-item"},[D("img",{src:"/nutui/3.1.3/img-home-features1.2ef25c62.png"}),D("p",{class:"features-title"},"京东风格"),D("p",{class:"features-desc"},"遵循京东 App 10.0 设计规范")]),D("li",{class:"features-item"},[D("img",{src:"/nutui/3.1.3/img-home-features5.54142c5e.png"}),D("p",{class:"features-title"},"适配多端"),D("p",{class:"features-desc a-l"},"基于 Taro 轻松开发多端小程序")]),D("li",{class:"features-item"},[D("img",{src:"/nutui/3.1.3/img-home-features2.37cc104b.png"}),D("p",{class:"features-title"},"组件丰富"),D("p",{class:"features-desc a-l"},"提供 70+ 组件，覆盖绝大多数业务场景")]),D("li",{class:"features-item"},[D("img",{src:"/nutui/3.1.3/img-home-features3.7207ff14.png"}),D("p",{class:"features-title"},"前沿技术"),D("p",{class:"features-desc"},"vue3 vite2.x typescript")]),D("li",{class:"features-item"},[D("img",{src:"/nutui/3.1.3/img-home-features4.e29dd764.png"}),D("p",{class:"features-title"},"贴心通道"),D("p",{class:"features-desc"},[R("社区维护 高效服务"),D("br"),R("技术支持 经验沉淀")])])])],-1),ps=D("div",{class:"doc-content-taro"},[D("div",{class:"doc-content-hd"},[D("h4",{class:"doc-content-title"},"一处代码 多端运行")]),D("div",{class:"taro-content"},[D("div",{class:"taro-left"}),D("div",{class:"taro-right"},[D("div",{class:"right-img"}),D("p",{class:"taro-desc"},[R(" 基于 Taro 对 NutUI 每一个组件进行深度适配"),D("br"),R(" 支持开发多端小程序 ")])])])],-1),hs={class:"doc-content-cat-marketing"},gs={class:"cat-content"},vs=D("div",{class:"cat-content-left"},[D("img",{src:"/nutui/3.1.3/cat-back.10d49674.png",alt:""})],-1),fs={class:"cat-content-right"},Es=D("div",{class:"cat-content-right-title"},[D("img",{src:"/nutui/3.1.3/cat-title.faf8ee3c.png",alt:""})],-1),ks=D("p",{class:"cat-content-right-desc"},"基于NutUI的大促组件库",-1),As={class:"marketing-content"},bs=D("div",{class:"marketing-content-left"},[D("img",{src:"/nutui/3.1.3/marketing-back.c54b4a20.png",alt:""})],-1),Is={class:"marketing-content-right"},Vs=D("div",{class:"marketing-content-right-title"},[D("img",{src:"/nutui/3.1.3/marketing-title.e7e09d1b.png",alt:""})],-1),ws=D("p",{class:"marketing-content-right-desc"},"基于NutUI的营销组件库",-1),js={key:0,class:"doc-content-cases"},Ds=D("div",{class:"doc-content-hd"},[D("h4",{class:"doc-content-title"},"赋能案例")],-1),Ls={class:"doc-content-cases-content"},Us={class:"doc-content-cases-content__main"},Os={class:"doc-content-cases-content__main-iconinfo"},Ps=["src"],ys=[D("img",{src:"/nutui/3.1.3/iphone-cases.9e49d331.png",alt:"",srcset:""},null,-1)],Ts={class:"doc-content-cases-content__list"},Rs=["src"],Cs={key:1,class:"doc-content-more"},xs=D("div",{class:"doc-content-hd"},[D("h4",{class:"doc-content-title"}),D("a",{class:"sub-more",href:"#/resource"},"More")],-1),Ss={class:"more-list"},Ns=["onClick"],Bs=["src"],Hs={class:"more-title"};K(),as.render=function(e,t,s,a,c,o){const r=v("doc-header"),n=v("doc-footer"),i=F("hover");return E(),V(U,null,[y(r),D("div",{class:P(["doc-content",e.themeName()])},[D("div",cs,[D("div",os,[rs,ns,is,D("div",ds,[D("div",{class:"leftButton",onClick:t[0]||(t[0]=(...t)=>e.toIntro&&e.toIntro(...t))},ls),ms,us])])]),_s,ps,D("div",hs,[D("div",gs,[vs,D("div",fs,[Es,ks,D("div",{class:"cat-content-right-godetail",onClick:t[1]||(t[1]=(...t)=>e.toDetail&&e.toDetail(...t))},"查看详情")])]),D("div",As,[bs,D("div",Is,[Vs,ws,D("div",{class:"marketing-content-right-godetail",onClick:t[2]||(t[2]=(...t)=>e.goAwait&&e.goAwait(...t))},"敬请期待")]),e.showAwait?(E(),V("div",{key:0,class:"marketing-content-mask",onClick:t[3]||(t[3]=(...t)=>e.hideAwait&&e.hideAwait(...t))}," 正在建设中，敬请期待~ ")):H("",!0)])]),e.casesImages.length?(E(),V("div",js,[Ds,D("div",Ls,[D("div",Us,[D("div",{class:"doc-content-cases-content__main-lefticon",onClick:t[4]||(t[4]=(...t)=>e.onLeft&&e.onLeft(...t))}),D("div",Os,[D("h4",null,C(e.currentCaseItem.product_name),1),D("p",null,C(e.currentCaseItem.product_info),1),D("img",{src:e.currentCaseItem.logo},null,8,Ps)]),D("div",{class:"doc-content-cases-content__main-iphone",style:z({backgroundImage:"url("+e.currentCaseItem.cover_image+")"})},ys,4),D("div",{class:"doc-content-cases-content__main-righticon",onClick:t[5]||(t[5]=(...t)=>e.onRight&&e.onRight(...t))})]),D("div",Ts,[D("div",{class:P(["swiper-wrapper",["black"==e.themeNameValue()?"noShadow":""]])},[(E(!0),V(U,null,O(e.casesImages,((e,t)=>(E(),V("div",{class:"swiper-slide",key:t},[D("img",{src:e.cover_image},null,8,Rs)])))),128))],2)])])])):H("",!0),e.articleList.length?(E(),V("div",Cs,[xs,D("ul",Ss,[(E(!0),V(U,null,O(e.articleList.slice(0,4),(t=>(E(),V("li",{class:"more-item",key:t.id,onClick:s=>e.toLink(t.id)},[D("img",{src:t.cover_image},null,8,Bs),w(D("p",Hs,[R(C(t.title),1)],512),[[i]])],8,Ns)))),128))])])):H("",!0)],2),y(n)],64)},as.__scopeId="data-v-8f48d100";const Fs=[],Ys={"/src/packages/__VUE/actionsheet/doc.md":()=>p((()=>import("./doc.2c874d0b.js")),["3.1.3/doc.2c874d0b.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/address/doc.md":()=>p((()=>import("./doc.d2e54d68.js")),["3.1.3/doc.d2e54d68.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/avatar/doc.md":()=>p((()=>import("./doc.6dd0d4e3.js")),["3.1.3/doc.6dd0d4e3.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/backtop/doc.md":()=>p((()=>import("./doc.934b889d.js")),["3.1.3/doc.934b889d.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/barrage/doc.md":()=>p((()=>import("./doc.5caf7063.js")),["3.1.3/doc.5caf7063.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/button/doc.md":()=>p((()=>import("./doc.12daef88.js")),["3.1.3/doc.12daef88.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/calendar/doc.md":()=>p((()=>import("./doc.0412b6bd.js")),["3.1.3/doc.0412b6bd.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/cell/doc.md":()=>p((()=>import("./doc.a31bfe49.js")),["3.1.3/doc.a31bfe49.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/checkbox/doc.md":()=>p((()=>import("./doc.9a7f2aa8.js")),["3.1.3/doc.9a7f2aa8.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/circleprogress/doc.md":()=>p((()=>import("./doc.ab0de989.js")),["3.1.3/doc.ab0de989.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/collapse/doc.md":()=>p((()=>import("./doc.4edfb9be.js")),["3.1.3/doc.4edfb9be.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/countdown/doc.md":()=>p((()=>import("./doc.ce72a6a5.js")),["3.1.3/doc.ce72a6a5.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/countup/doc.md":()=>p((()=>import("./doc.49659412.js")),["3.1.3/doc.49659412.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/datepicker/doc.md":()=>p((()=>import("./doc.0b2e46bd.js")),["3.1.3/doc.0b2e46bd.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/dialog/doc.md":()=>p((()=>import("./doc.b1c45f6f.js")),["3.1.3/doc.b1c45f6f.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/drag/doc.md":()=>p((()=>import("./doc.5cca3249.js")),["3.1.3/doc.5cca3249.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/fixednav/doc.md":()=>p((()=>import("./doc.1485446e.js")),["3.1.3/doc.1485446e.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/icon/doc.md":()=>p((()=>import("./doc.e830bdec.js")),["3.1.3/doc.e830bdec.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/infiniteloading/doc.md":()=>p((()=>import("./doc.352a7d55.js")),["3.1.3/doc.352a7d55.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/input/doc.md":()=>p((()=>import("./doc.229587a3.js")),["3.1.3/doc.229587a3.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/inputnumber/doc.md":()=>p((()=>import("./doc.009becf5.js")),["3.1.3/doc.009becf5.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/layout/doc.md":()=>p((()=>import("./doc.28f812cf.js")),["3.1.3/doc.28f812cf.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/menu/doc.md":()=>p((()=>import("./doc.5c6def55.js")),["3.1.3/doc.5c6def55.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/navbar/doc.md":()=>p((()=>import("./doc.84140b01.js")),["3.1.3/doc.84140b01.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/noticebar/doc.md":()=>p((()=>import("./doc.2d2807b2.js")),["3.1.3/doc.2d2807b2.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/notify/doc.md":()=>p((()=>import("./doc.6e9e6c03.js")),["3.1.3/doc.6e9e6c03.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/overlay/doc.md":()=>p((()=>import("./doc.60878a1f.js")),["3.1.3/doc.60878a1f.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/picker/doc.md":()=>p((()=>import("./doc.549659c5.js")),["3.1.3/doc.549659c5.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/popup/doc.md":()=>p((()=>import("./doc.160b9593.js")),["3.1.3/doc.160b9593.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/price/doc.md":()=>p((()=>import("./doc.ecc4d474.js")),["3.1.3/doc.ecc4d474.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/progress/doc.md":()=>p((()=>import("./doc.4354237b.js")),["3.1.3/doc.4354237b.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/pullrefresh/doc.md":()=>p((()=>import("./doc.1a122876.js")),["3.1.3/doc.1a122876.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/radio/doc.md":()=>p((()=>import("./doc.31ea848d.js")),["3.1.3/doc.31ea848d.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/radiogroup/doc.md":()=>p((()=>import("./doc.35f446e6.js")),["3.1.3/doc.35f446e6.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/range/doc.md":()=>p((()=>import("./doc.0ff1cbdd.js")),["3.1.3/doc.0ff1cbdd.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/rate/doc.md":()=>p((()=>import("./doc.75060ca2.js")),["3.1.3/doc.75060ca2.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/shortpassword/doc.md":()=>p((()=>import("./doc.0986cb37.js")),["3.1.3/doc.0986cb37.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/steps/doc.md":()=>p((()=>import("./doc.308a95c7.js")),["3.1.3/doc.308a95c7.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/swipe/doc.md":()=>p((()=>import("./doc.0afe8255.js")),["3.1.3/doc.0afe8255.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/swiper/doc.md":()=>p((()=>import("./doc.df2bf89d.js")),["3.1.3/doc.df2bf89d.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/swiperitem/doc.md":()=>p((()=>import("./doc.61992e09.js")),["3.1.3/doc.61992e09.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/switch/doc.md":()=>p((()=>import("./doc.fe362a6f.js")),["3.1.3/doc.fe362a6f.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/tab/doc.md":()=>p((()=>import("./doc.9c3cf3ab.js")),["3.1.3/doc.9c3cf3ab.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/tab-backup/doc.md":()=>p((()=>import("./doc.d2d48293.js")),["3.1.3/doc.d2d48293.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/tabbar/doc.md":()=>p((()=>import("./doc.8032a1f9.js")),["3.1.3/doc.8032a1f9.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/temp/doc.md":()=>p((()=>import("./doc.9908e860.js")),["3.1.3/doc.9908e860.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/textarea/doc.md":()=>p((()=>import("./doc.519aefd5.js")),["3.1.3/doc.519aefd5.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/toast/doc.md":()=>p((()=>import("./doc.f3927c38.js")),["3.1.3/doc.f3927c38.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/uploader/doc.md":()=>p((()=>import("./doc.5ba644b9.js")),["3.1.3/doc.5ba644b9.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/video/doc.md":()=>p((()=>import("./doc.03597a74.js")),["3.1.3/doc.03597a74.js","3.1.3/vendor.f7062dc0.js"])};for(const Qs in Ys){let e=/packages\/__VUE\/(.*)\/doc.md/.exec(Qs)[1];Fs.push({path:"/"+e,component:Ys[Qs],name:e})}const Ws={"/src/packages/__VUE/backtop/doc.taro.md":()=>p((()=>import("./doc.taro.c094fa7a.js")),["3.1.3/doc.taro.c094fa7a.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/datepicker/doc.taro.md":()=>p((()=>import("./doc.taro.781f0760.js")),["3.1.3/doc.taro.781f0760.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/dialog/doc.taro.md":()=>p((()=>import("./doc.taro.efdf94e8.js")),["3.1.3/doc.taro.efdf94e8.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/drag/doc.taro.md":()=>p((()=>import("./doc.taro.57d40c10.js")),["3.1.3/doc.taro.57d40c10.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/infiniteloading/doc.taro.md":()=>p((()=>import("./doc.taro.2990ce86.js")),["3.1.3/doc.taro.2990ce86.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/notify/doc.taro.md":()=>p((()=>import("./doc.taro.dc56fecb.js")),["3.1.3/doc.taro.dc56fecb.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/picker/doc.taro.md":()=>p((()=>import("./doc.taro.deadac93.js")),["3.1.3/doc.taro.deadac93.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/swiper/doc.taro.md":()=>p((()=>import("./doc.taro.f4c55d5a.js")),["3.1.3/doc.taro.f4c55d5a.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/toast/doc.taro.md":()=>p((()=>import("./doc.taro.eb851a2d.js")),["3.1.3/doc.taro.eb851a2d.js","3.1.3/vendor.f7062dc0.js"]),"/src/packages/__VUE/uploader/doc.taro.md":()=>p((()=>import("./doc.taro.d194d9a0.js")),["3.1.3/doc.taro.d194d9a0.js","3.1.3/vendor.f7062dc0.js"])};for(const Qs in Ws){let e=/packages\/__VUE\/(.*)\/doc.taro.md/.exec(Qs)[1];Fs.push({path:`/${e}-taro`,component:Ws[Qs],name:`${e}-taro`})}const Xs={"/src/docs/international.md":()=>p((()=>import("./international.ca51b63f.js")),["3.1.3/international.ca51b63f.js","3.1.3/vendor.f7062dc0.js"]),"/src/docs/intro.md":()=>p((()=>import("./intro.dc344857.js")),["3.1.3/intro.dc344857.js","3.1.3/vendor.f7062dc0.js"]),"/src/docs/joinus.md":()=>p((()=>import("./joinus.eb183b7c.js")),["3.1.3/joinus.eb183b7c.js","3.1.3/vendor.f7062dc0.js"]),"/src/docs/start.md":()=>p((()=>import("./start.aeedc700.js")),["3.1.3/start.aeedc700.js","3.1.3/vendor.f7062dc0.js"]),"/src/docs/starttaro.md":()=>p((()=>import("./starttaro.827a0e3c.js")),["3.1.3/starttaro.827a0e3c.js","3.1.3/vendor.f7062dc0.js"]),"/src/docs/theme.md":()=>p((()=>import("./theme.f6c6e0ff.js")),["3.1.3/theme.f6c6e0ff.js","3.1.3/vendor.f7062dc0.js"])};for(const Qs in Xs){let e=/docs\/(.*).md/.exec(Qs)[1];Fs.push({path:"/"+e,component:Xs[Qs],name:e})}const Gs=[{path:"/",name:"/",component:as},{path:"/index",name:"index",component:wt,children:Fs},{path:"/resource",name:"resource",component:Ct}];Gs.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});const Ks=q({history:Z(),routes:Gs,scrollBehavior(e){if(e.hash){const t=e.hash.split("#")[1],s=document.getElementById(t);setTimeout((()=>{s&&s.scrollIntoView(!0)}))}}});Ks.afterEach(((e,t)=>{window.scrollTo(0,0);try{setTimeout((()=>{(new Image).src=`${yt.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`}),500)}catch(s){}}));const Js={setup:()=>({onlineFun:function(){alert("hello")}})};G("data-v-c6543ac2");const Ms=D("p",{class:"online-part"},[D("a",{href:"//gitpod.io/#https://github.com/jdf2e/nutui.git",target:"_blank",class:"online-btn"},"在线运行")],-1);K(),Js.render=function(e,t,s,a,c,o){return E(),V("div",null,[$(e.$slots,"highlight",{},void 0,!0),$(e.$slots,"default",{},void 0,!0),Ms])},Js.__scopeId="data-v-c6543ac2";const zs={mounted(e){e.addEventListener("mouseover",(()=>{e.style.color="#fa2c19"})),e.addEventListener("mouseleave",(()=>{e.style.color=""}))}};h&&location.replace("demo.html"+location.hash),ee(te).directive("hover",zs).component("demo-block",Js).use(Ks).mount("#doc");
