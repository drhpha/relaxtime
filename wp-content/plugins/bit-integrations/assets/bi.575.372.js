import{u as w,k as C,r,j as e}from"./main-642.js";import{e as j,I as b,s as S,_ as P}from"./bi.77.82.js";import{B as v}from"./bi.801.726.js";import{S as W}from"./bi.164.918.js";import I from"./bi.826.249.js";import{W as N,g as k}from"./bi.728.749.js";import"./bi.986.742.js";function H({formFields:c,setFlow:d,flow:f,allIntegURL:g}){const x=w(),{formID:m}=C(),[u,i]=r.useState(!1),[t,l]=r.useState(1),[h,a]=r.useState({show:!1}),[s,o]=r.useState({name:"WP Courseware",type:"WP Courseware",field_map:[{formField:"",wpCoursewareField:""}],default:{},action:"",course:[],actions:{}}),p=n=>{n===2&&s.name!==""?(k(s,o),l(n)):n===3&&s.action!==""&&s.course.length>0&&l(n),document.getElementById("btcd-settings-wrp").scrollTop=0};return e.jsxs("div",{children:[e.jsx(j,{snack:h,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(W,{step:3,active:t})}),e.jsx(I,{formID:m,wpCoursewareConf:s,setWPCoursewareConf:o,step:t,nextPage:p,isLoading:u,setIsLoading:i,setSnackbar:a}),e.jsx("div",{className:"btcd-stp-page",style:{overflow:t===2&&"initial",width:t===2&&900,height:t===2&&"auto",minHeight:t===2&&"200px"},children:e.jsx(N,{formID:m,formFields:c,wpCoursewareConf:s,setWPCoursewareConf:o,setIsLoading:i,setSnackbar:a})}),e.jsx(b,{step:t,saveConfig:()=>S({flow:f,setFlow:d,allIntegURL:g,conf:s,navigate:x,setIsLoading:i,setSnackbar:a}),isLoading:u,dataConf:s,setDataConf:o,formFields:c}),e.jsx("div",{className:"btcd-stp-page",style:{width:t===2&&900,height:t===2&&"auto",minHeight:t===2&&"200px"},children:e.jsxs("button",{onClick:()=>p(3),disabled:s.action===""||s.course.length===0,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[P("Next","bit-integrations"),e.jsx(v,{className:"ml-1 rev-icn"})]})})]})}export{H as default};
