var T=Object.defineProperty;var g=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(i,a,s)=>a in i?T(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,h=(i,a)=>{for(var s in a||(a={}))p.call(a,s)&&j(i,s,a[s]);if(g)for(var s of g(a))z.call(a,s)&&j(i,s,a[s]);return i};import{r as k,j as t}from"./main-642.js";import{_ as n,L as I,N as w}from"./bi.77.82.js";import{k as E}from"./bi.253.870.js";import{T as y,t as S}from"./bi.986.742.js";function F({coppercrmConf:i,setCopperCRMConf:a,step:s,setStep:N,loading:d,setLoading:v,isInfo:l}){const[o,_]=k.useState(!1),[r,x]=k.useState({api_key:"",api_email:""}),{coppercrm:e}=S,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,N(2)},u=b=>{const m=h({},i),c=h({},r);c[b.target.name]="",m[b.target.name]=b.target.value,x(c),a(m)},L=`
  <h4>Get api secret key</h4>
  <ul>
      <li>First go to your Copper dashboard.</li>
      <li>Then click Settings from Navbar.</li>
      <li>Click "Integrations", Then click "API Keys"</li>
  </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(y,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(y,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("bapi_email",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Your API Email:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_email",value:i.api_email,type:"text",placeholder:n("Your Company...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:r.api_email}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:i.api_key,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:r.api_key}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(i,a,x,_,d,v),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||d.auth,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),d.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:L})]})}export{F as default};
