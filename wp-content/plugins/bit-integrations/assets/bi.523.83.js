import{u as b,k as I,e as m,r as o,d as _,j as e}from"./main-642.js";import{$ as S,h as k,i as w,e as C,_ as r,j as c,E as F,k as v,I as y,s as E}from"./bi.77.82.js";import{h as f,c as N}from"./bi.432.687.js";import{O as L}from"./bi.820.688.js";import"./bi.838.689.js";import"./bi.735.690.js";function T({allIntegURL:g}){const p=b();I();const[a,O]=m(S),[t,n]=m(k),[u,$]=o.useState(!1),[x,d]=o.useState({list:!1,field:!1,auth:!1,group:!1}),[h,s]=o.useState({show:!1}),l=_(w),j=()=>{if(!N(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}E({flow:a,allIntegURL:g,conf:t,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,t,n),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(a.triggered_entity)&&e.jsx(F,{setSnackbar:s}),c(a.triggered_entity)&&e.jsx(v,{setSnackbar:s}),e.jsx(L,{formID:a.triggered_entity_id,formFields:l,handleInput:i=>f(i,t,n),omniSendConf:t,setOmniSendConf:n,loading:x,setLoading:d,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:j,disabled:t.field_map.length<1,isLoading:u,dataConf:t,setDataConf:n,formFields:l}),e.jsx("br",{})]})}export{T as default};
