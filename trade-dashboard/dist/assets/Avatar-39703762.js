import{j as d,r as g,b as C}from"./index-849039a6.js";import{a as I,g as j,s as v,m as D,b as F,d as M}from"./Box-5be6eecf.js";import{e as N,f as z}from"./Menu-c65d18b4.js";const U=N(d.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function E(a){return I("MuiAvatar",a)}j("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const T=a=>{const{classes:e,variant:r,colorDefault:t}=a;return M({root:["root",r,t&&"colorDefault"],img:["img"],fallback:["fallback"]},E,e)},q=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:r}=a;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})(D(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),L=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),B=v(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function H({crossOrigin:a,referrerPolicy:e,src:r,srcSet:t}){const[l,s]=g.useState(!1);return g.useEffect(()=>{if(!r&&!t)return;s(!1);let n=!0;const o=new Image;return o.onload=()=>{n&&s("loaded")},o.onerror=()=>{n&&s("error")},o.crossOrigin=a,o.referrerPolicy=e,o.src=r,t&&(o.srcset=t),()=>{n=!1}},[a,e,r,t]),l}const $=g.forwardRef(function(e,r){const t=C({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:n,component:o="div",slots:A={},slotProps:h={},imgProps:m,sizes:x,src:u,srcSet:p,variant:k="circular",...w}=t;let i=null;const R=H({...m,src:u,srcSet:p}),y=u||p,b=y&&R!=="error",c={...t,colorDefault:!b,component:o,variant:k};delete c.ownerState;const f=T(c),[S,P]=z("img",{className:f.img,elementType:L,externalForwardedProps:{slots:A,slotProps:{img:{...m,...h.img}}},additionalProps:{alt:l,src:u,srcSet:p,sizes:x},ownerState:c});return b?i=d.jsx(S,{...P}):s||s===0?i=s:y&&l?i=l[0]:i=d.jsx(B,{ownerState:c,className:f.fallback}),d.jsx(q,{as:o,className:F(f.root,n),ref:r,...w,ownerState:c,children:i})}),O=$;export{O as A};