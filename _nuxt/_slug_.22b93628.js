import{u as m}from"./composables.3435d6db.js";import{b as u,e as f,w as g,f as y,h,o as c,i as r,j as a,t as l,u as t,k as D,l as M,m as b,p,q as x}from"./entry.857f0d98.js";import{p as Y}from"./parseRichText.e7c2a2b8.js";const w={class:"basic-page container container--thinner"},$={class:"basic-page__title"},v={key:0},k=["datetime"],A=["innerHTML"],C=u({__name:"[slug]",async setup(T){let s,i;const _=m(),o=f(),{data:d}=([s,i]=g(()=>b(`basicpage-${o.params.slug}`,n=>n.$contentful.getEntries({content_type:"basicPage",limit:1,"fields.slug":o.params.slug}))),s=await s,i(),s),e=y(d.value.items[0]);return h({title:`${e.fields.title}`,meta:[{property:"twitter:title",content:`${e.fields.title} | Jack Domleo`},...e.fields.metaDescription?[{name:"description",content:e.fields.metaDescription},{property:"og:description",content:e.fields.metaDescription},{property:"twitter:description",content:e.fields.metaDescription}]:[]]}),(n,V)=>(c(),r("article",w,[a("header",null,[a("h1",$,l(t(e).fields.title),1)]),t(e).fields.slug==="privacy-policy"?(c(),r("p",v,[D(" Last updated: "),a("time",{datetime:t(p)(new Date(t(e).sys.updatedAt)).format("YYYY-MM-DD")},l(t(p)(new Date(t(e).sys.updatedAt)).format("MMMM D, YYYY")),9,k)])):M("",!0),a("div",{class:"rich-text basic-page__content",innerHTML:t(Y)(t(e).fields.body,{$img:t(_)})},null,8,A)]))}});const N=x(C,[["__scopeId","data-v-22a2103c"]]);export{N as default};
