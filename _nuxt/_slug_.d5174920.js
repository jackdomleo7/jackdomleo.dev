import{g as m,h as u,i as f,j as g,k as y,u as h,o as c,c as r,a,t as l,l as t,d as D,m as M,n as x,q as _,_ as Y}from"./entry.9fa73a4b.js";import{p as b}from"./parseRichText.e016e937.js";const $={class:"basic-page container container--thinner"},v={class:"basic-page__title"},w={key:0},k=["datetime"],A=["innerHTML"],C=m({__name:"[slug]",async setup(T){let s,i;const d=u(),n=f(),{data:p}=([s,i]=g(()=>x(`basicpage-${n.params.slug}`,o=>o.$contentful.getEntries({content_type:"basicPage",limit:1,"fields.slug":n.params.slug}))),s=await s,i(),s),e=y(p.value.items[0]);return h({title:`${e.fields.title}`,meta:[{name:"twitter:title",content:`${e.fields.title} | Jack Domleo`},...e.fields.metaDescription?[{name:"description",content:e.fields.metaDescription},{property:"og:description",content:e.fields.metaDescription},{name:"twitter:description",content:e.fields.metaDescription}]:[]]}),(o,V)=>(c(),r("article",$,[a("header",null,[a("h1",v,l(t(e).fields.title),1)]),t(e).fields.slug==="privacy-policy"?(c(),r("p",w,[D(" Last updated: "),a("time",{datetime:t(_)(new Date(t(e).sys.updatedAt)).format("YYYY-MM-DD")},l(t(_)(new Date(t(e).sys.updatedAt)).format("MMMM D, YYYY")),9,k)])):M("",!0),a("div",{class:"rich-text basic-page__content",innerHTML:t(b)(t(e).fields.body,{$img:t(d)})},null,8,A)]))}});const L=Y(C,[["__scopeId","data-v-c966ec04"]]);export{L as default};