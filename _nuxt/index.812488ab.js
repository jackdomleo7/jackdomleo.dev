import{b as _,w as p,f as d,h as m,o as c,i as n,j as l,u as s,l as u,y as b,A as h,B as f,m as g,q as x}from"./entry.6beaa186.js";import{A as y}from"./ArticleList.3bb84631.js";import{p as v}from"./parseRichText.a71f9321.js";import"./nuxt-picture.14e1178f.js";import"./composables.f761bd49.js";const B=e=>(h("data-v-c51bcb7a"),e=e(),f(),e),D={class:"blog-hub"},w={class:"container"},A=B(()=>l("h1",{class:"blog-hub__title"},"Blog",-1)),k=["innerHTML"],C=_({__name:"index",async setup(e){let t,o;const r=([t,o]=p(()=>g(i=>i.$contentful.getEntries({content_type:"blogDetails",limit:1,select:["fields.hubDescription"]}),"$NjJfml0E8M")),t=await t,o(),t),a=d(r.data.value.items[0]);return m({title:"Blog",meta:[{property:"twitter:title",content:"Blog | Jack Domleo"}]}),(i,E)=>(c(),n("div",D,[l("header",w,[A,s(a).fields.hubDescription?(c(),n("div",{key:0,class:"blog-hub__description",innerHTML:s(v)(s(a).fields.hubDescription)},null,8,k)):u("",!0)]),b(y,{class:"blog-hub__list",limit:1e3,"preload-article-images":3})]))}});const V=x(C,[["__scopeId","data-v-c51bcb7a"]]);export{V as default};
