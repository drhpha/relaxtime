import{u as j,k as u,e as c,d as I,r as m,j as e}from"./main-642.js";import{h as P,$ as _,i as k,e as v,_ as l,j as p,E as w,k as C,I as E,s as M}from"./bi.77.82.js";import{h as x,P as N}from"./bi.417.814.js";function L({allIntegURL:f}){const g=j(),{formID:h}=u(),[s,a]=c(P),[n,y]=c(_),d=I(k),[i,o]=m.useState(!1),[b,t]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:b,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>x(r,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!p(n.triggered_entity)&&e.jsx(w,{setSnackbar:t}),p(n.triggered_entity)&&e.jsx(C,{setSnackbar:t}),e.jsx(N,{formID:h,formFields:d,handleInput:r=>x(r,s,a,o),paidMembershipProConf:s,setPaidMembershipProConf:a,isLoading:i,setIsLoading:o,setSnackbar:t}),e.jsx(E,{edit:!0,saveConfig:()=>M({flow:n,allIntegURL:f,conf:s,navigate:g,edit:1,setIsLoading:o,setSnackbar:t}),disabled:!s.mainAction||i||s.selectedMembership===void 0,isLoading:i,dataConf:s,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{L as default};