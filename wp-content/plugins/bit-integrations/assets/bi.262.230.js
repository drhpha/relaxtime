var z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(r,i,s)=>i in r?z(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,o=(r,i)=>{for(var s in i||(i={}))_.call(i,s)&&y(r,s,i[s]);if(N)for(var s of N(i))E.call(i,s)&&y(r,s,i[s]);return r};import{r as v,d as R,j as t}from"./main-642.js";import{m as G,_ as n,Y as k,L as f}from"./bi.77.82.js";import{a as P,g as $}from"./bi.274.740.js";import{T as w,t as O}from"./bi.986.742.js";function Y({flowID:r,googleCalendarConf:i,setGoogleCalendarConf:s,step:b,setStep:L,isLoading:h,setIsLoading:g,setSnackbar:x,redirectLocation:A,isInfo:c}){const[a,I]=v.useState(!1),[l,p]=v.useState({clientId:"",clientSecret:""}),S=R(G),{googleCalendar:e}=O,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(r,i,s),L(2)},d=m=>{const u=o({},i),j=o({},l);j[m.target.name]="",u[m.target.name]=m.target.value,p(j),s(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(w,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(w,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:c}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),t.jsx(k,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:c,setSnackbar:x}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(k,{value:A||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:c,setSnackbar:x}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get Client Id & Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:n("Google API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("GoogleCalendar Client Id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:i.clientId,type:"text",placeholder:n("Client Id...","bit-integrations"),disabled:c}),t.jsx("div",{style:{color:"red"},children:l.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("GoogleCalendar Client Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:n("Client Secret...","bit-integrations"),disabled:c}),t.jsx("div",{style:{color:"red"},children:l.clientSecret}),!c&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>P(i,s,I,g,p),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:a||h,children:[a?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),h&&t.jsx(f,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!a,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{Y as default};
