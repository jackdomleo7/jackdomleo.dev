import{_ as x}from"./D3sP6rI1.js";import{g as v,j as y,k as j,u as w,o as _,c,a as s,b as o,l as e,t as r,w as u,F as L,v as T,n as I,e as H,d as f,p as M,f as B,y as C,_ as S}from"./CIHLGy2V.js";import{p as g}from"./C6rf8eUg.js";import{A}from"./CzCQeNDT.js";import{P as D}from"./BpBH8OmA.js";const b=i=>(M("data-v-5c05473a"),i=i(),B(),i),V={class:"hero"},$={class:"container container--thinner"},z={class:"hero__row"},E=["innerHTML"],F=["innerHTML"],N={id:"about",class:"container about"},P={class:"about__inner"},q={class:"about__img"},Q={class:"about__header"},R=["innerHTML"],W={id:"blog",class:"container blog"},G=b(()=>s("h2",{class:"blog__heading"},"From the blog",-1)),J={id:"skills",class:"skills"},K={class:"skills__inner"},O={class:"skills__heading container"},U={class:"skills__grid"},X={class:"skills__list"},Y={class:"skills__text"},Z={id:"projects",class:"container projects"},ss=b(()=>s("h2",{class:"projects__heading"},"Projects",-1)),es=v({__name:"index",async setup(i){let n,d;const k=([n,d]=y(()=>I(h=>h.$contentful.getEntries({content_type:"home",limit:1}),"$pqtWcjQkdb")),n=await n,d(),n),t=j(k.data.value.items[0]);return w({meta:[{name:"description",content:t.fields.metaDescription}]}),(h,ts)=>{const p=x,a=C,m=H;return _(),c("div",null,[s("header",V,[s("div",$,[s("div",z,[o(p,{class:"hero__img",src:e(t).fields.heroImage.fields.file.url,alt:e(t).fields.heroImage.fields.description,height:"300",width:"300",sizes:"standardtablet:200px 4kdesktop:300px",provider:"contentful",preload:""},null,8,["src","alt"]),s("h1",{class:"hero__title",innerHTML:e(t).fields.title},null,8,E)]),s("div",{class:"hero__body",innerHTML:e(g)(e(t).fields.heroBody)},null,8,F)])]),s("section",N,[s("div",P,[s("div",q,[o(p,{src:e(t).fields.aboutImage.fields.file.url,alt:e(t).fields.aboutImage.fields.description,height:"440",width:"440",sizes:"largemobile:144px standardtablet:192px smalldesktop:256px 4kdesktop:440px",loading:"lazy",provider:"contentful"},null,8,["src","alt"])]),s("h2",Q,r(e(t).fields.aboutTitle),1),s("div",{class:"about__text",innerHTML:e(g)(e(t).fields.aboutBody)},null,8,R)])]),s("section",W,[G,o(A,{class:"blog__list",limit:6}),o(m,{to:"/blog",class:"blog__more link"},{default:u(()=>[f(" Discover more articles "),o(a,{class:"blog__more-icon",name:"arrow_right"})]),_:1})]),s("section",J,[s("div",K,[s("h2",O,r(e(t).fields.skillsTitle),1),s("div",U,[s("ul",X,[(_(!0),c(L,null,T(e(t).fields.skillsList,l=>(_(),c("li",{key:l.id},[o(a,{class:"skills__icon",name:l.key},null,8,["name"]),s("span",Y,r(l.value),1)]))),128))])])])]),s("section",Z,[ss,o(D,{class:"projects__list",limit:6}),o(m,{to:"/projects",class:"projects__more link"},{default:u(()=>[f(" Check out more of my work "),o(a,{class:"projects__more-icon",name:"arrow_right"})]),_:1})])])}}}),_s=S(es,[["__scopeId","data-v-5c05473a"]]);export{_s as default};
