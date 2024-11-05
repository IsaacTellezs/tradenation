var Le=Object.defineProperty;var $e=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);import{r as u,g as X,j as N,z as ee,b as fe}from"./index-849039a6.js";import{_ as je,b as y,g as de,s as te,a as Ne,d as ke}from"./Box-5be6eecf.js";const ve=typeof window<"u"?u.useLayoutEffect:u.useEffect,Oe=ve;function Fe(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function G(e){const t=u.useRef(e);return Oe(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function ue(...e){return u.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Fe(n,t)})},e)}const le={};function he(e,t){const n=u.useRef(le);return n.current===le&&(n.current=e(t)),n}const Ue=[];function ze(e){u.useEffect(e,Ue)}class ne{constructor(){A(this,"currentId",null);A(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});A(this,"disposeEffect",()=>this.clear)}static create(){return new ne}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Ye(){const e=he(ne.create).current;return ze(e.disposeEffect),e}function ce(e){try{return e.matches(":focus-visible")}catch{}return!1}function _e(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.includes(a))continue;n[a]=e[a]}return n}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},J(e,t)}function Ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,J(e,t)}const pe=X.createContext(null);function Xe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){var n=function(r){return t&&u.isValidElement(r)?t(r):r},a=Object.create(null);return e&&u.Children.map(e,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Ke(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var a=Object.create(null),o=[];for(var r in e)r in t?o.length&&(a[r]=o,o=[]):o.push(r);var s,p={};for(var l in t){if(a[l])for(s=0;s<a[l].length;s++){var f=a[l][s];p[a[l][s]]=n(f)}p[l]=n(l)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function j(e,t,n){return n[t]!=null?n[t]:e.props[t]}function We(e,t){return oe(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:j(n,"appear",e),enter:j(n,"enter",e),exit:j(n,"exit",e)})})}function He(e,t,n){var a=oe(e.children),o=Ke(t,a);return Object.keys(o).forEach(function(r){var s=o[r];if(u.isValidElement(s)){var p=r in t,l=r in a,f=t[r],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:j(s,"exit",e),enter:j(s,"enter",e)}):!l&&p&&!d?o[r]=u.cloneElement(s,{in:!1}):l&&p&&u.isValidElement(f)&&(o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:j(s,"exit",e),enter:j(s,"enter",e)}))}}),o}var Ge=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},qe={component:"div",childFactory:function(t){return t}},re=function(e){Ae(t,e);function t(a,o){var r;r=e.call(this,a,o)||this;var s=r.handleExited.bind(Xe(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,p=r.handleExited,l=r.firstRender;return{children:l?We(o,p):He(o,s,p),firstRender:!1}},n.handleExited=function(o,r){var s=oe(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var l=je({},p.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,p=_e(o,["component","childFactory"]),l=this.state.contextValue,f=Ge(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,r===null?X.createElement(pe.Provider,{value:l},f):X.createElement(pe.Provider,{value:l},X.createElement(r,p,f))},t}(X.Component);re.propTypes={};re.defaultProps=qe;const Ze=re;class q{constructor(){A(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const t=he(q.create).current,[n,a]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=a,u.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Qe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Je(){return q.use()}function Qe(){let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n}function et(e){const{className:t,classes:n,pulsate:a=!1,rippleX:o,rippleY:r,rippleSize:s,in:p,onExited:l,timeout:f}=e,[d,M]=u.useState(!1),b=y(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),w={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},h=y(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&M(!0),u.useEffect(()=>{if(!p&&l!=null){const I=setTimeout(l,f);return()=>{clearTimeout(I)}}},[l,p,f]),N.jsx("span",{className:b,style:w,children:N.jsx("span",{className:h})})}const tt=de("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=tt,Q=550,nt=80,ot=ee`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,rt=ee`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,st=ee`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,it=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),at=te(et,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ot};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${rt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${st};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ut=u.forwardRef(function(t,n){const a=fe({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...p}=a,[l,f]=u.useState([]),d=u.useRef(0),M=u.useRef(null);u.useEffect(()=>{M.current&&(M.current(),M.current=null)},[l]);const b=u.useRef(!1),w=Ye(),h=u.useRef(null),I=u.useRef(null),x=u.useCallback(c=>{const{pulsate:E,rippleX:g,rippleY:O,rippleSize:D,cb:F}=c;f(R=>[...R,N.jsx(at,{classes:{ripple:y(r.ripple,m.ripple),rippleVisible:y(r.rippleVisible,m.rippleVisible),ripplePulsate:y(r.ripplePulsate,m.ripplePulsate),child:y(r.child,m.child),childLeaving:y(r.childLeaving,m.childLeaving),childPulsate:y(r.childPulsate,m.childPulsate)},timeout:Q,pulsate:E,rippleX:g,rippleY:O,rippleSize:D},d.current)]),d.current+=1,M.current=F},[r]),k=u.useCallback((c={},E={},g=()=>{})=>{const{pulsate:O=!1,center:D=o||E.pulsate,fakeElement:F=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&b.current){b.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(b.current=!0);const R=F?null:I.current,B=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,V;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),C=Math.round(B.height/2);else{const{clientX:U,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(U-B.left),C=Math.round(L-B.top)}if(D)V=Math.sqrt((2*B.width**2+B.height**2)/3),V%2===0&&(V+=1);else{const U=Math.max(Math.abs((R?R.clientWidth:0)-S),S)*2+2,L=Math.max(Math.abs((R?R.clientHeight:0)-C),C)*2+2;V=Math.sqrt(U**2+L**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:O,rippleX:S,rippleY:C,rippleSize:V,cb:g})},w.start(nt,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:O,rippleX:S,rippleY:C,rippleSize:V,cb:g})},[o,x,w]),K=u.useCallback(()=>{k({},{pulsate:!0})},[k]),v=u.useCallback((c,E)=>{if(w.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,w.start(0,()=>{v(c,E)});return}h.current=null,f(g=>g.length>0?g.slice(1):g),M.current=E},[w]);return u.useImperativeHandle(n,()=>({pulsate:K,start:k,stop:v}),[K,k,v]),N.jsx(it,{className:y(m.root,r.root,s),ref:I,...p,children:N.jsx(Ze,{component:null,exit:!0,children:l})})}),lt=ut;function ct(e){return Ne("MuiButtonBase",e)}const pt=de("MuiButtonBase",["root","disabled","focusVisible"]),ft=pt,dt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:o}=e,s=ke({root:["root",t&&"disabled",n&&"focusVisible"]},ct,o);return n&&a&&(s.root+=` ${a}`),s},ht=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=u.forwardRef(function(t,n){const a=fe({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:b=!1,focusVisibleClassName:w,LinkComponent:h="a",onBlur:I,onClick:x,onContextMenu:k,onDragLeave:K,onFocus:v,onFocusVisible:c,onKeyDown:E,onKeyUp:g,onMouseDown:O,onMouseLeave:D,onMouseUp:F,onTouchEnd:R,onTouchMove:B,onTouchStart:S,tabIndex:C=0,TouchRippleProps:V,touchRippleRef:U,type:L,...z}=a,Y=u.useRef(null),T=Je(),me=ue(T.ref,U),[$,W]=u.useState(!1);f&&$&&W(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),Y.current.focus()}}),[]);const be=T.shouldMount&&!d&&!f;u.useEffect(()=>{$&&b&&!d&&T.pulsate()},[d,b,$,T]);function P(i,ie,De=M){return G(ae=>(ie&&ie(ae),De||T[i](ae),!0))}const ge=P("start",O),Me=P("stop",k),Ee=P("stop",K),Re=P("stop",F),ye=P("stop",i=>{$&&i.preventDefault(),D&&D(i)}),xe=P("start",S),Ce=P("stop",R),Te=P("stop",B),Pe=P("stop",i=>{ce(i.target)||W(!1),I&&I(i)},!1),we=G(i=>{Y.current||(Y.current=i.currentTarget),ce(i.target)&&(W(!0),c&&c(i)),v&&v(i)}),Z=()=>{const i=Y.current;return l&&l!=="button"&&!(i.tagName==="A"&&i.href)},Be=G(i=>{b&&!i.repeat&&$&&i.key===" "&&T.stop(i,()=>{T.start(i)}),i.target===i.currentTarget&&Z()&&i.key===" "&&i.preventDefault(),E&&E(i),i.target===i.currentTarget&&Z()&&i.key==="Enter"&&!f&&(i.preventDefault(),x&&x(i))}),Se=G(i=>{b&&i.key===" "&&$&&!i.defaultPrevented&&T.stop(i,()=>{T.pulsate(i)}),g&&g(i),x&&i.target===i.currentTarget&&Z()&&i.key===" "&&!i.defaultPrevented&&x(i)});let H=l;H==="button"&&(z.href||z.to)&&(H=h);const _={};H==="button"?(_.type=L===void 0?"button":L,_.disabled=f):(!z.href&&!z.to&&(_.role="button"),f&&(_["aria-disabled"]=f));const Ve=ue(n,Y),se={...a,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:b,tabIndex:C,focusVisible:$},Ie=dt(se);return N.jsxs(ht,{as:H,className:y(Ie.root,p),ownerState:se,onBlur:Pe,onClick:x,onContextMenu:Me,onFocus:we,onKeyDown:Be,onKeyUp:Se,onMouseDown:ge,onMouseLeave:ye,onMouseUp:Re,onDragLeave:Ee,onTouchEnd:Ce,onTouchMove:Te,onTouchStart:xe,ref:Ve,tabIndex:f?-1:C,type:L,..._,...z,children:[s,be?N.jsx(lt,{ref:me,center:r,...V}):null]})}),Rt=mt;export{Rt as B,pe as T,_e as _,ue as a,Ae as b,G as c,Ye as d,ce as i,Fe as s,Oe as u};
