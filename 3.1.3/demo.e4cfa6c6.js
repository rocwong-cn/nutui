var t=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,l,a)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;import{c as i}from"./mobile.4f7f7b40.js";import{a as o,A as u,r as d,o as f,e as p,j as b,k as r,c as _,F as h,i as m,g as y,t as g,s as T,l as j}from"./vendor.f7062dc0.js";import"./index.20f35658.js";const{createDemo:w}=i("tab");var v=w({props:{},setup(){const t=o({editList:[{title:"标签一"},{title:"标签二"}]});return i=((t,e)=>{for(var l in e||(e={}))n.call(e,l)&&c(t,l,e[l]);if(a)for(var l of a(e))s.call(e,l)&&c(t,l,e[l]);return t})({},u(t)),e(i,l({changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}}));var i}});const O={class:"demo full"},L=y("h2",null,"基础用法，默认tab-title宽度均分相等",-1),k=y("p",{class:"content"},"这里是页签全部内容",-1),x=y("p",{class:"content"},"这里是页签待付款内容",-1),P=y("p",{class:"content"},"这里是页签待收获内容",-1),S=y("p",{class:"content"},"这里是页签已完成内容",-1),C=y("h2",null,"defaultIndex设置默认显示tab,iconType为half时切换选中icon样式",-1),D=y("h2",null,"switchTab监听切换tab返回事件",-1),I=y("p",{class:"content"},"这里是页签全部内容",-1),A=y("p",{class:"content"},"这里是页签待付款内容",-1),E=y("p",{class:"content"},"这里是页签待收获内容",-1),F=y("p",{class:"content"},"这里是页签已完成内容",-1),q=y("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),z=y("p",{class:"content"},"这里是页签全部内容",-1),B=y("p",{class:"content"},"这里是页签待付款内容",-1),G=y("p",{class:"content"},"这里是页签待收获内容",-1),H=y("p",{class:"content"},"这里是页签已完成内容",-1),J=y("h2",null," 禁止tab内容滑动",-1),K=y("p",{class:"content"},"这里是页签全部内容",-1),M=y("p",{class:"content"},"这里是页签待付款内容",-1),N=y("p",{class:"content"},"这里是页签待收获内容",-1),Q=y("p",{class:"content"},"这里是页签已完成内容",-1),R=y("h2",null,' 设置scrollType="scroll"，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。',-1),U=y("p",{class:"content"},"这里是页签全部内容",-1),V=y("p",{class:"content"},"这里是页签待付款内容",-1),W=y("p",{class:"content"},"这里是页签待收获内容",-1),X=y("p",{class:"content"},"这里是页签已完成内容",-1),Y=y("p",{class:"content"},"这里是页签已取消内容",-1),Z=y("p",{class:"content"},"这里是页签待评价内容",-1),$=y("h2",null,"设置slot:header可以自定义标签",-1),tt=y("p",{class:"content"},"这里是页签全部内容",-1),et=y("p",{class:"content"},"这里是页签待付款内容",-1),lt=y("p",{class:"content"},"这里是页签待收获内容",-1),at=y("p",{class:"content"},"这里是页签已完成内容",-1),nt=y("p",{class:"content"},"这里是页签已取消内容",-1),st=y("p",{class:"content"},"这里是页签待评价内容",-1),ct=y("h2",null,"左右tab布局",-1),it=y("p",{class:"content"},"这里是页签一内容",-1),ot=y("p",{class:"content"},"这里是页签二内容",-1),ut=y("p",{class:"content"},"这里是页签三内容",-1),dt=y("p",{class:"content"},"这里是页签四内容",-1),ft=y("p",{class:"content"},"这里是页签五内容",-1),pt=y("p",{class:"content"},"这里是页签六内容",-1),bt=y("p",{class:"content"},"这里是页签七内容",-1),rt=y("h2",null,"异步操作",-1),_t={class:"content"},ht=j("改变数据");v.render=function(t,e,l,a,n,s){const c=d("nut-tab-panel"),i=d("nut-tab"),o=d("nut-icon"),u=d("nut-button");return f(),p("div",O,[L,b(i,null,{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[k])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[x])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[P])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[S])),_:1})])),_:1}),C,D,b(i,{"default-index":1,onSwitchTab:t.switchTab,"icon-type":"half"},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[I])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[A])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[E])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[F])),_:1})])),_:1},8,["onSwitchTab"]),q,b(i,{"animated-time":500},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[z])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[B])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[G])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[H])),_:1})])),_:1}),J,b(i,{"no-swiping":!0},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[K])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[M])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[N])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[Q])),_:1})])),_:1}),R,b(i,{"animated-time":500,scrollType:"scroll"},{default:r((()=>[b(c,{"tab-title":"全部"},{default:r((()=>[U])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[V])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[W])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[X])),_:1}),b(c,{"tab-title":"已取消"},{default:r((()=>[Y])),_:1}),b(c,{"tab-title":"待评价"},{default:r((()=>[Z])),_:1})])),_:1}),$,b(i,{scrollType:"scroll"},{default:r((()=>[b(c,{"tab-title":"全部"},{header:r((()=>[b(o,{name:"dongdong"})])),default:r((()=>[tt])),_:1}),b(c,{"tab-title":"待付款"},{default:r((()=>[et])),_:1}),b(c,{"tab-title":"待收获"},{default:r((()=>[lt])),_:1}),b(c,{"tab-title":"已完成"},{default:r((()=>[at])),_:1}),b(c,{"tab-title":"已取消"},{default:r((()=>[nt])),_:1}),b(c,{"tab-title":"待评价"},{default:r((()=>[st])),_:1})])),_:1}),ct,b(i,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll","icon-type":"half"},{default:r((()=>[b(c,{"tab-title":"页签一"},{default:r((()=>[it])),_:1}),b(c,{"tab-title":"页签二"},{default:r((()=>[ot])),_:1}),b(c,{"tab-title":"页签三"},{default:r((()=>[ut])),_:1}),b(c,{"tab-title":"页签四"},{default:r((()=>[dt])),_:1}),b(c,{"tab-title":"页签五"},{default:r((()=>[ft])),_:1}),b(c,{"tab-title":"页签六"},{default:r((()=>[pt])),_:1}),b(c,{"tab-title":"页签七"},{default:r((()=>[bt])),_:1})])),_:1}),rt,t.editList.length>0?(f(),_(i,{key:0,"animated-time":500},{default:r((()=>[(f(!0),p(h,null,m(t.editList,((t,e)=>(f(),_(c,{"tab-title":t.title,key:e},{default:r((()=>[y("p",_t,"这里是页签"+g(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):T("",!0),b(u,{type:"primary",onClick:t.changeList},{default:r((()=>[ht])),_:1},8,["onClick"])])};export{v as default};
