var P=Object.defineProperty,d=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(t,a,e)=>a in t?P(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,c=(t,a)=>{for(var e in a||(a={}))y.call(a,e)&&_(t,e,a[e]);if(o)for(var e of o(a))F.call(a,e)&&_(t,e,a[e]);return t},r=(t,a)=>d(t,k(a));import{_ as u,c as h,d as l}from"./bi.77.82.js";const M=(t,a,e)=>{const i=c({},a),{name:s}=t.target;t.target.value!==""?i[s]=t.target.value:delete i[s],e(c({},i))},S=t=>{let a=[];t.actionName==="account"?a=t==null?void 0:t.accountFields:t.actionName==="contact"?a=t==null?void 0:t.contactFields:a=t==null?void 0:t.dealFields;const e=a==null?void 0:a.filter(i=>i.required===!0);return e.length>0?e.map(i=>({formField:"",agiledFormField:i.key})):[{formField:"",agiledFormField:""}]},R=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.agiledFormField||e.formField==="custom"&&!e.customValue||e.agiledFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),m=(t,a,e,i,s,n)=>{if(!t.brand||!t.auth_token){e({brand:t.brand?"":u("Brand Name (Account URL) can't be empty","bit-integrations"),auth_token:t.auth_token?"":u("Api Key can't be empty","bit-integrations")});return}e({}),n(r(c({},s),{auth:!0}));const b={auth_token:t.auth_token,brand:t.brand};h(b,"agiled_authentication").then(f=>{if(f&&f.success){i(!0),n(r(c({},s),{auth:!1})),l.success(u("Authorized successfully","bit-integrations"));return}n(r(c({},s),{auth:!1})),l.error(u("Authorized failed, Please enter valid brand name & API key","bit-integrations"))})},q=(t,a,e)=>{e(r(c({},e),{owners:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_owners").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.owners=s.data),a(n),e(r(c({},e),{owners:!1})),l.success(u("Owners fetched successfully","bit-integrations"));return}e(r(c({},e),{owners:!1})),l.error(u("Owners fetching failed","bit-integrations"))})},g=(t,a,e)=>{e(r(c({},e),{accounts:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_accounts").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.accounts=s.data),a(n),e(r(c({},e),{accounts:!1})),l.success(u("Accounts fetched successfully","bit-integrations"));return}e(r(c({},e),{accounts:!1})),l.error(u("Accounts fetching failed","bit-integrations"))})},C=(t,a,e)=>{e(r(c({},e),{sources:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_sources").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.sources=s.data),a(n),e(r(c({},e),{sources:!1})),l.success(u("Sources fetched successfully","bit-integrations"));return}e(r(c({},e),{sources:!1})),l.error(u("Sources fetching failed","bit-integrations"))})},p=(t,a,e)=>{e(r(c({},e),{statuses:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_statuses").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.statuses=s.data),a(n),e(r(c({},e),{statuses:!1})),l.success(u("statuses fetched successfully","bit-integrations"));return}e(r(c({},e),{statuses:!1})),l.error(u("statuses fetching failed","bit-integrations"))})},v=(t,a,e)=>{e(r(c({},e),{lifeCycleStages:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_lifeCycleStages").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.lifeCycleStages=s.data),a(n),e(r(c({},e),{lifeCycleStages:!1})),l.success(u("Life cycle stages fetched successfully","bit-integrations"));return}e(r(c({},e),{lifeCycleStages:!1})),l.error(u("Life cycle stages fetching failed","bit-integrations"))})},K=(t,a,e)=>{e(r(c({},e),{CRMPipelines:!0}));const i={auth_token:t.auth_token,brand:t.brand};h(i,"agiled_fetch_all_CRMPipelines").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.CRMPipelines=s.data),a(n),e(r(c({},e),{CRMPipelines:!1})),l.success(u("Pipelines fetched successfully","bit-integrations"));return}e(r(c({},e),{CRMPipelines:!1})),l.error(u("Pipelines fetching failed","bit-integrations"))})},N=(t,a,e)=>{e(r(c({},e),{CRMPipelineStages:!0}));const i={auth_token:t.auth_token,brand:t.brand,selectedCRMPipeline:t.selectedCRMPipeline};h(i,"agiled_fetch_all_CRMPipelineStages").then(s=>{if(s&&s.success){const n=c({},t);s.data&&(n.CRMPipelineStages=s.data),a(n),e(r(c({},e),{CRMPipelineStages:!1})),l.success(u("Pipeline stages fetched successfully","bit-integrations"));return}e(r(c({},e),{CRMPipelineStages:!1})),l.error(u("Pipeline stages fetching failed","bit-integrations"))})};export{g as a,C as b,R as c,p as d,v as e,S as f,q as g,M as h,K as i,N as j,m as k};