var pe=Object.defineProperty;var se=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var le=(t,r,u)=>r in t?pe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[r]=u,k=(t,r)=>{for(var u in r||(r={}))ge.call(r,u)&&le(t,u,r[u]);if(se)for(var u of se(r))je.call(r,u)&&le(t,u,r[u]);return t};import{r as X,j as e,L as I,d as be}from"./main-642.js";import{_ as a,q as $,f as C,p as ie,M as me,y as ae,m as we,v as ne,n as ve,o as Ne,r as D,w as ye,z as _e,A as de,b as Re,P as re}from"./bi.77.82.js";import{C as ee}from"./bi.846.701.js";import{T as Fe}from"./bi.547.702.js";import{r as oe,a as Me,b as ce,d as ue,e as he,f as ke,g as Te}from"./bi.509.699.js";import{T as Oe}from"./bi.838.689.js";function xe({crmConf:t,setCrmConf:r,formFields:u,tab:i,formID:n,setSnackbar:l}){var U,Z,f,P,z,q,A,L,V,S,B,o,H,J,K,Q,y;const[j,R]=X.useState(!1),[x,h]=X.useState(!1),[b,N]=X.useState({show:!1,action:()=>{}}),F=typeof btcbi!="undefined"&&btcbi.isPro,p=(s,c)=>{var T,_;const d=k({},t);if(i===0){if(c==="attachment"&&(s!==""?d.actions.attachment=s:delete d.actions.attachment),c==="approval"&&(s.target.checked?d.actions.approval=!0:delete d.actions.approval),c==="workflow"&&(s.target.checked?d.actions.workflow=!0:delete d.actions.workflow),c==="blueprint"&&(s.target.checked?d.actions.blueprint=!0:delete d.actions.blueprint),c==="gclid"&&(s.target.checked?d.actions.gclid=!0:delete d.actions.gclid),c==="assignment_rules"&&(s!==""?d.actions.assignment_rules=s:delete d.actions.assignment_rules),c==="tag_rec"&&(s!==""?d.actions.tag_rec=s:delete d.actions.tag_rec),c==="rec_owner"&&(s!==""?d.actions.rec_owner=s:delete d.actions.rec_owner),c==="upsert")if(s.target.checked){const W=(T=d.default.layouts[d.module][d.layout].unique)==null?void 0:T.map((G,Y)=>({i:Y,name:G}));d.actions.upsert={overwrite:!0,crmField:W}}else delete d.actions.upsert}else if(c==="attachment"&&(s!==""?d.relatedlists[i-1].actions.attachment=s:delete d.relatedlists[i-1].actions.attachment),c==="approval"&&(s.target.checked?d.relatedlists[i-1].actions.approval=!0:delete d.relatedlists[i-1].actions.approval),c==="workflow"&&(s.target.checked?d.relatedlists[i-1].actions.workflow=!0:delete d.relatedlists[i-1].actions.workflow),c==="blueprint"&&(s.target.checked?d.relatedlists[i-1].actions.blueprint=!0:delete d.relatedlists[i-1].actions.blueprint),c==="gclid"&&(s.target.checked?d.relatedlists[i-1].actions.gclid=!0:delete d.relatedlists[i-1].actions.gclid),c==="assignment_rules"&&(s!==""?d.relatedlists[i-1].actions.assignment_rules=s:delete d.relatedlists[i-1].actions.assignment_rules),c==="tag_rec"&&(s!==""?d.relatedlists[i-1].actions.tag_rec=s:delete d.relatedlists[i-1].actions.tag_rec),c==="rec_owner"&&(s!==""?d.relatedlists[i-1].actions.rec_owner=s:delete d.relatedlists[i-1].actions.rec_owner),c==="upsert")if(s.target.checked){const W=(_=d.default.layouts[d.relatedlists[i-1].module][d.relatedlists[i-1].layout].unique)==null?void 0:_.map((G,Y)=>({i:Y,name:G}));d.relatedlists[i-1].actions.upsert={overwrite:!0,crmField:W}}else delete d.relatedlists[i-1].actions.upsert;r(k({},d))},g=()=>{N({show:!1})},m=i===0?t.module:t.relatedlists[i-1].module,O=()=>{var c,d;const s=[{title:"Zoho CRM Tags",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return(c=t.default.tags)!=null&&c[m]&&(s[0].childs=Object.values((d=t.default.tags)==null?void 0:d[m]).map(T=>({label:T,value:T}))),s[1].childs=u.map(T=>({label:T.label,value:`\${${T.name}}`})),s},w=(s,c)=>{const d=k({},t);i===0?(c==="list"&&(d.actions.upsert.crmField=s),c==="overwrite"&&(d.actions.upsert.overwrite=s)):(c==="list"&&(d.relatedlists[i-1].actions.upsert.crmField=s),c==="overwrite"&&(d.relatedlists[i-1].actions.upsert.overwrite=s)),r(k({},d))},v=()=>{var s;(s=t.default)!=null&&s.crmOwner||ce(n,t,r,h,l),N({show:"rec_owner"})},M=()=>{var s,c;(c=(s=t==null?void 0:t.default)==null?void 0:s.assignmentRules)!=null&&c[m]||oe(i,t,r,h,l),N({show:"assignment_rules"})},E=()=>{var s,c,d,T;if(i&&!((s=t.relatedlists[i-1].actions.upsert)!=null&&s.crmField)){const _=k({},t),W=(c=_.default.layouts[_.relatedlists[i-1].module][_.relatedlists[i-1].layout].unique)==null?void 0:c.map((G,Y)=>({i:Y,name:G}));_.relatedlists[i-1].actions.upsert={overwrite:!0,crmField:W},r(_)}else if(!((d=t.actions.upsert)!=null&&d.crmField)){const _=k({},t),W=(T=_.default.layouts[_.module][_.layout].unique)==null?void 0:T.map((G,Y)=>({i:Y,name:G}));_.actions.upsert={overwrite:!0,crmField:W},r(k({},_))}R(!0)};return e.jsxs("div",{className:"pos-rel",children:[!F&&e.jsx("div",{className:"pro-blur flx w-10",style:{top:-25},children:e.jsxs("div",{className:"pro",children:[a("Available On","bit-integrations"),e.jsx("a",{href:"https://bitapps.pro/",target:"_blank",rel:"noreferrer",children:e.jsxs("span",{className:"txt-pro",children:[" ",a("Premium","bit-integrations")]})})]})}),e.jsxs("div",{className:"d-flx flx-wrp",children:[e.jsx($,{onChange:s=>p(s,"workflow"),checked:i===0?"workflow"in t.actions:"workflow"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow","bit-integrations"),subTitle:a("Trigger CRM workflows","bit-integrations")}),e.jsx($,{onChange:()=>N({show:"attachment"}),checked:i===0?"attachment"in t.actions:"attachment"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment","bit-integrations"),subTitle:a("Add attachments or signatures from Trigger to CRM.","bit-integrations")}),e.jsx($,{onChange:s=>p(s,"approval"),checked:i===0?"approval"in t.actions:"approval"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval","bit-integrations"),subTitle:a("Send entries to CRM approval list.","bit-integrations")}),e.jsx($,{onChange:s=>p(s,"blueprint"),checked:i===0?"blueprint"in t.actions:"blueprint"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Blueprint",title:a("Blueprint","bit-integrations"),subTitle:a("Trigger CRM Blueprint","bit-integrations")}),e.jsx($,{onChange:s=>p(s,"gclid"),checked:i===0?"gclid"in t.actions:"gclid"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Capture_GCLID",title:a("Capture GCLID","bit-integrations"),subTitle:a("Sends the click details of AdWords Ads to Zoho CRM.","bit-integrations")}),e.jsx(Fe,{action:E,children:e.jsx($,{onChange:s=>p(s,"upsert"),checked:i===0?"upsert"in t.actions:"upsert"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:a("Upsert Records","bit-integrations"),subTitle:a("The record is updated if it already exists else it is inserted as a new record.","bit-integrations")})}),e.jsx($,{onChange:M,checked:i===0?"assignment_rules"in t.actions:"assignment_rules"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Assignment_Rule",title:a("Assignment Rules","bit-integrations"),subTitle:a("Trigger Assignment Rules in Zoho CRM.","bit-integrations")}),e.jsx($,{onChange:()=>N({show:"tag_rec"}),checked:i===0?"tag_rec"in t.actions:"tag_rec"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Tag_Records",title:a("Tag Records","bit-integrations"),subTitle:a("Add a tag to records pushed to Zoho CRM.","bit-integrations")}),e.jsx($,{onChange:v,checked:i===0?"rec_owner"in t.actions:"rec_owner"in t.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Record_Owner",title:a("Record Owner","bit-integrations"),subTitle:a("Add a owner to records pushed to Zoho CRM.","bit-integrations")})]}),e.jsxs(C,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="attachment",close:g,action:g,title:a("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields","bit-integrations")}),e.jsx(ie,{defaultValue:i===0?t.actions.attachment:t.relatedlists[i-1].actions.attachment,className:"mt-2 w-9",onChange:s=>p(s,"attachment"),options:u.filter(s=>s.type==="file").map(s=>({label:s.label,value:s.name}))})]}),e.jsxs(C,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="assignment_rules",close:g,action:g,title:a("Assignment Rules","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Assignment Rules","bit-integrations")}),x?e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:i===0?t.actions.assignment_rules:t.relatedlists[i-1].actions.assignment_rules,className:"btcd-paper-inp",onChange:s=>p(s.target.value,"assignment_rules"),children:[e.jsx("option",{value:"",children:a("Select Assignment Rule","bit-integrations")}),((Z=(U=t==null?void 0:t.default)==null?void 0:U.assignmentRules)==null?void 0:Z[m])&&Object.keys(t.default.assignmentRules[m]).map(s=>e.jsx("option",{value:t.default.assignmentRules[m][s],children:s},s))]}),e.jsx("button",{onClick:()=>oe(i,t,r,h,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Assignment Rules","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsxs(C,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="tag_rec",close:g,action:g,title:a("Tag Records","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:a("Add a tag to records pushed to Zoho CRM","bit-integrations")}),e.jsx("div",{className:"mt-2",children:a("Tag Name","bit-integrations")}),x?e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(ie,{className:"msl-wrp-options",defaultValue:i===0?t.actions.tag_rec:t.relatedlists[i-1].actions.tag_rec,options:O(),onChange:s=>p(s,"tag_rec"),customValue:!0}),e.jsx("button",{onClick:()=>Me(i,n,t,r,h,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${a("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsxs(C,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="rec_owner",close:g,action:g,title:a("Record Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Owner Name","bit-integrations")}),x?e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:i===0?t.actions.rec_owner:t.relatedlists[i-1].actions.rec_owner,className:"btcd-paper-inp",onChange:s=>p(s.target.value,"rec_owner"),children:[e.jsx("option",{value:"",children:a("Select Owner","bit-integrations")}),((f=t.default)==null?void 0:f.crmOwner)&&((P=Object.values(t.default.crmOwner))==null?void 0:P.map(s=>e.jsx("option",{value:s.id,children:s.full_name},s.id)))]}),e.jsx("button",{onClick:()=>ce(n,t,r,h,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Owners","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsx(me,{md:!0,show:j,setModal:R,title:a("Upsert Record","bit-integrations"),children:e.jsx("div",{className:"o-a",children:i===0?((z=t==null?void 0:t.actions)==null?void 0:z.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using","bit-integrations")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion","bit-integrations")}),e.jsx(ae.ReactSortable,{list:(q=t.actions.upsert)==null?void 0:q.crmField,setList:s=>w(s,"list"),children:(L=(A=t.actions.upsert)==null?void 0:A.crmField)==null?void 0:L.map(s=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"btcd-icn btcd-mnu mr-2"}),s.name]},`cf-${s.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance","bit-integrations")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Zoho CRM For Triggers while upserting a record?","bit-integrations")}),e.jsxs("div",{children:[e.jsx(ee,{onChange:()=>w(!0,"overwrite"),radio:!0,checked:(V=t.actions.upsert)==null?void 0:V.overwrite,name:"up-rec",title:a("Yes","bit-integrations")}),e.jsx(ee,{onChange:()=>w(!1,"overwrite"),radio:!0,checked:!((S=t.actions.upsert)!=null&&S.overwrite),name:"up-rec",title:a("No","bit-integrations")})]})]}):((o=(B=t==null?void 0:t.relatedlists[i-1])==null?void 0:B.actions)==null?void 0:o.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using","bit-integrations")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion","bit-integrations")}),e.jsx(ae.ReactSortable,{list:(H=t.relatedlists[i-1].actions.upsert)==null?void 0:H.crmField,setList:s=>w(s,"list"),children:(K=(J=t.relatedlists[i-1].actions.upsert)==null?void 0:J.crmField)==null?void 0:K.map(s=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"btcd-icn btcd-mnu mr-2"}),s.name]},`cf-${s.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance","bit-integrations")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Zoho CRM For WPForms while upserting a record?","bit-integrations")}),e.jsxs("div",{children:[e.jsx(ee,{onChange:()=>w(!0,"overwrite"),radio:!0,checked:(Q=t.relatedlists[i-1].actions.upsert)==null?void 0:Q.overwrite,name:"up-rec",title:a("Yes","bit-integrations")}),e.jsx(ee,{onChange:()=>w(!1,"overwrite"),radio:!0,checked:!((y=t.relatedlists[i-1].actions.upsert)!=null&&y.overwrite),name:"up-rec",title:a("No","bit-integrations")})]})]})})})]})}function te({i:t,formFields:r,uploadFields:u,field:i,crmConf:n,setCrmConf:l,tab:j,type:R}){var p,g,m,O,w,v,M,E,U,Z,f,P,z,q,A,L,V,S,B;const x=j===0?n.module:(g=(p=n.relatedlists)==null?void 0:p[j-1])==null?void 0:g.module,h=j===0?n.layout:(O=(m=n.relatedlists)==null?void 0:m[j-1])==null?void 0:O.layout;let b;u?b=i.zohoFormField===""||((E=(M=(v=(w=n.default.layouts)==null?void 0:w[x])==null?void 0:v[h])==null?void 0:M.requiredFileUploadFields)==null?void 0:E.indexOf(i.zohoFormField))===-1:b=i.zohoFormField===""||((P=(f=(Z=(U=n.default.layouts)==null?void 0:U[x])==null?void 0:Z[h])==null?void 0:f.required)==null?void 0:P.indexOf(i.zohoFormField))===-1;const N=be(we),{isPro:F}=N;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:o=>ne(o,t,n,l,u,j),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:u?r.map(o=>o.type==="file"&&e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`)):r.map(o=>o.type!=="file"&&e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`))}),!u&&e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${F?"":"(PRO)"}`,children:F&&((z=ve)==null?void 0:z.map(o=>e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`)))})]}),i.formField==="custom"&&e.jsx(Oe,{onChange:o=>Ne(o,t,n,l),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!b,name:"zohoFormField",value:i.zohoFormField||"",onChange:o=>ne(o,t,n,l,u,j),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),u?((L=(A=(q=n.default.layouts)==null?void 0:q[x])==null?void 0:A[h])==null?void 0:L.fileUploadFields)&&Object.keys(n.default.layouts[x][h].fileUploadFields).filter(o=>o.required!==!0).map(o=>b?!n.default.layouts[x][h].fileUploadFields[o].required&&e.jsx("option",{value:o,children:n.default.layouts[x][h].fileUploadFields[o].display_label},o):e.jsx("option",{value:o,children:n.default.layouts[x][h].fileUploadFields[o].display_label},o)):((B=(S=(V=n.default.layouts)==null?void 0:V[x])==null?void 0:S[h])==null?void 0:B.fields)&&Object.keys(n.default.layouts[x][h].fields).filter(o=>o.required!==!0).map(o=>b?!n.default.layouts[x][h].fields[o].required&&e.jsx("option",{value:o,children:n.default.layouts[x][h].fields[o].display_label},o):e.jsx("option",{value:o,children:n.default.layouts[x][h].fields[o].display_label},o))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(t,n,l,u,j),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ye(t,n,l,u,j),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function $e({tab:t,settab:r,formID:u,formFields:i,crmConf:n,setCrmConf:l,handleInput:j,isLoading:R,setIsLoading:x,setSnackbar:h}){var N,F,p,g,m,O,w;X.useEffect(()=>{ue(0,r)},[]);const b=typeof btcbi!="undefined"&&btcbi.isPro;return e.jsxs(e.Fragment,{children:[R&&e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Layout:","bit-integrations")}),e.jsxs("select",{onChange:j,name:"layout",value:n.layout,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:a("Select Layout","bit-integrations")}),((F=(N=n==null?void 0:n.default)==null?void 0:N.layouts)==null?void 0:F[n.module])&&Object.keys(n.default.layouts[n.module]).map(v=>e.jsx("option",{value:v,children:v},v))]}),e.jsx("button",{onClick:()=>he(t,u,n,l,x,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Layouts","bit-integrations")}'`},type:"button",disabled:R,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((O=(m=(g=(p=n.default)==null?void 0:p.layouts)==null?void 0:g[n.module])==null?void 0:m[n.layout])==null?void 0:O.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),n.field_map.map((v,M)=>e.jsx(te,{i:M,field:v,crmConf:n,formFields:i,setCrmConf:l,tab:t,setSnackbar:h},`crm-m-${M+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>D(n.field_map.length,n,l,!1,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((w=n.default.layouts[n.module][n.layout])==null?void 0:w.fileUploadFields).length!==0&&e.jsxs("div",{className:"pos-rel",children:[!b&&e.jsx("div",{className:"pro-blur flx",children:e.jsxs("div",{className:"pro",children:["Available On",e.jsx("a",{href:"https://bitapps.pro/",target:"_blank",rel:"noreferrer",children:e.jsxs("span",{className:"txt-pro",children:[" ",a("Premium","bit-integrations")]})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map File Upload Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),n.upload_field_map.map((v,M)=>e.jsx(te,{i:M,uploadFields:!0,field:v,crmConf:n,formFields:i,setCrmConf:l,tab:t,setSnackbar:h},`crm-m-${M+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>D(n.upload_field_map.length,n,l,!0,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(xe,{formID:u,formFields:i,crmConf:n,setCrmConf:l,tab:t,setSnackbar:h})]})]})}function Ue({indx:t,tab:r,settab:u,formID:i,formFields:n,crmConf:l,setCrmConf:j,handleInput:R,isLoading:x,setIsLoading:h,setSnackbar:b}){var F,p,g,m,O,w,v,M,E,U,Z,f,P,z,q,A,L,V,S,B,o,H,J,K,Q;X.useEffect(()=>{ue(t+1,u,i,l,j,h,b)},[]);const N=typeof btcbi!="undefined"&&btcbi.isPro;return e.jsxs(e.Fragment,{children:[x&&e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"pos-rel",children:[!N&&e.jsx("div",{className:"pro-blur flx w-9",children:e.jsxs("div",{className:"pro",children:[a("Available On","bit-integrations"),e.jsx("a",{href:"https://bitapps.pro/",target:"_blank",rel:"noreferrer",children:e.jsxs("span",{className:"txt-pro",children:[" ",a("Premium","bit-integrations")]})})]})}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Related List:","bit-integrations")}),e.jsxs("select",{onChange:R,name:"module",value:(p=(F=l==null?void 0:l.relatedlists)==null?void 0:F[r-1])==null?void 0:p.module,className:"btcd-paper-inp w-7",disabled:!l.module,children:[e.jsx("option",{value:"",children:a("Select Related Module","bit-integrations")}),((m=(g=l==null?void 0:l.default)==null?void 0:g.relatedlists)==null?void 0:m[l.module])&&Object.values(l.default.relatedlists[l.module]).map(y=>e.jsx("option",{value:y.module,children:y.name},y.module))]}),e.jsx("button",{onClick:()=>ke(i,l,j,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Related Lists","bit-integrations")}'`},type:"button",disabled:x,children:"↻"}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Layout:","bit-integrations")}),e.jsxs("select",{onChange:R,name:"layout",value:(w=(O=l==null?void 0:l.relatedlists)==null?void 0:O[r-1])==null?void 0:w.layout,className:"btcd-paper-inp w-7",disabled:!((M=(v=l==null?void 0:l.relatedlists)==null?void 0:v[r-1])!=null&&M.module),children:[e.jsx("option",{value:"",children:a("Select Layout","bit-integrations")}),((f=(E=l==null?void 0:l.default)==null?void 0:E.layouts)==null?void 0:f[(Z=(U=l.relatedlists)==null?void 0:U[r-1])==null?void 0:Z.module])&&Object.keys(l.default.layouts[l.relatedlists[r-1].module]).map(y=>e.jsx("option",{value:y,children:y},y))]}),e.jsx("button",{onClick:()=>he(r,i,l,j,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Layouts"'},type:"button",disabled:x,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((B=(S=(A=(P=l.default)==null?void 0:P.layouts)==null?void 0:A[(q=(z=l==null?void 0:l.relatedlists)==null?void 0:z[r-1])==null?void 0:q.module])==null?void 0:S[(V=(L=l==null?void 0:l.relatedlists)==null?void 0:L[r-1])==null?void 0:V.layout])==null?void 0:B.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),(J=(H=(o=l.relatedlists)==null?void 0:o[r-1])==null?void 0:H.field_map)==null?void 0:J.map((y,s)=>e.jsx(te,{i:s,field:y,crmConf:l,formFields:n,setCrmConf:j,tab:r,setSnackbar:b},`crm-m-${s+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>D(l.relatedlists[r-1].field_map.length,l,j,!1,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),((Q=(K=l.default)==null?void 0:K.layouts[l.relatedlists[r-1].module])==null?void 0:Q[l.relatedlists[r-1].layout])&&Object.keys(l.default.layouts[l.relatedlists[r-1].module][l.relatedlists[r-1].layout].fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("File Upload Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),l.relatedlists[r-1].upload_field_map.map((y,s)=>e.jsx(te,{i:s,uploadFields:1,field:y,crmConf:l,formFields:n,setCrmConf:j,tab:r,setSnackbar:b},`crm-m-${s+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>D(l.relatedlists[r-1].upload_field_map.length,l,j,!0,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(xe,{formFields:n,crmConf:l,setCrmConf:j,tab:r,formID:i,setSnackbar:b})]})]})}function Ve({tab:t,settab:r,formID:u,formFields:i,handleInput:n,crmConf:l,setCrmConf:j,isLoading:R,setIsLoading:x,setSnackbar:h}){var F;const b=()=>{if(l.relatedlists.length<3){const p=k({},l);p.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],layout:"",module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),j(k({},p))}},N=p=>{const g=k({},l);g.relatedlists.splice(p,1),g.relatedlists.length||r(0),j(k({},g))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Module:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"module",value:l.module,className:"btcd-paper-inp w-5",disabled:t,children:[e.jsx("option",{value:"",children:a("Select Module","bit-integrations")}),((F=l==null?void 0:l.default)==null?void 0:F.modules)&&Object.keys(l.default.modules).map(p=>e.jsx("option",{value:p,children:l.default.modules[p].plural_label},p))]}),t===0&&e.jsx("button",{onClick:()=>Te(u,l,j,x,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Modules","bit-integrations")}'`},type:"button",disabled:R,children:"↻"}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs(_e,{children:[e.jsxs("div",{className:"flx mt-2",children:[e.jsx(de,{children:e.jsx("button",{className:`btcd-s-tab-link ${t===0&&"s-t-l-active"}`,type:"button",children:a("New Record","bit-integrations")})}),(l==null?void 0:l.relatedlists)&&l.relatedlists.map((p,g)=>e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsxs("button",{className:`btcd-s-tab-link ${t===g+1&&"s-t-l-active"}`,type:"button",children:[a("Related List #","bit-integrations"),g+1]})},`t-${g*3}`),e.jsx("button",{onClick:()=>N(g),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:e.jsx(Re,{size:"14"})})]})),l.relatedlists.length<3&&e.jsx("button",{onClick:b,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Add More Related List","bit-integrations")}'`},type:"button",children:"+"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(re,{children:e.jsx($e,{tab:t,settab:r,formID:u,formFields:i,crmConf:l,setCrmConf:j,handleInput:n,isLoading:R,setIsLoading:x,setSnackbar:h})}),(l==null?void 0:l.relatedlists)&&l.relatedlists.map((p,g)=>e.jsx(re,{children:e.jsx(Ue,{indx:g,tab:t,settab:r,formID:u,formFields:i,crmConf:l,setCrmConf:j,handleInput:n,isLoading:R,setIsLoading:x,setSnackbar:h})},`p-${g+2.4}`))]})}),e.jsx("br",{})]})}export{Ve as Z};
