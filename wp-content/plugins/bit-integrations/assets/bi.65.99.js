import{u,k as b,e as d,d as I,r as m,j as e}from"./main-642.js";import{h as C,$ as w,i as _,e as k,_ as l,j as x,E as v,k as E,I as N,s as W}from"./bi.77.82.js";import{h as f,W as y}from"./bi.818.722.js";import"./bi.838.689.js";import"./bi.735.690.js";function A({allIntegURL:g}){const p=u();b();const[s,a]=d(C),[n,h]=d(w),r=I(_),[c,o]=m.useState(!1),[j,t]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(k,{snack:j,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>f(i,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!x(n.triggered_entity)&&e.jsx(v,{setSnackbar:t}),x(n.triggered_entity)&&e.jsx(E,{setSnackbar:t}),e.jsx(y,{wcConf:s,setWcConf:a,formFields:r,handleInput:i=>f(i,s,a,o,t),isLoading:c,setIsLoading:o}),e.jsx(N,{edit:!0,saveConfig:()=>W({flow:n,setFlow:h,allIntegURL:g,conf:s,navigate:p,edit:1,setIsLoading:o,setSnackbar:t}),disabled:!1,isLoading:c,dataConf:s,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{A as default};
