import{u as j,k as u,e as d,d as b,r as m,j as e}from"./main-642.js";import{h as I,$ as _,i as k,e as w,_ as c,j as l,E as C,k as v,I as E,s as N}from"./bi.77.82.js";import{h as y}from"./bi.970.727.js";import{T as F}from"./bi.730.728.js";import"./bi.846.701.js";import"./bi.728.729.js";/* empty css          */function M({allIntegURL:g}){const f=j(),{formID:x}=u(),[t,a]=d(I),[n,S]=d(_),i=b(k),[o,r]=m.useState(!1),[p,s]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:p,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-150 d-in-b",children:c("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>y(h,t,a),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!l(n.triggered_entity)&&e.jsx(C,{setSnackbar:s}),l(n.triggered_entity)&&e.jsx(v,{setSnackbar:s}),e.jsx(F,{formID:x,formFields:i,telegramConf:t,setTelegramConf:a,isLoading:o,setIsLoading:r,setSnackbar:s}),e.jsx(E,{edit:!0,saveConfig:()=>N({flow:n,allIntegURL:g,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.chat_id===""||o,isLoading:o,dataConf:t,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{M as default};
