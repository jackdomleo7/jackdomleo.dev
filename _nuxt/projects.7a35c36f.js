import{b as m,w as j,f as h,h as u,o as p,i as d,j as e,u as o,l as f,y as c,A as y,B as v,m as P,q as C}from"./entry.15f59c07.js";import{P as i}from"./ProjectList.1b6de17d.js";import{p as x}from"./parseRichText.0f032c75.js";import"./nuxt-picture.e0511bf2.js";import"./composables.4438cbb2.js";const a=t=>(y("data-v-ec79edf5"),t=t(),v(),t),b={class:"projects"},w={class:"container"},M=a(()=>e("h1",{class:"projects__title"},"Projects",-1)),S=["innerHTML"],V={class:"container"},k={id:"mini",class:"container"},B=a(()=>e("h2",{class:"projects__subtitle"},"Mini Projects",-1)),I={id:"mini",class:"container"},g=a(()=>e("h2",{class:"projects__subtitle"},"Client Projects",-1)),A=m({__name:"projects",async setup(t){let s,n;const l=([s,n]=j(()=>P(_=>_.$contentful.getEntries({content_type:"projects",limit:1}),"$YWCdSV8Jub")),s=await s,n(),s),r=h(l.data.value.items[0]);return u({title:"Projects",meta:[{name:"twitter:title",content:"Projects | Jack Domleo"}]}),(_,E)=>(p(),d("div",b,[e("header",w,[M,o(r).fields.description?(p(),d("div",{key:0,class:"projects__description",innerHTML:o(x)(o(r).fields.description)},null,8,S)):f("",!0)]),e("div",V,[c(i,{class:"projects__list",type:"Project","preload-project-images":3})]),e("section",k,[B,c(i,{class:"projects__list",type:"Mini"})]),e("section",I,[g,c(i,{class:"projects__list",type:"Client"})])]))}});const J=C(A,[["__scopeId","data-v-ec79edf5"]]);export{J as default};
