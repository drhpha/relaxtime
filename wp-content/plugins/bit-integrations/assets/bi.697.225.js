import{r as u,j as e}from"./main-642.js";import{B as k}from"./bi.801.726.js";import{_ as n,L as y,c as v,B as w}from"./bi.77.82.js";import{T as m,t as L}from"./bi.986.742.js";function p({formID:z,paidMembershipProConf:i,setPaidMembershipProConf:h,step:c,setStep:d,isLoading:o,setIsLoading:l,setSnackbar:x}){const[a,g]=u.useState(!1),[b,f]=u.useState(!1),{paidMembershipPro:t}=L,j=()=>{l("auth"),v({},"paid_membership_pro_authorize").then(s=>{s!=null&&s.success&&(g(!0),x({show:!0,msg:n("Connected with Paid Membership Pro Successfully","bit-integrations")})),l(!1),f(!0)})},N=s=>{const r=w(i);r[s.target.name]=s.target.value,h(r)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:c===1&&900,height:c===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(m,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(m,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:N,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),o==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(y,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Paid Membership Pro is active!!!"]}),b&&!a&&!o&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Paid Membership Pro plugin must be activated to integrate with Bit Integrations."]}),!a&&e.jsx("button",{onClick:j,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:n("Connect","bit-integrations")}),a&&e.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!a,children:[n("Next","bit-integrations"),e.jsx(k,{className:"ml-1 rev-icn"})]})]})}export{p as default};
