var I=Object.defineProperty,v=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))E.call(e,t)&&f(a,t,e[t]);if(p)for(var t of p(e))k.call(e,t)&&f(a,t,e[t]);return a},x=(a,e)=>v(a,C(e));import{u as w,r as c,d as h,e as N,j as s}from"./main-642.js";import{$ as z,h as F,i as L,e as $,_ as j,j as y,E as R,k as U,I as W}from"./bi.77.82.js";import{h as D,s as K}from"./bi.874.800.js";import{S as M}from"./bi.525.801.js";import"./bi.856.799.js";import"./bi.838.689.js";import"./bi.735.690.js";function P({allIntegURL:a}){const e=w(),[t,i]=c.useState({show:!1}),o=h(z),[n,r]=N(F),[S,_]=c.useState({name:"",authKey:""}),m=h(L),[d,g]=c.useState({auth:!1,list:!1,tag:!1,page:!1,update:!1}),b=l=>{g(x(u({},d),{update:l}))};return s.jsxs("div",{style:{width:900},children:[s.jsx($,{snack:t,setSnackbar:i}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:l=>D(l,n,r,S,_),value:n.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsxs("div",{className:"my-3",children:[!y(o.triggered_entity)&&s.jsx(R,{setSnackbar:i}),y(o.triggered_entity)&&s.jsx(U,{setSnackbar:i})]}),s.jsx(M,{selzyConf:n,setSelzyConf:r,formFields:m,loading:d,setLoading:g}),s.jsx(W,{edit:!0,saveConfig:()=>{K(o,a,n,e,{edit:1},b)},isLoading:d.update,disabled:n.field_map.length<1,dataConf:n,setDataConf:r,formFields:m})]})}export{P as default};