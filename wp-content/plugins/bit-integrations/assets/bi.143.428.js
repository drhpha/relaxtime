import{u as S,k as j,r as n,j as t}from"./main-642.js";import{e as b,l as I,I as v,F as P}from"./bi.77.82.js";import{B as k}from"./bi.801.726.js";import{S as _}from"./bi.164.918.js";import N from"./bi.996.297.js";import{c as w}from"./bi.283.844.js";import{S as y}from"./bi.879.845.js";import"./bi.986.742.js";function q({formFields:l,setFlow:d,flow:u,allIntegURL:p}){const f=S(),{formID:c}=j(),[i,o]=n.useState(!1),[s,m]=n.useState(1),[g,a]=n.useState({show:!1}),[e,r]=n.useState({name:"SendPulse",type:"SendPulse",client_id:"",client_secret:"",field_map:[{formField:"",sendPulseField:""}],actions:{}}),x=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h===3){if(!w(e)){a({show:!0,msg:"Please map all required fields to continue."});return}if(!(e!=null&&e.listId)){a({show:!0,msg:"Please select list to continue."});return}e.name!==""&&e.field_map.length>0&&m(3)}};return t.jsxs("div",{children:[t.jsx(b,{snack:g,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(_,{step:3,active:s})}),t.jsx(N,{formID:c,sendPulseConf:e,setSendPulseConf:r,step:s,setstep:m,isLoading:i,setIsLoading:o,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[t.jsx(y,{formID:c,formFields:l,sendPulseConf:e,setSendPulseConf:r,isLoading:i,setIsLoading:o,setSnackbar:a}),t.jsxs("button",{onClick:()=>x(3),disabled:!(e!=null&&e.listId)||e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[I("Next","bit-integrations")," "," ",t.jsx(k,{className:"ml-1 rev-icn"})]})]}),t.jsx(v,{step:s,saveConfig:()=>P(u,d,p,e,f,"","",o),isLoading:i,dataConf:e,setDataConf:r,formFields:l})]})}export{q as default};
