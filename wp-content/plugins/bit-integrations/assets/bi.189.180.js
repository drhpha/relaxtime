import{u,k as b,e as c,d as I,r as m,j as e}from"./main-642.js";import{h as L,$ as _,i as k,e as w,_ as l,j as f,E as C,k as v,I as E,s as N}from"./bi.77.82.js";import{h as x,L as y}from"./bi.487.851.js";function A({allIntegURL:g}){const h=u(),{formID:j}=b(),[s,a]=c(L),[n,F]=c(_),r=I(k),[i,d]=m.useState(!1),[p,t]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:p,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>x(o,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!f(n.triggered_entity)&&e.jsx(C,{setSnackbar:t}),f(n.triggered_entity)&&e.jsx(v,{setSnackbar:t}),e.jsx(y,{formID:j,formFields:r,handleInput:o=>x(o,s,a),lifterLmsConf:s,setLifterLmsConf:a,isLoading:i,setIsLoading:d,setSnackbar:t}),e.jsx(E,{edit:!0,saveConfig:()=>N({flow:n,allIntegURL:g,conf:s,navigate:h,edit:1,setIsLoading:d,setSnackbar:t}),disabled:s.mainAction===""||i,isLoading:i,dataConf:s,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{A as default};
