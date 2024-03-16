var y=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var $=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&$(e,a,t[a]);if(I)for(var a of I(t))R.call(t,a)&&$(e,a,t[a]);return e},g=(e,t)=>S(e,q(t));import{_ as d,c as m,B as A,d as F}from"./bi.77.82.js";const E=(e,t,a,i,r,o,n,l,h)=>{let s=c({},t);if(n){const f=c({},l);f[e.target.name]="",h(c({},f))}switch(s[e.target.name]=e.target.value,e.target.name){case"source_type":s=D(s,a);break}a(c({},s))},M=e=>!((e!=null&&e.address_field?e.address_field.filter(a=>!a.formField&&a.constantContactAddressField&&a.required):[]).length>0),D=(e,t)=>{const a=A(e);return a.field_map=[{formField:"",constantContactFormField:""}],v(e,t),a},W=(e,t,a,i,r)=>{r(g(c({},i),{list:!0}));const o={integId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};m(o,"cContact_refresh_list").then(n=>{if(n&&n.success){const l=c({},t);n.data&&(l.lists=n.data.contactList),a(l),r(g(c({},i),{list:!1})),F.success(d("List fetch successfully","bit-integrations"));return}r(g(c({},i),{list:!1})),F.error(d("List fetch failed","bit-integrations"))})},v=(e,t)=>{const a={clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};m(a,"cContact_custom_fields").then(i=>{if(i&&i.success){const r=c({},e);if(i.data){const o=r.default.constantContactFields.concat(i.data.customFields);r.default.constantContactFields=o}t(r)}})},J=(e,t,a,i,r)=>{r(g(c({},i),{tag:!0}));const o={integId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};m(o,"cContact_refresh_tags").then(n=>{if(n&&n.success){const l=c({},t);n.data&&(l.tags=n.data.contactTag),a(l),r(g(c({},i),{tag:!1})),F.success(d("Tags fetch successfully","bit-integrations"));return}r(g(c({},i),{tag:!1})),F.error(d("Tags fetch failed","bit-integrations"))})},N=e=>{const t={},i=window.location.href.replace(`${window.opener.location.href}`,"").split("&");i&&i.forEach(r=>{const o=r.split("=");o[1]&&(t[o[0]]=o[1])}),localStorage.setItem(`__${e}`,JSON.stringify(t)),window.close()},O=(e,t,a,i,r,o,n,l,h,s)=>{if(!i.clientId){o({clientId:i.clientId?"":d("Client ID cann't be empty","bit-integrations"),clientSecret:i.clientSecret?"":d("Secret key cann't be empty","bit-integrations")});return}l(!0);const f=`https://authz.constantcontact.com/oauth2/default/v1/authorize?scope=${a}&response_type=code&client_id=${i.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${s.api.base}`)}/redirect`,b=window.open(f,e,"width=400,height=609,toolbar=off"),k=setInterval(()=>{if(b.closed){clearInterval(k);let u={},_=!1;const w=localStorage.getItem(`__${e}`);if(w&&(_=!0,u=JSON.parse(w),localStorage.removeItem(`__${e}`),u.code.search("#"))){const[p]=u.code.split("#");u.code=p}if(!u.code||u.error||!u||!_){const p=u.error?`Cause: ${u.error}`:"";h({show:!0,msg:`${d("Authorization failed","bit-integrations")} ${p}. ${d("please try again","bit-integrations")}`}),l(!1)}else{const p=c({},i);p.accountServer=u["accounts-server"],z(t,u,p,r,n,l,h,s)}}},500)},z=(e,t,a,i,r,o,n,l)=>{const h=c({},t);h.clientId=a.clientId,h.clientSecret=a.clientSecret,h.redirectURI=`${l.api.base}/redirect`,m(h,`${e}_generate_token`).then(s=>s).then(s=>{if(s&&s.success){const f=c({},a);f.tokenDetails=s.data,i(f),r(!0),n({show:!0,msg:d("Authorized Successfully","bit-integrations")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?n({show:!0,msg:`${d("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${d("please try again","bit-integrations")}`}):n({show:!0,msg:d("Authorization failed. please try again","bit-integrations")});o(!1)})},x=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.constantContactFormField):[]).length>0),B=e=>{var a;const t=(a=e==null?void 0:e.default)==null?void 0:a.constantContactFields.filter(i=>i.required===!0);return t.length>0?t.map(i=>({formField:"",constantContactFormField:i.key})):[{formField:"",constantContactFormField:""}]};export{W as a,J as b,O as c,M as d,x as e,B as g,E as h,N as s};