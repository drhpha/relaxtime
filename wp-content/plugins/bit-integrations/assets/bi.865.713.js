var c=Object.defineProperty;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var r=(l,a,s)=>a in l?c(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,p=(l,a)=>{for(var s in a||(a={}))m.call(a,s)&&r(l,s,a[s]);if(d)for(var s of d(a))_.call(a,s)&&r(l,s,a[s]);return l};import"./bi.77.82.js";const g=l=>{const a={},t=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");t&&t.forEach(i=>{const e=i.split("=");e[1]&&(a[e[0]]=e[1])}),localStorage.setItem(`__${l}`,JSON.stringify(a)),window.close()},h=(l,a,s,t,i)=>{const e=p({},a);i?t?e.relatedlists[i-1].upload_field_map.splice(l,0,{}):e.relatedlists[i-1].field_map.splice(l,0,{}):t?e.upload_field_map.splice(l,0,{}):e.field_map.splice(l,0,{}),s(p({},e))},w=(l,a,s,t,i)=>{const e=p({},a);i?t?e.relatedlists[i-1].upload_field_map.length>1&&e.relatedlists[i-1].upload_field_map.splice(l,1):e.relatedlists[i-1].field_map.length>1&&e.relatedlists[i-1].field_map.splice(l,1):t?e.upload_field_map.length>1&&e.upload_field_map.splice(l,1):e.field_map.length>1&&e.field_map.splice(l,1),s(p({},e))},V=(l,a,s,t,i,e)=>{const o=p({},s);e?i?o.relatedlists[e-1].upload_field_map[a][l.target.name]=l.target.value:o.relatedlists[e-1].field_map[a][l.target.name]=l.target.value:i?o.upload_field_map[a][l.target.name]=l.target.value:o.field_map[a][l.target.name]=l.target.value,l.target.value==="custom"&&(e?o.relatedlists[e-1].field_map[a].customValue="":o.field_map[a].customValue=""),t(p({},o))},C=(l,a,s,t,i)=>{var o,f;const e=p({},s);i?e.relatedlists[i-1].field_map[a].customValue=((o=l==null?void 0:l.target)==null?void 0:o.value)||l:e.field_map[a].customValue=((f=l==null?void 0:l.target)==null?void 0:f.value)||l,t(p({},e))};export{C as a,h as b,w as d,V as h,g as s};
