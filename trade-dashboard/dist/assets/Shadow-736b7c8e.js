import{s as i,j as r,T as s}from"./index-e94107b4.js";import{P as d}from"./PageContainer-60ea3072.js";import{D as m}from"./DashboardCard-2dab3d3f.js";import{s as p,B as n}from"./Box-ea4f807c.js";import{P as l}from"./Paper-c988f93e.js";import{G as o}from"./Grid-3e67ae7e.js";import"./index-770df207.js";import"./Card-d9396baa.js";import"./Stack-87facf16.js";import"./styled-6d61d501.js";import"./useTheme-1114e550.js";const h=p(l)(({theme:t})=>({...t.typography.body1,textAlign:"center",color:t.palette.text.secondary,height:60,lineHeight:"60px"})),c=i({palette:{mode:"dark"}}),x=i({palette:{mode:"light"}}),C=()=>r.jsx(d,{title:"Shadow",description:"this is Shadow",children:r.jsx(m,{title:"Shadow",children:r.jsx(o,{container:!0,spacing:2,children:[x,c].map((t,a)=>r.jsx(o,{item:!0,xs:6,children:r.jsx(s,{theme:t,children:r.jsx(n,{sx:{p:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"1fr 1fr"},gap:2},children:[0,1,2,3,4,6,8,12,16,24].map(e=>r.jsx(h,{elevation:e,children:`elevation=${e}`},e))})})},a))})})});export{C as default};