var u=Object.defineProperty,m=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(e,t,s)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))f.call(t,s)&&n(e,s,t[s]);return e},l=(e,t)=>m(e,v(t));import{c as h}from"./mobile.2b77bb81.js";import{_ as C}from"./index.8673f28e.js";import{a as k,A as j,r as i,e as B,j as _,k as D,g as o,B as I,C as S,o as $,t as g}from"./vendor.d721e0a0.js";const{createDemo:w}=h("timeselect"),x=w({setup(){const e=k({visible1:!1,val1:""}),t=()=>{e.visible1=!0};return l(c({},j(e)),{handleClick1:t})}}),d=e=>(I("data-v-2db6a625"),e=e(),S(),e),y={class:"demo"},F=d(()=>o("h2",null,"\u57FA\u672C\u7528\u6CD5",-1)),A=d(()=>o("span",null,[o("label",null,"\u65F6\u95F4\u914D\u9001")],-1)),N={class:"selected-option"},V={class:"timeselect-wrapper"};function E(e,t,s,R,q,z){const r=i("nut-cell"),p=i("nut-timeselect");return $(),B("div",y,[F,_(r,{onClick:e.handleClick1},{default:D(()=>[A,o("div",N,g(e.val1),1)]),_:1},8,["onClick"]),o("div",V,[_(p,{visible:e.visible1},null,8,["visible"])])])}var L=C(x,[["render",E],["__scopeId","data-v-2db6a625"]]);export{L as default};