import{g as p,a as u,s as j,h as F,_ as r,b as c,r as d,u as N,d as P,j as I,e as $,f as D}from"./index-57479c59.js";import{L as M}from"./Menu-699040ae.js";import{B as G,a as S,u as E}from"./ButtonBase-a2d34895.js";function ee(e){return u("MuiDivider",e)}const _=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),L=_;function te(e){return u("MuiListItemIcon",e)}const H=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=H;function se(e){return u("MuiListItemText",e)}const W=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=W;function z(e){return u("MuiMenuItem",e)}const A=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=A,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],q=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:m,classes:o}=e,i=D({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",m&&"selected"]},z,o);return r({},o,i)},K=j(G,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${L.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${L.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=N({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:m="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:k,role:T="menuitem",tabIndex:v,className:w}=a,V=P(a,h),C=d.useContext(M),y=d.useMemo(()=>({dense:o||C.dense||!1,disableGutters:i}),[C.dense,o,i]),g=d.useRef(null);S(()=>{l&&g.current&&g.current.focus()},[l]);const B=r({},a,{dense:y.dense,divider:b,disableGutters:i}),f=J(a),U=E(g,s);let x;return a.disabled||(x=v!==void 0?v:-1),I.jsx(M.Provider,{value:y,children:I.jsx(K,r({ref:U,role:T,tabIndex:x,component:m,focusVisibleClassName:$(f.focusVisible,k),className:$(f.root,w)},V,{ownerState:B,classes:f}))})}),ae=Q;export{ae as M,se as a,ee as b,te as g,R as l};