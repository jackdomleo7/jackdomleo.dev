import{H as s,g as b,I as g,f as O,J as j,y as I,K as P,L,c as f,l as M,F as $,s as C,M as H,m as h,o as m,N as J}from"./Dnyl59BH.js";function K(e){var a;(a=performance==null?void 0:performance.mark)==null||a.call(performance,"mark_feature_usage",{detail:{feature:e}})}const _={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},T=e=>{const a=s(()=>({provider:e.provider,preset:e.preset})),r=s(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),l=b(),n=s(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||l.options.quality,background:e.background,fit:e.fit}));return{options:a,attrs:r,modifiers:n}},U={..._,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},V=["type","sizes","srcset"],D=["src","sizes","srcset"],R=O({__name:"NuxtPicture",props:U,emits:["load","error"],setup(e,{emit:a}){const r=e,l=j(),n=a,z=!1,u=b(),{attrs:k,options:x,modifiers:A}=T(r),q=s(()=>J(r.src)),w=s(()=>["png","webp","gif","svg"].includes(q.value)),c=s(()=>r.legacyFormat?r.legacyFormat:w.value?"png":"jpeg"),y=s(()=>{var v,i;const t=((v=r.format)==null?void 0:v.split(","))||(q.value==="svg"?["svg"]:(i=u.options.format)!=null&&i.length?[...u.options.format]:["webp"]);return t[0]==="svg"?[{src:r.src}]:(t.includes(c.value)&&t.splice(t.indexOf(c.value),1),t.push(c.value),t.map(S=>{const{srcset:N,sizes:B,src:E}=u.getSizes(r.src,{...x.value,sizes:r.sizes||u.options.screens,densities:r.densities,modifiers:{...A.value,format:S}});return{src:E,type:`image/${S}`,sizes:B,srcset:N}}))}),d=s(()=>y.value[y.value.length-1]),p={...r.imgAttrs,"data-nuxt-pic":""};for(const t in l)t in _&&!(t in p)&&(p[t]=l[t]);const o=I(),F=P().isHydrating;return L(()=>{o.value&&(o.value.complete&&F&&(o.value.getAttribute("data-error")?n("error",new Event("error")):n("load",new Event("load"))),o.value.onload=t=>{n("load",t)},o.value.onerror=t=>{n("error",t)},K("nuxt-picture"))}),(t,v)=>(m(),f("picture",null,[(m(!0),f($,null,C(y.value.slice(0,-1),i=>(m(),f("source",{key:i.src,type:i.type,sizes:i.sizes,srcset:i.srcset},null,8,V))),128)),d.value?(m(),f("img",H({key:0,ref_key:"imgEl",ref:o},{...h(k),...h(z)?{onerror:"this.setAttribute('data-error', 1)"}:{},...p},{src:d.value.src,sizes:d.value.sizes,srcset:d.value.srcset}),null,16,D)):M("",!0)]))}});export{R as _};
