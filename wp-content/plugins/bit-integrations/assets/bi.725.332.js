var S=Object.defineProperty;var m=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,a,n)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))L.call(a,n)&&j(e,n,a[n]);if(m)for(var n of m(a))_.call(a,n)&&j(e,n,a[n]);return e};import{r as k,j as t}from"./main-642.js";import{_ as r,L as z,N as w}from"./bi.77.82.js";import{s as y,g as K}from"./bi.85.911.js";import{T as A,t as E}from"./bi.986.742.js";function M({systemeIOConf:e,setSystemeIOConf:a,step:n,setStep:N,loading:l,setLoading:b,isInfo:s}){const[o,T]=k.useState(!1),{systemeIO:i}=E,[u,h]=k.useState({api_key:""}),P=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2),K(e,a,b)},p=c=>{const g=d({},e),x=d({},u);x[c.target.name]="",g[c.target.name]=c.target.value,h(x),a(g)},v=`
            <h4>To Get API Key & API Secret</h4>
            <ul>
                <li>First go to your SystemeIO dashboard.</li>
                <li>Click go to "Settings" from Right Top corner</li>
                <li>Then Click "Public API Keys" from the "Settings Menu"</li>
                <li>Then Click "Create Api key"</li>
                <li>Then copy "API Token"</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(A,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(A,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:e.api_key,type:"text",placeholder:r("API Key...","bit-integrations"),disabled:s}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://systeme.io/dashboard/profile/public-api-settings",target:"_blank",children:r("SystemeIO API Key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!s&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>y(e,a,h,T,l,b),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||l.auth,children:[o?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),l.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:P,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:v})]})}export{M as default};