import{b as p,w as f,f as h,h as k,o as t,i as a,j as i,t as r,u as s,l as _,F as y,z as x,m as v,y as C,J as g,k as w,c as L,a as T,K as V,q as b}from"./entry.429f2ad3.js";import{p as B}from"./parseRichText.0d07bc6b.js";const N={class:"links"},D={class:"container"},E={class:"links__title"},H=["innerHTML"],M={class:"container container--thinner"},$={class:"links__list"},j=p({__name:"links",async setup(A){let n,c;const d=([n,c]=f(()=>v(l=>l.$contentful.getEntries({content_type:"links",limit:1}),"$jGglCoQTCg")),n=await n,c(),n),o=h(d.data.value.items[0]);return k({title:"Links",meta:[{property:"twitter:title",content:"Links | Jack Domleo"}]}),(l,F)=>{const u=T,m=V;return t(),a("div",N,[i("header",D,[i("h1",E,r(s(o).fields.title),1),s(o).fields.description?(t(),a("div",{key:0,class:"links__description",innerHTML:s(B)(s(o).fields.description)},null,8,H)):_("",!0)]),i("div",M,[i("ul",$,[(t(!0),a(y,null,x(s(o).fields.links.items,e=>(t(),a("li",{key:e.name},[C(m,{class:"link",to:e.url,rel:e.url.startsWith("http")||e.url.startsWith("//")?"nofollow noopener":void 0},{default:g(()=>[w(r(e.name)+" ",1),e.icon?(t(),L(u,{key:0,name:e.icon,filled:""},null,8,["name"])):_("",!0)]),_:2},1032,["to","rel"])]))),128))])])])}}});const W=b(j,[["__scopeId","data-v-f496fbc9"]]);export{W as default};