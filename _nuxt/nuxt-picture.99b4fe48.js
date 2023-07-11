import{A as a,h,B as d,g as F,u as _,C as q,D as B,E as v,G as N,H as j}from"./entry.b0e6b316.js";const b={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},E=e=>{const s=a(()=>({provider:e.provider,preset:e.preset})),n=a(()=>({width:d(e.width),height:d(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),r=h(),u=a(()=>({...e.modifiers,width:d(e.width),height:d(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:s,attrs:n,modifiers:u}},I={...b,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},P=F({name:"NuxtPicture",props:I,emits:["load"],setup:(e,s)=>{var f,m;const n=h(),r=E(e),u=a(()=>j(e.src)),z=a(()=>["png","webp","gif","svg"].includes(u.value)),l=a(()=>e.legacyFormat?e.legacyFormat:z.value?"png":"jpeg"),i=a(()=>{var y,p;const t=((y=e.format)==null?void 0:y.split(","))||(u.value==="svg"?["svg"]:(p=n.options.format)!=null&&p.length?[...n.options.format]:["webp"]);return t[0]==="svg"?[{src:e.src}]:(t.includes(l.value)&&t.splice(t.indexOf(l.value),1),t.push(l.value),t.map(S=>{const{srcset:A,sizes:x,src:k}=n.getSizes(e.src,{...r.options.value,sizes:e.sizes||n.options.screens,modifiers:{...r.modifiers.value,format:S}});return{src:k,type:`image/${S}`,sizes:x,srcset:A}}))}),c=a(()=>i.value.length-1);if(e.preload){const t={rel:"preload",as:"image",imagesrcset:i.value[0].srcset};(m=(f=i.value)==null?void 0:f[0])!=null&&m.sizes&&(t.imagesizes=i.value[0].sizes),_({link:[t]})}const g={...e.imgAttrs,"data-nuxt-pic":""};for(const t in s.attrs)t in b&&!(t in g)&&(g[t]=s.attrs[t]);const o=q(),w=N().isHydrating;return B(()=>{o.value&&(o.value.complete&&w&&!o.value.getAttribute("data-error")&&s.emit("load",new Event("load")),o.value.onload=t=>{s.emit("load",t)})}),()=>v("picture",null,[...i.value.slice(0,-1).map(t=>v("source",{type:t.type,sizes:t.sizes,srcset:t.srcset})),v("img",{ref:o,...r.attrs.value,...g,src:i.value[c.value].src,sizes:i.value[c.value].sizes,srcset:i.value[c.value].srcset})])}});export{P as _};
