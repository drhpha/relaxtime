import{u,k as I,e as o,d as b,r,j as e}from"./main-642.js";import{h as E,$ as _,i as k,e as w,_ as d,j as c,E as C,k as v,I as N,s as y}from"./bi.77.82.js";import{h as F}from"./bi.622.733.js";import{E as S}from"./bi.684.734.js";import"./bi.838.689.js";import"./bi.735.690.js";function P({allIntegURL:l}){const m=u(),{id:$,formID:g}=I(),[t,a]=o(E),[n,f]=o(_),i=b(k),[x,s]=r.useState({show:!1}),[h,p]=r.useState(!1);return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,t,a),name:"name",value:t.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(n.triggered_entity)&&e.jsx(C,{setSnackbar:s}),c(n.triggered_entity)&&e.jsx(v,{setSnackbar:s}),e.jsx(S,{formID:g,formFields:i,enchargeConf:t,setEnchargeConf:a}),e.jsx(N,{edit:!0,saveConfig:()=>y({flow:n,setFlow:f,allIntegURL:l,conf:t,navigate:m,edit:1,setIsLoading:p,setSnackbar:s}),disabled:t.listId===""||t.field_map.length<1,isLoading:h,dataConf:t,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{P as default};
