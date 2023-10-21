import{K as l,P as k,g as v,Q as A,R as K,S as _,A as x,T as g,U as b,V as p,W as S,X as j,Y as O,Z as T,$ as w,a0 as B,L as N,a1 as L,_ as C,G as H,o as I}from"./entry.09b395a4.js";const $=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),f=(e,a)=>{const t=e.route.matched.find(i=>{var o;return((o=i.components)==null?void 0:o.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&$(e.route,t));return typeof n=="function"?n(e.route):n},q=(e,a)=>({default:()=>e?l(k,e===!0?{}:e,a):a}),F=v({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const a=e.renderKey,t=e.route,n={};for(const i in e.route)Object.defineProperty(n,i,{get:()=>a===e.renderKey?e.route[i]:t[i]});return A(_,K(n)),()=>l(e.vnode,{ref:e.vnodeRef})}}),V=v({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:t}){const n=N(),i=x(),o=g(_,null);t({pageRef:i});const u=g(b,null);let s;const c=n.deferHydration();return()=>l(B,{name:e.name,route:e.route,...a},{default:r=>{const h=U(o,r.route,r.Component),m=o&&o.matched.length===r.route.matched.length;if(!r.Component){if(s&&!m)return s;c();return}if(s&&u&&!u.isCurrent(r.route))return s;if(h&&o&&(!u||u!=null&&u.isCurrent(o)))return m?s:null;const y=f(r,e.pageKey),d=!!(e.transition??r.route.meta.pageTransition??p),R=d&&Q([e.transition,r.route.meta.pageTransition,p,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return s=S(w,d&&R,q(e.keepalive??r.route.meta.keepalive??T,l(j,{suspensible:!0,onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{O(()=>n.callHook("page:finish",r.Component).finally(c))}},{default:()=>l(F,{key:y,vnode:r.Component,route:r.route,renderKey:y,trackRootNodes:d,vnodeRef:i})}))).default(),s}})}});function G(e){return Array.isArray(e)?e:e?[e]:[]}function Q(e){const a=e.map(t=>({...t,onAfterLeave:G(t.onAfterLeave)}));return L(...a)}function U(e,a,t){if(!e)return!1;const n=a.matched.findIndex(i=>{var o;return((o=i.components)==null?void 0:o.default)===(t==null?void 0:t.type)});return!n||n===-1?!1:a.matched.slice(0,n).some((i,o)=>{var u,s,c;return((u=i.components)==null?void 0:u.default)!==((c=(s=e.matched[o])==null?void 0:s.components)==null?void 0:c.default)})||t&&f({route:a,Component:t})!==f({route:e,Component:t})}const W={};function X(e,a){const t=V;return I(),H(t)}const Z=C(W,[["render",X]]);export{Z as default};
