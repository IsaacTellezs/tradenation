import{s as T,_ as p,b as M,r as c,u as R,d as w,j as a,e as S,f as A,a as P,g as k,c as U,F as K,G as ee,B as D,C as V,v as te,T as ae,H as oe}from"./index-57479c59.js";import{P as re}from"./PageContainer-de4ac5c1.js";import{C as L,D as z}from"./DashboardCard-91f4014e.js";import{a as N}from"./axios-1779699b.js";import{C as Z}from"./react-apexcharts.min-32e54a4f.js";import{C as Y}from"./Card-83f89e6e.js";import{T as j}from"./Typography-54387e6f.js";import{S as $}from"./Select-bd94676f.js";import{b as ne,M as f}from"./MenuItem-ead1f144.js";import{A as se,T as ie}from"./Toolbar-3517581c.js";import{P as le}from"./Paper-08588d6e.js";import"./index-22a06557.js";import"./Stack-071349a4.js";import"./styled-05ad685e.js";import"./Menu-699040ae.js";import"./useTheme-f109172b.js";import"./ButtonBase-a2d34895.js";const ce=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],de=e=>{const{absolute:t,children:o,classes:r,flexItem:d,light:n,orientation:s,textAlign:i,variant:l}=e;return A({root:["root",t&&"absolute",l,n&&"light",s==="vertical"&&"vertical",d&&"flexItem",o&&"withChildren",o&&s==="vertical"&&"withChildrenVertical",i==="right"&&s!=="vertical"&&"textAlignRight",i==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]},ne,r)},pe=T("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>p({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:M(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>p({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>p({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),he=T("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>p({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),ue=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiDivider"}),{absolute:d=!1,children:n,className:s,component:i=n?"div":"hr",flexItem:l=!1,light:m=!1,orientation:h="horizontal",role:b=i!=="hr"?"separator":void 0,textAlign:v="center",variant:x="fullWidth"}=r,u=w(r,ce),g=p({},r,{absolute:d,component:i,flexItem:l,light:m,orientation:h,role:b,textAlign:v,variant:x}),y=de(g);return a.jsx(pe,p({as:i,className:S(y.root,s),role:b,ref:o,ownerState:g},u,{children:n?a.jsx(he,{className:y.wrapper,ownerState:g,children:n}):null}))}),ge=ue,xe=c.createContext(),q=xe;function fe(e){return P("MuiTable",e)}k("MuiTable",["root","stickyHeader"]);const me=["className","component","padding","size","stickyHeader"],ve=e=>{const{classes:t,stickyHeader:o}=e;return A({root:["root",o&&"stickyHeader"]},fe,t)},be=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":p({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),W="table",ye=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTable"}),{className:d,component:n=W,padding:s="normal",size:i="medium",stickyHeader:l=!1}=r,m=w(r,me),h=p({},r,{component:n,padding:s,size:i,stickyHeader:l}),b=ve(h),v=c.useMemo(()=>({padding:s,size:i,stickyHeader:l}),[s,i,l]);return a.jsx(q.Provider,{value:v,children:a.jsx(be,p({as:n,role:n===W?null:"table",ref:o,className:S(b.root,d),ownerState:h},m))})}),Ce=ye,je=c.createContext(),H=je;function De(e){return P("MuiTableBody",e)}k("MuiTableBody",["root"]);const Te=["className","component"],Re=e=>{const{classes:t}=e;return A({root:["root"]},De,t)},we=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Se={variant:"body"},G="tbody",Ae=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTableBody"}),{className:d,component:n=G}=r,s=w(r,Te),i=p({},r,{component:n}),l=Re(i);return a.jsx(H.Provider,{value:Se,children:a.jsx(we,p({className:S(l.root,d),as:n,ref:o,role:n===G?null:"rowgroup",ownerState:i},s))})}),Ue=Ae;function $e(e){return P("MuiTableCell",e)}const Pe=k("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ke=Pe,Me=["align","className","component","padding","scope","size","sortDirection","variant"],Ne=e=>{const{classes:t,variant:o,align:r,padding:d,size:n,stickyHeader:s}=e,i={root:["root",o,s&&"stickyHeader",r!=="inherit"&&`align${U(r)}`,d!=="normal"&&`padding${U(d)}`,`size${U(n)}`]};return A(i,$e,t)},Be=T("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${U(o.size)}`],o.padding!=="normal"&&t[`padding${U(o.padding)}`],o.align!=="inherit"&&t[`align${U(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?K(M(e.palette.divider,1),.88):ee(M(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${ke.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Ee=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTableCell"}),{align:d="inherit",className:n,component:s,padding:i,scope:l,size:m,sortDirection:h,variant:b}=r,v=w(r,Me),x=c.useContext(q),u=c.useContext(H),g=u&&u.variant==="head";let y;s?y=s:y=g?"th":"td";let C=l;y==="td"?C=void 0:!C&&g&&(C="col");const B=b||u&&u.variant,F=p({},r,{align:d,component:y,padding:i||(x&&x.padding?x.padding:"normal"),size:m||(x&&x.size?x.size:"medium"),sortDirection:h,stickyHeader:B==="head"&&x&&x.stickyHeader,variant:B}),X=Ne(F);let I=null;return h&&(I=h==="asc"?"ascending":"descending"),a.jsx(Be,p({as:y,ref:o,className:S(X.root,n),"aria-sort":I,scope:C,ownerState:F},v))}),E=Ee;function He(e){return P("MuiTableContainer",e)}k("MuiTableContainer",["root"]);const ze=["className","component"],Le=e=>{const{classes:t}=e;return A({root:["root"]},He,t)},Ye=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Fe=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTableContainer"}),{className:d,component:n="div"}=r,s=w(r,ze),i=p({},r,{component:n}),l=Le(i);return a.jsx(Ye,p({ref:o,as:n,className:S(l.root,d),ownerState:i},s))}),Ie=Fe;function We(e){return P("MuiTableHead",e)}k("MuiTableHead",["root"]);const Ge=["className","component"],Oe=e=>{const{classes:t}=e;return A({root:["root"]},We,t)},_e=T("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Je={variant:"head"},O="thead",Qe=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTableHead"}),{className:d,component:n=O}=r,s=w(r,Ge),i=p({},r,{component:n}),l=Oe(i);return a.jsx(H.Provider,{value:Je,children:a.jsx(_e,p({as:n,className:S(l.root,d),ref:o,role:n===O?null:"rowgroup",ownerState:i},s))})}),Ve=Qe;function Ze(e){return P("MuiTableRow",e)}const qe=k("MuiTableRow",["root","selected","hover","head","footer"]),_=qe,Xe=["className","component","hover","selected"],Ke=e=>{const{classes:t,selected:o,hover:r,head:d,footer:n}=e;return A({root:["root",o&&"selected",r&&"hover",d&&"head",n&&"footer"]},Ze,t)},et=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${_.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${_.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:M(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:M(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),J="tr",tt=c.forwardRef(function(t,o){const r=R({props:t,name:"MuiTableRow"}),{className:d,component:n=J,hover:s=!1,selected:i=!1}=r,l=w(r,Xe),m=c.useContext(H),h=p({},r,{component:n,hover:s,selected:i,head:m&&m.variant==="head",footer:m&&m.variant==="footer"}),b=Ke(h);return a.jsx(et,p({as:n,ref:o,className:S(b.root,d),role:n===J?null:"row",ownerState:h},l))}),Q=tt,at=()=>{const[e,t]=c.useState("AMRN"),[o,r]=c.useState(new Date().getFullYear()),[d,n]=c.useState([]),[s,i]=c.useState([]);c.useEffect(()=>{(async()=>{try{const u=(await N.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data",{params:{symbol:e,region:"US"},headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"7075c678d8mshf97ee8c5f43d4cdp1082b0jsnb6d2ae860bf5"}})).data.prices.filter(g=>new Date(g.date*1e3).getFullYear()===o).map(g=>({date:new Date(g.date*1e3).toLocaleDateString("en-US"),close:g.close}));n(u.map(g=>g.close)),i(u.map(g=>g.date))}catch(x){console.error("Error fetching data:",x)}})()},[e,o]);const l=v=>t(v.target.value),m=v=>r(v.target.value),h={chart:{type:"line",height:350,zoom:{enabled:!1},animations:{easing:"easeinout",speed:500},toolbar:{show:!0}},colors:["#3f51b5","#ff5722"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},xaxis:{categories:s,title:{text:"Fecha"}},yaxis:{title:{text:"Precio de Cierre (USD)"}},tooltip:{theme:"light",x:{format:"dd/MM/yyyy"}},title:{text:`Historial de Precios de ${e} (${o})`,align:"left",style:{fontSize:"18px",fontWeight:"bold"}}},b=Array.from({length:5},(v,x)=>new Date().getFullYear()-x);return a.jsx(D,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",children:a.jsx(Y,{style:{maxWidth:700,width:"100%",marginTop:"20px"},children:a.jsxs(L,{children:[a.jsx(j,{variant:"h5",gutterBottom:!0,children:"Historial de Precios"}),a.jsxs(D,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2,children:[a.jsxs($,{value:e,onChange:l,children:[a.jsx(f,{value:"AMRN",children:"Amarin Corporation (AMRN)"}),a.jsx(f,{value:"AAPL",children:"Apple (AAPL)"}),a.jsx(f,{value:"GOOGL",children:"Alphabet (GOOGL)"}),a.jsx(f,{value:"AMZN",children:"Amazon (AMZN)"})]}),a.jsx($,{value:o,onChange:m,children:b.map(v=>a.jsx(f,{value:v,children:v},v))})]}),d.length?a.jsx(Z,{options:h,series:[{name:"Precio de Cierre",data:d}],type:"line",height:350}):a.jsx(j,{align:"center",color:"textSecondary",children:"Cargando datos..."})]})})})},ot=()=>{const[e,t]=c.useState("EUR/USD"),[o,r]=c.useState([]),[d,n]=c.useState([]),[s,i]=c.useState(!0),[l,m]=c.useState("forex");c.useEffect(()=>{(async()=>{i(!0);try{let u;if(l==="forex"){const g=e.split("/")[0],y=e.split("/")[1];u=await N.get("https://www.alphavantage.co/query",{params:{function:"CURRENCY_EXCHANGE_RATE",from_currency:g,to_currency:y,apikey:"YP1RQJJ68D5QIQAY"}}),console.log("Forex Response:",u.data);const C=u.data["Realtime Currency Exchange Rate"];C?(r([parseFloat(C["5. Exchange Rate"])]),n([new Date().toISOString().split("T")[0]])):(console.error("No exchange rate data found."),r([]),n([]))}else if(l==="crypto"){u=await N.get("https://www.alphavantage.co/query",{params:{function:"CRYPTO_INTRADAY",symbol:e,market:"USD",interval:"5min",apikey:"YP1RQJJ68D5QIQAY"}}),console.log("Crypto Response:",u.data);const g=u.data["Time Series (Digital Currency Intraday)"],y=Object.entries(g).map(([C,B])=>({date:C,close:parseFloat(B["1a. price (USD)"])}));r(y.map(C=>C.close)),n(y.map(C=>C.date))}}catch(u){console.error("Error fetching data:",u)}finally{i(!1)}})()},[e,l]);const h=x=>t(x.target.value),b=x=>m(x.target.value),v={chart:{type:"line",height:350,zoom:{enabled:!1}},colors:["#3f51b5"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},xaxis:{categories:d,title:{text:"Fecha"}},yaxis:{title:{text:l==="forex"?"Tipo de Cambio (USD)":"Precio (USD)"}}};return a.jsx(D,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",children:a.jsx(Y,{style:{maxWidth:700,width:"100%",marginTop:"20px"},children:a.jsxs(L,{children:[a.jsx(j,{variant:"h5",gutterBottom:!0,children:"Datos de Alpha Vantage"}),a.jsxs(D,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2,children:[a.jsxs($,{value:l,onChange:b,children:[a.jsx(f,{value:"forex",children:"Forex"}),a.jsx(f,{value:"crypto",children:"Criptomonedas"})]}),l==="forex"&&a.jsxs($,{value:e,onChange:h,children:[a.jsx(f,{value:"EUR/USD",children:"EUR/USD"}),a.jsx(f,{value:"GBP/USD",children:"GBP/USD"}),a.jsx(f,{value:"USD/JPY",children:"USD/JPY"})]}),l==="crypto"&&a.jsxs($,{value:e,onChange:h,children:[a.jsx(f,{value:"BTC/USD",children:"Bitcoin (BTC/USD)"}),a.jsx(f,{value:"ETH/USD",children:"Ethereum (ETH/USD)"}),a.jsx(f,{value:"LTC/USD",children:"Litecoin (LTC/USD)"})]})]}),s?a.jsx(D,{display:"flex",justifyContent:"center",children:a.jsx(V,{})}):a.jsx(a.Fragment,{children:o.length?a.jsx(Z,{options:v,series:[{name:"Precio",data:o}],type:"line",height:350}):a.jsx(j,{align:"center",color:"textSecondary",children:"No hay datos disponibles."})})]})})})},rt=()=>{const[e,t]=c.useState("C:EURUSD"),[o,r]=c.useState([]),[d,n]=c.useState(!1),[s,i]=c.useState(null);c.useEffect(()=>{(async()=>{n(!0);try{const v=(await N.get(`https://api.polygon.io/v2/aggs/ticker/${e}/range/1/day/2023-01-09/2023-01-09`,{params:{apiKey:"fPBaYurdQq0LFGStezpEXl5goEQyZARW"}})).data.results.map(g=>({date:new Date(g.t).toLocaleDateString(),close:g.c}));r(v);const u=(await N.get(`https://api.polygon.io/v2/last/forex/${e}`,{params:{apiKey:"fPBaYurdQq0LFGStezpEXl5goEQyZARW"}})).data;u&&u.price&&i(u.price)}catch(b){console.error("Error fetching data:",b)}finally{n(!1)}})()},[e]);const l=h=>t(h.target.value),m=te({palette:{primary:{main:"#1976d2"},secondary:{main:"#ff4081"}}});return a.jsxs(ae,{theme:m,children:[a.jsx(oe,{}),a.jsx(se,{position:"static",children:a.jsx(ie,{children:a.jsx(j,{variant:"h6",style:{flexGrow:1},children:"Datos de Forex"})})}),a.jsx(D,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",mt:4,children:a.jsx(Y,{style:{maxWidth:700,width:"100%",marginBottom:"20px",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},children:a.jsxs(L,{children:[a.jsx(j,{variant:"h5",gutterBottom:!0,align:"center",children:"Datos de Forex"}),a.jsx(D,{display:"flex",justifyContent:"center",alignItems:"center",mb:2,children:a.jsxs($,{value:e,onChange:l,variant:"outlined",style:{minWidth:120},children:[a.jsx(f,{value:"C:AUDUSD",children:"Dólar Australiano / Dólar (AUD/USD)"}),a.jsx(f,{value:"C:USDCAD",children:"Dólar / Dólar Canadiense (USD/CAD)"}),a.jsx(f,{value:"C:EURJPY",children:"Euro / Yen (EUR/JPY)"}),a.jsx(f,{value:"C:NZDUSD",children:"Dólar Neozelandés / Dólar (NZD/USD)"}),a.jsx(f,{value:"C:EURGBP",children:"Euro / Libra (EUR/GBP)"}),a.jsx(f,{value:"C:EURCAD",children:"Euro / Dólar Canadiense (EUR/CAD)"}),a.jsx(f,{value:"C:GBPJPY",children:"Libra / Yen (GBP/JPY)"}),a.jsx(f,{value:"C:GBPCAD",children:"Libra / Dólar Canadiense (GBP/CAD)"})]})}),d?a.jsx(D,{display:"flex",justifyContent:"center",alignItems:"center",height:"200px",children:a.jsx(V,{})}):a.jsx(a.Fragment,{children:o.length?a.jsxs(a.Fragment,{children:[a.jsx(ge,{style:{margin:"20px 0"}}),a.jsx(Ie,{component:le,children:a.jsxs(Ce,{children:[a.jsx(Ve,{children:a.jsxs(Q,{children:[a.jsx(E,{style:{fontWeight:"bold",color:m.palette.primary.main},children:"Fecha"}),a.jsx(E,{style:{fontWeight:"bold",color:m.palette.primary.main},children:"Precio de Cierre"})]})}),a.jsx(Ue,{children:o.map((h,b)=>a.jsxs(Q,{children:[a.jsx(E,{children:h.date}),a.jsx(E,{children:h.close.toFixed(4)})]},b))})]})}),a.jsxs(j,{variant:"h6",align:"center",mt:2,children:["Precio Actual: ",a.jsx("span",{style:{color:m.palette.secondary.main},children:s?s.toFixed(4):"Cargando..."})," ",e.split(":")[1]]})]}):a.jsx(j,{align:"center",color:"textSecondary",children:"No hay datos disponibles."})})]})})})]})},jt=()=>a.jsxs(re,{title:"Trade Page",description:"this is a trade page",children:[a.jsx(z,{title:"Yahoo",children:a.jsx(at,{})}),a.jsx(z,{title:"Alpha Vantage",children:a.jsx(ot,{})}),a.jsx(z,{title:"Polygon",children:a.jsx(rt,{})})]});export{jt as default};