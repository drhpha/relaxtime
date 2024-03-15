var R=Object.defineProperty;var I=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,x=(i,t)=>{for(var e in t||(t={}))k.call(t,e)&&T(i,e,t[e]);if(I)for(var e of I(t))M.call(t,e)&&T(i,e,t[e]);return i};import{j as s,d as V,r as q,L as O}from"./main-642.js";import{q as E,l as m,m as H,n as S,H as A,T as P,p as U,r as B}from"./bi.77.82.js";import{r as _,a as D,b as $}from"./bi.97.838.js";function G({convertKitConf:i,setConvertKitConf:t}){var l;const e=(r,c)=>{const u=x({},i);c==="update"&&(r.target.checked?u.actions.update=!0:delete u.actions.update),t(x({},u))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(E,{checked:((l=i.actions)==null?void 0:l.update)||!1,onChange:r=>e(r,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:m("Update ConvertKit","bit-integrations"),subTitle:m("Update Responses with ConvertKit existing email?","bit-integrations")})})}function z({i,formFields:t,field:e,convertKitConf:l,setConvertKitConf:r}){var j,g,d,p;const c=e.required,u=((j=l==null?void 0:l.default)==null?void 0:j.fields)&&Object.values((g=l==null?void 0:l.default)==null?void 0:g.fields).filter(a=>!a.required),y=V(H),{isPro:N}=y,F=a=>{const b=x({},l);b.field_map.splice(a,0,{}),r(b)},o=a=>{const b=x({},l);b.field_map.length>1&&b.field_map.splice(a,1),r(b)},n=(a,b)=>{const h=x({},l);h.field_map[b][a.target.name]=a.target.value,a.target.value==="custom"&&(h.field_map[b].customValue=""),r(h)},w=(a,b)=>{const h=x({},l);h.field_map[b].customValue=a.target.value,r(h)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>n(a,i),children:[s.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:t==null?void 0:t.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),s.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${N?"":"(PRO)"}`,children:N&&((d=S)==null?void 0:d.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&s.jsx(A,{onChange:a=>w(a,i),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:m("Custom Value","bit-integrations")}),s.jsxs("select",{className:"btcd-paper-inp",name:"convertKitField",value:e.convertKitField,onChange:a=>n(a,i),disabled:c,children:[s.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),c?((p=l==null?void 0:l.default)==null?void 0:p.fields)&&Object.values(l.default.fields).map(a=>s.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`)):u&&u.map(a=>s.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`))]})]}),!c&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>F(i),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),s.jsx("button",{onClick:()=>o(i),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(P,{})})]})]})}function Y({formID:i,formFields:t,convertKitConf:e,setConvertKitConf:l,isLoading:r,setIsLoading:c,setSnackbar:u}){var o,n,w,j,g;const y=d=>{const p=x({},e);d?p.tagIds=d?d.split(","):[]:delete p.tagIds,l(x({},p))},N=d=>{const p=d.target.value,a=x({},e);p?a.formId=p:delete a.formId,$(a,l,c,u)},F=(o=e==null?void 0:e.default)==null?void 0:o.convertKitForms;return q.useEffect(()=>{F&&_(e,l,c,u)},[F]),s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:m("Form:","bit-integrations")}),s.jsxs("select",{value:e==null?void 0:e.formId,name:"formId",id:"",className:"btcd-paper-inp w-5",onChange:N,children:[s.jsx("option",{value:"",children:m("Select Form","bit-integrations")}),((n=e==null?void 0:e.default)==null?void 0:n.convertKitForms)&&Object.keys(e.default.convertKitForms).map(d=>s.jsx("option",{value:e.default.convertKitForms[d].formId,children:e.default.convertKitForms[d].formName},`${d+1}`))]}),s.jsx("button",{onClick:()=>D(e,l,c,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh ConvertKit form"'},type:"button",disabled:r,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),s.jsxs("div",{className:"d-flx",children:[s.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:m("Tags: ","bit-integrations")}),s.jsx(U,{defaultValue:(w=e==null?void 0:e.tagIds)==null?void 0:w.toString(),className:"btcd-paper-drpdwn w-5",options:((j=e==null?void 0:e.default)==null?void 0:j.convertKitTags)&&Object.keys(e.default.convertKitTags).map(d=>({label:e.default.convertKitTags[d].tagName,value:e.default.convertKitTags[d].tagId.toString()})),onChange:d=>y(d)}),s.jsx("button",{onClick:()=>_(e,l,c,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh ConvertKit Tags","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),s.jsx("br",{}),r&&s.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>$(e,l,c,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh ConvertKit Field","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),((e==null?void 0:e.formId)||((g=e==null?void 0:e.default)==null?void 0:g.fields))&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:m("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:m("ConvertKit Fields","bit-integrations")})})]}),e.field_map.map((d,p)=>s.jsx(z,{i:p,field:d,convertKitConf:e,formFields:t,setConvertKitConf:l},`ConvertKit-m-${p+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>B(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:m("Actions","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(G,{convertKitConf:e,setConvertKitConf:l})]})]})}export{Y as C};
