import{g as R,R as b,S as H,T as x,M as l,A,U as k,V as O,z as j,W as N,X as v,Y as _,Z as S,$ as T,a0 as B,a1 as I,a2 as L,a3 as C,a4 as w,N as V,a5 as q,a6 as E,_ as F,H as z,o as M}from"./CIHLGy2V.js";const U=R({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const r=e.renderKey,n=e.route,a={};for(const i in e.route)Object.defineProperty(a,i,{get:()=>r===e.renderKey?e.route[i]:n[i]});return b(x,H(a)),()=>l(e.vnode,{ref:e.vnodeRef})}}),W=R({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:r,expose:n}){const a=V(),i=A(),o=k(x,null);let d;n({pageRef:i});const c=k(O,null);let s;const f=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",f);j().beforeEach(t)}return e.pageKey&&N(()=>e.pageKey,(t,g)=>{t!==g&&a.callHook("page:loading:start")}),()=>l(w,{name:e.name,route:e.route,...r},{default:t=>{const g=Y(o,t.route,t.Component),m=o&&o.matched.length===t.route.matched.length;if(!t.Component){if(s&&!m)return s;f();return}if(s&&c&&!c.isCurrent(t.route))return s;if(g&&o&&(!c||c!=null&&c.isCurrent(o)))return m?s:null;const u=v(t,e.pageKey);!a.isHydrating&&!Z(o,t.route,t.Component)&&d===u&&a.callHook("page:loading:end"),d=u;const y=!!(e.transition??t.route.meta.pageTransition??_),K=y&&X([e.transition,t.route.meta.pageTransition,_,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),h=e.keepalive??t.route.meta.keepalive??S;return s=T(C,y&&K,B(h,l(I,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{L(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(f))}},{default:()=>{const p=l(U,{key:u||void 0,vnode:t.Component,route:t.route,renderKey:u||void 0,trackRootNodes:y,vnodeRef:i});return h&&(p.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),p}}))).default(),s}})}});function X(e){const r=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?q(n.onAfterLeave):void 0}));return E(...r)}function Y(e,r,n){if(!e)return!1;const a=r.matched.findIndex(i=>{var o;return((o=i.components)==null?void 0:o.default)===(n==null?void 0:n.type)});return!a||a===-1?!1:r.matched.slice(0,a).some((i,o)=>{var d,c,s;return((d=i.components)==null?void 0:d.default)!==((s=(c=e.matched[o])==null?void 0:c.components)==null?void 0:s.default)})||n&&v({route:r,Component:n})!==v({route:e,Component:n})}function Z(e,r,n){return e?r.matched.findIndex(i=>{var o;return((o=i.components)==null?void 0:o.default)===(n==null?void 0:n.type)})<r.matched.length-1:!1}const $={};function D(e,r){const n=W;return M(),z(n)}const J=F($,[["render",D]]);export{J as default};
