import{M as r,R as l,b as c,K as f,S as u,T as m,U as d,V as g,W as y,X as _,Y as v,Z as k,G as K,$ as A,H as x,r as T,c as h,o as C}from"./entry.cbc091f9.js";const w=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),R=(e,a)=>{const t=e.route.matched.find(o=>{var i;return((i=o.components)==null?void 0:i.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&w(e.route,t));return typeof n=="function"?n(e.route):n},b=(e,a)=>({default:()=>e?r(l,e===!0?{}:e,a):a}),B=c({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const t=f();return()=>r(v,{name:e.name,route:e.route,...a},{default:n=>{if(!n.Component)return;const o=R(n,e.pageKey),i=t.deferHydration(),s=!!(e.transition??n.route.meta.pageTransition??u),p=s&&S([e.transition,n.route.meta.pageTransition,u,{onAfterLeave:()=>{t.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return m(_,s&&p,b(e.keepalive??n.route.meta.keepalive??y,r(d,{suspensible:!0,onPending:()=>t.callHook("page:start",n.Component),onResolve:()=>{g(()=>t.callHook("page:finish",n.Component).finally(i))}},{default:()=>r(j,{key:o,routeProps:n,pageKey:o,hasTransition:s})}))).default()}})}});function H(e){return Array.isArray(e)?e:e?[e]:[]}function S(e){const a=e.map(t=>({...t,onAfterLeave:H(t.onAfterLeave)}));return k(...a)}const j=c({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,t=e.routeProps.route,n={};for(const o in e.routeProps.route)n[o]=K(()=>a===e.pageKey?e.routeProps.route[o]:t[o]);return A("_route",x(n)),()=>r(e.routeProps.Component)}}),L={};function N(e,a){const t=B;return C(),h(t)}const P=T(L,[["render",N]]);export{P as default};
