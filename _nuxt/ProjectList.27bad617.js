import{_ as b}from"./nuxt-picture.4e8a7c56.js";import{g as j,H as L,j as N,k as P,o as s,c as a,F as m,v as f,l as y,n as w,b as g,w as C,a as n,t as _,d as V,m as T,e as $,_ as A}from"./entry.7481701c.js";import{p as B}from"./parseRichText.174f91ee.js";const H={class:"projects-list container"},I={class:"project__details"},M={class:"project__tags"},S={class:"project__title"},z={key:0},D=["innerHTML"],E=j({__name:"ProjectList",props:{limit:{type:Number,default:void 0,validator(t){return t>=0&&t<=1e3}},preloadProjectImages:{type:Number,default:0,validator(t){return t>=0}},type:{type:String,default:void 0}},async setup(t){let o,d;const h=L(),i=t,{data:c}=([o,d]=N(()=>w(`project-list-${h.params.slug}`,r=>r.$contentful.getEntries({content_type:"project",limit:1e3,order:["-sys.createdAt"]}))),o=await o,d(),o);c.value.items=P(c.value.items);let l=c.value.items;return i.type?l=l.filter(r=>r.fields.type===i.type):i.limit&&(l=l.slice(0,i.limit)),(r,F)=>{const v=b,x=$;return s(),a("ul",H,[(s(!0),a(m,null,f(y(l),(e,k)=>(s(),a("li",{key:e.sys.id},[g(x,{to:e.fields.url,class:"project",target:"_blank"},{default:C(()=>{var u;return[g(v,{class:"project__img",provider:"contentful",src:e.fields.image.fields.file.url,alt:e.fields.image.fields.description,width:"424",height:"223",sizes:"4kdesktop:424px",loading:"lazy",preload:k<=i.preloadProjectImages},null,8,["src","alt","preload"]),n("div",I,[n("ul",M,[(s(!0),a(m,null,f(e.fields.tech,p=>(s(),a("li",{key:p,class:"tag"},_(p),1))),128))]),n("h2",S,[V(_(e.fields.name)+" ",1),(u=e.fields.tags)!=null&&u.includes("Website")&&!e.fields.url.includes("github.com")?(s(),a("small",z,"("+_(e.fields.url==="/"?"jackdomleo.dev":e.fields.url.replace("https://",""))+")",1)):T("",!0)]),n("div",{class:"project__description",innerHTML:y(B)(e.fields.description)},null,8,D)])]}),_:2},1032,["to"])]))),128))])}}});const G=A(E,[["__scopeId","data-v-0194d880"]]);export{G as P};
