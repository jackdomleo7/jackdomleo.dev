import{g as _,j as d,k as p,u,o as n,c,a as l,l as s,m,b as f,n as h,p as b,f as g,_ as x}from"./entry.bd34a463.js";import{A as v}from"./ArticleList.effa03cb.js";import{p as y}from"./parseRichText.3d7a6e2b.js";import"./nuxt-picture.a24808d9.js";const D=e=>(b("data-v-37ae6df7"),e=e(),g(),e),B={class:"blog-hub"},k={class:"container"},w=D(()=>l("h1",{class:"blog-hub__title"},"Blog",-1)),A=["innerHTML"],C=_({__name:"index",async setup(e){let t,o;const r=([t,o]=d(()=>h(i=>i.$contentful.getEntries({content_type:"blogDetails",limit:1,select:["fields.hubDescription"]}),"$NjJfml0E8M")),t=await t,o(),t),a=p(r.data.value.items[0]);return u({title:"Blog",meta:[{name:"twitter:title",content:"Blog | Jack Domleo"}]}),(i,E)=>(n(),c("div",B,[l("header",k,[w,s(a).fields.hubDescription?(n(),c("div",{key:0,class:"blog-hub__description",innerHTML:s(y)(s(a).fields.hubDescription)},null,8,A)):m("",!0)]),f(v,{class:"blog-hub__list","preload-article-images":3,"show-filter":!0})]))}});const S=x(C,[["__scopeId","data-v-37ae6df7"]]);export{S as default};
