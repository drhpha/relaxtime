var A=Object.defineProperty;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(r,i,s)=>i in r?A(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,b=(r,i)=>{for(var s in i||(i={}))E.call(i,s)&&y(r,s,i[s]);if(p)for(var s of p(i))I.call(i,s)&&y(r,s,i[s]);return r};import{r as N,d as R,j as t}from"./main-642.js";import{m as _,_ as n,Y as v,L as B}from"./bi.77.82.js";import{B as $}from"./bi.801.726.js";import{b as D}from"./bi.526.762.js";import{T as w,t as O}from"./bi.986.742.js";function K({formID:r,keapConf:i,setKeapConf:s,step:x,setstep:z,isLoading:h,setIsLoading:L,setSnackbar:a,redirectLocation:T,isInfo:l}){const[c,f]=N.useState(!1),[d,u]=N.useState({clientId:"",clientSecret:""}),C=R(_),{keap:e}=O,o=m=>{const g=b({},i),j=b({},d);j[m.target.name]="",g[m.target.name]=m.target.value,u(j),s(g)},S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(w,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(w,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:T||`${C.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),t.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://keys.developer.keap.com/my-apps",target:"_blank",rel:"noreferrer",children:n("Get Keap client id and secret","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:n("Client id...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:n("Client secret...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>D(i,s,u,f,L,a),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||h,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),h&&t.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),t.jsx($,{className:"ml-1 rev-icn"})]})]})]})}export{K as default};
