import{u,k as b,e as c,d as I,r as l,j as e}from"./main-642.js";import{h as v,$ as _,i as k,e as w,_ as m,j as g,E as C,k as E,I as N,s as W}from"./bi.77.82.js";import{h as p,G as y}from"./bi.305.846.js";import"./bi.838.689.js";import"./bi.735.690.js";function A({allIntegURL:x}){const f=u(),{formID:h}=b(),[t,a]=c(v),[n,F]=c(_),r=I(k),[i,d]=l.useState(!1),[j,s]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,t,a),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!g(n.triggered_entity)&&e.jsx(C,{setSnackbar:s}),g(n.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(y,{formID:h,formFields:r,handleInput:o=>p(o,t,a),giveWpConf:t,setGiveWpConf:a,isLoading:i,setIsLoading:d,setSnackbar:s}),e.jsx(N,{edit:!0,saveConfig:()=>W({flow:n,allIntegURL:x,conf:t,navigate:f,edit:1,setIsLoading:d,setSnackbar:s}),disabled:!t.mainAction||i,isLoading:i,dataConf:t,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{A as default};