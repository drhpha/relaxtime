var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var x=(s,l,e)=>l in s?v(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e,b=(s,l)=>{for(var e in l||(l={}))g.call(l,e)&&x(s,e,l[e]);if(p)for(var e of p(l))u.call(l,e)&&x(s,e,l[e]);return s};import{j as a}from"./main-642.js";import{_ as n,U as N,N as r}from"./bi.77.82.js";import{g as w}from"./bi.71.786.js";import"./bi.735.690.js";function k({formFields:s,handleInput:l,restrictConf:e,setRestrictConf:m,isLoading:j,setIsLoading:c,setSnackbar:y}){var d;const h=i=>{const t=b({},e),{name:o,value:L}=i.target;i.target.value!==""?t[o]=i.target.value:delete t[o],m(t)};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:n("Action:","bit-integrations")}),a.jsxs("select",{onChange:h,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Action","bit-integrations")}),(e==null?void 0:e.actionLists)&&e.actionLists.map(({key:i,label:t})=>a.jsx("option",{value:i,children:t},i))]}),a.jsx("br",{}),a.jsx("br",{}),(e==null?void 0:e.actionName)&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Membership Level:","bit-integrations")}),a.jsxs("select",{onChange:l,name:"level_id",value:e.level_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Level","bit-integrations")}),e.actionName==="remove-member-level"&&a.jsx("option",{value:"all",children:n("All memberships","bit-integrations")}),((d=e==null?void 0:e.default)==null?void 0:d.levellists)&&e.default.levellists.map(({id:i,name:t})=>a.jsx("option",{value:i,children:t},i))]}),a.jsx("button",{onClick:()=>w(e,m,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Level","bit-integrations")}'`},type:"button",disabled:j,children:"↻"})]}),a.jsx("br",{}),a.jsx("br",{}),e.actionName==="add-member-level"&&a.jsxs("div",{className:"flx",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Expiry Date:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:l,name:"exp_date",value:e.exp_date||"",type:"date",placeholder:n("Expiry Date","bit-integrations")}),a.jsx(N,{width:250,icnSize:17,className:"ml-2",children:a.jsx("div",{className:"txt-body",children:"Leave it empty for never-expired"})})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(r,{note:"This integration will only work for logged-in users."})]})}export{k as R};
