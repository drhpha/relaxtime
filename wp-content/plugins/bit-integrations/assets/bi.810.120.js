import{k as x,r as a,e as n,d as k,j as s}from"./main-642.js";import{$ as j,i as g,h as b,e as u,E as w,k as h,s as E}from"./bi.77.82.js";import W from"./bi.395.243.js";import{W as F}from"./bi.839.725.js";import"./bi.801.726.js";function H({allIntegURL:i}){const{formID:r}=x(),[c,o]=a.useState({show:!1}),[d,m]=a.useState(!1),[t,f]=n(j),p=k(g),[e,l]=n(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:c,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:r,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>E({flow:t,setFlow:f,allIntegURL:i,conf:e,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{H as default};
