var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(i,l,a)=>l in i?$(i,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[l]=a,h=(i,l)=>{for(var a in l||(l={}))L.call(l,a)&&_(i,a,l[a]);if(y)for(var a of y(l))M.call(l,a)&&_(i,a,l[a]);return i};import{d as R,j as e,L as k}from"./main-642.js";import{m as O,l as m,n as S,H as T,T as D,r as H}from"./bi.77.82.js";import{r as P,a as V}from"./bi.27.842.js";function E({i,formFields:l,field:a,directIqConf:t,setDirectIqConf:u}){var g,v,N,F;const p=a.required,o=((g=t==null?void 0:t.default)==null?void 0:g.fields)&&Object.values((v=t==null?void 0:t.default)==null?void 0:v.fields).filter(s=>!s.required),j=R(O),{isPro:x}=j,d=s=>{const n=h({},t);n.field_map.splice(s,0,{}),u(n)},c=s=>{const n=h({},t);n.field_map.length>1&&n.field_map.splice(s,1),u(n)},r=(s,n)=>{const b=h({},t);b.field_map[n][s.target.name]=s.target.value,s.target.value==="custom"&&(b.field_map[n].customValue=""),u(b)},w=(s,n)=>{const b=h({},t);b.field_map[n].customValue=s.target.value,u(b)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:s=>r(s,i),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"List Fields",children:l==null?void 0:l.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${x?"":"(PRO)"}`,children:x&&((N=S)==null?void 0:N.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),a.formField==="custom"&&e.jsx(T,{onChange:s=>w(s,i),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:m("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"directIqField",value:a.directIqField,onChange:s=>r(s,i),disabled:p,children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),p?((F=t==null?void 0:t.default)==null?void 0:F.fields)&&Object.values(t.default.fields).map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`)):o&&o.map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`))]})]}),!p&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>d(i),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>c(i),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(D,{})})]})]})}function J({formFields:i,directIqConf:l,setDirectIqConf:a,isLoading:t,setIsLoading:u,setSnackbar:p}){var j,x;const o=d=>{const c=d.target.value,r=h({},l);c?r.listId=c:delete r.listId,V(r,a,u,p)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:m("List:","bit-integrations")}),e.jsxs("select",{value:l==null?void 0:l.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:o,children:[e.jsx("option",{value:"",children:m("Select List","bit-integrations")}),((j=l==null?void 0:l.default)==null?void 0:j.directIqLists)&&Object.keys(l.default.directIqLists).map(d=>e.jsx("option",{value:l.default.directIqLists[d].listId,children:l.default.directIqLists[d].listName},`${d+1}`))]}),e.jsx("button",{onClick:()=>P(l,a,u,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh DirectIq list"'},type:"button",disabled:t,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),t&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>V(l,a,u,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh DirectIq Field","bit-integrations")}'`},type:"button",disabled:t,children:"↻"})]}),((l==null?void 0:l.listId)||((x=l==null?void 0:l.default)==null?void 0:x.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("DirectIq Fields","bit-integrations")})})]}),l.field_map.map((d,c)=>e.jsx(E,{i:c,field:d,directIqConf:l,formFields:i,setDirectIqConf:a},`DirectIq-m-${c+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>H(l.field_map.length,l,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{})]})]})}export{J as D};
