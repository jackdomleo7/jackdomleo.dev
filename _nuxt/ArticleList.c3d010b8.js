import{_ as x}from"./nuxt-picture.99b4fe48.js";import{g as v,j as w,k as Y,o as a,c as l,F as u,v as f,l as c,n as k,b as h,w as A,a as e,t as i,q as m,e as M,p as I,f as S,_ as C}from"./entry.b0e6b316.js";const $=t=>(I("data-v-d50b2602"),t=t(),S(),t),L={class:"posts container"},N={class:"post__article"},B={class:"post__details"},F={class:"post__tags"},V={class:"post__title"},j={class:"post__description"},z={class:"post__date"},E=$(()=>e("span",{class:"sr-only"},"Publish date:",-1)),q=["datetime"],G=v({__name:"ArticleList",props:{limit:{type:Number,default:void 0,validator(t){return t>=0&&t<=1e3}},preloadArticleImages:{type:Number,default:0,validator(t){return t>=0}}},async setup(t){let o,d;const n=t,{data:g}=([o,d]=w(()=>k(r=>r.$contentful.getEntries({content_type:"article",limit:1e3,order:"-fields.publishDate",select:["fields.title","fields.description","fields.image","fields.tags","fields.publishDate","fields.slug"]}),"$GCpc4d31S7")),o=await o,d(),o);let _=Y(g.value.items);return n.limit&&(_=_.slice(0,n.limit)),(r,P)=>{const b=x,y=M;return a(),l("ul",L,[(a(!0),l(u,null,f(c(_),(s,D)=>(a(),l("li",{key:s.sys.id},[h(y,{to:`/blog/${new Date(s.fields.publishDate).getFullYear()}/${s.fields.slug}`,class:"post"},{default:A(()=>[e("article",N,[h(b,{class:"post__img",provider:"contentful",src:s.fields.image.fields.file.url,alt:s.fields.image.fields.description,width:"424",height:"223",sizes:"4kdesktop:424px",loading:"lazy",preload:D<=n.preloadArticleImages},null,8,["src","alt","preload"]),e("div",B,[e("ul",F,[(a(!0),l(u,null,f(s.fields.tags,p=>(a(),l("li",{key:p,class:"tag"},i(p),1))),128))]),e("h2",V,i(s.fields.title),1),e("p",j,i(s.fields.description),1),e("footer",null,[e("p",z,[E,e("time",{datetime:c(m)(new Date(s.fields.publishDate)).format("YYYY-MM-DD")},i(c(m)(new Date(s.fields.publishDate)).format("MMMM D, YYYY")),9,q)])])])])]),_:2},1032,["to"])]))),128))])}}});const K=C(G,[["__scopeId","data-v-d50b2602"]]);export{K as A};
