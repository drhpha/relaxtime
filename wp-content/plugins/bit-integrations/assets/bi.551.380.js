var T=Object.defineProperty;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(a,e,t)=>e in a?T(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,f=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&u(a,t,e[t]);if(p)for(var t of p(e))w.call(e,t)&&u(a,t,e[t]);return a};import{u as y,k as N,r as n,j as o}from"./main-642.js";import{e as _,_ as C,I as D,s as E}from"./bi.77.82.js";import{S as F}from"./bi.164.918.js";import q from"./bi.910.253.js";import{s as L,h as P,c as g}from"./bi.563.755.js";import{T as A}from"./bi.915.754.js";import"./bi.801.726.js";import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function V({formFields:a,setFlow:e,flow:t,allIntegURL:x}){const b=y(),{formID:h}=N(),[c,d]=n.useState(!1),[r,m]=n.useState(1),[j,i]=n.useState({show:!1}),v=[{key:"name",label:"Name",required:!0},{key:"desc",label:"Description",required:!1},{key:"due",label:"Date",required:!1}],[s,l]=n.useState({name:"Trello",type:"Trello",clientId:"",listId:"",listName:"",tags:"",pos:"",field_map:[{formField:"",trelloFormField:""}],cardFields:v,address_field:[],actions:{}});n.useEffect(()=>{window.opener&&L("trello")},[]);const I=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(s)){i({show:!0,msg:"Please map fields to continue."});return}s.listId!==""&&m(3)};return o.jsxs("div",{children:[o.jsx(_,{snack:j,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(F,{step:3,active:r})}),o.jsx(q,{formID:h,trelloConf:s,setTrelloConf:l,step:r,setstep:m,isLoading:c,setIsLoading:d,setSnackbar:i}),o.jsxs("div",{className:"btcd-stp-page",style:f({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(A,{formFields:a,handleInput:k=>P(k,s,l),trelloConf:s,setTrelloConf:l,isLoading:c,setIsLoading:d,setSnackbar:i}),o.jsxs("button",{onClick:()=>I(),disabled:!(s!=null&&s.listId)||!g(s),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[C("Next","bit-integrations")," "," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(D,{step:r,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:x,navigate:b,conf:s,setIsLoading:d,setSnackbar:i}),isLoading:c,dataConf:s,setDataConf:l,formFields:a})]})}export{V as default};
