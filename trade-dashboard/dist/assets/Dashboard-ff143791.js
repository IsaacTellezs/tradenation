import{c as b,_ as h,r as A,u as D,b as S,j as s,i as W}from"./index-22349abf.js";import{P as $}from"./PageContainer-06afcc27.js";import{D as f}from"./DashboardCard-716a8675.js";import{C as v}from"./react-apexcharts.min-06ea1c30.js";import{u as y}from"./useTheme-f5fefd7a.js";import{S as B}from"./Select-7dce56a8.js";import{M as x}from"./MenuItem-171da400.js";import{G as n}from"./Grid-817ddb5c.js";import{g as P,a as T,s as L,r as N,c as C,b as U,T as l,B as V}from"./Box-93116bbe.js";import{S as d}from"./Stack-d8283cd8.js";import{A as g}from"./Avatar-5207586e.js";import{c as j}from"./createReactComponent-85938a6c.js";import"./BlankCard-2fae51f4.js";import{B as _}from"./ButtonBase-1a22e7f8.js";import"./index-f56f8882.js";import"./Card-ab49417e.js";import"./Paper-ee9a33ff.js";import"./Menu-e1aae509.js";import"./styled-1e015d78.js";function G(o){return T("MuiFab",o)}const E=P("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),z=E,H=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],J=o=>{const{color:r,variant:a,classes:e,size:t}=o,i={root:["root",a,`size${b(t)}`,r==="inherit"?"colorInherit":r]},c=U(i,G,e);return h({},e,c)},O=L(_,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>N(o)||o==="classes",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[a.variant],r[`size${b(a.size)}`],a.color==="inherit"&&r.colorInherit,r[b(a.size)],r[a.color]]}})(({theme:o,ownerState:r})=>{var a,e;return h({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(a=(e=o.palette).getContrastText)==null?void 0:a.call(e,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${z.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},r.size==="small"&&{width:40,height:40},r.size==="medium"&&{width:48,height:48},r.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},r.variant==="extended"&&r.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},r.variant==="extended"&&r.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},r.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:r})=>h({},r.color!=="inherit"&&r.color!=="default"&&(o.vars||o).palette[r.color]!=null&&{color:(o.vars||o).palette[r.color].contrastText,backgroundColor:(o.vars||o).palette[r.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[r.color].main}}}),({theme:o})=>({[`&.${z.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),Y=A.forwardRef(function(r,a){const e=D({props:r,name:"MuiFab"}),{children:t,className:i,color:c="default",component:p="button",disabled:u=!1,disableFocusRipple:w=!1,focusVisibleClassName:F,size:R="large",variant:I="circular"}=e,M=S(e,H),k=h({},e,{color:c,component:p,disabled:u,disableFocusRipple:w,size:R,variant:I}),m=J(k);return s.jsx(O,h({className:C(m.root,i),component:p,disabled:u,focusRipple:!w,focusVisibleClassName:C(m.focusVisible,F),ownerState:k,ref:a},M,{classes:m,children:t}))}),q=Y;var K=j("arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]]),Q=j("arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]]),X=j("currency-dollar","IconCurrencyDollar",[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]]);const Z=()=>{const[o,r]=W.useState("1"),a=u=>{r(u.target.value)},e=y(),t=e.palette.primary.main,i=e.palette.secondary.main,c={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!0},height:370},colors:[t,i],plotOptions:{bar:{horizontal:!1,barHeight:"60%",columnWidth:"42%",borderRadius:[6],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},stroke:{show:!0,width:5,lineCap:"butt",colors:["transparent"]},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",strokeDashArray:3,xaxis:{lines:{show:!1}}},yaxis:{tickAmount:4},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08","23/08"],axisBorder:{show:!1}},tooltip:{theme:e.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1}},p=[{name:"Ganancias este mes",data:[355,390,300,350,390,180,355,390]},{name:"Perdidas este mes",data:[280,250,325,215,250,310,280,250]}];return s.jsx(f,{title:"Trading",action:s.jsxs(B,{labelId:"month-dd",id:"month-dd",value:o,size:"small",onChange:a,children:[s.jsx(x,{value:1,children:"Marzo 2023"}),s.jsx(x,{value:2,children:"Abril 2023"}),s.jsx(x,{value:3,children:"Mayo 2023"})]}),children:s.jsx(v,{options:c,series:p,type:"bar",height:"370px"})})},oo=()=>{const o=y(),r=o.palette.primary.main,a="#ecf2ff",e=o.palette.success.light,t={chart:{type:"donut",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:155},colors:[r,a,"#F9F9FD"],plotOptions:{pie:{startAngle:0,endAngle:360,donut:{size:"75%",background:"transparent"}}},tooltip:{theme:o.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},responsive:[{breakpoint:991,options:{chart:{width:120}}}]},i=[38,40,25];return s.jsx(f,{title:"Ganancia anual",children:s.jsxs(n,{container:!0,spacing:3,children:[s.jsxs(n,{item:!0,xs:7,sm:7,children:[s.jsx(l,{variant:"h3",fontWeight:"700",children:"$36,358"}),s.jsxs(d,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[s.jsx(g,{sx:{bgcolor:e,width:27,height:27},children:s.jsx(Q,{width:20,color:"#39B69A"})}),s.jsx(l,{variant:"subtitle2",fontWeight:"600",children:"+9%"}),s.jsx(l,{variant:"subtitle2",color:"textSecondary",children:"año pasado"})]}),s.jsxs(d,{spacing:3,mt:5,direction:"row",children:[s.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(g,{sx:{width:9,height:9,bgcolor:r,svg:{display:"none"}}}),s.jsx(l,{variant:"subtitle2",color:"textSecondary",children:"2023"})]}),s.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(g,{sx:{width:9,height:9,bgcolor:a,svg:{display:"none"}}}),s.jsx(l,{variant:"subtitle2",color:"textSecondary",children:"2024"})]})]})]}),s.jsx(n,{item:!0,xs:5,sm:5,children:s.jsx(v,{options:t,series:i,type:"donut",height:"150px"})})]})})},so=()=>{const o=y(),r=o.palette.secondary.main,a="#f5fcff",e="#fdede8",t={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:60,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:2},fill:{colors:[a],type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:o.palette.mode==="dark"?"dark":"light"}},i=[{name:"",color:r,data:[25,66,20,40,12,58,20]}];return s.jsx(f,{title:"Ganancias mensuales",action:s.jsx(q,{color:"secondary",size:"medium",sx:{color:"#ffffff"},children:s.jsx(X,{width:24})}),footer:s.jsx(v,{options:t,series:i,type:"area",height:"60px"}),children:s.jsxs(s.Fragment,{children:[s.jsx(l,{variant:"h3",fontWeight:"700",mt:"-20px",children:"$6,820"}),s.jsxs(d,{direction:"row",spacing:1,my:1,alignItems:"center",children:[s.jsx(g,{sx:{bgcolor:e,width:27,height:27},children:s.jsx(K,{width:20,color:"#FA896B"})}),s.jsx(l,{variant:"subtitle2",fontWeight:"600",children:"+9%"}),s.jsx(l,{variant:"subtitle2",color:"textSecondary",children:"año pasado"})]})]})})},wo=()=>s.jsx($,{title:"Dashboard",description:"this is Dashboard",children:s.jsx(V,{children:s.jsxs(n,{container:!0,spacing:3,children:[s.jsx(n,{item:!0,xs:12,lg:8,children:s.jsx(Z,{})}),s.jsx(n,{item:!0,xs:12,lg:4,children:s.jsxs(n,{container:!0,spacing:3,children:[s.jsx(n,{item:!0,xs:12,children:s.jsx(oo,{})}),s.jsx(n,{item:!0,xs:12,children:s.jsx(so,{})})]})})]})})});export{wo as default};