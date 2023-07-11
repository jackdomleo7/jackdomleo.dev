import{E as c,K as k,g as p,L as K,M as x,P as v,C as A,N as y,O as b,Q as g,R as O,S,T as j,U as T,V as N,W as w,G as B,X as C,_ as L,o as H,z as I}from"./entry.b0e6b316.js";const q=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),d=(e,a)=>{const t=e.route.matched.find(i=>{var o;return((o=i.components)==null?void 0:o.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&q(e.route,t));return typeof n=="function"?n(e.route):n},F=(e,a)=>({default:()=>e?c(k,e===!0?{}:e,a):a}),V=p({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const a=e.renderKey,t=e.route,n={};for(const i in e.route)Object.defineProperty(n,i,{get:()=>a===e.renderKey?e.route[i]:t[i]});return K(v,x(n)),()=>c(e.vnode,{ref:e.vnodeRef})}}),$=p({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:t}){const n=B(),i=A(),o=y(v,null);t({pageRef:i});const u=y(b,null);let s;return()=>c(w,{name:e.name,route:e.route,...a},{default:r=>{const _=G(o,r.route,r.Component),f=o&&o.matched.length===r.route.matched.length;if(!r.Component)return s&&!f?s:void 0;if(s&&u&&!u.isCurrent(r.route))return s;if(_&&o&&(!u||u!=null&&u.isCurrent(o)))return f?s:null;const m=d(r,e.pageKey),h=n.deferHydration(),l=!!(e.transition??r.route.meta.pageTransition??g),R=l&&E([e.transition,r.route.meta.pageTransition,g,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return s=O(N,l&&R,F(e.keepalive??r.route.meta.keepalive??T,c(S,{suspensible:!0,onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{j(()=>n.callHook("page:finish",r.Component).finally(h))}},{default:()=>c(V,{key:m,vnode:r.Component,route:r.route,renderKey:m,trackRootNodes:l,vnodeRef:i})}))).default(),s}})}});function z(e){return Array.isArray(e)?e:e?[e]:[]}function E(e){const a=e.map(t=>({...t,onAfterLeave:z(t.onAfterLeave)}));return C(...a)}function G(e,a,t){if(!e)return!1;const n=a.matched.findIndex(i=>{var o;return((o=i.components)==null?void 0:o.default)===(t==null?void 0:t.type)});return!n||n===-1?!1:a.matched.slice(0,n).some((i,o)=>{var u,s,r;return((u=i.components)==null?void 0:u.default)!==((r=(s=e.matched[o])==null?void 0:s.components)==null?void 0:r.default)})||t&&d({route:a,Component:t})!==d({route:e,Component:t})}const M={};function Q(e,a){const t=$;return H(),I(t)}const W=L(M,[["render",Q]]);export{W as default};
