import{u,k as b,e as m,d as I,r as c,j as t}from"./main-642.js";import{h as _,$ as F,i as k,e as w,_ as l,j as f,E as C,k as v,I as E,s as N}from"./bi.77.82.js";import{h as g}from"./bi.866.772.js";import{B as y}from"./bi.309.773.js";import"./bi.838.689.js";import"./bi.735.690.js";function A({allIntegURL:x}){const p=u(),{formID:h}=b(),[e,a]=m(_),[n,S]=m(F),d=I(k),[o,i]=c.useState(!1),[j,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>g(r,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!f(n.triggered_entity)&&t.jsx(C,{setSnackbar:s}),f(n.triggered_entity)&&t.jsx(v,{setSnackbar:s}),t.jsx(y,{formID:h,formFields:d,handleInput:r=>g(r,e,a,i,s),bitFormConf:e,setBitFormConf:a,isLoading:o,setIsLoading:i,setSnackbar:s}),t.jsx(E,{edit:!0,saveConfig:()=>N({flow:n,allIntegURL:x,conf:e,navigate:p,edit:1,setIsLoading:i,setSnackbar:s}),disabled:e.field_map.length<2||o,isLoading:o,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{A as default};
