import{c as l}from"./mobile.4255fd67.js";import{_ as a}from"./index.4b39d8d5.js";import{r as e,e as o,j as s,k as t,B as n,C as i,g as m,o as u,l as f}from"./vendor.f398f23f.js";const{createDemo:c}=l("avatar"),d=c({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})}),r=l=>(n("data-v-646e018d"),l=l(),i(),l),g={class:"demo full"},p=r((()=>m("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1))),h=r((()=>m("h2",null,"修改形状",-1))),b=r((()=>m("h2",null,"修改背景色",-1))),v=r((()=>m("h2",null,"修改背景图片",-1))),_=r((()=>m("h2",null,"可以修改头像的内容",-1))),j=f("N"),y=r((()=>m("h2",null,"点击头像触发事件",-1)));var A=a(d,[["render",function(l,a,n,i,m,f){const c=e("nut-avatar"),d=e("nut-cell");return u(),o("div",g,[p,s(d,null,{default:t((()=>[s(c,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(c,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(c,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),h,s(d,null,{default:t((()=>[s(c,{icon:"my",shape:"square"}),s(c,{icon:"my",shape:"round"})])),_:1}),b,s(d,null,{default:t((()=>[s(c,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),v,s(d,null,{default:t((()=>[s(c,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),_,s(d,null,{default:t((()=>[s(c,null,{default:t((()=>[j])),_:1})])),_:1}),y,s(d,null,{default:t((()=>[s(c,{icon:"my",onActiveAvatar:l.handleClick},null,8,["onActiveAvatar"])])),_:1})])}],["__scopeId","data-v-646e018d"]]);export{A as default};