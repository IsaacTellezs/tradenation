import{e as T,d as V,b as D,g as F,s as M}from"./Box-6f4609a6.js";import{v as B,w as E,_ as k,y as v,x as p,M as G,D as N,P as _,r as d,a as $,j as O,Q as h,u as U}from"./index-de88cc24.js";import{s as A}from"./styled-b3323f3d.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],I=B(),Q=A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function W(e){return E({props:e,name:"MuiStack",defaultTheme:I})}function q(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],H=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=G(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=N(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:h(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${z(r?t[r]:e.direction)}`]:h(c,o)}}))}return n=_(s.breakpoints,n),n};function J(e={}){const{createStyledComponent:s=Q,useThemeProps:n=W,componentName:c="MuiStack"}=e,a=()=>D({root:["root"]},o=>F(c,o),{}),t=s(H);return d.forwardRef(function(o,r){const i=n(o),l=T(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:P,useFlexGap:j=!1}=l,C=$(l,L),b={direction:x,spacing:S,useFlexGap:j},R=a();return O.jsx(t,k({as:u,ownerState:b,ref:r,className:V(R.root,P)},C,{children:y?q(g,y):g}))})}const K=J({createStyledComponent:M("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})}),w=K;export{w as S,J as c};