import{b as _,w as d,f as p,h as m,o as n,i as c,j as l,u as s,l as u,v as h,m as f,z as b,A as g,q as x}from"./entry.1191fe79.js";import{A as v}from"./ArticleList.838b6eef.js";import{p as y}from"./parseRichText.fe67ec88.js";import"./nuxt-picture.a049214b.js";import"./composables.8215c1a6.js";const D=e=>(b("data-v-f079e737"),e=e(),g(),e),B={class:"blog-hub"},w={class:"container"},A=D(()=>l("h1",{class:"blog-hub__title"},"Blog",-1)),k=["innerHTML"],C=_({__name:"index",async setup(e){let t,o;const r=([t,o]=d(()=>f(i=>i.$contentful.getEntries({content_type:"blogDetails",limit:1,select:["fields.hubDescription"]}),"$NjJfml0E8M")),t=await t,o(),t),a=p(r.data.value.items[0]);return m({title:"Blog",meta:[{name:"twitter:title",content:"Blog | Jack Domleo"}]}),(i,E)=>(n(),c("div",B,[l("header",w,[A,s(a).fields.hubDescription?(n(),c("div",{key:0,class:"blog-hub__description",innerHTML:s(y)(s(a).fields.hubDescription)},null,8,k)):u("",!0)]),h(v,{class:"blog-hub__list","preload-article-images":3})]))}});const V=x(C,[["__scopeId","data-v-f079e737"]]);export{V as default};