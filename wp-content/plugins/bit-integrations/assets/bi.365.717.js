var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(n,a,e)=>a in n?$(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,c=(n,a)=>{for(var e in a||(a={}))M.call(a,e)&&j(n,e,a[e]);if(g)for(var e of g(a))T.call(a,e)&&j(n,e,a[e]);return n};import{d as w,j as l}from"./main-642.js";import{m as q,_ as m,n as C,T as R}from"./bi.77.82.js";import{T as S}from"./bi.838.689.js";const N=(n,a,e,i)=>{const s=c({},e);s[n].splice(a,0,{}),i(c({},s))},V=(n,a,e,i)=>{const s=c({},e);s[n].length>1&&s[n].splice(a,1),i(c({},s))},_=(n,a,e,i,s)=>{const r=c({},i);r[n][e][a.target.name]=a.target.value,s(c({},r))},O=n=>!((n!=null&&n.post_map?n.post_map.filter(e=>!e.formField&&e.postFormField&&e.required):[]).length>0),A=n=>!((n!=null&&n.pod_map?n.pod_map.filter(e=>!e.formField&&e.podFormField&&e.required):[]).length>0);function B({i:n,type:a,formFields:e,field:i,podsConf:s,setPodsConf:r,podFields:p,fieldType:v}){var d;const y={post:{propName:"post_map",fldName:"postFormField"},pod:{propName:"pod_field_map",fldName:"podField"},podFile:{propName:"pod_file_map",fldName:"podFile"}},{propName:o,fldName:u}=y[a],h=!!p.find(t=>t.key===i[u]&&t.required),F=w(q),{isPro:b}=F,f=(t,k)=>{const x=c({},s);x[o][k].customValue=t,r(x)};return l.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:t=>_(o,t,n,s,r),children:[l.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),v==="fields"?l.jsxs(l.Fragment,{children:[l.jsx("optgroup",{label:"Form Fields",children:e==null?void 0:e.map(t=>t.type!=="file"&&l.jsx("option",{value:t.name,children:t.label},`ff-zhcrm-${t.name}`))}),l.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),l.jsx("optgroup",{label:`General Smart Codes ${b?"":"(PRO)"}`,children:b&&((d=C)==null?void 0:d.map(t=>l.jsx("option",{value:t.name,children:t.label},`ff-zhcrm-${t.name}`)))})]}):e==null?void 0:e.map(t=>t.type==="file"&&l.jsx("option",{value:t.name,children:t.label},`ff-zhcrm-${t.name}`))]}),i.formField==="custom"&&l.jsx(S,{onChange:t=>f(t,n),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue||"",placeholder:m("type # to use trigger field","bit-integrations"),formFields:e}),l.jsxs("select",{className:"btcd-paper-inp",name:u,value:i[u]||"",onChange:t=>_(o,t,n,s,r),disabled:h,children:[l.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),p==null?void 0:p.map(t=>l.jsx("option",{value:t.key,children:`${t.name}`},`${t.key}-1`))]})]}),h?l.jsx("button",{onClick:()=>N(o,n,s,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>N(o,n,s,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>V(o,n,s,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx(R,{})})]})]})}export{B as P,N as a,A as b,O as c};
