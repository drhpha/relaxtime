var f=Object.defineProperty;var v=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(a,r,s)=>r in a?f(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,n=(a,r)=>{for(var s in r||(r={}))y.call(r,s)&&N(a,s,r[s]);if(v)for(var s of v(r))M.call(r,s)&&N(a,s,r[s]);return a};import{d as V,j as e,r as F,L as E}from"./main-642.js";import{m as R,_ as c,n as $,o as k,p as L}from"./bi.77.82.js";import{g as q}from"./bi.432.687.js";import{T as I}from"./bi.838.689.js";const w=(a,r,s)=>{const t=n({},r);t.field_map.splice(a,0,{}),s(n({},t))},T=(a,r,s)=>{const t=n({},r);t.field_map.length>1&&t.field_map.splice(a,1),s(n({},t))},_=(a,r,s,t)=>{const u=n({},s);u.field_map[r][a.target.name]=a.target.value,a.target.value==="custom"&&(u.field_map[r].customValue=""),t(n({},u))};function P({i:a,formFields:r,field:s,omniSendConf:t,setOmniSendConf:u}){var j,i;if(((j=t==null?void 0:t.field_map)==null?void 0:j.length)===1&&s.omniSendFormField===""){const l=n({},t),h=q(l);l.field_map=h}const b=(t==null?void 0:t.omniSend_fields.filter(l=>l.required===!0))||[],o=(t==null?void 0:t.omniSend_fields.filter(l=>l.required===!1))||[],x=V(R),{isPro:p}=x;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>_(l,a,t,u),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:r==null?void 0:r.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${p?"":"(PRO)"}`,children:p&&((i=$)==null?void 0:i.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(I,{onChange:l=>k(l,a,t,u),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<b.length,name:"omniSendFormField",value:a<b?b[a].label||"":s.omniSendFormField||"",onChange:l=>_(l,a,t,u),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),a<b.length?e.jsx("option",{value:b[a].key,children:b[a].label},b[a].key):o.map(({key:l,label:h})=>e.jsx("option",{value:l,children:h},l))]})]}),a>=b.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>w(a,t,u),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>T(a,t,u),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function D({formFields:a,handleInput:r,omniSendConf:s,setOmniSendConf:t,loading:u,setLoading:b,setSnackbar:o}){const x=F.useRef(!0),p=[{label:"Email",value:"email"},{label:"SMS",value:"sms"}],j=(i,l)=>{const h=i.search("email"),g=i.search("sms"),m=n({},s),d=m.omniSend_fields;i.length?(m.actions.channel=!0,h!==-1&&g!==-1?(d[0].required=!0,d[1].required=!0):h!==-1?(d[0].required=!0,d[1].required=!1):g!==-1?(d[1].required=!0,d[0].required=!1):(d[0].required=!1,d[1].required=!1)):(delete m.actions.channel,d[0].required=!1,d[1].required=!1),m[l]=i,t(n({},m))};return F.useEffect(()=>{if(x.current)x.current=!1;else{const i=n({},s),l=q(i);i.field_map=l,t(i)}},[s.channels]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Channels","bit-integrations")}),e.jsx(L,{className:"msl-wrp-options  w-5",defaultValue:s==null?void 0:s.channels,options:p==null?void 0:p.map(i=>({label:i.label,value:i.value})),onChange:i=>j(i,"channels"),customValue:!0})]}),e.jsx("br",{}),s.channels.search("email")!==-1&&e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Email Status:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"email_status",value:s.email_status,className:"btcd-paper-inp w-5",required:!0,children:[e.jsx("option",{value:"",children:c("Select Status","bit-integrations")}),e.jsx("option",{value:"subscribed",children:"Subscribed"}),e.jsx("option",{value:"unsubscribed",children:"Unsubscribed"}),e.jsx("option",{value:"nonSubscribed",children:"nonSubscribed"})]})]}),e.jsx("br",{}),s.channels.search("sms")!==-1&&e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("SMS Status:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"sms_status",value:s.sms_status,className:"btcd-paper-inp w-5",required:!0,children:[e.jsx("option",{value:"",children:c("Select Status","bit-integrations")}),e.jsx("option",{value:"subscribed",children:"Subscribed"}),e.jsx("option",{value:"unsubscribed",children:"Unsubscribed"}),e.jsx("option",{value:"nonSubscribed",children:"nonSubscribed"})]})]}),(s.channels.search("email")!==-1||s.channels.search("sms")!==-1)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),e.jsx("br",{}),u.field&&e.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("OmniSend Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((i,l)=>e.jsx(P,{i:l,field:i,omniSendConf:s,formFields:a,setOmniSendConf:t,setSnackbar:o},`rp-m-${l+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>w(s.field_map.length,s,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{D as O};
