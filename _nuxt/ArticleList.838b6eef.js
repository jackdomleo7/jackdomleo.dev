import{_ as x}from"./nuxt-picture.a049214b.js";import{b as v,w,f as A,o as a,i as l,F as u,x as f,u as _,m as Y,v as m,B as k,j as s,t as o,p as h,C as M,z as C,A as I,q as S}from"./entry.1191fe79.js";const $=t=>(C("data-v-c87ae3aa"),t=t(),I(),t),B={class:"posts container"},L={class:"post__article"},N={class:"post__details"},z={class:"post__tags"},F={class:"post__title"},V={class:"post__description"},j={class:"post__date"},E=$(()=>s("span",{class:"sr-only"},"Publish date:",-1)),q=["datetime"],G=v({__name:"ArticleList",props:{limit:{type:Number,default:void 0,validator(t){return t>=0&&t<=1e3}},preloadArticleImages:{type:Number,default:0,validator(t){return t>=0}}},async setup(t){let i,r;const c=t,{data:g}=([i,r]=w(()=>Y(d=>d.$contentful.getEntries({content_type:"article",limit:1e3,order:"-fields.publishDate",select:["fields.title","fields.description","fields.image","fields.tags","fields.publishDate","fields.slug"]}),"$GCpc4d31S7")),i=await i,r(),i);let n=A(g.value.items);return c.limit&&(n=n.slice(0,c.limit)),(d,P)=>{const y=x,D=M;return a(),l("ul",B,[(a(!0),l(u,null,f(_(n),(e,b)=>(a(),l("li",{key:e.sys.id},[m(D,{to:`/blog/${new Date(e.fields.publishDate).getFullYear()}/${e.fields.slug}`,class:"post"},{default:k(()=>[s("article",L,[m(y,{class:"post__img",provider:"contentful",src:e.fields.image.fields.file.url,alt:e.fields.image.fields.description,width:"424",height:"223",sizes:"4kdesktop:424px",loading:"lazy",preload:b<=c.preloadArticleImages},null,8,["src","alt","preload"]),s("div",N,[s("ul",z,[(a(!0),l(u,null,f(e.fields.tags,p=>(a(),l("li",{key:p,class:"tag"},o(p),1))),128))]),s("h2",F,o(e.fields.title),1),s("p",V,o(e.fields.description),1),s("footer",null,[s("p",j,[E,s("time",{datetime:_(h)(new Date(e.fields.publishDate)).format("YYYY-MM-DD")},o(_(h)(new Date(e.fields.publishDate)).format("MMMM D, YYYY")),9,q)])])])])]),_:2},1032,["to"])]))),128))])}}});const K=S(G,[["__scopeId","data-v-c87ae3aa"]]);export{K as A};