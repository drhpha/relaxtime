var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(a,i,s)=>i in a?S(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,u=(a,i)=>{for(var s in i||(i={}))L.call(i,s)&&_(a,s,i[s]);if(g)for(var s of g(i))E.call(i,s)&&_(a,s,i[s]);return a};import{r as h,j as e}from"./main-642.js";import{B}from"./bi.801.726.js";import{_ as n,L as A,N as C,c as F}from"./bi.77.82.js";import{a as Z}from"./bi.434.915.js";import{T as f,t as G}from"./bi.986.742.js";function J({formID:a,zagoMailConf:i,setZagoMailConf:s,step:x,setstep:N,setSnackbar:y,isInfo:b,isLoading:l,setIsLoading:d}){const{zagoMail:t}=G,[o,P]=h.useState(!1),[p,j]=h.useState({name:"",api_public_key:""}),[v,I]=h.useState(!1),w=()=>{const r=u({},i);if(!r.name||!r.api_public_key){j({name:r.name?"":n("Integration name cann't be empty","bit-integrations"),api_public_key:r.api_public_key?"":n("API Public Key cann't be empty","bit-integrations")});return}d("auth");const m={api_public_key:r.api_public_key};F(m,"zagoMail_authorize").then(c=>{c!=null&&c.success&&(P(!0),y({show:!0,msg:n("Authorized Successfully","bit-integrations")})),I(!0),d(!1)})},k=r=>{const m=u({},i),c=u({},p);c[r.target.name]="",m[r.target.name]=r.target.value,j(c),s(m)},K=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),Z(i,s,d,y),N(2)},T=`
            <h4>Get API Public Key</h4>
            <ul>
                <li>First go to your ZagoMail dashboard.</li>
                <li>Click on the top top right corner</li>
                <li>Then click on API</li>
            </ul>`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(f,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(f,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3 wdt-200",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:k,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:b}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.name}),e.jsx("div",{className:"mt-3 wdt-200",children:e.jsx("b",{children:n("Access API Public Key Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:k,name:"api_public_key",value:i.api_public_key,type:"text",placeholder:n("Access API Public Key Key...","bit-integrations"),disabled:b}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.api_public_key}),e.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API Public Key Key, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://app.zagomail.com/user/api-keys/index",target:"_blank",rel:"noreferrer",children:n("ZagoMail API Token","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),l==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(A,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Public Key Key!!!"]}),v&&!o&&!l&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, API Public Key key is invalid"]}),!b&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:w,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||l,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),l&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>K(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),e.jsx(B,{className:"ml-1 rev-icn"})]})]}),e.jsx(C,{note:T})]})}export{J as default};
