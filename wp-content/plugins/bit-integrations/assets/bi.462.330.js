var L=Object.defineProperty;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(a,s,i)=>s in a?L(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,b=(a,s)=>{for(var i in s||(s={}))T.call(s,i)&&g(a,i,s[i]);if(p)for(var i of p(s))_.call(s,i)&&g(a,i,s[i]);return a};import{r as j,j as t}from"./main-642.js";import{_ as n,L as E,N as P}from"./bi.77.82.js";import{w as z}from"./bi.375.907.js";import{T as y,t as K}from"./bi.986.742.js";function B({woodpeckerConf:a,setWoodpeckerConf:s,step:i,setStep:N,loading:l,setLoading:A,isInfo:r}){const[c,k]=j.useState(!1),[m,u]=j.useState({api_token:""}),{woodpecker:e}=K,I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),a!=null&&a.default,N(2)},d=o=>{const h=b({},a),x=b({},m);x[o.target.name]="",h[o.target.name]=o.target.value,u(x),s(h)},v=`
            <h4>Get API Key</h4>
            <ul>
                <li> Log into your Woodpecker account on <a className="btcd-link" href="https://app.woodpecker.co/panel" target="_blank">app.woodpecker.co.</a></li>
                <li>Go to the <b>Marketplace</b> → <b>INTEGRATIONS</b> → <b>API keys</b>.</li>
                <li>Use the green button to <b>CREATE A KEY</b>.</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(y,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(y,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:a.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_key",value:a.api_key,type:"text",placeholder:n("API Key...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.woodpecker.co/panel?u=411340#marketplace/integrations/api-keys",target:"_blank",children:n("Woodpecker API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>z(a,u,k,l,A),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||l.auth,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),l.auth&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:I,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:v})]})}export{B as default};
