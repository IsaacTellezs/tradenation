import{K as ie,r as O,p as se,M as le,P as Y,Q as ce,S as ue,U as de,V as z,G as fe,q as pe,j as K,o as me,W as he,T as J,k as ye,c as I,b as ge,X as ve,m as be}from"./index-849039a6.js";function L(){return L=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},L.apply(null,arguments)}function Se(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var xe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,we=Se(function(e){return xe.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pe=we,ke=function(r){return r!=="theme"},U=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Pe:ke},H=function(r,t,n){var o;if(t){var a=t.shouldForwardProp;o=r.__emotion_forwardProp&&a?function(s){return r.__emotion_forwardProp(s)&&a(s)}:a}return typeof o!="function"&&n&&(o=r.__emotion_forwardProp),o},Te=function(r){var t=r.cache,n=r.serialized,o=r.isStringTag;return ce(t,n,o),ue(function(){return de(t,n,o)}),null},Ce=function e(r,t){var n=r.__emotion_real===r,o=n&&r.__emotion_base||r,a,s;t!==void 0&&(a=t.label,s=t.target);var i=H(r,t,n),h=i||U(o),u=!h("as");return function(){var l=arguments,p=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(a!==void 0&&p.push("label:"+a+";"),l[0]==null||l[0].raw===void 0)p.push.apply(p,l);else{p.push(l[0][0]);for(var P=l.length,y=1;y<P;y++)p.push(l[y],l[0][y])}var d=ie(function(c,g,k){var b=u&&c.as||o,T="",R=[],f=c;if(c.theme==null){f={};for(var m in c)f[m]=c[m];f.theme=O.useContext(se)}typeof c.className=="string"?T=le(g.registered,R,c.className):c.className!=null&&(T=c.className+" ");var S=Y(p.concat(R),g.registered,f);T+=g.key+"-"+S.name,s!==void 0&&(T+=" "+s);var x=u&&i===void 0?U(b):h,A={};for(var C in c)u&&C==="as"||x(C)&&(A[C]=c[C]);return A.className=T,A.ref=k,O.createElement(O.Fragment,null,O.createElement(Te,{cache:g,serialized:S,isStringTag:typeof b=="string"}),O.createElement(b,A))});return d.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",d.defaultProps=r.defaultProps,d.__emotion_real=d,d.__emotion_base=o,d.__emotion_styles=p,d.__emotion_forwardProp=i,Object.defineProperty(d,"toString",{value:function(){return"."+s}}),d.withComponent=function(c,g){return e(c,L({},t,g,{shouldForwardProp:H(d,g,!0)})).apply(void 0,p)},d}},_e=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],V=Ce.bind();_e.forEach(function(e){V[e]=V(e)});/**
 * @mui/styled-engine v6.1.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Q(e,r){return V(e,r)}function Oe(e,r){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=r(e.__emotion_styles))}const D=[];function W(e){return D[0]=e,Y(D)}const q=e=>e,Ae=()=>{let e=q;return{configure(r){e=r},generate(r){return e(r)},reset(){e=q}}},Re=Ae(),Z=Re;function ee(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(r=0;r<o;r++)e[r]&&(t=ee(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function te(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=ee(e))&&(n&&(n+=" "),n+=r);return n}function Fe(e={}){const{themeId:r,defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:o}=e,a=Q("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(z);return O.forwardRef(function(h,u){const l=fe(t),{className:p,component:P="div",...y}=pe(h);return K.jsx(a,{as:P,ref:u,className:te(p,o?o(n):n),theme:r&&l[r]||l,...y})})}const Ne={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function re(e,r,t="Mui"){const n=Ne[r];return n?`${t}-${n}`:`${Z.generate(e)}-${r}`}function ne(e,r,t="Mui"){const n={};return r.forEach(o=>{n[o]=re(e,o,t)}),n}function oe(e){const{variants:r,...t}=e,n={variants:r,style:W(t),isProcessed:!0};return n.style===t||r&&r.forEach(o=>{typeof o.style!="function"&&(o.style=W(o.style))}),n}const Me=me();function E(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function Be(e){return e?(r,t)=>t[e]:null}function Ee(e,r,t){e.theme=Le(e.theme)?t:e.theme[r]||e.theme}function B(e,r){const t=typeof r=="function"?r(e):r;if(Array.isArray(t))return t.flatMap(n=>B(e,n));if(Array.isArray(t==null?void 0:t.variants)){let n;if(t.isProcessed)n=t.style;else{const{variants:o,...a}=t;n=a}return ae(e,t.variants,[n])}return t!=null&&t.isProcessed?t.style:t}function ae(e,r,t=[]){var o;let n;e:for(let a=0;a<r.length;a+=1){const s=r[a];if(typeof s.props=="function"){if(n??(n={...e,...e.ownerState,ownerState:e.ownerState}),!s.props(n))continue}else for(const i in s.props)if(e[i]!==s.props[i]&&((o=e.ownerState)==null?void 0:o[i])!==s.props[i])continue e;typeof s.style=="function"?(n??(n={...e,...e.ownerState,ownerState:e.ownerState}),t.push(s.style(n))):t.push(s.style)}return t}function ze(e={}){const{themeId:r,defaultTheme:t=Me,rootShouldForwardProp:n=E,slotShouldForwardProp:o=E}=e;function a(i){Ee(i,r,t)}return(i,h={})=>{Oe(i,f=>f.filter(m=>m!==z));const{name:u,slot:l,skipVariantsResolver:p,skipSx:P,overridesResolver:y=Be($e(l)),...d}=h,c=p!==void 0?p:l&&l!=="Root"&&l!=="root"||!1,g=P||!1;let k=E;l==="Root"||l==="root"?k=n:l?k=o:Ve(i)&&(k=void 0);const b=Q(i,{shouldForwardProp:k,label:Ie(),...d}),T=f=>{if(typeof f=="function"&&f.__emotion_real!==f)return function(S){return B(S,f)};if(he(f)){const m=oe(f);return m.variants?function(x){return B(x,m)}:m.style}return f},R=(...f)=>{const m=[],S=f.map(T),x=[];if(m.push(a),u&&y&&x.push(function(w){var N,$;const v=($=(N=w.theme.components)==null?void 0:N[u])==null?void 0:$.styleOverrides;if(!v)return null;const F={};for(const j in v)F[j]=B(w,v[j]);return y(w,F)}),u&&!c&&x.push(function(w){var F,N;const _=w.theme,v=(N=(F=_==null?void 0:_.components)==null?void 0:F[u])==null?void 0:N.variants;return v?ae(w,v):null}),g||x.push(z),Array.isArray(S[0])){const M=S.shift(),w=new Array(m.length).fill(""),_=new Array(x.length).fill("");let v;v=[...w,...M,..._],v.raw=[...w,...M.raw,..._],m.unshift(v)}const A=[...m,...S,...x],C=b(...A);return i.muiName&&(C.muiName=i.muiName),C};return b.withConfig&&(R.withConfig=b.withConfig),R}}function Ie(e,r){let t;return t}function Le(e){for(const r in e)return!1;return!0}function Ve(e){return typeof e=="string"&&e.charCodeAt(0)>96}function $e(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function je(e,r,t=void 0){const n={};for(const o in e){const a=e[o];let s="",i=!0;for(let h=0;h<a.length;h+=1){const u=a[h];u&&(s+=(i===!0?"":" ")+r(u),i=!1,t&&t[u]&&(s+=" "+t[u]))}n[o]=s}return n}const G={theme:void 0};function Ue(e){let r,t;return function(o){let a=r;return(a===void 0||o.theme!==t)&&(G.theme=o.theme,a=oe(e(G)),r=a,t=o.theme),a}}function He(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const De=e=>He(e)&&e!=="classes",We=De,qe=ze({themeId:J,defaultTheme:ye,rootShouldForwardProp:We}),Ge=qe,Xe=Ue,Ye=Xe;function Ke(e){return typeof e.main=="string"}function Je(e,r=[]){if(!Ke(e))return!1;for(const t of r)if(!e.hasOwnProperty(t)||typeof e[t]!="string")return!1;return!0}function Qe(e=[]){return([,r])=>r&&Je(r,e)}function Ze(e){return re("MuiTypography",e)}const ut=ne("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),et={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},tt=ve(),rt=e=>{const{align:r,gutterBottom:t,noWrap:n,paragraph:o,variant:a,classes:s}=e,i={root:["root",a,e.align!=="inherit"&&`align${I(r)}`,t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return je(i,Ze,s)},nt=Ge("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.variant&&r[t.variant],t.align!=="inherit"&&r[`align${I(t.align)}`],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})(Ye(({theme:e})=>{var r;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([t,n])=>t!=="inherit"&&n&&typeof n=="object").map(([t,n])=>({props:{variant:t},style:n})),...Object.entries(e.palette).filter(Qe()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(((r=e.palette)==null?void 0:r.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${I(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),X={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ot=O.forwardRef(function(r,t){const{color:n,...o}=ge({props:r,name:"MuiTypography"}),a=!et[n],s=tt({...o,...a&&{color:n}}),{align:i="inherit",className:h,component:u,gutterBottom:l=!1,noWrap:p=!1,paragraph:P=!1,variant:y="body1",variantMapping:d=X,...c}=s,g={...s,align:i,color:n,className:h,component:u,gutterBottom:l,noWrap:p,paragraph:P,variant:y,variantMapping:d},k=u||(P?"p":d[y]||X[y])||"span",b=rt(g);return K.jsx(nt,{as:k,ref:t,className:te(b.root,h),...c,ownerState:g,style:{...i!=="inherit"&&{"--Typography-textAlign":i},...c.style}})}),dt=ot,at=ne("MuiBox",["root"]),it=at,st=be(),lt=Fe({themeId:J,defaultTheme:st,defaultClassName:it.root,generateClassName:Z.generate}),ft=lt;export{ft as B,dt as T,L as _,re as a,te as b,Qe as c,je as d,ze as e,He as f,ne as g,Ye as m,V as n,We as r,Ge as s,ut as t};