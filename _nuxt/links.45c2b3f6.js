import{b as p,w as f,f as h,h as k,o as t,i as o,j as i,t as _,u as s,l as r,F as x,x as y,m as v,v as C,B as g,k as w,c as B,a as L,C as T,q as V}from"./entry.bc6dc492.js";import{p as b}from"./parseRichText.c208ac68.js";const N={class:"links"},D={class:"container"},E={class:"links__title"},H=["innerHTML"],M={class:"container container--thinner"},$={class:"links__list"},j=p({__name:"links",async setup(A){let n,c;const d=([n,c]=f(()=>v(l=>l.$contentful.getEntries({content_type:"links",limit:1}),"$jGglCoQTCg")),n=await n,c(),n),a=h(d.data.value.items[0]);return k({title:"Links",meta:[{name:"twitter:title",content:"Links | Jack Domleo"}]}),(l,F)=>{const m=L,u=T;return t(),o("div",N,[i("header",D,[i("h1",E,_(s(a).fields.title),1),s(a).fields.description?(t(),o("div",{key:0,class:"links__description",innerHTML:s(b)(s(a).fields.description)},null,8,H)):r("",!0)]),i("div",M,[i("ul",$,[(t(!0),o(x,null,y(s(a).fields.links.items,e=>(t(),o("li",{key:e.name},[C(u,{class:"link",to:e.url,rel:e.url.startsWith("http")||e.url.startsWith("//")?"nofollow noopener":void 0},{default:g(()=>[w(_(e.name)+" ",1),e.icon?(t(),B(m,{key:0,name:e.icon,filled:""},null,8,["name"])):r("",!0)]),_:2},1032,["to","rel"])]))),128))])])])}}});const q=V(j,[["__scopeId","data-v-0d09db32"]]);export{q as default};