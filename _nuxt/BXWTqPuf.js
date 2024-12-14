import{f as x,R as H,S as A,T as K,U as l,K as O,y as j,V as _,W as S,x as T,X as N,Y as B,Z as v,$ as R,a0 as I,a1 as L,a2 as C,a3 as F,a4 as w,F as E,a5 as V,a6 as q,a7 as U,_ as W,o as X,E as Y}from"./BQZeWf9W.js";const Z=x({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,n=e.route,i={};for(const a in e.route)Object.defineProperty(i,a,{get:()=>o===e.renderKey?e.route[a]:n[a],enumerable:!0});return H(K,A(i)),()=>l(e.vnode,{ref:e.vnodeRef})}}),$=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:n,expose:i}){const a=O(),r=j(),s=_(K,null);let u;i({pageRef:r});const d=_(S,null);let c;const g=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",g);T().beforeEach(t)}return e.pageKey&&N(()=>e.pageKey,(t,y)=>{t!==y&&a.callHook("page:loading:start")}),()=>l(B,{name:e.name,route:e.route,...o},{default:t=>{const y=D(s,t.route,t.Component),h=s&&s.matched.length===t.route.matched.length;if(!t.Component){if(c&&!h)return c;g();return}if(c&&d&&!d.isCurrent(t.route))return c;if(y&&s&&(!d||d!=null&&d.isCurrent(s)))return h?c:null;const f=v(t,e.pageKey);!a.isHydrating&&!G(s,t.route,t.Component)&&u===f&&a.callHook("page:loading:end"),u=f;const m=!!(e.transition??t.route.meta.pageTransition??R),b=m&&z([e.transition,t.route.meta.pageTransition,R,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),p=e.keepalive??t.route.meta.keepalive??I;return c=L(V,m&&b,C(p,l(F,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{w(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(g))}},{default:()=>{const k=l(Z,{key:f||void 0,vnode:n.default?l(E,void 0,n.default(t)):t.Component,route:t.route,renderKey:f||void 0,trackRootNodes:m,vnodeRef:r});return p&&(k.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),k}}))).default(),c}})}});function z(e){const o=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?q(n.onAfterLeave):void 0}));return U(...o)}function D(e,o,n){if(!e)return!1;const i=o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:o.matched.slice(0,i).some((a,r)=>{var s,u,d;return((s=a.components)==null?void 0:s.default)!==((d=(u=e.matched[r])==null?void 0:u.components)==null?void 0:d.default)})||n&&v({route:o,Component:n})!==v({route:e,Component:n})}function G(e,o,n){return e?o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<o.matched.length-1:!1}const J={};function M(e,o){const n=$;return X(),Y(n)}const P=W(J,[["render",M]]);export{P as default};
