import{g as m,h as u,i as f,j as g,k as h,u as y,o as c,c as r,a,t as l,l as e,d as D,m as M,n as Y,q as d,_ as b}from"./CHtdsOUC.js";import{p as x}from"./B75TBq7-.js";const $={class:"basic-page container container--thinner"},k={class:"basic-page__title"},v={key:0},w=["datetime"],A=["innerHTML"],C=m({__name:"[slug]",async setup(T){let s,i;const _=u(),n=f(),{data:p}=([s,i]=g(()=>Y(`basicpage-${n.params.slug}`,o=>o.$contentful.getEntries({content_type:"basicPage",limit:1,"fields.slug":n.params.slug}))),s=await s,i(),s),t=h(p.value.items[0]);return y({title:`${t.fields.title}`,meta:[...t.fields.metaDescription?[{name:"description",content:t.fields.metaDescription}]:[]]}),(o,V)=>(c(),r("article",$,[a("header",null,[a("h1",k,l(e(t).fields.title),1)]),e(t).fields.slug==="privacy-policy"?(c(),r("p",v,[D(" Last updated: "),a("time",{datetime:e(d)(new Date(e(t).sys.updatedAt)).format("YYYY-MM-DD")},l(e(d)(new Date(e(t).sys.updatedAt)).format("MMMM D, YYYY")),9,w)])):M("",!0),a("div",{class:"rich-text basic-page__content",innerHTML:e(x)(e(t).fields.body,{$img:e(_)})},null,8,A)]))}}),L=b(C,[["__scopeId","data-v-f7f0c7ef"]]);export{L as default};