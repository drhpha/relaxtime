import{k,r as a,e as i,d as u,j as s}from"./main-642.js";import{$ as j,i as g,h as p,e as W,E as b,k as w,s as h}from"./bi.77.82.js";import E from"./bi.395.243.js";import{W as F}from"./bi.839.725.js";import"./bi.801.726.js";function P({allIntegURL:r}){const{formID:n}=k(),[m,o]=a.useState({show:!1}),[c,d]=a.useState(!1),[t,f]=i(j),l=u(g),[e,x]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(W,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(b,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:l,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>h({flow:t,setFlow:f,allIntegURL:r,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{P as default};
